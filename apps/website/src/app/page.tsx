
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { resolveClinic } from "@/lib/clinic/resolve-clinic";
import {
  buildHeroSlideUrls,
  getMarketingLocationsOrDefaults,
  getMarketingSiteSettings,
  getPageContent,
  mergeHomepageImages,
} from "@/lib/marketing/get-marketing-site";
import {
  DEFAULT_MARKETING_LOCATIONS,
  getDirectionsUrl,
} from "@/lib/marketing/default-locations";
import {
  applyClinicPlaceholders,
  sectionLines,
  sectionParagraphs,
} from "@/lib/marketing/page-content";
import { marketingPageMetadata } from "@/lib/marketing/page-metadata";
import { HeroImageSlider } from "@/components/site/hero-image-slider";
import { InstagramHomeEmbeds } from "@/components/site/instagram-home-embeds";
import { HomeGallerySection } from "@/components/site/home-gallery-section";
import { HomeWelcomeVideoSection } from "@/components/site/home-welcome-video-section";
import { getMarketingTeamMembers } from "@/lib/marketing/get-team-members";
import { getActiveMarketingReviews } from "@/lib/marketing/get-reviews";
import { HomeTeamSection } from "@/components/site/home-team-section";
import type { MarketingLocationPublic } from "@/lib/marketing/types";

const SITE_URL = "https://www.greencoatvets.com";
const HOMEPAGE_URL = `${SITE_URL}/`;
const HOMEPAGE_DESCRIPTION =
  "24-hour veterinary hospital in Mohali. Consultations, diagnostics, surgery, vaccination and emergency care for pets. Book your visit today.";

const WHY_ICONS = [
  "stethoscope",
  "biotech",
  "pets",
  "medical_services",
  "volunteer_activism",
  "favorite",
] as const;

function findLocation(
  locations: MarketingLocationPublic[],
  patterns: RegExp[],
): MarketingLocationPublic | undefined {
  return locations.find((loc) => {
    const hay = `${loc.id} ${loc.name}`.toLowerCase();
    return patterns.some((pattern) => pattern.test(hay));
  });
}

export async function generateMetadata(): Promise<Metadata> {
  const clinic = await resolveClinic();

  const baseMetadata = await marketingPageMetadata({
    slug: "home",
    clinicName: clinic.name,
    path: "/",
  });

  const title = `24-Hour Veterinary Hospital in Mohali | ${clinic.name || "GreenCoatVets"}`;
  const image = "/og-image.jpg";

  return {
    ...baseMetadata,
    // Use an absolute title so a parent layout title template cannot append
    // another brand suffix and create a page-title mismatch.
    title: { absolute: title },
    description: HOMEPAGE_DESCRIPTION,
    alternates: {
      ...baseMetadata.alternates,
      canonical: HOMEPAGE_URL,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      type: "website",
      siteName: clinic.name || "GreenCoatVets",
      locale: "en_IN",
      url: HOMEPAGE_URL,
      title,
      description: HOMEPAGE_DESCRIPTION,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${clinic.name || "GreenCoatVets"} veterinary hospital in Mohali`,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      card: "summary_large_image",
      title,
      description: HOMEPAGE_DESCRIPTION,
      images: [image],
    },
  };
}

export default async function Home() {
  const [
    clinic,
    marketing,
    publicLocations,
    teamMembers,
    testimonialRows,
  ] = await Promise.all([
    resolveClinic(),
    getMarketingSiteSettings(),
    getMarketingLocationsOrDefaults(),
    getMarketingTeamMembers(),
    getActiveMarketingReviews(8),
  ]);

  const images = mergeHomepageImages(marketing.homepage_images);
  const heroSlides = buildHeroSlideUrls(
    images,
    marketing.homepage_images ?? {},
  );

  const page = getPageContent("home", marketing.page_content ?? {});
  const s = page.sections ?? {};

  const t = (value: string | undefined) =>
    applyClinicPlaceholders(value ?? "", clinic.name ?? "");

  const faqPreview = sectionLines(s, "faq_preview_list");

  const whyUs = [1, 2, 3, 4, 5, 6]
    .map((n, i) => ({
      title: s[`why_${n}_title`] ?? "",
      body: s[`why_${n}_body`] ?? "",
      icon: WHY_ICONS[i] ?? "pets",
    }))
    .filter((item) => item.title);

  const promiseParas = sectionParagraphs(s, "promise_body").map(t);
  const surgeryParas = sectionParagraphs(s, "surgery_body").map(t);
  const ctaParas = sectionParagraphs(s, "cta_body").map(t);

  const social = marketing.social_links ?? {};

  const instagramUrl =
    (typeof social.instagram_url === "string" &&
      social.instagram_url.trim()) ||
    "";

  const facebookUrl =
    (typeof social.facebook_url === "string" &&
      social.facebook_url.trim()) ||
    "";

  const homepageLocationCards = [
    {
      title: t(s.loc_1_title),
      body: t(s.loc_1_body),
      loc:
        findLocation(publicLocations, [/phase\s*9/, /phase-9/]) ??
        findLocation(DEFAULT_MARKETING_LOCATIONS, [
          /phase\s*9/,
          /phase-9/,
        ]),
    },
    {
      title: t(s.loc_2_title),
      body: t(s.loc_2_body),
      loc:
        findLocation(publicLocations, [/kharar/]) ??
        findLocation(DEFAULT_MARKETING_LOCATIONS, [/kharar/]),
    },
    {
      title: t(s.loc_3_title),
      body: t(s.loc_3_body),
      loc:
        findLocation(publicLocations, [/ropar|rupnagar/]) ??
        findLocation(DEFAULT_MARKETING_LOCATIONS, [/ropar|rupnagar/]),
    },
  ].filter((card) => card.loc);

  // One entity with both types makes the hospital identifiable as an
  // Organization as well as a VeterinaryCare / LocalBusiness entity.
  // This avoids creating two disconnected entities for the same clinic.
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "VeterinaryCare"],
    "@id": `${SITE_URL}/#organization`,
    name: clinic.name || "GreenCoatVets",
    url: HOMEPAGE_URL,
    description: HOMEPAGE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCO 20, Near Bestech Mall, Industrial Area Phase 9",
      addressLocality: "Sahibzada Ajit Singh Nagar (Mohali)",
      addressRegion: "Punjab",
      postalCode: "160062",
      addressCountry: "IN",
    },
    sameAs: [instagramUrl, facebookUrl].filter(Boolean),
    areaServed: [
      { "@type": "City", name: "Mohali" },
      { "@type": "City", name: "Kharar" },
      { "@type": "City", name: "Ropar" },
      { "@type": "Place", name: "Chandigarh Tricity" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-surface">
        {/* Hero */}
        <section className="relative flex min-h-[min(92vh,880px)] items-center overflow-hidden bg-surface">
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-fixed/20 px-4 py-2 font-label text-sm font-semibold text-on-primary-fixed-variant">
                <span className="material-symbols-outlined text-base">
                  pets
                </span>
                {t(s.hero_eyebrow)}
              </div>

              <h1 className="font-headline text-[clamp(1.75rem,4.2vw,2.75rem)] font-extrabold leading-[1.12] tracking-tight text-on-background sm:text-4xl md:text-[clamp(2rem,3.5vw,2.75rem)] lg:text-5xl">
                {t(s.hero_title)}
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant">
                {t(s.hero_body)}
              </p>

              <div className="grid grid-cols-2 items-stretch gap-3 pt-2 sm:flex sm:flex-wrap sm:gap-4">
                <Link
                  href="/book"
                  className="gradient-primary flex min-h-[3.25rem] min-w-0 items-center justify-center rounded-xl px-3 py-2.5 text-center font-headline text-sm font-bold leading-snug text-on-primary shadow-xl shadow-primary/25 transition-transform hover:scale-[0.98] sm:min-h-0 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Book an Appointment
                </Link>

                <Link
                  href="/services"
                  className="flex min-h-[3.25rem] min-w-0 items-center justify-center rounded-xl bg-surface-container-low px-3 py-2.5 text-center font-headline text-sm font-bold leading-snug text-on-surface transition-colors hover:bg-surface-container-high sm:min-h-0 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 -z-10 h-72 w-72 rounded-full bg-primary-fixed/30 blur-3xl sm:h-96 sm:w-96" />

              <HeroImageSlider
                urls={heroSlides}
                alt="Veterinarian caring for a pet"
              />

              <div className="glass-panel absolute -bottom-4 -left-2 hidden rounded-2xl border border-white/20 p-5 shadow-xl md:block md:-bottom-6 md:-left-6 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed">
                    <span
                      className="material-symbols-outlined text-on-tertiary-fixed"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      verified
                    </span>
                  </div>

                  <div>
                    <div className="font-headline text-lg font-bold text-on-surface">
                      Our promise to you
                    </div>
                    <div className="text-sm text-on-surface-variant">
                      Trusted pet care across the Tricity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promise — balanced two-column layout to use the available space */}
        <section className="relative overflow-hidden bg-surface-container-low py-14 sm:py-18 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
            <div className="min-w-0">
              <p className="font-label text-sm font-bold uppercase tracking-[0.16em] text-primary">
                {t(s.promise_eyebrow)}
              </p>
              <h2 className="mt-3 font-headline text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                {t(s.promise_heading)}
              </h2>
              {promiseParas.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mt-5 max-w-2xl text-base leading-8 text-on-surface-variant sm:text-lg"
                >
                  {p}
                </p>
              ))}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/about/"
                  className="gradient-primary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-on-primary shadow-md transition-transform hover:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  About GreenCoatVets
                  <span aria-hidden="true" className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-outline-variant bg-surface px-6 py-3 text-sm font-bold text-on-surface transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  icon: "schedule",
                  title: "Open 24 hours",
                  body: "Reach out to our team whenever your pet needs veterinary attention.",
                },
                {
                  icon: "biotech",
                  title: "Diagnostics and treatment",
                  body: "Access consultations, diagnostic support and treatment planning in one place.",
                },
                {
                  icon: "diversity_3",
                  title: "A team that listens",
                  body: "We explain findings and care options clearly, with your pet’s needs at the centre.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex min-w-0 items-start gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-sm sm:p-6 ${
                    index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span aria-hidden="true" className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-headline text-lg font-bold text-on-surface">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-on-surface-variant">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete service directory — links to existing service pages */}
        <section className="bg-surface-container-low py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
              Veterinary services
            </p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold text-on-surface sm:text-3xl lg:text-4xl">
              Complete Veterinary Care Under One Roof
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-on-surface-variant">
              Whether your pet needs a routine consultation, diagnostic tests, dental care,
              surgery or urgent treatment, you can find a range of veterinary services at
              GreenCoatVets in Mohali.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Specialized OPD", href: "/specialized-opd-mohali/", text: "Veterinary consultations and care for everyday health concerns." },
                { title: "Emergency Care", href: "/emergency-care-mohali/", text: "Urgent assessment and treatment, 24 hours a day." },
                { title: "Veterinary Diagnostics", href: "/veterinary-diagnostics-mohali/", text: "Laboratory tests, ultrasound and X-ray." },
                { title: "Pet Vaccination", href: "/pet-vaccination-mohali/", text: "Vaccination assessment and booster guidance." },
                { title: "Pet Health Checkup", href: "/pet-health-checkup-mohali/", text: "Routine wellness examinations and preventive care." },
                { title: "Orthopedic Surgery", href: "/orthopedic-surgery-mohali/", text: "Assessment and treatment for fractures, joint problems and mobility conditions." },
                { title: "Soft Tissue Surgery", href: "/soft-tissue-surgery-mohali/", text: "Surgical assessment and care for pets." },
                { title: "Eye Surgery", href: "/eye-surgery-mohali/", text: "Eye examination, treatment and surgical care." },
                { title: "Dental Care", href: "/dental-care-mohali/", text: "Dental examinations, teeth cleaning and dental surgery." },
                { title: "Skin Treatment", href: "/veterinary-skin-treatment-mohali/", text: "Assessment of itching, hair loss and skin problems." },
                { title: "Spay & Neuter", href: "/spay-neuter-mohali/", text: "Sterilisation with health assessment and aftercare." },
                { title: "Equine Services", href: "/equine-services-mohali/", text: "Veterinary care for horses." },
                { title: "Pet Shop", href: "/pet-shop-mohali/", text: "Everyday supplies and accessories for pets." },
                { title: "Pet Grooming", href: "/pet-grooming-mohali/", text: "Grooming and coat-care services for pets. Full service details coming soon." },
              ].map((service) => (
                <li key={service.href} className="min-w-0">
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-sm transition-colors hover:border-primary/50 hover:bg-surface sm:p-6"
                  >
                    <span className="font-headline text-lg font-bold text-on-surface group-hover:text-primary">
                      {service.title}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-on-surface-variant">
                      {service.text}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                      Explore service
                      <span aria-hidden="true" className="material-symbols-outlined text-base">arrow_forward</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book/" className="gradient-primary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-center text-sm font-bold text-on-primary">Book an Appointment</Link>
              <Link href="/services/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-outline-variant px-6 py-3 text-center text-sm font-bold text-on-surface hover:border-primary">Explore All Services</Link>
            </div>
          </div>
        </section>

        {/* Open 24 hours and urgent care */}
        <section className="bg-surface py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
            <div>
              <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">Here when you need us</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold text-on-surface sm:text-3xl lg:text-4xl">Open 24 Hours</h2>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                Pets do not fall ill on a schedule. GreenCoatVets is open 24 hours, so you can
                reach our veterinary team when your pet needs help. For difficulty breathing,
                collapse, seizures, severe bleeding or suspected poisoning, contact us straight away.
                Read more about our{" "}
                <Link href="/emergency-care-mohali/" className="font-semibold text-primary underline underline-offset-4">24-hour emergency care in Mohali</Link>.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/emergency-care-mohali/" className="gradient-primary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-on-primary">Emergency Care</Link>
                <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-outline-variant px-6 py-3 text-sm font-bold text-on-surface hover:border-primary">Contact Our Team</Link>
              </div>
            </div>
            <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-5 sm:p-7">
              <h3 className="font-headline text-xl font-bold text-on-surface">What to Do in a Pet Emergency</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                <li className="flex gap-3"><span className="material-symbols-outlined shrink-0 text-primary">check_circle</span><span>Stay calm and keep your pet as still and secure as possible.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined shrink-0 text-primary">check_circle</span><span>Contact GreenCoatVets straight away. We are open 24 hours.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined shrink-0 text-primary">check_circle</span><span>Do not give medicines or home remedies unless a veterinarian has advised it.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined shrink-0 text-primary">check_circle</span><span>Bring any medical records and the packaging if poisoning is suspected.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specialized surgery */}
        <section className="bg-surface-container-low py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
              {t(s.surgery_eyebrow)}
            </p>

            <h2 className="mt-3 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
              {t(s.surgery_heading)}
            </h2>

            {surgeryParas.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mt-6 max-w-3xl text-lg leading-relaxed text-on-surface-variant"
              >
                {p}
              </p>
            ))}

            <p className="mt-6 max-w-4xl leading-relaxed text-on-surface-variant">
              Our surgical services include{" "}
              <Link href="/orthopedic-surgery-mohali/" className="font-semibold text-primary underline underline-offset-4">orthopedic surgery</Link> for fractures and joint problems,{" "}
              <Link href="/soft-tissue-surgery-mohali/" className="font-semibold text-primary underline underline-offset-4">soft tissue surgery</Link>,{" "}
              <Link href="/eye-surgery-mohali/" className="font-semibold text-primary underline underline-offset-4">eye surgery</Link>, dental surgery and{" "}
              <Link href="/spay-neuter-mohali/" className="font-semibold text-primary underline underline-offset-4">spay and neuter</Link>.
              Our orthopedic experience includes 550+ surgeries performed, with a 98% reported success
              rate. Every case is different; your veterinarian will explain the expected outcome,
              procedure, risks and recovery plan before treatment.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="rounded-[1.5rem] border border-outline-variant/25 bg-surface-container-lowest px-6 py-6 text-center shadow-sm"
                >
                  <p className="font-headline text-2xl font-extrabold text-primary sm:text-3xl">
                    {s[`surgery_stat_${n}_value`]}
                  </p>
                  <p className="mt-2 text-sm font-medium text-on-surface-variant">
                    {s[`surgery_stat_${n}_label`]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preventive care — redesigned as clear life-stage cards */}
        <section className="relative overflow-hidden bg-surface-container-low py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
                  Prevention at every age
                </p>
                <h2 className="mt-3 font-headline text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl lg:text-5xl">
                  Preventive Care for Every Stage of Life
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-on-surface-variant sm:text-lg">
                  Preventive care helps keep pets well and gives your veterinarian a chance to spot
                  changes early. Choose a starting point based on your pet’s age and needs.
                </p>
              </div>
              <Link href="/pet-health-checkup-mohali/" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-outline-variant bg-surface-container-lowest px-5 py-3 text-sm font-bold text-on-surface transition hover:border-primary hover:text-primary md:self-auto">
                Plan a wellness check
                <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Young pets",
                  label: "Build a healthy start",
                  icon: "pets",
                  text: "Support healthy growth with age-appropriate veterinary advice, vaccination planning and parasite prevention.",
                  href: "/pet-vaccination-mohali/",
                  link: "Explore pet vaccination",
                },
                {
                  title: "Adult pets",
                  label: "Keep track of wellbeing",
                  icon: "health_and_safety",
                  text: "Routine wellness examinations help review weight, teeth, skin, lifestyle and any subtle changes over time.",
                  href: "/pet-health-checkup-mohali/",
                  link: "Book a health checkup",
                },
                {
                  title: "Senior pets",
                  label: "Monitor changing needs",
                  icon: "favorite",
                  text: "Older pets may benefit from closer monitoring, dental assessment and further tests when recommended by a veterinarian.",
                  href: "/dental-care-mohali/",
                  link: "Explore dental care",
                },
              ].map((stage, index) => (
                <article key={stage.title} className="group flex h-full min-w-0 flex-col rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <span aria-hidden="true" className="material-symbols-outlined text-2xl">{stage.icon}</span>
                    </span>
                    <span className="font-headline text-sm font-extrabold tracking-widest text-primary/70">0{index + 1}</span>
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-primary">{stage.label}</p>
                  <h3 className="mt-2 font-headline text-xl font-bold text-on-surface">{stage.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-on-surface-variant sm:text-base">{stage.text}</p>
                  <Link href={stage.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4 transition group-hover:decoration-primary">
                    {stage.link}
                    <span aria-hidden="true" className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="max-w-3xl text-sm leading-6 text-on-surface-variant sm:text-base">
                Every pet is different. Our veterinary team can help you decide which preventive care is appropriate for your pet.
              </p>
              <Link href="/book/" className="gradient-primary inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-on-primary">
                Book an Appointment
              </Link>
            </div>
          </div>
        </section>

        {/* Why rely on us */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
              {t(s.why_eyebrow)}
            </p>

            <h2 className="mt-3 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
              {t(s.why_heading)}
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((w) => (
                <div
                  key={w.title}
                  className="rounded-[2rem] border border-outline-variant/25 bg-surface-container-lowest p-8 shadow-sm"
                >
                  <span className="material-symbols-outlined text-3xl text-primary">
                    {w.icon}
                  </span>
                  <h3 className="mt-4 font-headline text-xl font-bold text-on-surface">
                    {w.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-on-surface-variant">
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeWelcomeVideoSection
          clinicName={clinic.name}
          videoUrl={marketing.welcome_video_url}
        />

        <HomeGallerySection
          clinicName={clinic.name}
          urls={marketing.gallery_image_urls ?? []}
        />

        {/* Meet the team — real clinic group photograph */}
        <section className="bg-surface py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div className="relative min-w-0">
                <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-low shadow-lg">
                  <Image
                    src="/team.jpg"
                    alt="GreenCoatVets veterinary team together at the clinic in Mohali"
                    width={3019}
                    height={2126}
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-xs leading-5 text-on-surface-variant">
                  The team behind your pet’s care at GreenCoatVets
                </p>
              </div>
              <div className="min-w-0">
                <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">Our veterinarians</p>
                <h2 className="mt-3 font-headline text-3xl font-extrabold leading-tight text-on-surface sm:text-4xl">
                  Meet Our Veterinary Team
                </h2>
                <p className="mt-4 text-base leading-7 text-on-surface-variant sm:text-lg">
                  Our veterinary team cares for pets through routine consultations, diagnostic
                  assessments, emergency treatment and surgical care. We take time to explain our
                  findings and help you understand the options for your animal.
                </p>
                <p className="mt-3 leading-7 text-on-surface-variant">
                  Our veterinarians include Dr. Karanbir Singh and Madhu Sahjeta, both senior
                  veterinarians. Visit our team page to learn more about the people caring for your
                  animals. Please confirm each doctor’s verified qualifications and areas of interest
                  before adding those details.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/team/" className="gradient-primary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-on-primary">
                    Meet the Team
                  </Link>
                  <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-outline-variant px-6 py-3 text-sm font-bold text-on-surface transition hover:border-primary hover:text-primary">
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-5 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-5 sm:p-7 md:grid-cols-[auto_1fr_auto] md:items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span aria-hidden="true" className="material-symbols-outlined text-2xl">pets</span>
              </span>
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface">Care for Pets and Horses</h3>
                <p className="mt-2 leading-7 text-on-surface-variant">
                  GreenCoatVets treats pets and companion animals, and our{" "}
                  <Link href="/equine-services-mohali/" className="font-semibold text-primary underline underline-offset-4">equine services</Link>{" "}
                  provide veterinary care for horses. If you are not sure whether we can help with
                  your animal, contact our team and describe the situation.
                </p>
              </div>
              <Link href="/equine-services-mohali/" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-outline-variant bg-surface-container-lowest px-5 py-3 text-sm font-bold text-on-surface transition hover:border-primary hover:text-primary">
                Equine Services
              </Link>
            </div>
          </div>
        </section>

        <HomeTeamSection
          members={teamMembers}
          eyebrow={t(s.team_eyebrow)}
          heading={t(s.team_heading)}
          body={t(s.team_body)}
        />

        <InstagramHomeEmbeds
          urls={marketing.instagram_embed_urls}
          eyebrow={t(s.instagram_eyebrow)}
          heading={t(s.instagram_heading)}
          body={t(s.instagram_body)}
          profileUrl={instagramUrl}
        />

        {/* Ratings */}
        <section className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-6 rounded-[2rem] border border-outline-variant/30 bg-gradient-to-br from-primary/10 to-surface-container-low p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
                  {t(s.ratings_eyebrow)}
                </p>

                <p className="mt-2 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
                  {t(s.ratings_heading)}
                </p>

                <div className="mt-3 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-tertiary"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>

              <p className="max-w-md text-on-surface-variant">
                {t(s.ratings_body)}
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials — real reviews only */}
        {testimonialRows.length ? (
          <section className="overflow-hidden bg-surface-container-low py-20 sm:py-24">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 space-y-3 sm:mb-12">
                <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
                  {t(s.testimonials_eyebrow)}
                </p>

                <h2 className="font-headline text-3xl font-extrabold sm:text-4xl">
                  {t(s.testimonials_heading)}
                </h2>

                <p className="max-w-3xl text-lg leading-relaxed text-on-surface-variant">
                  {t(s.testimonials_intro)}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {testimonialRows.map((row) => (
                  <div
                    key={row.label}
                    className="relative rounded-[2rem] bg-surface-container-lowest p-8 shadow-sm"
                  >
                    <div className="mb-6 flex gap-0.5">
                      {Array.from({
                        length: Math.max(1, Math.min(5, row.stars)),
                      }).map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-sm text-tertiary"
                          style={{
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          star
                        </span>
                      ))}
                    </div>

                    <p className="mb-8 text-lg italic leading-relaxed text-on-surface">
                      &ldquo;{row.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                        {row.img ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={row.img}
                            alt=""
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs font-bold text-slate-500">
                            N/A
                          </div>
                        )}
                      </div>

                      <div className="font-headline font-bold text-on-surface">
                        {row.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Main clinic address */}
        <section className="bg-surface-container-low py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
            <div>
              <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">Plan your visit</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold text-on-surface sm:text-3xl">Visit GreenCoatVets in Mohali</h2>
              <address className="mt-4 not-italic leading-relaxed text-on-surface-variant">
                GreenCoatVets, SCO 20, near Bestech Mall, Industrial Area Phase 9, Sahibzada Ajit Singh Nagar (Mohali), Punjab.
              </address>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                Find directions on our <Link href="/locations/" className="font-semibold text-primary underline underline-offset-4">locations page</Link> or <Link href="/contact/" className="font-semibold text-primary underline underline-offset-4">contact us</Link>.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link href="/book/" className="gradient-primary inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-on-primary">Book an Appointment</Link>
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-outline-variant px-6 py-3 text-sm font-bold text-on-surface hover:border-primary">Contact Our Team</Link>
              <Link href="/locations/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-outline-variant px-6 py-3 text-sm font-bold text-on-surface hover:border-primary">Get Directions</Link>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
              {t(s.locations_heading)}
            </h2>

            <p className="mt-3 max-w-3xl text-on-surface-variant">
              {t(s.locations_intro)}
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {homepageLocationCards.map((card) => {
                const loc = card.loc;
                if (!loc) return null;

                return (
                  <address
                    key={loc.id}
                    className="not-italic rounded-[2rem] border border-outline-variant/30 bg-surface-container-low p-6 shadow-sm"
                  >
                    <h3 className="font-headline text-lg font-bold text-primary">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                      {card.body}
                    </p>

                    <a
                      href={getDirectionsUrl(loc)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                    >
                      Get Directions
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </a>
                  </address>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ teaser — content managed in the database */}
        <section className="bg-surface-container-low py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 sm:text-left lg:px-8">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
              {s.faq_heading}
            </h2>

            <p className="mt-3 text-on-surface-variant">
              {s.faq_body}
            </p>

            <ul className="mt-8 space-y-3 text-left">
              {faqPreview.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-3 rounded-2xl border border-outline-variant/25 bg-surface-container-lowest px-4 py-3 text-on-surface"
                >
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-primary">
                    help
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/faq"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wide text-on-primary"
            >
              Open interactive FAQ
            </Link>
          </div>
        </section>

        {/* Follow */}
        <section className="border-t border-outline-variant/20 bg-surface py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
            <div className="text-center sm:text-left">
              <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
                {t(s.follow_eyebrow)}
              </p>

              <p className="mt-1 font-headline text-xl font-bold text-on-surface">
                {t(s.follow_heading)}
              </p>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-on-surface-variant">
                {t(s.follow_body)}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-5 py-2.5 text-sm font-semibold text-on-surface transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="material-symbols-outlined text-lg">
                    photo_camera
                  </span>
                  Instagram
                </a>
              ) : null}

              {facebookUrl ? (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-5 py-2.5 text-sm font-semibold text-on-surface transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="material-symbols-outlined text-lg">
                    thumb_up
                  </span>
                  Facebook
                </a>
              ) : null}
            </div>
          </div>
        </section>

        {/* Final booking CTA */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-container p-6 text-on-primary shadow-xl sm:p-10 lg:rounded-[2rem] lg:p-14">
            <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border-[36px] border-white/10 sm:h-96 sm:w-96" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 -z-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                  <span aria-hidden="true" className="material-symbols-outlined text-base">schedule</span>
                  Open 24 hours
                </span>
                <h2 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {t(s.cta_heading) || "Book Your Visit Today"}
                </h2>
                {ctaParas.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                    {p}
                  </p>
                ))}
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
                  Need urgent help? Contact our team at any time or visit our emergency care page.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
                <Link href="/book/" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-center text-sm font-extrabold text-primary shadow-md transition hover:bg-surface-container-low sm:min-w-52 lg:w-full">
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">calendar_month</span>
                  Book an Appointment
                </Link>
                <Link href="/contact/" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/5 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:min-w-52 lg:w-full">
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">call</span>
                  Contact Our Team
                </Link>
                <Link href="/emergency-care-mohali/" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-center text-sm font-bold text-white underline decoration-white/60 underline-offset-4 transition hover:decoration-white sm:min-w-52 lg:w-full">
                  Emergency Care
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="border-t border-outline-variant/20 bg-surface-container-low/50 py-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 text-sm sm:gap-6">
            <Link
              href="/about"
              className="font-semibold text-primary hover:underline"
            >
              About us
            </Link>

            <span className="hidden text-on-surface-variant sm:inline">
              ·
            </span>

            <Link
              href="/community"
              className="font-semibold text-primary hover:underline"
            >
              Community work
            </Link>

            <span className="hidden text-on-surface-variant sm:inline">
              ·
            </span>

            <Link
              href="/faq"
              className="font-semibold text-primary hover:underline"
            >
              FAQ
            </Link>

            <span className="hidden text-on-surface-variant sm:inline">
              ·
            </span>

            <Link
              href="/team"
              className="font-semibold text-primary hover:underline"
            >
              Team
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
