"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/specialized-opd-mohali/", label: "Specialized OPD" },
      { href: "/orthopedic-surgery-mohali/", label: "Orthopedic Surgery" },
      { href: "/emergency-care-mohali/", label: "Emergency Care" },
      { href: "/eye-surgery-mohali/", label: "Eye Surgery" },
      { href: "/dental-care-mohali/", label: "Dental Care" },
      { href: "/veterinary-diagnostics-mohali/", label: "Veterinary Diagnostics" },
      { href: "/spay-neuter-mohali/", label: "Spay & Neuter" },
      { href: "/equine-services-mohali/", label: "Equine Services" },
    ],
  },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/community", label: "Community" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader({
  productName,
  logoUrl,
  callDisplay,
  callTelHref,
  websiteStoreEnabled,
}: {
  productName: string;
  logoUrl: string | null;
  /** Label next to Call now (e.g. +91 98765 43210). */
  callDisplay?: string;
  callTelHref?: string;
  websiteStoreEnabled: boolean;
}) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const showCall = Boolean(callTelHref?.trim() && callDisplay?.trim());

  useEffect(() => {
    const supabase = createClient();

    void supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Close both navigation menus whenever the route changes.
  // The desktop menu uses React state rather than CSS-only hover,
  // so it stays closed after navigation even if the pointer remains
  // over the Services navigation item.
  useEffect(() => {
    setOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/15 bg-surface/90 backdrop-blur-sm dark:border-slate-700/20">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => {
            setOpen(false);
            setDesktopServicesOpen(false);
            setMobileServicesOpen(false);
          }}
        >
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoUrl}
              alt=""
              className="h-9 w-9 rounded-lg object-contain sm:h-11 sm:w-11"
            />
          ) : null}

          <span className="bg-gradient-to-br from-teal-500 to-teal-800 bg-clip-text font-headline text-xl font-extrabold tracking-tight text-transparent sm:text-2xl">
            {productName}
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-3 md:flex lg:gap-5 xl:gap-6">
          {NAV.map((item) => {
            if ("children" in item) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                  onFocusCapture={() => setDesktopServicesOpen(true)}
                  onBlurCapture={(event) => {
                    const nextTarget = event.relatedTarget;

                    if (
                      !(nextTarget instanceof Node) ||
                      !event.currentTarget.contains(nextTarget)
                    ) {
                      setDesktopServicesOpen(false);
                    }
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="border-b-2 border-transparent font-headline text-xs font-semibold tracking-tight text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-teal-400 lg:text-sm"
                      onClick={() => setDesktopServicesOpen(false)}
                    >
                      {item.label}
                    </Link>

                    <button
                      type="button"
                      className="inline-flex h-7 w-6 items-center justify-center rounded text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-slate-400 dark:hover:text-teal-400"
                      aria-label={
                        desktopServicesOpen
                          ? "Close services submenu"
                          : "Open services submenu"
                      }
                      aria-expanded={desktopServicesOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        setDesktopServicesOpen((value) => !value)
                      }
                    >
                      <span
                        className={`material-symbols-outlined text-xl transition-transform ${
                          desktopServicesOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        keyboard_arrow_down
                      </span>
                    </button>
                  </div>

                  {desktopServicesOpen ? (
                    <div className="absolute left-0 top-full z-50 w-64 pt-2">
                      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                        {item.children.map((child) => {
                          const childActive =
                            pathname === child.href ||
                            pathname === child.href.replace(/\/$/, "");

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                                childActive
                                  ? "bg-teal-50 text-teal-800"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                              }`}
                              onClick={() =>
                                setDesktopServicesOpen(false)
                              }
                            >
                              {child.label}
                            </Link>
                          );
                        }}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 font-headline text-xs font-semibold tracking-tight transition-colors lg:text-sm ${
                  active
                    ? "border-primary pb-1 text-primary"
                    : "border-transparent text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-teal-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Booking, account and mobile menu controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/book"
            className="gradient-primary hidden rounded-xl px-4 py-2 font-headline text-xs font-bold text-on-primary shadow-lg shadow-primary/20 transition-transform hover:scale-[0.98] sm:inline-block sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Book Appointment
          </Link>

          {user ? (
            <Link
              href="/account"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-outline-variant/80 bg-surface-container-low/80 text-on-surface shadow-sm transition-colors hover:border-primary hover:bg-surface-container-low hover:text-primary"
              aria-label="Pet owner portal"
            >
              <span
                className="material-symbols-outlined text-[26px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                account_circle
              </span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-xl border-2 border-primary bg-white px-3 py-2 font-headline text-xs font-bold text-primary shadow-sm transition-colors hover:bg-primary hover:text-on-primary sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Login
            </Link>
          )}

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-on-surface md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {open ? (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((item) => {
              if ("children" in item) {
                const servicePageActive = item.children.some(
                  (child) =>
                    pathname === child.href ||
                    pathname === child.href.replace(/\/$/, ""),
                );

                return (
                  <div
                    key={item.href}
                    className="border-b border-slate-100 pb-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        href={item.href}
                        className={`font-headline font-semibold ${
                          pathname === item.href || servicePageActive
                            ? "text-primary"
                            : "text-on-surface"
                        }`}
                        onClick={() => {
                          setOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-on-surface hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={
                          mobileServicesOpen
                            ? "Collapse service links"
                            : "Expand service links"
                        }
                        aria-expanded={mobileServicesOpen}
                        onClick={() =>
                          setMobileServicesOpen((value) => !value)
                        }
                      >
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          {mobileServicesOpen
                            ? "expand_less"
                            : "expand_more"}
                        </span>
                      </button>
                    </div>

                    {mobileServicesOpen ? (
                      <div className="mt-2 flex flex-col gap-1 border-l-2 border-teal-100 pl-3">
                        {item.children.map((child) => {
                          const childActive =
                            pathname === child.href ||
                            pathname === child.href.replace(/\/$/, "");

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`rounded-lg px-3 py-2 text-sm ${
                                childActive
                                  ? "bg-teal-50 font-semibold text-teal-800"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                              }`}
                              onClick={() => {
                                setOpen(false);
                                setMobileServicesOpen(false);
                              }}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              }

              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-headline font-semibold ${
                    active ? "text-primary" : "text-on-surface"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    setMobileServicesOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            {showCall ? (
              <a
                href={callTelHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary py-3 font-headline font-bold text-primary"
                onClick={() => setOpen(false)}
              >
                <span className="material-symbols-outlined">call</span>
                Call now · {callDisplay}
              </a>
            ) : null}

            <Link
              href="/book"
              className="gradient-primary mt-2 rounded-xl py-3 text-center font-headline font-bold text-on-primary"
              onClick={() => setOpen(false)}
            >
              Book appointment
            </Link>

            <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-surface-container pt-4 text-sm">
              {user ? (
                <Link
                  href="/account"
                  className="inline-flex items-center gap-2 font-semibold text-primary"
                  onClick={() => setOpen(false)}
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    account_circle
                  </span>
                  Pet portal
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="font-semibold text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="text-on-surface-variant"
                    onClick={() => setOpen(false)}
                  >
                    Sign up
                  </Link>
                </>
              )}

              {websiteStoreEnabled ? (
                <Link
                  href="/store"
                  className="text-on-surface-variant"
                  onClick={() => setOpen(false)}
                >
                  Store
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}