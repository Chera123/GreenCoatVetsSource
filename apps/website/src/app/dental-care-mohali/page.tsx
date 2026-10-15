
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Veterinary Dental Care in Mohali | GreenCoatVets";

const pageDescription =
  "Looking for pet dental care in Mohali? GreenCoatVets provides veterinary dental care, pet teeth cleaning and dental surgery for dogs and cats.";

const pageUrl =
  "https://www.greencoatvets.com/dental-care-mohali/";

const bookingUrl = "https://www.greencoatvets.com/book";

const images = {
  hero: "/dental-care.png",
  cat: "/dental-care-cat.png",
  examination: "/pet-dental-examination.png",
  banner: "/dental-care-banner.png",
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
      "Professional pet dental care, teeth cleaning and veterinary dental surgery for dogs and cats in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: images.hero,
        alt: "Veterinary dental care and pet teeth cleaning for dogs and cats in Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [images.hero],
  },
};

const dentalProblems = [
  { icon: "air", title: "Bad breath" },
  { icon: "cleaning_services", title: "Plaque and tartar buildup" },
  { icon: "healing", title: "Gum inflammation" },
  { icon: "medical_services", title: "Loose or damaged teeth" },
  { icon: "restaurant", title: "Difficulty chewing" },
  { icon: "favorite", title: "Mouth pain" },
  { icon: "health_and_safety", title: "Other dental and oral problems" },
];

const services = [
  {
    icon: "dentistry",
    title: "Pet Dental Care for Pets",
    paragraphs: [
      <>
        Good <strong>pet dental care</strong> is an important part of your
        pet&apos;s overall health. Regular dental checks can help identify
        problems before they become more painful or difficult to treat.
      </>,
      <>
        Our veterinary team examines your pet&apos;s teeth and gums and
        recommends appropriate care based on their individual needs.
      </>,
    ],
  },
  {
    icon: "pets",
    title: "Dog Dental Care in Mohali",
    paragraphs: [
      <>
        Dental problems are common in dogs and can develop gradually without
        obvious signs. Our <strong>dog dental care in Mohali</strong> helps
        maintain healthy teeth and gums through professional examination,
        cleaning, and treatment when required.
      </>,
      <>
        If your dog has persistent bad breath, difficulty eating, or visible
        tartar, a dental check-up may be beneficial.
      </>,
    ],
  },
  {
    icon: "vaccines",
    title: "Veterinary Dental Surgery",
    paragraphs: [
      <>
        Some dental conditions require more than routine cleaning. Our{" "}
        <strong>veterinary dental surgery</strong> services may include
        treatment for damaged, painful, or problematic teeth when surgical
        care is necessary.
      </>,
      <>
        Every procedure is planned after examining your pet and assessing
        their overall health.
      </>,
    ],
  },
  {
    icon: "auto_awesome",
    title: "Pet Teeth Cleaning in Mohali",
    paragraphs: [
      <>
        Professional <strong>pet teeth cleaning in Mohali</strong> helps
        remove plaque and tartar that regular brushing may not completely
        control.
      </>,
      <>
        Our team can assess your pet&apos;s oral health and recommend
        professional cleaning or further dental treatment when needed.
      </>,
    ],
  },
];

const benefits = [
  { icon: "groups", title: "Experienced veterinary team" },
  { icon: "dentistry", title: "Professional dental evaluation" },
  { icon: "assignment", title: "Personalized treatment planning" },
  { icon: "medical_services", title: "Dental cleaning and surgical care" },
  { icon: "health_and_safety", title: "Modern veterinary facilities" },
  { icon: "favorite", title: "Compassionate care for pets" },
];

const faqs = [
  {
    question: "How often should my pet have a dental check-up?",
    answer:
      "Regular dental examinations can help identify plaque, tartar, gum disease, and other oral problems early. Your veterinarian can recommend a suitable schedule based on your pet's needs.",
  },
  {
    question: "Is pet teeth cleaning necessary?",
    answer:
      "Professional cleaning can help remove plaque and tartar that may not be removed through routine brushing alone.",
  },
  {
    question: "When does a pet need veterinary dental surgery?",
    answer:
      "Dental surgery may be recommended for certain damaged, painful, infected, or problematic teeth after a veterinary examination.",
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-xs">
          {eyebrow}
        </p>
      )}
      <h2 className="font-headline text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function Photo({
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
    <div
      className={`relative min-w-0 overflow-hidden rounded-xl border border-teal-100 bg-teal-50 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px"
        className="object-cover"
      />
    </div>
  );
}

function AppointmentButton({
  children = "Book a Dental Consultation",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={bookingUrl}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-700 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      <span className="material-symbols-outlined text-lg">
        calendar_month
      </span>
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-teal-100 bg-white px-2 py-3 text-center">
      <span className="material-symbols-outlined text-2xl text-teal-700">
        {icon}
      </span>
      <p className="mt-2 text-xs font-semibold leading-4 text-slate-800">
        {title}
      </p>
    </div>
  );
}

export default function DentalCareMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-600 hover:text-teal-700">
            Home
          </Link>
          <span className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>
          <Link
            href="/#services"
            className="text-sm text-slate-600 hover:text-teal-700"
          >
            Services
          </Link>
          <span className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>
          <span aria-current="page" className="text-sm font-semibold text-teal-800">
            Dental Care
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-7 sm:px-6 sm:py-10 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-semibold text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-base">
                dentistry
              </span>
              Veterinary Dental Care · Mohali
            </span>

            <h1 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem]">
              Dental Care in Mohali for Pets
            </h1>

            <h2 className="mt-3 text-base font-bold text-teal-800 sm:text-lg">
              Better Dental Health for a Happier Pet
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              Dental problems can cause pain, bad breath, difficulty eating,
              and other health concerns. At GreenCoatVets, we provide
              professional <strong>veterinary dental care in Mohali</strong>{" "}
              to help keep your pet&apos;s teeth, gums, and mouth healthy.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <AppointmentButton />
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {["Healthy teeth & gums", "Professional care", "Happier pets"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-700"
                  >
                    <span className="material-symbols-outlined text-base text-teal-700">
                      check_circle
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <Photo
            src={images.hero}
            alt="Veterinary dental care and pet teeth cleaning for dogs and cats in Mohali"
            priority
            className="aspect-[4/3] shadow-lg"
          />
        </div>
      </section>

      {/* Veterinary dental care */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
          <Photo
            src={images.cat}
            alt="Veterinarian examining a cat's teeth during a dental check-up"
            className="aspect-[4/3]"
          />

          <div className="min-w-0">
            <SectionHeading
              eyebrow="Professional dental care"
              title="Veterinary Dental Care in Mohali"
              description="Our veterinary dental care in Mohali focuses on maintaining your pet's oral health and identifying dental problems early."
            />

            <p className="mt-3 text-sm leading-6 text-slate-700">
              We provide dental evaluation and treatment for concerns such as:
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {dentalProblems.slice(0, 4).map((item) => (
                <Feature key={item.title} icon={item.icon} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dental concerns */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Common dental problems"
              title="Dental Issues We Treat"
              description="Our pet dental care services in Mohali may help with:"
            />

            <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
              {dentalProblems.map((item) => (
                <div key={item.title} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-teal-700">
                    check_circle
                  </span>
                  <span className="text-sm leading-5 text-slate-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-700">
              Every pet is different. Our veterinarians examine your pet&apos;s
              teeth and gums and recommend appropriate care based on their
              individual needs.
            </p>
          </div>

          <Photo
            src={images.examination}
            alt="Dog receiving a veterinary dental examination"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Dental service cards */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-2 lg:gap-4 lg:px-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-200 hover:shadow-md sm:gap-4 sm:p-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 sm:size-14">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  {service.icon}
                </span>
              </span>

              <div className="min-w-0">
                <h2 className="font-headline text-base font-bold leading-snug text-slate-900 sm:text-lg">
                  {service.title}
                </h2>

                {service.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-2 text-sm leading-6 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-slate-100 bg-white py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Trusted pet dental care"
              title="Why Choose GreenCoatVets?"
              description="We focus on professional veterinary care, early diagnosis, and compassionate support for pets and their families."
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[68px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition hover:border-teal-200 hover:bg-teal-50 sm:px-4"
              >
                <span className="material-symbols-outlined shrink-0 text-2xl text-teal-700">
                  {item.icon}
                </span>
                <p className="text-sm font-semibold leading-5 text-slate-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment banner */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-800 text-white shadow-lg md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="relative min-h-[180px] md:min-h-full">
              <Image
                src={images.banner}
                alt="Happy dog representing professional pet dental care"
                fill
                sizes="(max-width: 767px) 100vw, 280px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:p-8">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-200">
                  Looking for pet dental care in Mohali?
                </p>

                <h2 className="mt-2 font-headline text-xl font-bold leading-tight sm:text-2xl">
                  Book a Dental Consultation Today
                </h2>

                <p className="mt-3 text-sm leading-6 text-teal-50">
                  Don&apos;t ignore bad breath, tartar, gum problems, or
                  difficulty eating. Early dental care can help your pet stay
                  comfortable and maintain better oral health. GreenCoatVets
                  provides professional <strong>pet dental care in Mohali</strong>{" "}
                  for dogs and cats.
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  Healthy teeth. Healthy gums. Happier pets.
                </p>
              </div>

              <div className="shrink-0">
                <AppointmentButton>Book Appointment</AppointmentButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-start gap-5 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Dental Care FAQs"
              description="Learn more about veterinary dental care and pet teeth cleaning in Mohali."
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-4 transition open:border-teal-200 open:shadow-sm sm:px-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold leading-5 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-xl text-teal-700 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}

            <div className="pt-2">
              <AppointmentButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
