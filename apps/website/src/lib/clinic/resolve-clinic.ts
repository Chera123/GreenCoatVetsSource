
import { cache } from "react";
import { headers } from "next/headers";
import { createPublicClient } from "@/lib/supabase/public";
import { getMarketingSiteSettings } from "@/lib/marketing/get-marketing-site";

type Clinic = {
  id: string;
  name: string;
  slug: string;
  website_store_enabled?: boolean;
};

function logClinicQuery(
  label: string,
  startedAt: number,
  error?: { message: string } | null,
) {
  const duration = Math.round(performance.now() - startedAt);

  console.info(
    `[DB Performance] resolveClinic - ${label}: ${duration}ms`,
    error ? `ERROR: ${error.message}` : "OK",
  );
}

/** Used when no active clinic can be resolved. */
function placeholderClinic(): Clinic {
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "[resolveClinic] No active clinic in database — using placeholder. Seed a clinic or apply migrations.",
    );
  }

  return {
    id: "00000000-0000-0000-0000-000000000001",
    name: process.env.NEXT_PUBLIC_FALLBACK_CLINIC_NAME ?? "GreenCoatVets",
    slug: process.env.NEXT_PUBLIC_FALLBACK_CLINIC_SLUG ?? "greencoatvets",
  };
}

function normalizeHost(raw: string): string {
  return raw.split(":")[0]?.toLowerCase() ?? "";
}

function canMatchHostRouting(hostNoPort: string): boolean {
  if (!hostNoPort) return false;
  if (hostNoPort === "localhost" || hostNoPort === "127.0.0.1") {
    return false;
  }

  return hostNoPort.includes(".");
}

export const resolveClinic = cache(async (): Promise<Clinic> => {
  const functionStartedAt = performance.now();
  const supabase = createPublicClient();

  try {
    const hostRaw = headers().get("host") ?? "";
    const host = normalizeHost(hostRaw);
    const subdomain = host.split(".")[0];

    if (canMatchHostRouting(host)) {
      const startedAt = performance.now();

      const { data: clinic, error: hostMatchError } = await supabase
        .from("clinics")
        .select("id, name, slug, website_store_enabled")
        .eq("is_active", true)
        .or(
          `custom_domain.eq.${host},subdomain.eq.${subdomain}`,
        )
        .maybeSingle();

      logClinicQuery("hostname lookup", startedAt, hostMatchError);

      if (clinic) {
        console.info(
          `[DB Performance] resolveClinic total: ${Math.round(
            performance.now() - functionStartedAt,
          )}ms (hostname match)`,
        );
        return clinic;
      }
    }

    const settingsStartedAt = performance.now();
    const mkt = await getMarketingSiteSettings();

    console.info(
      `[DB Performance] resolveClinic - marketing settings: ${Math.round(
        performance.now() - settingsStartedAt,
      )}ms`,
    );

    const brandedId = mkt.website_branded_for_clinic_id;

    if (brandedId) {
      const startedAt = performance.now();

      const { data: byBranded, error } = await supabase
        .from("clinics")
        .select("id, name, slug, website_store_enabled")
        .eq("id", brandedId)
        .eq("is_active", true)
        .maybeSingle();

      logClinicQuery("branded clinic lookup", startedAt, error);

      if (byBranded) {
        console.info(
          `[DB Performance] resolveClinic total: ${Math.round(
            performance.now() - functionStartedAt,
          )}ms (branded clinic match)`,
        );
        return byBranded;
      }
    }

    if (mkt.default_clinic_id) {
      const startedAt = performance.now();

      const { data: byDefault, error } = await supabase
        .from("clinics")
        .select("id, name, slug, website_store_enabled")
        .eq("id", mkt.default_clinic_id)
        .eq("is_active", true)
        .maybeSingle();

      logClinicQuery("default clinic lookup", startedAt, error);

      if (byDefault) {
        console.info(
          `[DB Performance] resolveClinic total: ${Math.round(
            performance.now() - functionStartedAt,
          )}ms (default clinic match)`,
        );
        return byDefault;
      }
    }

    const startedAt = performance.now();

    const { data: fallback, error } = await supabase
      .from("clinics")
      .select("id, name, slug, website_store_enabled")
      .eq("is_active", true)
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle();

    logClinicQuery("active clinic fallback lookup", startedAt, error);

    if (fallback) {
      console.info(
        `[DB Performance] resolveClinic total: ${Math.round(
          performance.now() - functionStartedAt,
        )}ms (active clinic fallback)`,
      );
      return fallback;
    }

    console.info(
      `[DB Performance] resolveClinic total: ${Math.round(
        performance.now() - functionStartedAt,
      )}ms (placeholder clinic)`,
    );

    return placeholderClinic();
  } catch (error) {
    console.error(
      `[DB Performance] resolveClinic failed after ${Math.round(
        performance.now() - functionStartedAt,
      )}ms`,
      error,
    );

    throw error;
  }
});
