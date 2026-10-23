
import crypto from "node:crypto";
import { createServiceRoleClient } from "@/lib/supabase/admin";
import { sendPortalPasswordResetEmail } from "@/lib/email/send-portal-password-reset-email";
import {
  buildPasswordResetUrl,
  hashPasswordResetToken,
  webPortalBaseUrl,
} from "@/lib/auth/portal-password-reset";

export { webPortalBaseUrl };

export type SendPortalPasswordResetResult =
  | { ok: true; sent: true }
  | {
      ok: true;
      sent: false;
      reason: "no_user" | "smtp_not_configured" | "token_failed";
    }
  | { ok: false; error: string };

/** Create a reset token and email the link (service role only). */
export async function sendPortalPasswordResetLink(
  email: string,
): Promise<SendPortalPasswordResetResult> {
  const normalized = email.trim().toLowerCase();

  if (!normalized) {
    console.error("[password-reset] Empty email submitted.");
    return { ok: false, error: "Email is required." };
  }

  console.info("[password-reset] Request started.");

  const serviceRole = createServiceRoleClient();

  console.info("[password-reset] Service-role configuration:", {
    clientAvailable: Boolean(serviceRole),
    supabaseUrlConfigured: Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL?.trim(),
    ),
    serviceRoleKeyConfigured: Boolean(
      process.env.SUPABASE_SERVICE_ROLE_KEY?.trim(),
    ),
  });

  if (!serviceRole) {
    console.error("[password-reset] Service-role client unavailable.");
    return {
      ok: true,
      sent: false,
      reason: "smtp_not_configured",
    };
  }

  const { data: appUsers, error: lookupError } = await serviceRole
    .from("app_users")
    .select("id, email")
    .ilike("email", normalized)
    .limit(1);

  console.info("[password-reset] User lookup:", {
    found: Boolean(appUsers?.length),
    error: lookupError?.message ?? null,
    errorCode: lookupError?.code ?? null,
  });

  const appUser = appUsers?.[0];

  if (lookupError || !appUser?.id || !appUser.email) {
    console.error("[password-reset] User lookup failed.");
    return {
      ok: true,
      sent: false,
      reason: "no_user",
    };
  }

  const rawToken = crypto.randomBytes(32).toString("hex");
  const tokenHash = hashPasswordResetToken(rawToken);
  const expiresAt = new Date(
    Date.now() + 24 * 60 * 60 * 1000,
  ).toISOString();

  const { error: deleteError } = await serviceRole
    .from("web_portal_password_reset_tokens")
    .delete()
    .eq("user_id", appUser.id)
    .is("used_at", null);

  console.info("[password-reset] Previous token cleanup:", {
    error: deleteError?.message ?? null,
    errorCode: deleteError?.code ?? null,
  });

  if (deleteError) {
    console.error(
      "[password-reset] Could not clean up previous tokens.",
    );
  }

  const { error: insertError } = await serviceRole
    .from("web_portal_password_reset_tokens")
    .insert({
      user_id: appUser.id,
      email: String(appUser.email).trim().toLowerCase(),
      token_hash: tokenHash,
      expires_at: expiresAt,
    });

  if (insertError) {
    console.error("[password-reset] Token insert failed:", {
      message: insertError.message,
      code: insertError.code,
      details: insertError.details,
      hint: insertError.hint,
    });

    return {
      ok: true,
      sent: false,
      reason: "token_failed",
    };
  }

  console.info("[password-reset] Token inserted successfully.");

  const resetUrl = buildPasswordResetUrl(rawToken);

  const mailResult = await sendPortalPasswordResetEmail({
    email: String(appUser.email).trim().toLowerCase(),
    resetUrl,
  });

  console.info("[password-reset] Email send result:", {
    sent: mailResult.sent,
    reason: mailResult.sent ? null : mailResult.reason,
  });

  if (!mailResult.sent) {
    return {
      ok: true,
      sent: false,
      reason:
        mailResult.reason === "smtp_not_configured"
          ? "smtp_not_configured"
          : "token_failed",
    };
  }

  console.info("[password-reset] Request completed successfully.");

  return { ok: true, sent: true };
}
