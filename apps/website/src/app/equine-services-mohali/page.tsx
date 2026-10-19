import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Equine Veterinary Services in Mohali | GreenCoatVets";

const pageDescription =
  "Looking for horse veterinary care in Mohali? GreenCoatVets provides equine veterinary services, horse medical treatment and equine health care.";

const pageUrl = "https://www.greencoatvets.com/equine-services-mohali/";
const bookingUrl = "https://www.greencoatvets.com/book";
const siteUrl = "https://www.greencoatvets.com";

const images = {
  hero: "/equine-services-hero.png",
  care: "/equine-veterinary-care.png",
  banner: "horse-banner.jpg",
};

const services = [
  {
    number: "01",
    icon: "stethoscope",
    title: "Routine Health Examinations",
    description:
      "Regular health checks to assess your horse's general condition and identify concerns that may need veterinary attention.",
  },
  {
    number: "02",
    icon: "medical_services",
    title: "General Medical Care",
    description:
      "Veterinary assessment and care tailored to your horse's symptoms, condition, and individual needs.",
  },
  {
    number: "03",
    icon: "healing",
    title: "Injury Assessment",
    description:
      "Professional assessment of injuries and guidance on appropriate treatment and follow-up care.",
  },
  {
    number: "04",
    icon: "health_and_safety",
    title: "Preventive Healthcare",
    description:
      "Health guidance and preventive care to help support your horse's long-term well-being.",
  },
  {
    number: "05",
    icon: "nutrition",
    title: "Nutrition & Health Guidance",
    description:
      "Practical guidance on nutrition and general health based on your horse's individual circumstances.",
  },
  {
    number: "06",
    icon: "monitor_heart",
    title: "Ongoing Health Monitoring",
    description:
      "Continued assessment and veterinary guidance to help monitor changes in your horse's health.",
  },
];

const reasons = [
  "Experienced veterinary team",
  "Personalized equine care",
  "Professional health assessment",
  "Diagnostic support when required",
  "Preventive and medical care",
  "Compassionate approach",
];

const warningSigns = [
  "Changes in appetite or drinking habits",
  "Unusual behaviour or reduced energy",
  "Changes in walking or movement",
  "Visible injuries or other physical concerns",
  "Changes in general health or condition",
];

const faqs = [
  {
    question: "What do equine veterinary services include?",
    answer:
      "Equine veterinary services can include routine health checks, medical assessment, preventive care, injury evaluation, and treatment based on your horse's needs.",
  },
  {
    question: "When should I contact an equine veterinarian?",
    answer:
      "Contact a veterinarian if you notice changes in your horse's appetite, behaviour, movement, energy, or overall health.",
  },
  {
    question: "Do you provide horse medical treatment in Mohali?",
    answer:
      "Yes, GreenCoatVets provides professional horse medical treatment in Mohali based on the individual condition of the horse.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description:
      "Professional equine veterinary services, horse medical treatment and health care for horses in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}${images.hero}`,
        alt: "Equine veterinary services and horse veterinary care at GreenCoatVets in Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteUrl}${images.hero}`],
  },
};

function HorsePhoto({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#e9f1ed] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, 55vw"
        className="object-cover"
      />
    </div>
  );
}

function BookingLink({
  children = "Book an Equine Consultation",
  light = false,
}: {
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={bookingUrl}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
        light
          ? "bg-white text-[#123d39] hover:bg-emerald-50"
          : "bg-[#176b60] text-white hover:bg-[#10564d]"
      }`}
    >
      {children}
      <span
        aria-hidden="true"
        className="material-symbols-outlined text-lg"
      >
        arrow_forward
      </span>
    </Link>
  );
}

export default function EquineServicesMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-100 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-teal-800"
          >
            Home
          </Link>

          <span
            aria-hidden="true"
            className="material-symbols-outlined text-sm text-slate-400"
          >
            chevron_right
          </span>

          <Link
            href="/#services"
            className="text-sm text-slate-500 transition hover:text-teal-800"
          >
            Services
          </Link>

          <span
            aria-hidden="true"
            className="material-symbols-outlined text-sm text-slate-400"
          >
            chevron_right
          </span>

          <span
            aria-current="page"
            className="text-sm font-semibold text-teal-800"
          >
            Equine Services
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#f2f6f3]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">
                Equine healthcare · Mohali
              </span>
            </div>

            <h1 className="mt-6 font-headline text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.6rem]">
              Equine Services
              <span className="mt-1 block text-[#176b60]">
                in Mohali
              </span>
            </h1>

            <h2 className="mt-6 max-w-md text-xl font-semibold leading-snug text-slate-800 sm:text-2xl">
              Professional Veterinary Care for Horses
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              At GreenCoatVets, we provide professional{" "}
              <strong>equine veterinary services in Mohali</strong> focused
              on the health, comfort, and well-being of horses. From routine
              health checks to medical concerns, our veterinary team
              provides care based on each horse&apos;s individual needs.
            </p>

            <div className="mt-8">
              <BookingLink />
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-5">
              <span className="material-symbols-outlined text-2xl text-teal-800">
                pets
              </span>
              <p className="max-w-xs text-xs leading-5 text-slate-600">
                Individual assessment and thoughtful veterinary guidance
                for your horse.
              </p>
            </div>
          </div>

          {/* Hero image: explicit height at every breakpoint */}
          <div className="relative h-[360px] w-full sm:h-[480px] lg:h-[590px]">
            <HorsePhoto
              src={images.hero}
              alt="Equine veterinary services and horse veterinary care at GreenCoatVets in Mohali"
              priority
              className="absolute inset-0 h-full w-full"
            />

            <div className="absolute bottom-5 left-5 max-w-xs border-l-4 border-emerald-400 bg-white/95 px-5 py-4 shadow-lg sm:bottom-8 sm:left-8">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-800">
                GreenCoatVets
              </p>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                Supporting horse health through attentive veterinary care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equine service grid */}
      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Our veterinary services
              </p>

              <h2 className="mt-3 font-headline text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Equine Veterinary Services in Mohali
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Our care supports horses through routine examinations,
              health assessments, and treatment for a range of medical
              concerns.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex min-h-[245px] flex-col bg-white p-6 transition hover:bg-[#f2f7f4] sm:p-7 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center bg-[#e6f1eb] text-teal-800 transition group-hover:bg-[#176b60] group-hover:text-white">
                    <span className="material-symbols-outlined text-2xl">
                      {service.icon}
                    </span>
                  </span>

                  <span className="text-xs font-bold tracking-widest text-slate-400">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 font-headline text-lg font-bold leading-snug text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Horse veterinary care */}
      <section className="bg-[#123d39] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Care image: explicit height at every breakpoint */}
          <div className="relative h-[340px] w-full sm:h-[460px] lg:h-[540px]">
            <HorsePhoto
              src={images.care}
              alt="Horse receiving attentive veterinary care"
              className="absolute inset-0 h-full w-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123d39]/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 border-l-4 border-emerald-400 bg-[#123d39]/90 p-5 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Care for every stage
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug text-white">
                Every horse deserves attention suited to its individual needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Horse health matters
            </p>

            <h2 className="mt-4 font-headline text-3xl font-bold leading-tight sm:text-4xl">
              Horse Veterinary Care in Mohali
            </h2>

            <p className="mt-5 text-sm leading-7 text-teal-50 sm:text-base">
              Good <strong>horse veterinary care</strong> helps identify
              health concerns early and supports your horse&apos;s overall
              well-being. Our team takes a careful approach to assessing
              each horse and recommending appropriate care.
            </p>

            <div className="mt-8 border-t border-white/20 pt-7">
              <h3 className="text-xl font-bold text-white">
                Equine Veterinarian in Mohali
              </h3>

              <p className="mt-3 text-sm leading-7 text-teal-50 sm:text-base">
                An <strong>equine veterinarian in Mohali</strong> can help
                identify changes in your horse&apos;s health, movement,
                appetite, or behaviour. At GreenCoatVets, we provide
                professional veterinary assessment and guidance based on
                your horse&apos;s condition.
              </p>
            </div>

            <div className="mt-8">
              <BookingLink light />
            </div>
          </div>
        </div>
      </section>

      {/* When to seek veterinary attention */}
      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Know what to look for
            </p>

            <h2 className="mt-4 font-headline text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              When Your Horse Needs Veterinary Attention
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Changes in behaviour, appetite, movement, or general
              condition may indicate a health concern. If something seems
              unusual, seek veterinary advice.
            </p>

            <div className="mt-7">
              <BookingLink />
            </div>
          </div>

          <div className="border-y border-slate-200">
            {warningSigns.map((sign, index) => (
              <div
                key={sign}
                className="flex items-start gap-4 border-b border-slate-200 py-5 last:border-b-0 sm:py-6"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e6f1eb] text-sm font-bold text-teal-800">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="pt-1 text-sm font-medium leading-6 text-slate-800 sm:text-base">
                  {sign}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical treatment and health services */}
      <section className="bg-[#f1f6f2] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:gap-14 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Assessment and treatment
            </p>

            <h2 className="mt-3 max-w-2xl font-headline text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Horse Medical Treatment in Mohali
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Our <strong>horse medical treatment in Mohali</strong> is
              tailored to the individual needs of each horse. Depending
              on the condition, treatment may include medication, wound
              care, supportive care, or further diagnostic evaluation.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Our <strong>equine health services in Mohali</strong> are
              designed to support your horse through routine health
              monitoring and the assessment of medical concerns.
            </p>
          </div>

          <div className="flex size-24 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-800 sm:size-32">
            <span className="material-symbols-outlined text-5xl sm:text-6xl">
              health_and_safety
            </span>
          </div>
        </div>
      </section>

      {/* Why choose GreenCoatVets */}
      <section className="py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Our approach
              </p>

              <h2 className="mt-4 font-headline text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Why Choose GreenCoatVets?
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                We focus on personalized equine care, professional health
                assessment, and compassionate veterinary guidance.
              </p>
            </div>

            <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-8">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-4 border-b border-slate-200 py-5"
                >
                  <span className="material-symbols-outlined text-2xl text-teal-700">
                    check_circle
                  </span>

                  <span className="text-sm font-semibold leading-6 text-slate-800 sm:text-base">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment banner */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#123d39] md:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Equine care · Mohali
            </p>

            <h2 className="mt-4 font-headline text-3xl font-bold leading-tight text-white sm:text-4xl">
              Looking for Equine Veterinary Services in Mohali?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-teal-50 sm:text-base">
              If your horse needs a health check, medical assessment, or
              ongoing veterinary care, GreenCoatVets is here to help.
            </p>

            <p className="mt-4 text-sm font-semibold text-white">
              Professional veterinary care for healthier horses.
            </p>

            <div className="mt-7">
              <BookingLink light>Book Appointment</BookingLink>
            </div>
          </div>

          <div className="relative h-[280px] w-full sm:h-[360px] md:h-full md:min-h-[420px]">
            <HorsePhoto
              src={images.banner}
              alt="Horse representing equine veterinary care at GreenCoatVets"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f5f8f6] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Helpful information
            </p>

            <h2 className="mt-4 font-headline text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Equine Services FAQs
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Have questions about your horse&apos;s health? Contact our
              team to discuss your horse&apos;s individual needs.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-slate-200 bg-white p-5 transition open:border-teal-200 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>

                  <span className="material-symbols-outlined shrink-0 text-xl text-teal-800 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}

            <div className="pt-4">
              <BookingLink />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
