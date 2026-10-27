import type { Metadata } from "next";
import Link from "next/link";
import { resolveClinic } from "@/lib/clinic/resolve-clinic";
import { getMergedPageContent } from "@/lib/marketing/get-marketing-site";
import { applyClinicPlaceholders } from "@/lib/marketing/page-content";
import { marketingPageMetadata } from "@/lib/marketing/page-metadata";
import { createClient } from "@/lib/supabase/server";

const pageTitle = "Veterinary Services in Mohali for Pets | GreenCoatVets";
const pageDescription =
  "Explore GreenCoatVets veterinary services in Mohali: consultations, vaccination, diagnostics, surgery, dental, eye care, emergency care and more.";
const canonicalUrl = "https://www.greencoatvets.com/services/";

export async function generateMetadata(): Promise<Metadata> {
  const clinic = await resolveClinic();
  const baseMetadata = await marketingPageMetadata({
    slug: "services",
    clinicName: clinic.name,
    path: "/services",
  });

  return {
    ...baseMetadata,
    title: pageTitle,
    description: pageDescription,
    alternates: {
      ...(baseMetadata.alternates ?? {}),
      canonical: canonicalUrl,
    },
    openGraph: {
      ...(baseMetadata.openGraph ?? {}),
      type: "website",
      url: canonicalUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: clinic.name || "GreenCoatVets",
      locale: "en_IN",
    },
    twitter: {
      ...(baseMetadata.twitter ?? {}),
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

type ServiceItem = {
  title: string;
  slug: string;
  description: string;
  icon: string;
};

const serviceGroups: { title: string; intro: string; services: ServiceItem[] }[] = [
  {
    title: "Everyday and Preventive Care",
    intro: "Routine consultations and preventive support to help pets stay well.",
    services: [
      {
        title: "Specialized OPD",
        slug: "specialized-opd-mohali",
        description: "Consultations for pets with symptoms or ongoing health concerns.",
        icon: "medical_services",
      },
      {
        title: "Pet Health Checkup",
        slug: "pet-health-checkup-mohali",
        description: "Routine wellness examinations and preventive care.",
        icon: "health_and_safety",
      },
      {
        title: "Pet Vaccination",
        slug: "pet-vaccination-mohali",
        description: "Vaccination assessment, schedules and booster guidance.",
        icon: "vaccines",
      },
      {
        title: "Skin Treatment",
        slug: "veterinary-skin-treatment-mohali",
        description: "Assessment and care for itching, hair loss and skin problems.",
        icon: "dermatology",
      },
      {
        title: "Dental Care",
        slug: "dental-care-mohali",
        description: "Dental examinations, teeth cleaning and dental surgery.",
        icon: "dentistry",
      },
    ],
  },
  {
    title: "Urgent Care and Diagnostics",
    intro: "Prompt assessment and diagnostic support to guide treatment decisions.",
    services: [
      {
        title: "Emergency Care",
        slug: "emergency-care-mohali",
        description: "Urgent veterinary assessment and treatment, 24 hours a day.",
        icon: "emergency",
      },
      {
        title: "Veterinary Diagnostics",
        slug: "veterinary-diagnostics-mohali",
        description: "Laboratory tests, ultrasound and X-ray to support diagnosis.",
        icon: "biotech",
      },
    ],
  },
  {
    title: "Surgery",
    intro: "Assessment, treatment planning and recovery guidance for surgical cases.",
    services: [
      {
        title: "Orthopedic Surgery",
        slug: "orthopedic-surgery-mohali",
        description: "Care for fractures, joint problems and mobility conditions.",
        icon: "orthopedics",
      },
      {
        title: "Soft Tissue Surgery",
        slug: "soft-tissue-surgery-mohali",
        description: "Surgical assessment and care for a range of pet health needs.",
        icon: "medical_services",
      },
      {
        title: "Eye Surgery",
        slug: "eye-surgery-mohali",
        description: "Eye examination, treatment and surgical care.",
        icon: "visibility",
      },
      {
        title: "Spay & Neuter",
        slug: "spay-neuter-mohali",
        description: "Sterilisation with veterinary health assessment and aftercare.",
        icon: "pets",
      },
    ],
  },
  {
    title: "Other Services",
    intro: "Additional services for pets and horses, along with everyday pet essentials.",
    services: [
      {
        title: "Equine Services",
        slug: "equine-services-mohali",
        description: "Veterinary health care and medical support for horses.",
        icon: "sound_detection_dog_barking",
      },
      {
        title: "Pet Shop",
        slug: "pet-shop-mohali",
        description: "Everyday supplies and accessories for pets.",
        icon: "shopping_bag",
      },
      {
        title: "Pet Grooming",
        slug: "pet-grooming-mohali",
        description: "Grooming information will be available on our upcoming service page.",
        icon: "content_cut",
      },
    ],
  },
];

const faqs = [
  {
    question: "What veterinary services does GreenCoatVets offer in Mohali?",
    answer:
      "GreenCoatVets offers consultations, vaccination, health checkups, diagnostics, emergency care, orthopedic, soft tissue and eye surgery, dental care, skin treatment, spay and neuter, equine services and a pet shop.",
  },
  {
    question: "Is GreenCoatVets open 24 hours?",
    answer: "Yes. GreenCoatVets is open 24 hours.",
  },
  {
    question: "Which service should I choose if I am unsure?",
    answer:
      "Start with a consultation at the Specialized OPD. The veterinarian will examine your pet and recommend any further service.",
  },
  {
    question: "Do you treat horses?",
    answer:
      "Yes. Our equine services cover veterinary care for horses. See the equine services page.",
  },
  {
    question: "How do I book a service?",
    answer:
      "You can book online through our booking page or contact our team through the contact page.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg sm:p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
        <span className="material-symbols-outlined text-2xl" aria-hidden="true">
          {service.icon}
        </span>
      </div>
      <h3 className="font-headline text-lg font-bold leading-snug text-slate-950">
        <Link
          href={`/${service.slug}/`}
          className="rounded-sm outline-none transition-colors hover:text-teal-800 focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>
      <Link
        href={`/${service.slug}/`}
        aria-label={`Learn more about ${service.title}`}
        className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-teal-800 transition-colors hover:text-teal-950"
      >
        Learn more
        <span
          className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          arrow_forward
        </span>
      </Link>
    </article>
  );
}

export default async function ServicesPage() {
  const clinic = await resolveClinic();
  const page = await getMergedPageContent("services");
  const s = page.sections ?? {};
  const t = (value: string | undefined, fallback: string) =>
    applyClinicPlaceholders(value?.trim() || fallback, clinic.name || "GreenCoatVets");
  const heroImg = s.hero_image_url?.trim() || "";

  const supabase = createClient();
  const { data: services, error } = await supabase
    .from("services")
    .select("id, title, slug, short_description")
    .eq("clinic_id", clinic.id)
    .eq("is_active", true)
    .order("title", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  const carePrinciples = [
    {
      number: "01",
      title: "We listen first",
      blurb: "We take time to understand your pet’s history, routine and the concerns you have noticed.",
      icon: "forum",
    },
    {
      number: "02",
      title: "We explain clearly",
      blurb: "Our team explains findings and suitable next steps in straightforward, practical language.",
      icon: "chat",
    },
    {
      number: "03",
      title: "We plan around your pet",
      blurb: "Recommendations are tailored to your pet’s individual needs, age and circumstances.",
      icon: "favorite",
    },
  ];

  return (
    <main className="overflow-hidden bg-slate-50 pb-12 text-slate-800 sm:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-600 hover:text-teal-800">
            Home
          </Link>
          <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">
            chevron_right
          </span>
          <span aria-current="page" className="text-sm font-semibold text-teal-900">
            Services
          </span>
        </div>
      </nav>

      {/* Hero content is editable in the existing CMS; fallback copy follows the SEO brief. */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wider text-teal-800 shadow-sm sm:text-sm">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                health_and_safety
              </span>
              {t(s.eyebrow, "Veterinary care in Mohali")}
            </span>
            <h1 className="font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Veterinary Services in Mohali
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              {t(
                s.subtitle,
                "GreenCoatVets offers a wide range of veterinary services for pets under one roof in Mohali, and we are open 24 hours. Choose a service below to learn more, or contact our team if you are not sure what your pet needs.",
              )}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/book/"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:w-auto"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  calendar_month
                </span>
                Book an Appointment
              </Link>
              <Link
                href="/contact/"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-teal-600 hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:w-auto"
              >
                Contact Our Team
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {["Open 24 hours", "Multiple veterinary services", "Care for pets and horses"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-teal-700" aria-hidden="true">
                      check_circle
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {heroImg ? (
            <div className="relative min-w-0">
              <div className="absolute -inset-2 rounded-3xl bg-teal-200/40 blur-xl" aria-hidden="true" />
              <div className="relative h-[240px] overflow-hidden rounded-2xl border border-teal-100 bg-teal-50 shadow-xl sm:h-[340px] lg:h-[410px]">
                {/* CMS image URL is retained; Image optimization can be configured later if required. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImg}
                  alt="Veterinary team caring for a pet at GreenCoatVets in Mohali"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white p-6 shadow-lg sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
                Care in one place
              </p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Support for every stage of your pet’s care
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                From preventive checkups to diagnostics, surgery and urgent care, explore the
                services available at GreenCoatVets.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["medical_services", "Consultations"],
                  ["biotech", "Diagnostics"],
                  ["emergency", "Emergency care"],
                  ["health_and_safety", "Prevention"],
                ].map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-2 rounded-xl bg-teal-50 p-3">
                    <span className="material-symbols-outlined text-xl text-teal-800" aria-hidden="true">
                      {icon}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Helpful care principles, without repeating service names already listed below. */}
      {!services?.length && (
        <section className="mx-auto mt-10 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-sm">
            <div className="grid gap-6 bg-gradient-to-br from-teal-50 via-white to-amber-50 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
                  A personal approach to care
                </p>
                <h2 className="mt-2 font-headline text-2xl font-extrabold leading-tight text-slate-950 sm:text-3xl">
                  Thoughtful Care, Clear Guidance
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Every pet is different. We begin by understanding your pet’s history and needs,
                  then explain our findings and practical next steps so you can make informed
                  decisions about their care.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-4">
                {carePrinciples.map((principle) => (
                  <article
                    key={principle.number}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                      <span className="material-symbols-outlined text-xl" aria-hidden="true">
                        {principle.icon}
                      </span>
                    </div>
                    <p className="mt-4 text-xs font-extrabold tracking-[0.14em] text-teal-800">
                      {principle.number}
                    </p>
                    <h3 className="mt-1 font-headline text-base font-bold leading-snug text-slate-950">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{principle.blurb}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {services?.length ? (
        <section className="mx-auto mt-10 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
              Available at our hospital
            </p>
            <h2 className="mt-2 font-headline text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Our Current Services
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Browse the services currently listed by our hospital, or explore the dedicated
              service pages below for more detailed information.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">
                    medical_services
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {service.short_description ?? "Learn more about this service."}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-teal-800 hover:text-teal-950"
                >
                  Learn more
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* SEO service directory: the supplied service-page list takes priority. */}
      <section
        id="specialized-veterinary-services"
        className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8"
        aria-labelledby="services-heading"
      >
        <div className="space-y-10 sm:space-y-12">
          {serviceGroups.map((group) => (
            <section key={group.title} aria-labelledby={`group-${group.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
              <div className="mb-5 border-l-4 border-teal-600 pl-4">
                <h3
                  id={`group-${group.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
                  className="font-headline text-xl font-bold text-slate-950 sm:text-2xl"
                >
                  {group.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">{group.intro}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.services.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-teal-100 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
              Coordinated care
            </p>
            <h2 className="mt-2 font-headline text-2xl font-extrabold text-slate-950 sm:text-3xl">
              How Our Services Work Together
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Many pets need more than one kind of care. A consultation may lead to diagnostic
              tests, then to treatment, surgery or follow-up visits. Because these services are
              under one roof at GreenCoatVets, your pet’s care can move from one step to the next
              without starting again, and your veterinarian can see the full picture.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["01", "Consultation", "Understand your pet’s symptoms, history and needs."],
              ["02", "Assessment", "Use examination and tests when the veterinarian advises."],
              ["03", "Care plan", "Discuss treatment options, follow-up and recovery."],
            ].map(([number, title, description]) => (
              <div key={number} className="flex gap-3 rounded-xl bg-teal-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-teal-800 shadow-sm">
                  {number}
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 overflow-hidden rounded-3xl bg-slate-950 p-5 text-white sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">
              Need help choosing?
            </p>
            <h2 className="mt-2 font-headline text-2xl font-extrabold sm:text-3xl">
              Not Sure Which Service Your Pet Needs?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              If you are unsure where to start, a consultation at our{" "}
              <Link
                href="/specialized-opd-mohali/"
                className="font-semibold text-teal-300 underline decoration-teal-500 underline-offset-4 hover:text-white"
              >
                Specialized OPD
              </Link>{" "}
              is usually the best first step. Our veterinarians will examine your pet and guide
              you to the right care. If your pet seems seriously unwell, contact us straight away.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/book/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                calendar_month
              </span>
              Book an Appointment
            </Link>
            <Link
              href="/contact/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Contact Our Team
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/emergency-care-mohali/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-teal-200 transition hover:bg-white/10 hover:text-white"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                emergency
              </span>
              24-hour emergency care
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-4xl px-4 sm:mt-20 sm:px-6 lg:px-8" aria-labelledby="services-faq-heading">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
            Frequently asked questions
          </p>
          <h2 id="services-faq-heading" className="mt-2 font-headline text-2xl font-extrabold text-slate-950 sm:text-3xl">
            Veterinary Services FAQs
          </h2>
        </div>
        <div className="mt-7 space-y-3">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-4 open:border-teal-200 open:shadow-sm sm:p-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base">
                <span>
                  <span className="mr-2 text-teal-800">Q{index + 1}.</span>
                  {faq.question}
                </span>
                <span className="material-symbols-outlined shrink-0 text-teal-800 transition-transform group-open:rotate-180" aria-hidden="true">
                  expand_more
                </span>
              </summary>
              <p className="mt-3 pr-2 text-sm leading-7 text-slate-600 sm:pr-7">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-800 to-emerald-700 p-6 text-white shadow-lg sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-emerald-300/10 blur-2xl" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-100">
                GreenCoatVets · Mohali
              </p>
              <h2 className="mt-2 font-headline text-2xl font-extrabold sm:text-3xl">
                Talk to Our Team About Your Pet’s Care
              </h2>
              <p className="mt-3 text-sm leading-7 text-teal-50 sm:text-base">
                We are open 24 hours. Book a visit online or contact our team if you need help
                choosing the right service.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/book/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-900 transition hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800"
              >
                Book an Appointment
              </Link>
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/60 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



