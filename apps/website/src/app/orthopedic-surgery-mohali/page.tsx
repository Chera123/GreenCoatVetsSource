
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle =
  "Veterinary Orthopedic Surgery in Mohali | GreenCoatVets";

const pageDescription =
  "Veterinary orthopedic surgery and fracture treatment for pets in Mohali at GreenCoatVets. Diagnosis, surgical care and recovery guidance.";

const pageUrl =
  "https://www.greencoatvets.com/orthopedic-surgery-mohali/";

const heroImage = "/soft-tissue-assessment.png";
const dogImage = "/soft-tissue-recovery.png";
const catImage = "/veterinary-diagnostics-hero.jpg";
const appointmentImage = "/orthopedic-appointment-dog.png";
const bookingUrl = "https://www.greencoatvets.com/book/";
const contact = "https://www.greencoatvets.com/contact/";
const SpecializedVService = "/ortho-sergery-dog.jpg";

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
      "Veterinary orthopedic surgery and fracture treatment for pets in Mohali at GreenCoatVets. Diagnosis, surgical care and recovery guidance.",
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
  { icon: "directions_walk", title: "Conditions affecting normal movement" },
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
      "It depends on the injury or condition. Your veterinarian will examine your pet, may recommend imaging, and explain whether surgery or another approach is best.",
  },
  {
    question: "Do you treat fractures in Mohali?",
    answer:
      "Yes. GreenCoatVets assesses and treats fractures. Treatment depends on the type and severity of the injury.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "Recovery varies with the injury, the treatment and your pet’s age and health. Your veterinarian will give you an idea of what to expect and arrange follow-up visits.",
  },
  {
    question: "Will my pet need an X-ray?",
    answer:
      "Often, yes. Imaging helps the veterinarian see the problem clearly. The veterinarian will tell you which tests are needed.",
  },
  {
    question: "What should I do if my pet is injured?",
    answer:
      "Keep your pet as still and calm as possible and contact us straight away. GreenCoatVets is open 24 hours.",
  },
  {
    question: "Can I give my pet painkillers at home?",
    answer:
      "Only give medicines prescribed by a veterinarian. Human painkillers can be harmful to pets.",
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
      href={bookingUrl}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-700 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
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

function ImagePanel({
  src,
  alt,
  className = "",
  priority = false,
  imageClassName = "object-cover",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  imageClassName?: string;
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
        className={imageClassName}
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
            Orthopedic Surgery
          </span>
        </div>
      </nav>

      {/* 1. Hero */}
  
     
      {/* 1. Hero — portrait-friendly image layout */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-12">

          {/* Left: Existing hero content */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-semibold text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-base">
                medical_services
              </span>
              Veterinary Orthopedic Care · Mohali
            </span>

            <h1 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem]">
              Veterinary Orthopedic Surgery in Mohali
            </h1>

            <h2 className="mt-3 text-base font-bold text-teal-800 sm:text-lg">
              Fracture, bone and joint care for pets
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              Orthopedic problems can affect your pet’s bones, joints and ability to move comfortably. At GreenCoatVets in Mohali, our veterinary team assesses fractures, joint injuries and mobility problems, explains the options and provides surgical care where it is needed.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <BookButton />

              <Link
                href={contact}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:text-teal-800"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {[
                "Professional assessment",
                "Personalized treatment",
                "Recovery guidance",
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

          {/* Right: Full portrait photo, without cropping */}
          <div className="mx-auto w-full max-w-[480px] lg:max-w-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-100 via-white to-emerald-50 p-2 shadow-lg sm:p-3">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={heroImage}
                  alt="Veterinary surgical team performing an operation at GreenCoatVets in Mohali"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  className="object-contain object-center"
                />
              </div>
            </div>

            <p className="mt-3 text-center text-xs font-medium text-teal-800">
              Veterinary Orthopedic Care for Dogs and Cats
            </p>
          </div>

        </div>
      </section>



      {/* 2. Orthopedic surgery introduction */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
          <ImagePanel
            src={SpecializedVService}
            alt="Veterinarian examining a dog receiving orthopedic fracture care"
            className="aspect-[4/3]"
          />

          <div className="min-w-0">
            <SectionHeading
              eyebrow="Specialized veterinary services"
              title="Veterinary Orthopedic Surgery in Mohali"
            />

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Our veterinary team assesses bone fractures, joint injuries, dislocations, ligament injuries and other conditions that affect normal movement. Treatment is planned around your pet’s individual condition, and not every orthopedic problem needs surgery.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              The veterinarian will take your pet’s history, examine the affected area and check how your pet moves. Imaging such as X-ray, available through our{" "}
              <Link href="/veterinary-diagnostics-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">veterinary diagnostics service</Link>, helps show the type and severity of the problem and guides the treatment plan.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Surgery involving other parts of the body is covered by our{" "}
              <Link href="/soft-tissue-surgery-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">
                soft tissue surgery service
              </Link>.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Feature icon="search" title="Accurate diagnosis" />
              <Feature icon="monitor_heart" title="Diagnostic imaging" />
              <Feature icon="medical_services" title="Treatment planning" />
              <Feature icon="favorite" title="Recovery guidance" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Conditions: readable grid and cat image */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Pet orthopedic care in Mohali"
              title="Conditions We Assess and Treat"
              description="Orthopedic care in Mohali starts with an assessment of your pet’s injury, movement and overall health."
            />

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {conditions.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-12 items-center gap-3 rounded-lg border border-white bg-white px-3 py-3 shadow-sm"
                >
                  <span className="material-symbols-outlined shrink-0 text-xl text-teal-700">
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold leading-5 text-slate-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-600">
              Treatment depends on the condition and severity of the injury; not every case requires surgery.
            </p>
          </div>

          <ImagePanel
            src={catImage}
            alt="Cat receiving careful veterinary orthopedic assessment"
            className="aspect-[4/3] md:aspect-[4/3]"
          />
        </div>
      </section>

      {/* 4. Orthopedic services: alternating editorial layout */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700 sm:text-xs">
              Orthopedic care for pets
            </p>
            <h2 className="font-headline text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl">
              Surgical Care for Dogs and Cats
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              From mobility concerns to fractures, every treatment plan starts with an individual veterinary assessment and is tailored to your pet’s needs.
            </p>
          </div>

          <div className="space-y-5 sm:space-y-7">
            <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md md:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[230px] overflow-hidden bg-slate-100 sm:min-h-[300px] md:min-h-[340px]">
                <Image
                  src={dogImage}
                  alt="Veterinary team providing orthopedic assessment and care for a dog"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 560px"
                  className="object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/35 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-3 py-1.5 text-xs font-bold text-teal-900 shadow-sm">
                  <span className="material-symbols-outlined text-base">pets</span>
                  Canine orthopedics
                </span>
              </div>

              <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-xs">
                  For dogs
                </p>
                <h3 className="mt-2 font-headline text-xl font-bold leading-tight text-slate-950 sm:text-2xl">
                  Orthopedic Care for Dogs
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Limping, pain, swelling or reluctance to walk can indicate an orthopedic problem. Our veterinary team assesses the injury and explains suitable treatment options, including surgery when it is needed.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Care may include diagnostic imaging, pain management, treatment planning and follow-up guidance tailored to your pet.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-900">Mobility concerns</span>
                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-900">Joint injuries</span>
                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-900">Recovery planning</span>
                </div>
                <div className="mt-6">
                  <BookButton>Book a Consultation</BookButton>
                </div>
              </div>
            </article>

            <article className="grid overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md md:grid-cols-[1.05fr_0.95fr]">
              <div className="order-2 flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9 md:order-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-xs">
                  For dogs and cats
                </p>
                <h3 className="mt-2 font-headline text-xl font-bold leading-tight text-slate-950 sm:text-2xl">
                  Fracture Treatment and Surgical Care
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Fracture treatment depends on the type and severity of the injury. Your veterinarian will explain the recommended approach and whether stabilisation or surgery is appropriate.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  The assessment considers the location of the fracture, your pet’s overall health and the likely recovery process. Care may include imaging, stabilisation, surgery and follow-up checks, depending on the case.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">Fracture assessment</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">Treatment planning</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">Follow-up care</span>
                </div>
                <div className="mt-6">
                  <BookButton>Discuss Your Pet’s Needs</BookButton>
                </div>
              </div>

              <div className="relative order-1 min-h-[230px] overflow-hidden bg-slate-100 sm:min-h-[300px] md:order-2 md:min-h-[340px]">
                <Image
                  src={catImage}
                  alt="Cat being gently examined by a veterinary professional for an injury"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 560px"
                  className="object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/30 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-3 py-1.5 text-xs font-bold text-teal-900 shadow-sm">
                  <span className="material-symbols-outlined text-base">healing</span>
                  Fracture care
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Benefits: stronger contrast and readable cards */}
      <section className="border-y border-slate-100 bg-white py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Trusted pet care"
              title="Care Focused on Diagnosis and Recovery"
              description="We explain the assessment, treatment options and aftercare so you can make informed decisions about your pet’s orthopedic care."
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

      {/* Orthopedic symptoms and safe recovery guidance */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
            <SectionHeading
              eyebrow="Know the signs"
              title="Signs Your Pet May Need Orthopedic Care"
              description="Arrange a veterinary assessment if you notice any of these changes."
            />
            <ul className="mt-5 space-y-3">
              {[
                "Limping or favouring a leg",
                "Pain or reluctance to move, climb or play",
                "Swelling around a bone or joint",
                "Difficulty standing up or walking",
                "A fall, accident or injury",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
              After an accident or if your pet is in severe pain, contact our{" "}
              <Link href="/emergency-care-mohali/" className="font-bold text-teal-900 underline underline-offset-4">emergency care team</Link>{" "}
              without delay.
            </p>
          </div>
          <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-7">
            <SectionHeading
              eyebrow="Recovery and prevention"
              title="Pain Management, Aftercare and Joint Health"
              description="Following the veterinary plan can help support your pet’s comfort and recovery."
            />
            <ul className="mt-5 space-y-3">
              {[
                "Limit activity as advised by your veterinarian.",
                "Give pain relief and other medicines only as prescribed.",
                "Keep dressings or surgical areas clean and dry as instructed.",
                "Attend follow-up visits so healing can be checked.",
                "Maintain a healthy weight and provide suitable regular exercise.",
                "Make home surroundings safer to reduce falls and accidents.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-teal-700" aria-hidden="true">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Contact the clinic if you notice increasing swelling, discharge, worsening pain or your pet stops using the limb. Never give human painkillers unless a veterinarian has specifically prescribed a medicine for your pet.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Routine{" "}
              <Link href="/pet-health-checkup-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">pet health checkups</Link>{" "}
              can also help you discuss weight, movement and joint concerns.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Appointment banner with a dedicated dog image */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-800 text-white shadow-lg md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="relative min-h-[190px] md:min-h-full">
              <Image
                src={appointmentImage}
                alt="Happy dog receiving compassionate care at a veterinary clinic"
                fill
                sizes="(max-width: 767px) 100vw, 280px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:p-8">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-200">
                  Orthopedic care for dogs and cats
                </p>

                <h2 className="mt-2 font-headline text-xl font-bold leading-tight sm:text-2xl">
                  Book an Orthopedic Consultation in Mohali
                </h2>

                <p className="mt-3 text-sm leading-6 text-teal-50">
                  If your pet is limping, in pain, has suffered an injury or is having difficulty walking, contact GreenCoatVets. Our veterinary team can assess your pet and explain the next steps for orthopedic treatment and recovery.
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  Ask our team about assessment, treatment and recovery guidance.
                </p>
              </div>

              <div className="shrink-0">
                <BookButton>Book Appointment</BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs: use the available page width */}
      <section className="bg-slate-50 py-7 sm:py-9">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Orthopedic Surgery FAQs"
            description="Learn more about veterinary orthopedic surgery and pet fracture treatment in Mohali."
          />

          <div className="mt-5 grid grid-cols-1 items-start gap-3 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group h-fit rounded-xl border border-slate-200 bg-white px-4 py-4 transition open:border-teal-200 open:shadow-sm sm:px-5"
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
          </div>

          <div className="mt-5">
            <BookButton />
          </div>
        </div>
      </section>
    </main>
  );
}
