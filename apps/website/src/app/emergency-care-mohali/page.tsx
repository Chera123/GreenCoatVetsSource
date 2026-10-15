
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle =
  "Veterinary Emergency Care in Mohali | GreenCoatVets";

const pageDescription =
  "Need emergency veterinary care in Mohali? GreenCoatVets provides urgent pet care, emergency vet services and professional treatment for dogs and cats.";

const pageUrl =
  "https://www.greencoatvets.com/emergency-care-mohali/";

const bookingUrl = "https://www.greencoatvets.com/book";

// Add the image files to apps/website/public/
const heroImage = "/hospital-front.jpg";
const catImage = "/orthopedic-cat-care.png";
const dogImage = "/orthopedic-dog-fracture-care.png";
const cta = "/orthopedic-appointment-dog.png";

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
      "Prompt emergency veterinary care and urgent pet treatment for dogs and cats in Mohali. Contact GreenCoatVets when your pet needs immediate attention.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: heroImage,
        alt: "Emergency veterinary care for dogs and cats at GreenCoatVets in Mohali",
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

const emergencyConditions = [
  { icon: "healing", title: "Accidents and injuries" },
  { icon: "air", title: "Difficulty breathing" },
  { icon: "gastroenterology", title: "Severe vomiting or diarrhea" },
  { icon: "monitor_heart", title: "Sudden weakness or collapse" },
  { icon: "bloodtype", title: "Bleeding or serious wounds" },
  { icon: "warning", title: "Suspected poisoning" },
  { icon: "emergency", title: "Severe pain" },
  { icon: "neurology", title: "Seizures" },
  {
    icon: "psychology",
    title: "Sudden changes in behavior or consciousness",
  },
];

const benefits = [
  { icon: "groups", title: "Experienced veterinary team" },
  { icon: "schedule", title: "Prompt assessment of urgent cases" },
  { icon: "monitor_heart", title: "Diagnostic support when required" },
  { icon: "medical_services", title: "Comprehensive veterinary care" },
  { icon: "favorite", title: "Compassionate handling of pets" },
  { icon: "support_agent", title: "Clear guidance for pet parents" },
];

const faqs = [
  {
    question: "When should I take my pet to an emergency vet?",
    answer:
      "Seek urgent veterinary care for serious injuries, difficulty breathing, collapse, seizures, severe bleeding, suspected poisoning, or sudden severe illness.",
  },
  {
    question: "Do you provide emergency vet care for dogs in Mohali?",
    answer:
      "Yes, GreenCoatVets provides urgent veterinary assessment and care for dogs in Mohali.",
  },
  {
    question: "What should I do if my pet is injured?",
    answer:
      "Keep your pet as calm and safe as possible and seek veterinary attention promptly. Avoid giving medication unless advised by a veterinarian.",
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

function EmergencyButton({
  children = "Call for Emergency Care",
  href = "/contact",
}: {
  children?: ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-700 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      <span className="material-symbols-outlined text-lg">
        call
      </span>
      {children}
      <span className="material-symbols-outlined text-lg">
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
    <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
      {eyebrow && (
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-teal-700 sm:text-xs">
          {eyebrow}
        </p>
      )}

      <h2 className="font-headline text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-2xl">
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

function Feature({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-teal-100 bg-white px-2 py-3 text-center shadow-sm">
      <span
        aria-hidden="true"
        className="material-symbols-outlined text-2xl text-teal-700"
      >
        {icon}
      </span>
      <p className="mt-2 text-xs font-semibold leading-4 text-slate-800 sm:text-sm">
        {title}
      </p>
    </div>
  );
}

export default function EmergencyCareMohaliPage() {
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
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-600 hover:text-teal-700"
          >
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
          <span
            aria-current="page"
            className="text-sm font-semibold text-teal-800"
          >
            Emergency Care
          </span>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-7 sm:px-6 sm:py-9 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-11">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-semibold text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-base">
                pets
              </span>
              Veterinary Emergency Care · Mohali
            </span>

            <h1 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem]">
              Emergency Care in Mohali for Dogs &amp; Cats
            </h1>

            <h2 className="mt-3 text-base font-bold text-teal-800 sm:text-lg">
              Immediate Veterinary Care When Your Pet Needs It Most
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              When your pet faces an unexpected illness or injury, getting
              veterinary attention quickly matters. At GreenCoatVets, we
              provide <strong>veterinary emergency care in Mohali</strong>{" "}
              for dogs and cats, helping pets receive prompt assessment and
              appropriate treatment when urgent medical attention is needed.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <EmergencyButton />
              <Link
                href={bookingUrl}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:text-teal-800"
              >
                Book Appointment
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {[
                "Urgent assessment",
                "Professional treatment",
                "Compassionate care",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-700"
                >
                  <span className="material-symbols-outlined text-base text-teal-700">
                    check_circle
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <ImagePanel
            src={heroImage}
            alt="Emergency veterinary care for dogs and cats at GreenCoatVets in Mohali"
            priority
            className="aspect-[4/3] shadow-lg"
          />
        </div>
      </section>

      {/* 2. Emergency care introduction */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
          <ImagePanel
            src={catImage}
            alt="Cat receiving attentive veterinary assessment in a clinic"
            className="aspect-[4/3]"
          />

          <div className="min-w-0">
            <SectionHeading
              eyebrow="Professional emergency support"
              title="Veterinary Emergency Care in Mohali"
            />

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Our <strong>veterinary emergency care</strong> focuses on
              quickly assessing your pet&apos;s condition and deciding the
              appropriate next step.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              We provide urgent support for situations such as:
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Feature icon="healing" title="Accidents and injuries" />
              <Feature icon="air" title="Breathing concerns" />
              <Feature icon="gastroenterology" title="Digestive emergencies" />
              <Feature icon="monitor_heart" title="Sudden collapse" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Emergency conditions */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Recognize the warning signs"
              title="When to Seek Emergency Care"
              description="Our emergency veterinary services in Mohali may help with urgent medical concerns such as:"
            />

            <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
              {emergencyConditions.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5"
                >
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-teal-700">
                    check_circle
                  </span>
                  <span className="text-sm font-medium leading-5 text-slate-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-lg border border-teal-100 bg-white/80 p-3 text-sm font-medium leading-6 text-slate-700">
              If your pet appears seriously unwell, seek veterinary
              attention without delay.
            </p>
          </div>

          <ImagePanel
            src={dogImage}
            alt="Dog resting comfortably while receiving veterinary attention"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* 4. Emergency services */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <span className="material-symbols-outlined text-2xl">
                  pets
                </span>
              </span>
              <div>
                <h2 className="font-headline text-lg font-bold leading-snug text-slate-900">
                  Pet Emergency Vet in Mohali
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Finding a reliable <strong>pet emergency vet in Mohali</strong>{" "}
                  can be important when your pet needs immediate attention.
                  Our veterinary team assesses your pet&apos;s condition,
                  provides appropriate stabilization, and recommends
                  further treatment or diagnostic evaluation based on the
                  situation.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <span className="material-symbols-outlined text-2xl">
                  medical_services
                </span>
              </span>
              <div>
                <h2 className="font-headline text-lg font-bold leading-snug text-slate-900">
                  Emergency Veterinary Clinic in Mohali
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  GreenCoatVets provides access to an{" "}
                  <strong>emergency veterinary clinic in Mohali</strong>{" "}
                  where pets can receive professional veterinary assessment
                  and urgent care. Our approach is simple: assess the
                  problem, understand what your pet needs, and provide
                  appropriate care as quickly as possible.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <span className="material-symbols-outlined text-2xl">
                  sound_detection_dog_barking
                </span>
              </span>
              <div>
                <h2 className="font-headline text-lg font-bold leading-snug text-slate-900">
                  Emergency Vet for Dogs in Mohali
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Dogs can experience emergencies without warning. Our{" "}
                  <strong>emergency vet for dogs in Mohali</strong> provides
                  urgent veterinary attention for injuries, sudden illness,
                  severe pain, and other concerning situations. If your dog
                  is showing unusual or severe symptoms, don&apos;t wait
                  for the condition to worsen.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-md sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <span className="material-symbols-outlined text-2xl">
                  favorite
                </span>
              </span>
              <div>
                <h2 className="font-headline text-lg font-bold leading-snug text-slate-900">
                  Urgent Pet Care in Mohali
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Our <strong>urgent pet care in Mohali</strong> is designed
                  to help pet parents respond quickly when something
                  doesn&apos;t seem right. If you are unsure whether your
                  pet&apos;s condition is an emergency, contacting a
                  veterinarian for professional guidance is the safest
                  approach.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="border-y border-slate-100 bg-white py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Trusted emergency care"
              title="Why Choose GreenCoatVets?"
              description="We focus on professional veterinary care, prompt assessment, and compassionate support for pets and their families."
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[68px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-teal-200 hover:bg-teal-50"
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

      {/* 6. Emergency CTA banner */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-800 text-white shadow-lg md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="relative min-h-[190px] md:min-h-full">
              <Image
                src={cta}
                alt="Dog and cat receiving attentive veterinary care"
                fill
                sizes="(max-width: 767px) 100vw, 280px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:p-8">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-200">
                  Need emergency veterinary care in Mohali?
                </p>

                <h2 className="mt-2 font-headline text-xl font-bold leading-tight sm:text-2xl">
                  Your Pet&apos;s Emergency Can&apos;t Wait
                </h2>

                <p className="mt-3 text-sm leading-6 text-teal-50">
                  If your pet has suffered an injury or is suddenly showing
                  serious symptoms, don&apos;t wait. Contact GreenCoatVets
                  for professional{" "}
                  <strong>veterinary emergency care in Mohali</strong>.
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  Call GreenCoatVets for urgent veterinary assistance.
                </p>
              </div>

              <div className="shrink-0">
                <EmergencyButton>Call Now</EmergencyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="bg-slate-50 py-7 sm:py-9">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            <div>
              <SectionHeading
                eyebrow="Frequently asked questions"
                title="Emergency Care FAQs"
                description="Learn more about veterinary emergency care and urgent pet treatment in Mohali."
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
                <EmergencyButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
