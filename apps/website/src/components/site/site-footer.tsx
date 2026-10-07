import Image from "next/image";
import Link from "next/link";
import {
  ANDROID_APP_DOWNLOAD_URL,
  IOS_APP_DOWNLOAD_URL,
} from "@/lib/app-downloads";
import type { FooterNavGroup } from "@/lib/marketing/footer-nav";
import type { SocialLinks } from "@/lib/marketing/defaults";

const linkClass =
  "font-body text-sm text-slate-500 transition-colors duration-200 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-300";

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
        <span className="mr-2 text-teal-600">›</span>
        {label}
      </a>
    );
  }

  return (
    <Link className={linkClass} href={href.trim()}>
      <span className="mr-2 text-teal-600">›</span>
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

  return (
    <footer
      className={`w-full overflow-hidden bg-white dark:bg-slate-950 ${
        className ?? ""
      }`}
    >
      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}
      <div className="relative">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-teal-50/70 blur-3xl dark:bg-teal-950/30" />
          <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-emerald-50/60 blur-3xl dark:bg-emerald-950/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.8fr] lg:gap-20">
            {/* =====================================================
                BRAND / ABOUT / IMAGE
            ====================================================== */}
            <div className="flex flex-col">
              {/* Brand */}
              <div>
                <span className="font-headline text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {productName}
                </span>

                <div className="mt-4 h-1 w-12 rounded-full bg-teal-600" />

                <h2 className="mt-6 max-w-md font-headline text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:text-3xl">
                  Compassionate care.
                  <br />
                  Healthier pets.
                  <br />
                  Happier families.
                </h2>

                <p className="mt-5 max-w-md font-body text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Trusted veterinary care backed by modern technology and a
                  team that genuinely cares about every pet and family.
                </p>
              </div>

              {/* Social Icons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {websiteUrl ? (
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                  >
                    <span className="material-symbols-outlined text-lg">
                      public
                    </span>
                  </a>
                ) : null}

                {instagramUrl ? (
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <span className="material-symbols-outlined text-lg">
                      photo_camera
                    </span>
                  </a>
                ) : null}

                {facebookUrl ? (
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <span className="material-symbols-outlined text-lg">
                      thumb_up
                    </span>
                  </a>
                ) : null}

                {youtubeUrl ? (
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <span className="material-symbols-outlined text-lg">
                      play_circle
                    </span>
                  </a>
                ) : null}

                {linkedinUrl ? (
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <span className="material-symbols-outlined text-lg">
                      work
                    </span>
                  </a>
                ) : null}

                <Link
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-500 hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                  href="/contact"
                  aria-label="Contact"
                >
                  <span className="material-symbols-outlined text-lg">
                    chat
                  </span>
                </Link>
              </div>

              {/* =================================================
                  PET IMAGE
              ================================================== */}
              <div className="relative mt-8 h-[230px] overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:border-teal-900 dark:from-teal-950/50 dark:via-slate-950 dark:to-emerald-950/40">
                <Image
                  src="/greencoat-vets-footer-pets.png"
                  alt="Happy dog and cat"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* =====================================================
                RIGHT SIDE
            ====================================================== */}
            <div>
              {/* Navigation */}
              <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
                {footerNav.map((group) => (
                  <div key={group.id}>
                    <h4 className="mb-5 font-headline text-sm font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300">
                      {group.title}
                    </h4>

                    <div className="mb-4 h-0.5 w-8 rounded-full bg-teal-600" />

                    <ul className="space-y-3.5">
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
                  <h4 className="mb-5 font-headline text-sm font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300">
                    Visit Us
                  </h4>

                  <div className="mb-4 h-0.5 w-8 rounded-full bg-teal-600" />

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-xl text-teal-600">
                      location_on
                    </span>

                    <div>
                      <p className="font-headline text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {clinicName}
                      </p>

                      <p className="mt-2 font-body text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Visit our clinic for compassionate veterinary care and
                        professional pet health services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  APP DOWNLOAD CARD
              ================================================== */}
              <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-50 via-emerald-50 to-slate-50 px-6 py-5 shadow-sm ring-1 ring-teal-100 dark:from-teal-950/60 dark:via-emerald-950/40 dark:to-slate-900 dark:ring-teal-900">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm">
                      <span className="material-symbols-outlined text-2xl">
                        smartphone
                      </span>
                    </div>

                    <div>
                      <p className="font-headline text-lg font-bold text-slate-900 dark:text-white">
                        Your pet&apos;s care, right at your fingertips.
                      </p>

                      <p className="mt-1 max-w-xl font-body text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Book appointments, manage your pet&apos;s records and
                        stay connected with {clinicName}.
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <a
                      href={ANDROID_APP_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
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
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:ring-teal-500 dark:bg-slate-800 dark:text-white dark:ring-slate-700"
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
      </div>

      {/* =========================================================
          TRUST / FEATURES BAR
      ========================================================== */}
      <div className="bg-teal-950 text-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-6 py-7 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
          <div className="flex items-center gap-4 py-4 sm:px-6 sm:py-2 lg:pl-0">
            <span className="material-symbols-outlined text-3xl text-teal-300">
              verified_user
            </span>

            <div>
              <p className="font-headline text-sm font-bold">
                Trusted Care
              </p>

              <p className="mt-1 text-xs text-teal-200">
                Experienced veterinary team
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-4 sm:px-6 sm:py-2">
            <span className="material-symbols-outlined text-3xl text-teal-300">
              medical_services
            </span>

            <div>
              <p className="font-headline text-sm font-bold">
                Modern Facilities
              </p>

              <p className="mt-1 text-xs text-teal-200">
                Advanced treatment &amp; care
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-4 sm:px-6 sm:py-2">
            <span className="material-symbols-outlined text-3xl text-teal-300">
              favorite
            </span>

            <div>
              <p className="font-headline text-sm font-bold">
                Convenient Access
              </p>

              <p className="mt-1 text-xs text-teal-200">
                In-clinic &amp; via our mobile app
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-4 sm:px-6 sm:py-2 lg:pr-0">
            <span className="material-symbols-outlined text-3xl text-teal-300">
              groups
            </span>

            <div>
              <p className="font-headline text-sm font-bold">
                Healthier, Happier Pets
              </p>

              <p className="mt-1 text-xs text-teal-200">
                We care like family
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          COPYRIGHT BAR
      ========================================================== */}
      <div className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <p className="font-body text-sm text-slate-400">
            © {year} {productName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:justify-end">
            <Link
              href="/privacy-policy"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="hidden text-slate-700 sm:inline">|</span>

            <Link
              href="/terms-and-conditions"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>

            <span className="hidden text-slate-700 sm:inline">|</span>

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