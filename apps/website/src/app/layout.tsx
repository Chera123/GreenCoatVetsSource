
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { MarketingShell } from "@/components/site/marketing-shell";
import {
  GoogleHeadTags,
  GoogleTagManagerNoscript,
} from "@/components/site/google-tags";
import { resolveClinic } from "@/lib/clinic/resolve-clinic";
import { getMarketingFooterNav } from "@/lib/marketing/footer-nav";
import {
  getMarketingSiteSettings,
  mergeHomepageCopy,
} from "@/lib/marketing/get-marketing-site";
import { getActiveMarketingPopups } from "@/lib/marketing/popups";
import { StoreProviders } from "@/components/store/store-providers";
import { buildWebsiteIcons } from "@saasclinics/lib";
import { getPlatformBranding } from "@/lib/platform-branding";
import { getWebsitePublicBaseUrlFromRequest } from "@/lib/seo/public-site-url";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["600", "700", "800"],
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const [branding, marketing] = await Promise.all([
    getPlatformBranding(),
    getMarketingSiteSettings(),
  ]);

  const metadataBase = new URL(
    await getWebsitePublicBaseUrlFromRequest(marketing.seo_settings)
  );

  const verification =
    marketing.seo_settings.google_site_verification?.trim();

  const siteName = branding.product_name || "GreenCoatVets";

  const defaultTitle = `${siteName} | Veterinary Hospital in Mohali`;

  const defaultDescription =
    "Explore veterinary services, specialist care, diagnostics, emergency support and pet healthcare at GreenCoatVets in Mohali.";

  const defaultImage = "/og-image.jpg";

  return {
    metadataBase,

    title: {
      default: defaultTitle,
      template: `%s · ${siteName}`,
    },

    description: defaultDescription,

    openGraph: {
      type: "website",
      siteName,
      locale: "en_IN",
      title: defaultTitle,
      description: defaultDescription,
      url: "/",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: `${siteName} veterinary hospital`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [defaultImage],
    },

    icons: buildWebsiteIcons(marketing.website_favicon_url),

    ...(verification
      ? { verification: { google: verification } }
      : {}),

    alternates: {
      canonical: "/",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [
    branding,
    clinic,
    marketing,
    footerNav,
    marketingPopups,
  ] = await Promise.all([
    getPlatformBranding(),
    resolveClinic(),
    getMarketingSiteSettings(),
    getMarketingFooterNav(),
    getActiveMarketingPopups(),
  ]);

  const navCopy = mergeHomepageCopy(marketing.homepage_copy);

  const publicBase = await getWebsitePublicBaseUrlFromRequest(
    marketing.seo_settings
  );

  const sitemapUrl = `${publicBase}/sitemap.xml`;

  const effectiveFooterNav = branding.website_store_enabled
    ? footerNav
    : footerNav.map((group) => ({
        ...group,
        links: group.links.filter(
          (item) => item.href !== "/store"
        ),
      }));

  const faviconHref =
    marketing.website_favicon_url?.trim() || "/favicon-48x48.png";

  const appleHref =
    marketing.website_favicon_url?.trim() || "/apple-touch-icon.png";

  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${manrope.variable}`}
    >
      <head>
        <GoogleHeadTags />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href={faviconHref}
          type="image/png"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          href={appleHref}
          sizes="180x180"
        />

        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href={sitemapUrl}
        />

        {/* Non-blocking Material Symbols — avoids render-blocking Google CSS */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />

        <link
          id="material-symbols"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          media="print"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.getElementById('material-symbols');if(!l)return;var a=function(){l.media='all'};if(l.sheet)a();else l.addEventListener('load',a);})();`,
          }}
        />

        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          />
        </noscript>
      </head>

      <body className={inter.className}>
        <GoogleTagManagerNoscript />

        <StoreProviders
          storeEnabled={branding.website_store_enabled}
        >
          <MarketingShell
            productName={branding.product_name}
            logoUrl={branding.logo_url}
            clinicName={clinic.name}
            socialLinks={marketing.social_links}
            footerNav={effectiveFooterNav}
            navbarCallDisplay={navCopy.callDisplay || undefined}
            navbarCallTelHref={navCopy.callTelHref || undefined}
            marketingPopups={marketingPopups}
            websiteStoreEnabled={branding.website_store_enabled}
          >
            {children}
          </MarketingShell>
        </StoreProviders>
      </body>
    </html>
  );
}
