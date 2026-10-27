import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle =
  "24-Hour Emergency Vet in Mohali for Pets | GreenCoatVets";

const pageDescription =
  "GreenCoatVets is open 24 hours in Mohali. Emergency veterinary care for pets with injuries, breathing trouble, seizures or sudden illness.";

const pageUrl =
  "https://www.greencoatvets.com/emergency-care-mohali/";

const bookingUrl = "https://www.greencoatvets.com/book/";

// Image files must be inside apps/website/public/
const heroImage = "/hospital-front.jpg";
const catImage = "/orthopedic-cat-care.png";
const dogImage = "/orthopedic-dog-fracture-care.png";
const cta = "/orthopedic-appointment-dog.png";

const emergencyPhone = "+919608550006";

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
      "GreenCoatVets is open 24 hours in Mohali. Emergency veterinary care for pets with injuries, breathing trouble, seizures or sudden illness.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: heroImage,
        alt: "Veterinary team treating a pet in an emergency at GreenCoatVets in Mohali",
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
    question: "Is GreenCoatVets open 24 hours for emergencies?",
    answer:
      "Yes. GreenCoatVets is open 24 hours, so you can contact our team at any time if your pet needs urgent care.",
  },
  {
    question: "When should I take my pet to an emergency vet?",
    answer:
      "Go straight away for difficulty breathing, collapse, seizures, heavy bleeding, suspected poisoning, severe pain or after an accident. If you are unsure, contact us and describe what you see.",
  },
  {
    question: "Should I call before I come?",
    answer:
      "Yes, if you can. Contacting us on the way helps our team prepare. Do not delay travelling if your pet is in serious trouble.",
  },
  {
    question: "What should I do if my pet is injured?",
    answer:
      "Stay calm, keep your pet still and secure, and contact us immediately. Avoid giving any medicine unless a veterinarian has advised it.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring any medical records or medicines your pet takes. If poisoning is suspected, bring the packaging or details of what your pet ate.",
  },
  {
    question: "What should I do if I think my pet has been poisoned?",
    answer:
      "Contact us immediately and bring the packaging or details of what your pet may have eaten. Do not try to make your pet vomit unless a veterinarian instructs you to.",
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
}: {
  children?: ReactNode;
}) {
  return (
    <a
      href={`tel:${emergencyPhone}`}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-700 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      <span className="material-symbols-outlined text-lg">
        call
      </span>
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </a>
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
              24-Hour Emergency Vet in Mohali for Pets
            </h1>

            <h2 className="mt-3 text-base font-bold text-teal-800 sm:text-lg">
              Urgent veterinary care, day or night
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              GreenCoatVets is open 24 hours, so your pet can be seen when an emergency happens. Our veterinary team provides urgent assessment and appropriate treatment for pets in Mohali. If your pet is seriously unwell, do not wait. Contact us straight away.
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
                "Open 24 hours",
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
            alt="Veterinary team treating a pet in an emergency at GreenCoatVets in Mohali"
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
              title="What Happens When You Arrive"
            />

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Our veterinary team will assess your pet’s condition, stabilise your pet where needed and recommend the next steps. You will be kept informed about your pet’s condition and the available care options.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Further evaluation may include X-ray, ultrasound or laboratory tests through our{" "}
              <Link href="/veterinary-diagnostics-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">veterinary diagnostics service</Link>. Our team will explain which tests are appropriate for your pet.
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
              title="Signs of a Pet Emergency"
              description="Contact GreenCoatVets immediately if your pet shows any of these warning signs."
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
              If your pet is seriously unwell, do not wait. Contact our team straight away for guidance on urgent veterinary care in Mohali.
            </p>
          </div>

          <ImagePanel
            src={dogImage}
            alt="Dog resting comfortably while receiving veterinary attention"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* 4. What to do before arrival */}
      <section className="py-9 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8">
          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-7">
            <SectionHeading
              eyebrow="Before you reach the clinic"
              title="What to Do Before You Reach Us"
              description="A few careful steps can help keep your pet safer while you arrange urgent veterinary attention."
            />
            <ul className="mt-5 space-y-3">
              {[
                "Stay calm and handle your pet gently.",
                "Keep your pet as still and secure as possible.",
                "Do not give medicines or home remedies unless a veterinarian has advised it.",
                "Contact us on the way, so our team knows you are coming.",
                "If poisoning is suspected, bring the packaging or details of what your pet may have eaten.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <SectionHeading
              eyebrow="Common urgent situations"
              title="Recognising Serious Pet Emergencies"
              description="Some symptoms need immediate veterinary assessment. Do not wait for them to pass on their own."
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Difficulty breathing", text: "Laboured, noisy or very fast breathing, or blue or pale gums, needs urgent attention. Keep your pet calm and avoid exercise." },
                { title: "Accidents and injuries", text: "After a road accident, fall or fight, injuries may not be obvious. Move your pet as little as possible and support the body gently." },
                { title: "Suspected poisoning", text: "Contact us straight away. Do not try to make your pet vomit unless a veterinarian tells you to. Bring the packaging or details." },
                { title: "Seizures and collapse", text: "Keep your pet away from stairs and sharp objects, do not put your hands near the mouth, and note how long the episode lasts." },
              ].map((item) => (
                <article key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <h3 className="font-headline text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
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

      {/* Not sure if it is an emergency */}
      <section className="bg-teal-950 py-9 text-white sm:py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Need advice?</p>
            <h2 className="mt-2 font-headline text-2xl font-bold leading-tight sm:text-3xl">Not Sure If It Is an Emergency?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-teal-50 sm:text-base">
              If you are unsure, contact us and describe what you are seeing. Our team can advise whether your pet should be seen immediately. For less urgent concerns, our{" "}
              <Link href="/specialized-opd-mohali/" className="font-semibold text-white underline underline-offset-4 hover:text-emerald-200">Specialized OPD</Link>{" "}
              can examine your pet.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <EmergencyButton>Contact Us Now</EmergencyButton>
            <Link href={bookingUrl} className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/40 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Book for Non-Urgent Care
            </Link>
          </div>
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
                  Is Your Pet in Urgent Need?
                </h2>

                <p className="mt-3 text-sm leading-6 text-teal-50">
                  GreenCoatVets is open 24 hours for urgent veterinary care in Mohali. If your pet has difficulty breathing, collapses, has a seizure, is bleeding heavily or may have been poisoned, contact us straight away.
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  For non-urgent concerns, use our online booking page.
                </p>
              </div>

              <div className="shrink-0">
                <EmergencyButton>Call Now</EmergencyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow-up care and location */}
      <section className="py-9 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
          <article className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-7">
            <SectionHeading
              eyebrow="After emergency treatment"
              title="Follow-Up and Ongoing Care"
              description="Some emergencies need continued treatment or monitoring after the first assessment."
            />
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Depending on your pet’s condition, follow-up care may involve our{" "}
              <Link href="/orthopedic-surgery-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">orthopedic surgery</Link>{" "}
              or{" "}
              <Link href="/soft-tissue-surgery-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">soft tissue surgery</Link>{" "}
              teams, diagnostic testing or further consultations. Your veterinarian will explain the next steps and what to monitor at home.
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-7">
            <SectionHeading
              eyebrow="Find us in Mohali"
              title="Visit GreenCoatVets"
              description="GreenCoatVets, SCO 20, near Bestech Mall, Industrial Area Phase 9, Sahibzada Ajit Singh Nagar (Mohali), Punjab."
            />
            <p className="mt-4 text-sm leading-6 text-slate-700">
              For directions, visit our{" "}
              <Link href="/locations/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">locations page</Link>. For urgent assistance, call our team before or while travelling if possible.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <EmergencyButton>Contact Us Now</EmergencyButton>
              <Link href="/contact/" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:border-teal-300 hover:text-teal-800">Contact Page</Link>
            </div>
          </article>
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
     