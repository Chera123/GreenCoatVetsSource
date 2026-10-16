
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Spay & Neuter Services in Mohali | GreenCoatVets";

const pageDescription =
  "Looking for spay and neuter services in Mohali? GreenCoatVets provides pet spay and neuter, dog and cat sterilization, and professional post-operative care.";

const pageUrl = "https://www.greencoatvets.com/spay-neuter-mohali/";
const bookingUrl = "https://www.greencoatvets.com/book";

const images = {
  hero: "/spay-neuter-hero.jpg",
  dog: "/pet-ultrasound.jpg",
  cat: "/cat-spay-neuter.jpg",
  banner: "/spay-neuter-pets.jpg",
  newtreat: "/dog-spay-neuter.png",
};
            
const faqs = [
  {
    question: "What is pet spay and neuter?",
    answer:
      "Spaying and neutering are surgical procedures used to prevent reproduction in pets.",
  },
  {
    question: "When should I spay or neuter my pet?",
    answer:
      "The appropriate timing depends on your pet's species, age, health, and individual circumstances. Your veterinarian can advise you during a consultation.",
  },
  {
    question: "Do you provide dog and cat spay and neuter in Mohali?",
    answer:
      "Yes, GreenCoatVets provides dog spay and neuter and cat spay and neuter services in Mohali following a veterinary health assessment.",
  },
];

const benefits = [
  {
    number: "01",
    icon: "groups",
    title: "Experienced veterinary team",
  },
  {
    number: "02",
    icon: "health_and_safety",
    title: "Pre-surgical health assessment",
  },
  {
    number: "03",
    icon: "medical_services",
    title: "Professional surgical care",
  },
  {
    number: "04",
    icon: "healing",
    title: "Proper post-operative guidance",
  },
  {
    number: "05",
    icon: "pets",
    title: "Compassionate handling of pets",
  },
  {
    number: "06",
    icon: "favorite",
    title: "Personalized care for every pet",
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
      "Professional spay and neuter services for pets in Mohali, including dog and cat sterilization with proper veterinary assessment and aftercare.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: images.hero,
        alt: "Pet spay and neuter services at GreenCoatVets in Mohali",
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
      className={`relative min-w-0 overflow-hidden bg-teal-50 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 650px"
        className="object-cover"
      />
    </div>
  );
}

function BookingButton({
  children = "Book a Consultation",
  light = false,
}: {
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={bookingUrl}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
        light
          ? "bg-white text-teal-900 hover:bg-teal-50"
          : "bg-teal-700 text-white shadow-md hover:bg-teal-800"
      }`}
    >
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

export default function SpayNeuterMohaliPage() {
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
            className="text-sm text-slate-500 transition hover:text-teal-700"
          >
            Home
          </Link>
          <span className="material-symbols-outlined text-sm text-slate-400">
            chevron_right
          </span>
          <Link
            href="/#services"
            className="text-sm text-slate-500 transition hover:text-teal-700"
          >
            Services
          </Link>
          <span className="material-symbols-outlined text-sm text-slate-400">
            chevron_right
          </span>
          <span
            aria-current="page"
            className="text-sm font-semibold text-teal-800"
          >
            Spay &amp; Neuter
          </span>
        </div>
      </nav>

      {/* Distinct editorial hero */}
      <section className="bg-[#f2f7f4]">
        <div className="mx-auto grid max-w-7xl items-center gap-0 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="relative z-10 py-2 lg:py-8 lg:pr-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-800">
              <span className="material-symbols-outlined text-base">
                pets
              </span>
              Thoughtful care for every pet
            </div>

            <h1 className="mt-6 font-headline text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              Spay &amp; Neuter in Mohali for Pets
            </h1>

            <div className="mt-5 h-1 w-16 rounded-full bg-emerald-500" />

            <h2 className="mt-5 max-w-lg text-lg font-semibold leading-snug text-teal-900 sm:text-xl">
              Safe &amp; Caring Spay and Neuter Services
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
              At GreenCoatVets, we provide professional{" "}
              <strong>pet spay and neuter</strong> services in Mohali to
              support your pet&apos;s long-term health and well-being. Our
              veterinary team carefully assesses each pet and recommends
              the right approach based on their age, health, and individual
              needs.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <BookingButton />
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-600 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="material-symbols-outlined text-lg text-teal-700">
                verified_user
              </span>
              Veterinary assessment and individualized care planning
            </p>
          </div>

          <div className="relative mt-6 lg:mt-0 lg:pl-5">
            <div className="absolute -bottom-4 -left-1 -right-1 -top-4 hidden rounded-[2rem] border border-teal-200 lg:block" />
            <Photo
              src={images.hero}
              alt="Pet spay and neuter services at GreenCoatVets in Mohali"
              priority
              className="relative aspect-[4/3] rounded-[1.5rem] shadow-xl sm:rounded-[2rem]"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                GreenCoatVets · Mohali
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                Individual attention. Informed decisions. Caring aftercare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark editorial introduction */}
      <section className="bg-[#123d39] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Understanding the procedure
            </p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">
              Pet Spay and Neuter in Mohali
            </h2>
          </div>

          <div className="border-l-2 border-emerald-400 pl-5 sm:pl-7">
            <p className="text-sm leading-7 text-teal-50 sm:text-base">
              <strong>Pet spay and neuter</strong> is a common veterinary
              procedure that can support reproductive health and responsible
              pet care. Our team provides proper examination, surgical care,
              and post-operative guidance to help your pet recover
              comfortably.
            </p>
            <Link
              href={bookingUrl}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 transition hover:text-white"
            >
              Discuss your pet&apos;s needs
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dog and cat: deliberately different card treatment */}
     
      {/* Dog and cat service cards */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-800">
              Care tailored to your companion
            </span>

            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Individual Care for Dogs &amp; Cats
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Every pet has different needs. Our veterinary team assesses
              your companion and explains the procedure, preparation,
              recovery, and aftercare.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Dog service card */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row">
              <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden bg-slate-100 sm:aspect-auto sm:w-[42%]">
                <Image
                  src={images.dog}
                  alt="Dog receiving veterinary care as part of a spay and neuter consultation"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 42vw, 300px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-800">
                  Canine healthcare
                </span>

                <h3 className="mt-4 font-headline text-xl font-bold leading-snug text-slate-950 sm:text-2xl">
                  Dog Spay and Neuter in Mohali
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Our <strong>dog spay and neuter in Mohali</strong> services
                  are provided based on each dog&apos;s individual health
                  and veterinary assessment.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Before the procedure, our veterinarian evaluates your
                  dog and explains the surgery, preparation, recovery,
                  and aftercare.
                </p>

                <Link
                  href={bookingUrl}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-teal-800 transition hover:text-emerald-700"
                >
                  Book a consultation
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>

            {/* Cat service card */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f5f8f6] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row">
              <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden bg-slate-100 sm:aspect-auto sm:w-[42%]">
                <Image
                  src={images.cat}
                  alt="Cat receiving gentle veterinary care"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 42vw, 300px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                <span className="w-fit rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-800">
                  Feline healthcare
                </span>

                <h3 className="mt-4 font-headline text-xl font-bold leading-snug text-slate-950 sm:text-2xl">
                  Cat Spay and Neuter in Mohali
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  <strong>Cat spay and neuter in Mohali</strong> can be
                  an important part of responsible cat healthcare. At
                  GreenCoatVets, we provide careful surgical care and
                  recovery guidance based on your cat&apos;s individual
                  needs.
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href={bookingUrl}
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 transition hover:text-emerald-700"
                  >
                    Book a consultation
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* Veterinary sterilization */}
      <section className="bg-[#edf5f0] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              From assessment to aftercare
            </p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
              Veterinary Sterilization &amp; Pet Neutering Services
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              Our <strong>veterinary sterilization in Mohali</strong>{" "}
              procedures are performed following an appropriate health
              assessment. We also provide{" "}
              <strong>pet neutering services in Mohali</strong> with a
              focus on safety, comfort, and proper post-operative care.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Health assessment",
                  text: "Your pet's health and individual circumstances are evaluated before a procedure is recommended.",
                },
                {
                  title: "Procedure guidance",
                  text: "The veterinarian explains preparation and answers questions about the planned procedure.",
                },
                {
                  title: "Recovery support",
                  text: "Receive guidance on post-operative care and your pet's recovery.",
                },
              ].map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-800 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Photo
            src={images.newtreat}
            alt="Dog and cat representing compassionate veterinary healthcare"
            className="aspect-[4/3] rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Benefits: numbered editorial layout */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                The GreenCoatVets approach
              </p>
              <h2 className="mt-3 font-headline text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                Why Choose GreenCoatVets?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We focus on individual veterinary assessment,
                professional care, and clear guidance to help pet parents
                make informed decisions.
              </p>
            </div>

            <div className="grid gap-x-6 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 border-b border-slate-200 py-5"
                >
                  <span className="pt-1 text-xs font-bold tracking-wider text-teal-600">
                    {item.number}
                  </span>
                  <div className="flex min-w-0 gap-3">
                    <span className="material-symbols-outlined shrink-0 text-2xl text-teal-800">
                      {item.icon}
                    </span>
                    <h3 className="text-sm font-semibold leading-6 text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distinct appointment banner */}
      <section className="px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#123d39] text-white md:grid-cols-[0.8fr_1.2fr]">
          <Photo
            src={images.banner}
            alt="Happy dog and cat representing caring pet healthcare"
            className="aspect-[4/3] md:aspect-auto md:min-h-full"
          />

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Spay &amp; Neuter · Mohali
            </p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">
              Looking for Spay &amp; Neuter Services in Mohali?
            </h2>
            <p className="mt-4 text-sm leading-7 text-teal-50 sm:text-base">
              If you&apos;re considering spaying or neutering your pet,
              our veterinary team can help you understand the procedure
              and decide whether it is appropriate for your pet.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">
              Professional care for healthier, happier pets.
            </p>
            <div className="mt-6">
              <BookingButton light>Book Appointment</BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f6f8f7] py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-7 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Helpful information
            </p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
              Spay &amp; Neuter FAQs
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Have questions about your pet&apos;s procedure? Book a
              consultation to discuss their individual health and needs.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-4 transition open:border-teal-200 open:shadow-sm sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-xl text-teal-700 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}

            <div className="pt-3">
              <BookingButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
