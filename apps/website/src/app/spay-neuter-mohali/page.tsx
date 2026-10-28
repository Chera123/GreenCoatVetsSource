import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Spay & Neuter Services in Mohali | GreenCoatVets";
const pageDescription =
  "Spay and neuter services for pets in Mohali at GreenCoatVets. Health assessment, surgery and aftercare guidance. Book a consultation today.";
const pageUrl = "https://www.greencoatvets.com/spay-neuter-mohali/";
const bookingUrl = "https://www.greencoatvets.com/book/";

const images = {
  hero: "/spay-neuter-hero.jpg",
  dog: "/pet-ultrasound.jpg",
  cat: "/cat-spay-neuter.jpg",
  banner: "/spay-neuter-pets.jpg",
  newtreat: "/surgery-prep.png",
  aftercareimg: "veterinary-diagnostics-hero.jpg",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [{ url: images.hero, alt: "Veterinarian discussing spay and neuter surgery with a pet owner at GreenCoatVets in Mohali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [images.hero],
  },
};

const faqs = [
  {
    question: "At what age can my pet be spayed or neutered?",
    answer:
      "It depends on your pet’s type, age and health. Your veterinarian will examine your pet and advise on the best timing.",
  },
  {
    question: "Is spay and neuter surgery safe?",
    answer:
      "It is a routine procedure, but every surgery and anaesthetic carries some risk. Your veterinarian will assess your pet and explain the risks before going ahead.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "Recovery varies with the pet and the procedure. The veterinarian will explain what to expect and when to return for a check.",
  },
  {
    question: "How should I prepare my pet for surgery?",
    answer:
      "Follow the instructions you are given, which commonly include fasting beforehand, and tell the team about any medicines your pet takes.",
  },
  {
    question: "Do you support community animal welfare?",
    answer:
      "Yes. GreenCoatVets supports spay and neuter work for community dogs. See our community page for details.",
  },
  {
    question: "Can an older pet be spayed or neutered?",
    answer:
      "Often, yes. Your veterinarian will examine your pet and may recommend tests first to check that surgery is safe.",
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
    <div className={`relative min-w-0 overflow-hidden bg-teal-50 ${className}`}>
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
  children = "Book an Appointment",
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
      <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </Link>
  );
}

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
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-headline text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

const reasons = [
  "To prevent unplanned litters",
  "To support long-term health, as advised by the veterinarian",
  "To help manage certain behaviours linked to breeding",
  "To contribute to community animal welfare",
];

const questions = [
  "What is the best time to sterilise my pet?",
  "Is my pet healthy enough for the procedure?",
  "What will happen on the day, and how long will my pet stay?",
  "How should I care for my pet at home afterwards?",
  "When should I come back for a check?",
];

const aftercare = [
  "Keep your pet quiet and restrict activity as advised",
  "Keep the surgical area clean and dry",
  "Stop your pet licking or chewing the stitches, as instructed",
  "Give medicines only as prescribed",
  "Attend follow-up visits so healing can be checked",
];

export default function SpayNeuterMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-500 hover:text-teal-700">Home</Link>
          <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
          <Link href="/#services" className="text-sm text-slate-500 hover:text-teal-700">Services</Link>
          <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
          <span aria-current="page" className="text-sm font-semibold text-teal-800">Spay &amp; Neuter</span>
        </div>
      </nav>

      <section className="bg-[#f2f7f4]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="relative z-10 py-2 lg:py-8 lg:pr-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-800">
              <span className="material-symbols-outlined text-base">pets</span>
              Thoughtful care for every pet
            </span>
            <h1 className="mt-6 font-headline text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              Spay and Neuter Services in Mohali for Pets
            </h1>
            <div className="mt-5 h-1 w-16 rounded-full bg-emerald-500" />
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
              Spaying and neutering are common surgical procedures that sterilise a pet. At GreenCoatVets in Mohali, our veterinary team assesses your pet’s health, explains the procedure and the best timing for your pet, and provides aftercare guidance for a smooth recovery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookingButton />
              <Link href="https://www.greencoatvets.com/contact/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-600 hover:text-teal-800">
                Contact Our Team
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="material-symbols-outlined text-lg text-teal-700">verified_user</span>
              Veterinary assessment and individualised care planning
            </p>
          </div>
          <div className="relative mt-2 lg:mt-0">
            <div className="absolute -inset-3 hidden rounded-[2rem] border border-teal-200 lg:block" />
            <Photo src={images.hero} alt="Veterinarian discussing spay and neuter surgery with a pet owner at GreenCoatVets in Mohali" priority className="relative aspect-[4/3] rounded-2xl shadow-xl sm:rounded-[2rem]" />
          </div>
        </div>
      </section>

      <section className="bg-[#123d39] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Understanding the procedure</p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">Why Owners Choose Spay or Neuter Surgery</h2>
          </div>
          <div className="border-l-2 border-emerald-400 pl-5 sm:pl-7">
            <ul className="space-y-3 text-sm leading-6 text-teal-50 sm:text-base">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <span className="material-symbols-outlined shrink-0 text-emerald-300">check_circle</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-teal-100">
              Your veterinarian will discuss what is right for your pet, since the benefits and the best timing depend on your pet’s age, health and circumstances.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionHeading eyebrow="Plan with confidence" title="Questions to Ask Your Veterinarian" description="A consultation gives you the opportunity to understand the procedure and prepare for your pet’s needs." />
              <ul className="mt-6 space-y-3">
                {questions.map((question, index) => (
                  <li key={question} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-teal-800">{index + 1}</span>
                    <span className="pt-1 text-sm leading-6 text-slate-700">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Photo src={images.dog} alt="Pet receiving veterinary assessment before a procedure" className="aspect-[4/3] rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-[#edf5f0] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Before the procedure" title="Before the Surgery" description="Your pet will be examined to make sure it is healthy enough for the procedure. The veterinarian may recommend tests through our veterinary diagnostics service." />
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              You will be given instructions to follow, which commonly include fasting before surgery. Please follow them closely for your pet’s safety.
            </p>
            <Link href="/veterinary-diagnostics-mohali/" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-emerald-700">
              Explore veterinary diagnostics service <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <Photo src={images.newtreat} alt="Dog and cat representing veterinary assessment and care" className="aspect-[4/3] rounded-2xl shadow-lg" />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-8">
          <Photo src={images.cat} alt="Cat receiving gentle veterinary care" className="aspect-[4/3] rounded-2xl shadow-lg" />
          <div>
            <SectionHeading eyebrow="Surgical care" title="The Procedure" description="Spay and neuter surgeries are performed under anaesthesia by the veterinary team. The veterinarian will explain what happens, the possible risks and what to expect on the day." />
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              Surgery on other soft tissues is covered on our <Link href="/soft-tissue-surgery-mohali/" className="font-semibold text-teal-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-700">soft tissue surgery page</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8f6] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Helping your pet recover" title="Recovery and Aftercare" description="Follow the individual aftercare instructions provided by your veterinarian. These steps can help support healing after surgery." />
            <ul className="mt-6 space-y-3">
              {aftercare.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-teal-700">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
              Contact us if you notice swelling, discharge, bleeding or if your pet is unusually tired or not eating.
            </p>
          </div>
          <Photo src={images.aftercareimg} alt="Pets representing supportive veterinary aftercare" className="aspect-[4/3] rounded-2xl shadow-lg" />
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Care beyond the clinic" title="Supporting Community Animal Welfare" description="GreenCoatVets also supports spay and neuter work for community dogs. Learn more about our community work and related initiatives." />
            <Link href="/community/" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-emerald-700">
              Visit our community page <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <Photo src={images.newtreat} alt="Pets representing community animal welfare" className="aspect-[4/3] rounded-2xl shadow-lg" />
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#123d39] text-white md:grid-cols-[0.8fr_1.2fr]">
          <Photo src={images.banner} alt="Pets receiving compassionate veterinary care" className="aspect-[4/3] md:aspect-auto md:min-h-full" />
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Spay &amp; Neuter · Mohali</p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">Book a Spay or Neuter Consultation in Mohali</h2>
            <p className="mt-4 text-sm leading-7 text-teal-50 sm:text-base">
              Talk to our veterinarians about the right plan for your pet. We can discuss timing, health assessment, preparation and aftercare.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookingButton light />
              <Link href="https://www.greencoatvets.com/contact/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8f7] py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-7 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Helpful information</p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">Spay &amp; Neuter FAQs</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Find answers to common questions about spaying and neutering. Your veterinarian can advise on your individual pet’s circumstances.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-4 transition open:border-teal-200 open:shadow-sm sm:p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-xl text-teal-700 transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
            <div className="pt-3"><BookingButton /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
