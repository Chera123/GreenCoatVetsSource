
import type { Metadata } from "next";
import Link from "next/link";
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
  sectionTitleBodyLines,
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

const SERVICE_ICONS = [
  "stethoscope",
  "orthopedics",
  "emergency",
  "visibility",
  "dentistry",
  "biotech",
  "pets",
  "agriculture",
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
    title,
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

  const serviceCards = sectionTitleBodyLines(s, "services_list");
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

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": `${SITE_URL}/#veterinarycare`,
    name: clinic.name || "GreenCoatVets",
    url: HOMEPAGE_URL,
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

        {/* Promise */}
        <section className="bg-surface-container-low py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
              {t(s.promise_eyebrow)}
            </p>

            <h2 className="mt-3 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl lg:text-5xl">
              {t(s.promise_heading)}
            </h2>

            {promiseParas.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mt-6 max-w-3xl text-lg leading-relaxed text-on-surface-variant"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
              {t(s.services_eyebrow)}
            </p>

            <h2 className="mt-3 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
              {t(s.services_heading)}
            </h2>

            <p className="mt-3 max-w-3xl text-on-surface-variant">
              {t(s.services_body)}
            </p>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map((card, i) => (
                <li
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm"
                >
                  <span className="material-symbols-outlined text-3xl text-primary">
                    {SERVICE_ICONS[i] ?? "pets"}
                  </span>

                  <h3 className="mt-4 font-headline text-lg font-bold text-on-surface">
                    {card.title}
                  </h3>

                  {card.body ? (
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                      {card.body}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wide text-on-primary"
              >
                View All Services
              </Link>
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

        {/* Preventive care */}
        <section className="bg-surface-container-low py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">Prevention at every age</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold text-on-surface sm:text-3xl lg:text-4xl">Preventive Care for Every Stage of Life</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-on-surface-variant">
              Regular preventive care helps pets stay healthy and helps problems get caught early.
              Young pets need guidance on vaccination and growth, adult pets benefit from regular
              wellness examinations, and older pets may need closer monitoring. Our veterinarians
              plan care around your pet’s age and health. Start with our{" "}
              <Link href="/pet-vaccination-mohali/" className="font-semibold text-primary underline underline-offset-4">pet vaccination</Link>,{" "}
              <Link href="/pet-health-checkup-mohali/" className="font-semibold text-primary underline underline-offset-4">health checkup</Link> and{" "}
              <Link href="/dental-care-mohali/" className="font-semibold text-primary underline underline-offset-4">dental care</Link> pages.
            </p>
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

        <section className="bg-surface py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
            <div>
              <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">Our veterinarians</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold text-on-surface sm:text-3xl">Meet Our Veterinary Team</h2>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                Our veterinarians include Dr. Karanbir Singh and Madhu Sahjeta, both senior
                veterinarians. Visit our team page to learn more about the people caring for your
                animals. Please confirm each doctor’s verified qualifications and areas of interest
                before adding those details.
              </p>
              <Link href="/team/" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border border-outline-variant px-5 py-3 text-sm font-bold text-on-surface hover:border-primary">Meet the Team</Link>
            </div>
            <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-5 sm:p-7">
              <h3 className="font-headline text-xl font-bold text-on-surface">Care for Pets and Horses</h3>
              <p className="mt-3 leading-relaxed text-on-surface-variant">
                GreenCoatVets treats pets and companion animals, and our{" "}
                <Link href="/equine-services-mohali/" className="font-semibold text-primary underline underline-offset-4">equine services</Link>{" "}
                provide veterinary care for horses. If you are not sure whether we can help with
                your animal, contact our team and describe the situation.
              </p>
              <Link href="/contact/" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-bold text-on-primary">Contact Our Team</Link>
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

        {/* Homepage FAQs */}
        <section className="bg-surface py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">Helpful answers</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold text-on-surface sm:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-7 space-y-3">
              {[
                { q: "Is GreenCoatVets open 24 hours?", a: "Yes. GreenCoatVets is open 24 hours. For urgent cases, please contact us as soon as possible." },
                { q: "What animals do you treat?", a: "We provide care for pets and companion animals, and our equine services cover horses. Contact our team to ask about your animal." },
                { q: "Do you offer pet vaccination?", a: "Yes. Our team can assess your pet and guide you on vaccination and boosters. See our pet vaccination page for more information." , href: "/pet-vaccination-mohali/", label: "Pet vaccination page" },
                { q: "Do you provide emergency care?", a: "Yes. GreenCoatVets provides emergency veterinary care for pets, and we are open 24 hours.", href: "/emergency-care-mohali/", label: "Emergency care page" },
                { q: "How can I book an appointment?", a: "You can book online or reach our team through the contact page.", href: "/book/", label: "Book an appointment", extraHref: "/contact/", extraLabel: "contact page" },
                { q: "Do you have a pet shop?", a: "Yes. Our pet shop in Mohali offers everyday supplies and accessories for pets.", href: "/pet-shop-mohali/", label: "Pet shop in Mohali" },
                { q: "What should I do if my pet needs help late at night?", a: "Contact us straight away. GreenCoatVets is open 24 hours, so our team is available at any time. For serious signs such as breathing difficulty, collapse or seizures, do not wait.", href: "/emergency-care-mohali/", label: "Emergency care" },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-4 open:border-primary/40 sm:p-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-headline text-base font-bold text-on-surface marker:hidden sm:text-lg">
                    <span>{faq.q}</span>
                    <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-primary transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant sm:text-base">
                    {faq.a}{" "}
                    {faq.href && <Link href={faq.href} className="font-semibold text-primary underline underline-offset-4">{faq.label}</Link>}
                    {faq.extraHref && <> or <Link href={faq.extraHref} className="font-semibold text-primary underline underline-offset-4">{faq.extraLabel}</Link>.</>}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ teaser */}
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

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-8">
          <div className="gradient-primary relative overflow-hidden rounded-[2rem] p-10 text-center text-on-primary shadow-2xl shadow-primary/30 sm:rounded-[3rem] sm:p-16 lg:p-20">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-10">
              <span className="material-symbols-outlined absolute -left-10 -top-20 text-[280px] sm:text-[360px]">
                medical_services
              </span>
            </div>

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <h2 className="mx-auto max-w-4xl font-headline text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                {t(s.cta_heading)}
              </h2>

              {ctaParas.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mx-auto max-w-2xl text-lg opacity-90 sm:text-xl"
                >
                  {p}
                </p>
              ))}

              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
                <Link
                  href="/book/"
                  className="w-full rounded-2xl bg-surface-container-lowest px-8 py-4 font-headline text-lg font-bold text-primary shadow-lg transition-colors hover:bg-surface sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/contact/"
                  className="w-full rounded-2xl border border-white/70 px-8 py-4 font-headline text-lg font-bold text-on-primary transition-colors hover:bg-white/10 sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
                >
                  Contact Our Team
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
