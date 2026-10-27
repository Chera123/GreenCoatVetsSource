
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Dental Care & Teeth Cleaning in Mohali | GreenCoatVets";

const pageDescription =
  "Pet dental care in Mohali at GreenCoatVets: dental examination, professional teeth cleaning and dental surgery for pets. Book a dental visit.";

const pageUrl =
  "https://www.greencoatvets.com/dental-care-mohali/";

const bookingUrl = "https://www.greencoatvets.com/book/";

const images = {
  hero: "/dental-care.jpg",
  cat: "/dental-care-cat.jpg",
  examination: "/pet-dental-examination.jpg",
  banner: "/dental-care-banner.jpg",
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
      "Pet dental care in Mohali at GreenCoatVets: dental examination, professional teeth cleaning and dental surgery for pets. Book a dental visit.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: images.hero,
        alt: "Veterinarian checking a pet’s teeth during a dental examination at GreenCoatVets in Mohali",
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
    title: "Professional Teeth Cleaning",
    paragraphs: [
      <>
        Professional cleaning removes plaque and tartar that brushing at home
        cannot reach.
      </>,
      <>
        Your veterinarian will explain how cleaning is performed, whether
        anaesthesia is needed for your pet and how any risks are managed.
      </>,
    ],
  },
  {
    icon: "medical_services",
    title: "Dental Surgery",
    paragraphs: [
      <>
        Where teeth are damaged, loose or causing pain, your veterinarian may
        advise dental surgery.
      </>,
      <>
        Treatment is planned around your pet&apos;s condition, and the
        procedure and aftercare are explained in advance.
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
    question: "Why does my pet have bad breath?",
    answer:
      "Bad breath can come from plaque, tartar, gum problems or other health issues. A veterinary examination will help find the cause.",
  },
  {
    question: "Does teeth cleaning need anaesthesia?",
    answer:
      "Your veterinarian will explain whether anaesthesia is needed for your pet and how safety is managed before going ahead.",
  },
  {
    question: "How often should my pet’s teeth be checked?",
    answer:
      "Ask your veterinarian. Dental checks are best included in regular health checkups, and pets with dental problems may need more frequent visits.",
  },
  {
    question: "Do you provide dental surgery for pets in Mohali?",
    answer:
      "Yes. GreenCoatVets provides dental surgery where it is advised, following an examination.",
  },
  {
    question: "Can I use human toothpaste for my pet?",
    answer:
      "No. Human toothpaste is not designed for pets. Ask your veterinarian what is suitable.",
  },
  {
    question: "What happens after dental treatment?",
    answer:
      "Your veterinarian will explain aftercare, which may include softer food for a short time, prescribed medicines and a follow-up visit. Contact us if your pet will not eat or seems in pain.",
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
              Pet Dental Care · Mohali
            </span>

            <h1 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem]">
              Pet Dental Care and Teeth Cleaning in Mohali
            </h1>

            <h2 className="mt-3 text-base font-bold text-teal-800 sm:text-lg">
              Professional dental examinations, cleaning and treatment
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              Healthy teeth and gums matter for your pet’s comfort, eating and overall health. At GreenCoatVets in Mohali, our veterinary team provides dental examinations, professional teeth cleaning and dental surgery for pets, and gives guidance on caring for your pet’s mouth at home.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <AppointmentButton />
              <Link
                href="/contact/"
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
            alt="Veterinarian checking a pet’s teeth during a dental examination at GreenCoatVets in Mohali"
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
              title="Dental Examination"
              description="Your veterinarian will examine your pet’s teeth, gums and mouth and discuss the signs you have noticed."
            />

            <p className="mt-3 text-sm leading-6 text-slate-700">
              The examination helps your veterinarian explain what care is needed and whether professional cleaning or other treatment is recommended.
            </p>

            <ul className="mt-4 space-y-2.5">
              {[
                "Examination of teeth, gums and mouth",
                "Discussion of symptoms and eating changes",
                "Advice on professional cleaning or other treatment",
                "A treatment plan based on your pet’s needs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dental concerns */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Common dental problems"
              title="Signs of a Dental Problem"
              description="Dental problems can get worse over time. Early veterinary assessment can help identify what care your pet needs."
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

      {/* Home dental care */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 sm:py-11">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Everyday dental care"
              title="Caring for Your Pet’s Teeth at Home"
              description="Simple habits and regular veterinary checks can help you look after your pet’s oral health."
            />
            <ul className="mt-5 space-y-3">
              {[
                "Ask your veterinarian how and how often to clean your pet’s teeth.",
                "Do not use human toothpaste, which is not made for pets.",
                "Check your pet’s mouth occasionally for bad breath, redness or broken teeth.",
                "Include a dental check in your pet’s regular health checkup.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Link dental care with a routine{" "}
              <Link href="/pet-health-checkup-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">
                pet health checkup
              </Link>{" "}
              to discuss your pet’s overall health.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-800">
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">dentistry</span>
            </span>
            <h3 className="mt-4 font-headline text-xl font-bold text-slate-950">When to arrange a dental visit</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Bad breath, tartar build-up, red gums, loose teeth, dropping food or signs of mouth pain are reasons to book an examination. Dental problems often worsen over time, so do not wait for your pet to stop eating before seeking advice.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <AppointmentButton>Book a Dental Visit</AppointmentButton>
              <Link href="/specialized-opd-mohali/" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:text-emerald-800">
                Specialized OPD
              </Link>
            </div>
          </div>
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
                  Book a Dental Consultation in Mohali
                </h2>

                <p className="mt-3 text-sm leading-6 text-teal-50">
                  If your pet has bad breath, tartar, gum problems or difficulty eating, arrange a dental examination. Our veterinary team will explain whether professional cleaning, dental surgery or home-care changes may help.
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
