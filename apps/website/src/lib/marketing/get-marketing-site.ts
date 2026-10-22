import { cache } from "react";
import { createPublicClient } from "@/lib/supabase/public";
import { DEFAULT_MARKETING_LOCATIONS, isSuppressedPublicLocation } from "./default-locations";
import {
  DEFAULT_HOMEPAGE_COPY,
  DEFAULT_HOMEPAGE_IMAGES,
  type HomepageCopy,
  type HomepageImageKey,
  type SocialLinks,
} from "./defaults";
import type { MarketingSeoSettings } from "./seo-types";
import { EMPTY_SEO_SETTINGS } from "./seo-types";
import type { MarketingLocationPublic } from "./types";
import { resolveMarketingImageUrl } from "./resolve-marketing-image-url";
import {
  mergePageContent,
  type MarketingPageContent,
  type MarketingPageContentMap,
  type MarketingPageSlug,
} from "./page-content";

export type MarketingSiteSettingsRow = {
  /** When no host match, used after `website_branded_for_clinic_id` is tried. */
  default_clinic_id: string | null;
  /** When no host match, preferred for branding / resolveClinic() before `default_clinic_id`. */
  website_branded_for_clinic_id: string | null;
  /** Super admin: receives public contact form emails (SMTP). */
  contact_form_recipient_email: string | null;
  homepage_images: Record<string, string>;
  social_links: SocialLinks;
  homepage_copy: HomepageCopy;
  /** Canonical Instagram post/reel permalinks for homepage embeds. */
  instagram_embed_urls: string[];
  /** Clinic gallery image URLs for the homepage gallery section. */
  gallery_image_urls: string[];
  /** Welcome video link (YouTube / Vimeo / direct) for the homepage. */
  welcome_video_url: string | null;
  seo_settings: MarketingSeoSettings;
  website_favicon_url: string | null;
  /** Per-page SEO + section copy keyed by marketing page slug. */
  page_content: MarketingPageContentMap;
};

const EMPTY: MarketingSiteSettingsRow = {
  default_clinic_id: null,
  website_branded_for_clinic_id: null,
  contact_form_recipient_email: null,
  homepage_images: {},
  social_links: {},
  homepage_copy: {},
  instagram_embed_urls: [],
  gallery_image_urls: [],
  welcome_video_url: null,
  seo_settings: { ...EMPTY_SEO_SETTINGS },
  website_favicon_url: null,
  page_content: {},
};


export const getMarketingSiteSettings = cache(async (): Promise<MarketingSiteSettingsRow> => {
  const functionStartedAt = Date.now();

  try {
    const supabase = createPublicClient();

    const columns =
      "default_clinic_id, website_branded_for_clinic_id, contact_form_recipient_email, homepage_images, social_links, homepage_copy, instagram_embed_urls, gallery_image_urls, welcome_video_url, seo_settings, website_favicon_url, page_content";

    // Measure the initial Supabase query.
    const initialQueryStartedAt = Date.now();

    const first = await supabase
      .from("marketing_site_settings")
      .select(columns)
      .eq("id", "default")
      .maybeSingle();

    console.info(
      "[DB Performance] marketing_site_settings initial query:",
      `${Date.now() - initialQueryStartedAt}ms`,
    );

    let data: Record<string, unknown> | null =
      first.data as Record<string, unknown> | null;

    let error = first.error;

    // Preserve the existing fallback for a missing page_content column.
    if (error && /page_content/i.test(error.message ?? "")) {
      console.warn(
        "[DB Performance] page_content query failed; running fallback query:",
        error.message,
      );

      const fallbackQueryStartedAt = Date.now();

      const retry = await supabase
        .from("marketing_site_settings")
        .select(
          "default_clinic_id, website_branded_for_clinic_id, contact_form_recipient_email, homepage_images, social_links, homepage_copy, instagram_embed_urls, gallery_image_urls, welcome_video_url, seo_settings, website_favicon_url",
        )
        .eq("id", "default")
        .maybeSingle();

      console.info(
        "[DB Performance] marketing_site_settings fallback query:",
        `${Date.now() - fallbackQueryStartedAt}ms`,
      );

      data = retry.data as Record<string, unknown> | null;
      error = retry.error;
    }

    if (error || !data) {
      if (error) {
        console.error(
          "[DB Performance] marketing_site_settings query error:",
          error.message,
        );
      } else {
        console.warn(
          "[DB Performance] No marketing_site_settings row found for id=default",
        );
      }

      return { ...EMPTY };
    }

    const rawEmbeds = data.instagram_embed_urls;
    const instagram_embed_urls = Array.isArray(rawEmbeds)
      ? rawEmbeds.filter(
          (u): u is string =>
            typeof u === "string" && u.trim().length > 0,
        )
      : [];

    const rawGallery = data.gallery_image_urls;
    const gallery_image_urls = Array.isArray(rawGallery)
      ? rawGallery
          .filter(
            (u): u is string =>
              typeof u === "string" &&
              /^https?:\/\//i.test(u.trim()),
          )
          .map((u) => u.trim())
      : [];

    const welcome_video_url =
      typeof data.welcome_video_url === "string"
        ? data.welcome_video_url.trim() || null
        : null;

    const rawSeo = data.seo_settings as MarketingSeoSettings | null;

    const seo_settings: MarketingSeoSettings =
      rawSeo && typeof rawSeo === "object" && !Array.isArray(rawSeo)
        ? { ...EMPTY_SEO_SETTINGS, ...rawSeo }
        : { ...EMPTY_SEO_SETTINGS };

    const rawPageContent =
      data.page_content as MarketingPageContentMap | null;

    const page_content: MarketingPageContentMap =
      rawPageContent &&
      typeof rawPageContent === "object" &&
      !Array.isArray(rawPageContent)
        ? rawPageContent
        : {};

    const homepage_images =
      data.homepage_images &&
      typeof data.homepage_images === "object" &&
      !Array.isArray(data.homepage_images)
        ? (data.homepage_images as Record<string, string>)
        : {};

    const social_links =
      data.social_links &&
      typeof data.social_links === "object" &&
      !Array.isArray(data.social_links)
        ? (data.social_links as SocialLinks)
        : {};

    const homepage_copy =
      data.homepage_copy &&
      typeof data.homepage_copy === "object" &&
      !Array.isArray(data.homepage_copy)
        ? (data.homepage_copy as HomepageCopy)
        : {};

    const result: MarketingSiteSettingsRow = {
      default_clinic_id: data.default_clinic_id as string | null,

      website_branded_for_clinic_id:
        (data.website_branded_for_clinic_id as string | null) ?? null,

      contact_form_recipient_email:
        typeof data.contact_form_recipient_email === "string"
          ? data.contact_form_recipient_email.trim() || null
          : null,

      homepage_images,
      social_links,
      homepage_copy,
      instagram_embed_urls,
      gallery_image_urls,
      welcome_video_url,
      seo_settings,

      website_favicon_url:
        typeof data.website_favicon_url === "string"
          ? data.website_favicon_url.trim() || null
          : null,

      page_content,
    };

    return result;
  } catch (error) {
    console.error(
      "[DB Performance] getMarketingSiteSettings failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return { ...EMPTY };
  } finally {
    console.info(
      "[DB Performance] getMarketingSiteSettings total:",
      `${Date.now() - functionStartedAt}ms`,
    );
  }
});


/** Deep-merge DB page content over code defaults for a marketing page slug. */
export function getPageContent(slug: MarketingPageSlug, pageContentMap?: MarketingPageContentMap | null) {
  const map = pageContentMap && typeof pageContentMap === "object" && !Array.isArray(pageContentMap) ? pageContentMap : {};
  const db = map[slug] as MarketingPageContent | undefined;
  return mergePageContent(slug, db);
}

export async function getMergedPageContent(slug: MarketingPageSlug) {
  const settings = await getMarketingSiteSettings();
  return getPageContent(slug, settings.page_content);
}

export function mergeHomepageImages(db: Record<string, string> | null | undefined): Record<HomepageImageKey, string> {
  const source = db && typeof db === "object" ? db : {};
  const out = { ...DEFAULT_HOMEPAGE_IMAGES };
  for (const key of Object.keys(DEFAULT_HOMEPAGE_IMAGES) as HomepageImageKey[]) {
    const v = resolveMarketingImageUrl(source[key]);
    if (v) (out as Record<string, string>)[key] = v;
  }
  return out;
}

/** Resolved headline / tagline / call CTA for the public homepage. */
export function mergeHomepageCopy(db: HomepageCopy | null | undefined) {
  const copy = db && typeof db === "object" ? db : {};
  const line1 = copy.hero_line1?.trim() || DEFAULT_HOMEPAGE_COPY.hero_line1;
  const gradient = copy.hero_gradient?.trim() || DEFAULT_HOMEPAGE_COPY.hero_gradient;
  const tagline = copy.hero_tagline?.trim() || DEFAULT_HOMEPAGE_COPY.hero_tagline;
  const callDisplay = copy.navbar_call_display?.trim() || "";
  const callTelHref = copy.navbar_call_tel_href?.trim() || "";
  return { line1, gradient, tagline, callDisplay, callTelHref };
}

/** Unique hero image URLs for the homepage slider (primary hero + optional extra slides). */
export function buildHeroSlideUrls(merged: Record<HomepageImageKey, string>, db: Record<string, string>): string[] {
  const primary = merged.hero;
  const extra = [resolveMarketingImageUrl(db.hero_slide_2), resolveMarketingImageUrl(db.hero_slide_3)].filter(
    Boolean,
  ) as string[];
  const urls = [primary, ...extra];
  const seen = new Set<string>();
  return urls.filter((u) => {
    if (!u || seen.has(u)) return false;
    seen.add(u);
    return true;
  });
}

export const getMarketingLocations = cache(async (): Promise<MarketingLocationPublic[]> => {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("marketing_locations")
    .select("id, name, address_lines, phone_display, tel_href, hours_label, directions_url, latitude, longitude")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error || !data?.length) {
    return [];
  }

  return data
    .map((row) => ({
      id: row.id as string,
      name: row.name as string,
      addressLines: Array.isArray(row.address_lines) ? (row.address_lines as string[]) : [],
      phoneDisplay: (row.phone_display as string) ?? "",
      telHref: (row.tel_href as string) ?? "",
      hoursLabel: (row.hours_label as string) ?? "",
      directionsUrl: (row.directions_url as string | null) ?? null,
      latitude: (() => {
        const n = typeof row.latitude === "number" ? row.latitude : Number(row.latitude);
        return Number.isFinite(n) ? n : null;
      })(),
      longitude: (() => {
        const n = typeof row.longitude === "number" ? row.longitude : Number(row.longitude);
        return Number.isFinite(n) ? n : null;
      })(),
    }))
    .filter((row) => !isSuppressedPublicLocation(row));
});

export async function getMarketingLocationsOrDefaults(): Promise<MarketingLocationPublic[]> {
  const rows = await getMarketingLocations();
  if (rows.length > 0) return rows;
  return DEFAULT_MARKETING_LOCATIONS.filter((row) => !isSuppressedPublicLocation(row));
}

export type { MarketingLocationPublic } from "./types";
