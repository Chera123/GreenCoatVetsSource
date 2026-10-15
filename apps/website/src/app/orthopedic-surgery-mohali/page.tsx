
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle =
  "Veterinary Orthopedic Surgery in Mohali | GreenCoatVets";

const pageDescription =
  "Looking for orthopedic care for your pet in Mohali? GreenCoatVets provides veterinary orthopedic surgery, pet fracture treatment and compassionate surgical care.";

const pageUrl =
  "https://www.greencoatvets.com/orthopedic-surgery-mohali/";

const heroImage = "/orthopedic-surgery-hero.png";
const dogImage = "/orthopedic-dog-fracture-care.png";
const catImage = "/orthopedic-cat-care.png";

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
      "Professional orthopedic surgery, fracture treatment and specialized care for dogs and cats in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: heroImage,
        alt: "Veterinary orthopedic surgery for dogs and cats at GreenCoatVets in Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
  },
};

const conditions = [
  { icon: "healing", title: "Bone fractures" },
  { icon: "accessibility_new", title: "Joint injuries" },
  { icon: "orthopedics", title: "Dislocations" },
  { icon: "monitor_heart", title: "Ligament injuries" },
  { icon: "emergency", title: "Trauma-related orthopedic problems" },
  { icon: "directions_walk", title: "Mobility problems" },
];

const benefits = [
  { icon: "groups", title: "Experienced veterinary team" },
  { icon: "monitor_heart", title: "Modern diagnostic support" },
  { icon: "assignment", title: "Personalized treatment planning" },
  { icon: "medical_services", title: "Comprehensive surgical care" },
  { icon: "favorite", title: "Post-operative guidance" },
  { icon: "pets", title: "Compassionate pet care" },
];

const faqs = [
  {
    question: "When does a pet need orthopedic surgery?",
    answer:
      "Surgery may be recommended for certain fractures, joint injuries, ligament problems, and other conditions that require surgical treatment.",
  },
  {
    question: "Do you provide dog orthopedic surgery in Mohali?",
    answer:
      "Yes, GreenCoatVets provides dog orthopedic surgery in Mohali based on your pet's individual condition and treatment needs.",
  },
  {
    question: "How is pet fracture treatment decided?",
    answer:
      "Treatment depends on the location and severity of the fracture, along with your pet's overall health and specific needs.",
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

function BookButton({
  children = "Book an Orthopedic Consultation",
}: {
  children?: ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-700 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 sm:text-sm"
    >
      {children}
      <span className="material-symbols-outlined text-base">
        arrow_forward
      </span>
    </Link>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      {eyebrow && (
        <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-[10px]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-headline text-lg font-bold leading-tight tracking-tight text-slate-900 sm:text-xl lg:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
          {description}
        </p>
      )}
    </div>
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
    <div className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-teal-100 bg-white px-2 py-3 text-center">
      <span className="material-symbols-outlined text-xl text-teal-700">
        {icon}
      </span>
      <p className="mt-1.5 text-[9px] font-semibold leading-4 text-slate-700 sm:text-[10px]">
        {title}
      </p>
    </div>
  );
}

function ImagePanel({
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

export default function OrthopedicSurgeryMohaliPage() {
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
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-2.5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-xs text-slate-500 hover:text-teal-700"
          >
            Home
          </Link>
          <span className="material-symbols-outlined text-sm text-slate-400">
            chevron_right
          </span>
          <Link
            href="/#services"
            className="text-xs text-slate-500 hover:text-teal-700"
          >
            Services
          </Link>
          <span className="material-symbols-outlined text-sm text-slate-400">
            chevron_right
          </span>
          <span className="text-xs font-semibold text-teal-800">
            Orthopedic Surgery
          </span>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-10">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-white px-3 py-1.5 text-[9px] font-semibold text-teal-800 shadow-sm sm:text-[10px]">
              <span className="material-symbols-outlined text-sm">
                medical_services
              </span>
              Veterinary Orthopedic Care · Mohali
            </span>

            <h1 className="mt-3 font-headline text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-[2.55rem]">
              Orthopedic Surgery in Mohali for Dogs &amp; Cats
            </h1>

            <h2 className="mt-2 text-sm font-bold text-teal-800 sm:text-base">
              Expert Orthopedic Care for Your Pet in Mohali
            </h2>

            <p className="mt-2.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              At GreenCoatVets, we provide professional orthopedic care for
              dogs and cats in Mohali. From fractures and joint injuries to
              mobility problems, our veterinary team focuses on accurate
              diagnosis, appropriate treatment, and comfortable recovery.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <BookButton />
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
              {["Dogs and cats", "Personalized treatment", "Recovery guidance"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1 text-[9px] font-medium text-slate-600 sm:text-[10px]"
                  >
                    <span className="material-symbols-outlined text-sm text-teal-700">
                      check_circle
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <ImagePanel
            src={heroImage}
            alt="Veterinary orthopedic surgery for dogs and cats at GreenCoatVets in Mohali"
            priority
            className="aspect-[4/3] shadow-lg"
          />
        </div>
      </section>

      {/* 2. Orthopedic introduction */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 sm:px-6 md:grid-cols-2 lg:gap-7 lg:px-8">
          <ImagePanel
            src={dogImage}
            alt="Veterinarian examining a dog receiving orthopedic fracture care"
            className="aspect-[4/3]"
          />

          <div className="min-w-0">
            <SectionHeading
              eyebrow="Specialized veterinary services"
              title="Veterinary Orthopedic Surgery in Mohali"
            />

            <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              Our <strong>veterinary orthopedic surgery in Mohali</strong>{" "}
              helps treat conditions affecting your pet&apos;s bones,
              joints, ligaments, and movement.
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              Every case is carefully evaluated before surgery is
              recommended. When needed, diagnostic imaging helps our
              veterinary team understand the condition and plan the
              appropriate treatment.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Feature icon="search" title="Accurate diagnosis" />
              <Feature icon="monitor_heart" title="Diagnostic imaging" />
              <Feature icon="medical_services" title="Treatment planning" />
              <Feature icon="favorite" title="Recovery guidance" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Conditions with cat image on the right */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-6 sm:py-8">
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 sm:px-6 md:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:px-8">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Pet orthopedic care in Mohali"
              title="Conditions We Treat"
              description="Our pet orthopedic surgery services in Mohali may help with a range of bone, joint, and mobility concerns."
            />

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {conditions.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-11 items-center gap-2 rounded-lg border border-white bg-white/90 px-3 py-2 shadow-sm"
                >
                  <span className="material-symbols-outlined shrink-0 text-lg text-teal-700">
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-semibold leading-4 text-slate-700 sm:text-xs">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[10px] leading-5 text-slate-500">
              Treatment is planned according to your pet&apos;s individual
              condition and health needs.
            </p>
          </div>

          <ImagePanel
            src={catImage}
            alt="Cat receiving careful veterinary orthopedic assessment"
            className="aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/3]"
          />
        </div>
      </section>

      {/* 4. Dog orthopedic surgery and fracture treatment */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-teal-200 hover:shadow-md">
            <ImagePanel
              src={dogImage}
              alt="Dog receiving veterinary orthopedic evaluation for a leg injury"
              className="aspect-[16/8] rounded-none border-0"
            />

            <div className="p-4 sm:p-5">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-xl text-teal-700">
                  pets
                </span>
                <h2 className="font-headline text-base font-bold leading-snug text-slate-900 sm:text-lg">
                  Dog Orthopedic Surgery in Mohali
                </h2>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                Injuries, accidents, falls, and joint problems can make it
                difficult for dogs to walk or stay active. Our{" "}
                <strong>dog orthopedic surgery in Mohali</strong> provides
                professional evaluation and surgical care when an
                orthopedic condition requires it.
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                Our focus is on appropriate treatment, pain management, and
                supporting your dog&apos;s recovery.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-teal-100 bg-teal-50/40 transition hover:shadow-md">
            <ImagePanel
              src={catImage}
              alt="Veterinarian providing orthopedic care for a cat"
              className="aspect-[16/8] rounded-none border-0"
            />

            <div className="p-4 sm:p-5">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-xl text-teal-700">
                  healing
                </span>
                <h2 className="font-headline text-base font-bold leading-snug text-slate-900 sm:text-lg">
                  Veterinary Bone Surgery &amp; Pet Fracture Treatment
                </h2>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                A fracture needs proper assessment to support healthy
                healing. Our <strong>veterinary bone surgery in Mohali</strong>{" "}
                provides surgical treatment when required.
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                For <strong>pet fracture treatment in Mohali</strong>, our
                veterinarians assess the type and severity of the injury
                before recommending the appropriate approach, which may
                include imaging, stabilization, surgery, medication, and
                follow-up care.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 5. Why choose GreenCoatVets */}
      <section className="border-y border-slate-100 bg-white py-6 sm:py-8">
        <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:gap-7 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Trusted pet care"
              title="Why Choose GreenCoatVets?"
              description="We focus on professional veterinary care, personalized treatment planning, and compassionate support for pets and their families."
            />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex min-h-14 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2.5"
              >
                <span className="material-symbols-outlined shrink-0 text-lg text-teal-700">
                  {item.icon}
                </span>
                <p className="text-[9px] font-semibold leading-4 text-slate-700 sm:text-[10px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Appointment banner with dog image */}
      <section className="py-5 sm:py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-xl bg-gradient-to-r from-teal-900 to-emerald-800 text-white shadow-md sm:grid-cols-[180px_1fr] lg:grid-cols-[240px_1fr]">
            <div className="relative min-h-36 sm:min-h-full">
              <Image
                src={dogImage}
                alt="Dog receiving compassionate veterinary care"
                fill
                sizes="(max-width: 639px) 100vw, 240px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-5 lg:p-6">
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-teal-200">
                  Orthopedic care for dogs and cats
                </p>

                <h2 className="mt-1.5 font-headline text-lg font-bold leading-tight sm:text-xl">
                  Book Your Orthopedic Consultation Today
                </h2>

                <p className="mt-2 max-w-2xl text-xs leading-5 text-teal-50/90 sm:text-sm sm:leading-6">
                  If your pet is limping, experiencing pain, has suffered
                  an injury, or is having difficulty walking, do not ignore
                  the signs. GreenCoatVets provides professional{" "}
                  <strong>pet orthopedic care in Mohali</strong> with a
                  focus on your pet&apos;s comfort and recovery.
                </p>

                <p className="mt-2 text-[10px] font-semibold text-teal-100 sm:text-xs">
                  Help your pet move comfortably again.
                </p>
              </div>

              <div className="shrink-0">
                <BookButton>Book Appointment</BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="bg-slate-50 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Orthopedic Surgery FAQs"
            description="Learn more about veterinary orthopedic surgery and pet fracture treatment in Mohali."
          />

          <div className="mt-4 max-w-4xl space-y-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-slate-200 bg-white px-4 py-3 open:border-teal-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-semibold text-slate-900 sm:text-sm">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-lg text-teal-700 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <p className="mt-3 border-t border-slate-100 pt-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-4">
            <BookButton />
          </div>
        </div>
      </section>
    </main>
  );
}
