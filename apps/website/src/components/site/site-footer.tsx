import Image from "next/image";
import Link from "next/link";
import {
  ANDROID_APP_DOWNLOAD_URL,
  IOS_APP_DOWNLOAD_URL,
} from "@/lib/app-downloads";
import type { FooterNavGroup } from "@/lib/marketing/footer-nav";
import type { SocialLinks } from "@/lib/marketing/defaults";

const linkClass =
  "font-body text-sm text-slate-600 transition-colors duration-200 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-300";

function FooterNavItem({
  href,
  label,
  openInNewTab,
}: {
  href: string;
  label: string;
  openInNewTab: boolean;
}) {
  const external = /^https?:\/\//i.test(href.trim());

  if (external) {
    return (
      <a
        href={href.trim()}
        className={linkClass}
        {...(openInNewTab
          ? {
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {})}
      >
        <span className="mr-2 font-bold text-teal-600">›</span>
        {label}
      </a>
    );
  }

  return (
    <Link className={linkClass} href={href.trim()}>
      <span className="mr-2 font-bold text-teal-600">›</span>
      {label}
    </Link>
  );
}

export function SiteFooter({
  className,
  clinicName,
  productName,
  socialLinks = {},
  footerNav = [],
}: {
  className?: string;
  clinicName: string;
  productName: string;
  socialLinks?: SocialLinks;
  footerNav?: FooterNavGroup[];
}) {
  const year = new Date().getFullYear();

  const {
    instagram_url: instagramUrl,
    facebook_url: facebookUrl,
    youtube_url: youtubeUrl,
    linkedin_url: linkedinUrl,
    website_url: websiteUrl,
  } = socialLinks;

  const mapsUrl =
    "https://maps.app.goo.gl/DJ53GyoU3PB1FU4b7";

  return (
    <footer
      className={`w-full bg-gradient-to-b from-white via-teal-50/30 to-emerald-50/60 dark:from-slate-950 dark:via-slate-950 dark:to-teal-950/30 ${
        className ?? ""
      }`}
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr] lg:gap-20">
          {/* =========================================================
              BRAND SECTION
          ========================================================== */}
          <div>
            <div className="max-w-md">
              <div className="inline-flex items-center">
                <span className="font-headline text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                  {productName}
                </span>
              </div>

              <div className="mt-4 h-1 w-12 rounded-full bg-teal-600" />

              <h2 className="mt-7 font-headline text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Compassionate care.
                <br />
                Healthier pets.
                <br />
                Happier families.
              </h2>

              <p className="mt-6 max-w-md font-body text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                Trusted veterinary care backed by modern technology and a team
                that genuinely cares about every pet and family.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {websiteUrl ? (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="material-symbols-outlined text-lg">
                    public
                  </span>
                </a>
              ) : null}

              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="material-symbols-outlined text-lg">
                    photo_camera
                  </span>
                </a>
              ) : null}

              {facebookUrl ? (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="material-symbols-outlined text-lg">
                    thumb_up
                  </span>
                </a>
              ) : null}

              {youtubeUrl ? (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="material-symbols-outlined text-lg">
                    play_circle
                  </span>
                </a>
              ) : null}

              {linkedinUrl ? (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="material-symbols-outlined text-lg">
                    work
                  </span>
                </a>
              ) : null}

              <Link
                href="/contact"
                aria-label="Contact"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900"
              >
                <span className="material-symbols-outlined text-lg">
                  chat
                </span>
              </Link>
            </div>

            {/* Pet Image */}
            <div className="relative mt-8 h-[210px] w-full max-w-[440px] overflow-hidden rounded-[28px] border border-teal-100 bg-gradient-to-br from-teal-100/70 via-white to-emerald-50 dark:border-teal-900 dark:from-teal-950 dark:via-slate-950 dark:to-emerald-950">
              <Image
                src="/greencoat-vets-footer-pets.png"
                alt="Happy dog and cat"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* =========================================================
              RIGHT SECTION
          ========================================================== */}
          <div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Dynamic Footer Navigation */}
              {footerNav.map((group) => (
                <div key={group.id}>
                  <h4 className="font-headline text-sm font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300">
                    {group.title}
                  </h4>

                  <div className="mt-4 h-0.5 w-8 rounded-full bg-teal-600" />

                  <ul className="mt-6 space-y-4">
                    {group.links.map((item) => (
                      <li
                        key={
                          item.id ||
                          `${group.slug}-${item.href}-${item.label}`
                        }
                      >
                        <FooterNavItem
                          href={item.href}
                          label={item.label}
                          openInNewTab={item.openInNewTab}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Visit Us */}
              <div>
                <h4 className="font-headline text-sm font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300">
                  Visit Us
                </h4>

                <div className="mt-4 h-0.5 w-8 rounded-full bg-teal-600" />

                <div className="mt-6 rounded-2xl border border-teal-100 bg-white/80 p-5 shadow-sm dark:border-teal-900 dark:bg-slate-900/80">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                      <span className="material-symbols-outlined text-lg">
                        location_on
                      </span>
                    </div>

                    <div>
                      <p className="font-headline text-sm font-bold text-slate-950 dark:text-white">
                        {clinicName}
                      </p>

                      <p className="mt-2 font-body text-sm leading-6 text-slate-500 dark:text-slate-400">
                        SCO 20 ,Bestech Mall,
                        <br />
                        Industrial Area Phase 9,
                        <br />
                        Sahibzada Ajit Singh Nagar,
                        <br />
                        Punjab 160062
                      </p>
                    </div>
                  </div>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-between rounded-xl bg-teal-50 px-4 py-3 text-sm font-bold text-teal-700 transition-colors hover:bg-teal-600 hover:text-white dark:bg-teal-950/60 dark:text-teal-300"
                  >
                    <span>Get directions</span>

                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* =========================================================
                APP DOWNLOAD CARD
            ========================================================== */}
            <div className="mt-12 rounded-[26px] border border-teal-100 bg-gradient-to-r from-teal-50 to-emerald-50 p-6 shadow-sm dark:border-teal-900 dark:from-teal-950/60 dark:to-emerald-950/40">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm">
                    <span className="material-symbols-outlined text-2xl">
                      smartphone
                    </span>
                  </div>

                  <div>
                    <h3 className="font-headline text-lg font-bold text-slate-950 dark:text-white">
                      Your pet&apos;s care, right at your fingertips.
                    </h3>

                    <p className="mt-1 max-w-md font-body text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Book appointments, manage your pet&apos;s records and
                      stay connected with {clinicName}.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={ANDROID_APP_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    <span className="material-symbols-outlined text-lg">
                      android
                    </span>
                    Google Play
                  </a>

                  <a
                    href={IOS_APP_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  >
                    <span className="material-symbols-outlined text-lg">
                      phone_iphone
                    </span>
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM TRUST BAR
      ========================================================== */}
      <div className="border-y border-teal-900/30 bg-teal-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="flex items-center gap-3 border-b border-white/10 py-5 sm:border-r sm:px-6 lg:border-b-0 lg:pl-0">
            <span className="material-symbols-outlined text-2xl text-teal-300">
              verified_user
            </span>

            <div>
              <p className="text-sm font-bold">Trusted Care</p>
              <p className="mt-1 text-xs text-teal-200">
                Experienced veterinary team
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-white/10 py-5 sm:px-6 lg:border-b-0 lg:border-r">
            <span className="material-symbols-outlined text-2xl text-teal-300">
              medical_services
            </span>

            <div>
              <p className="text-sm font-bold">Modern Facilities</p>
              <p className="mt-1 text-xs text-teal-200">
                Advanced treatment &amp; care
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-white/10 py-5 sm:border-r sm:px-6 lg:border-b-0">
            <span className="material-symbols-outlined text-2xl text-teal-300">
              favorite
            </span>

            <div>
              <p className="text-sm font-bold">Convenient Access</p>
              <p className="mt-1 text-xs text-teal-200">
                In-clinic &amp; mobile app
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 py-5 sm:px-6 lg:pr-0">
            <span className="material-symbols-outlined text-2xl text-teal-300">
              groups
            </span>

            <div>
              <p className="text-sm font-bold">Happier Pets</p>
              <p className="mt-1 text-xs text-teal-200">
                We care like family
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          COPYRIGHT
      ========================================================== */}
      <div className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <p className="font-body text-sm text-slate-400">
            © {year} {productName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:justify-end">
            <Link
              href="/privacy-policy"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-slate-700">|</span>

            <Link
              href="/terms-and-conditions"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>

            <span className="text-slate-700">|</span>

            <a
              href="https://nettizerinfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-300 transition-colors hover:text-teal-400"
            >
              Website by Nettizer Infotech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}