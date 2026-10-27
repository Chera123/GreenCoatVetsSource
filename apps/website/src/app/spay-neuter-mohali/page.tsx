import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Spay & Neuter Services in Mohali | GreenCoatVets";
const pageDescription =
  "Spay and neuter services for pets in Mohali at GreenCoatVets. Health assessment, surgery and aftercare guidance. Book a consultation today.";
const pageUrl = "https://www.greencoatvets.com/spay-neuter-mohali/";
const bookingUrl = "https://www.greencoatvets.com/book/";
const contactUrl = "https://www.greencoatvets.com/contact/";

// These use image files already used elsewhere in the website. Keep the paths
// aligned with the files present in apps/website/public.
const images = {
  hero: "/team.jpg",
  consultation: "/dental-care.jpg",
  recovery: "/eye-surgery-dog.jpg",
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
    images: [{ url: images.hero, alt: "Veterinary team discussing pet spay and neuter surgery at GreenCoatVets in Mohali" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [images.hero] },
};

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

const recoverySteps = [
  "Keep your pet quiet and restrict activity as advised",
  "Keep the surgical area clean and dry",
  "Stop your pet licking or chewing the stitches, as instructed",
  "Give medicines only as prescribed",
  "Attend follow-up visits so healing can be checked",
];

const faqs = [
  { question: "At what age can my pet be spayed or neutered?", answer: "It depends on your pet’s type, age and health. Your veterinarian will examine your pet and advise on the best timing." },
  { question: "Is spay and neuter surgery safe?", answer: "It is a routine procedure, but every surgery and anaesthetic carries some risk. Your veterinarian will assess your pet and explain the risks before going ahead." },
  { question: "How long does recovery take?", answer: "Recovery varies with the pet and the procedure. The veterinarian will explain what to expect and when to return for a check." },
  { question: "How should I prepare my pet for surgery?", answer: "Follow the instructions you are given, which commonly include fasting beforehand, and tell the team about any medicines your pet takes." },
  { question: "Do you support community animal welfare?", answer: "Yes. GreenCoatVets supports spay and neuter work for community dogs. See our community page for details." },
  { question: "Can an older pet be spayed or neutered?", answer: "Often, yes. Your veterinarian will examine your pet and may recommend tests first to check that surgery is safe." },
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

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div>
      {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{eyebrow}</p>}
      <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>}
    </div>
  );
}

function Photo({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={`relative min-w-0 overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50 ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px" className="object-cover" />
    </div>
  );
}

function AppointmentButton({ children = "Book an Appointment" }: { children?: React.ReactNode }) {
  return (
    <Link href={bookingUrl} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-700 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
      <span className="material-symbols-outlined text-lg" aria-hidden="true">calendar_month</span>{children}
      <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
    </Link>
  );
}

export default function SpayNeuterMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-600 hover:text-emerald-700">Home</Link>
          <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">chevron_right</span>
          <Link href="/#services" className="text-sm text-slate-600 hover:text-emerald-700">Services</Link>
          <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">chevron_right</span>
          <span aria-current="page" className="text-sm font-semibold text-emerald-800">Spay &amp; Neuter</span>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm">
              <span className="material-symbols-outlined text-base" aria-hidden="true">pets</span> Veterinary Surgery · Mohali
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Spay and Neuter Services in Mohali for Pets</h1>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">Spaying and neutering are common surgical procedures that sterilise a pet. At GreenCoatVets in Mohali, our veterinary team assesses your pet’s health, explains the procedure and the best timing for your pet, and provides aftercare guidance for a smooth recovery.</p>
            <div className="mt-6 flex flex-wrap gap-3"><AppointmentButton /><Link href={contactUrl} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-800">Contact Our Team</Link></div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              { ["Pre-surgery assessment", "Clear aftercare guidance", "Individual treatment plans"].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-lg text-emerald-700" aria-hidden="true">check_circle</span>{item}</span>) }
            </div>
          </div>
          <Photo src={images.hero} alt="Veterinary team discussing spay and neuter surgery with a pet owner at GreenCoatVets in Mohali" priority className="aspect-[4/3] shadow-xl" />
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="min-w-0">
            <SectionHeading eyebrow="Making an informed decision" title="Why Owners Choose Spay or Neuter Surgery" description="Your veterinarian can explain the potential benefits and help you decide what is right for your pet. The best timing depends on your pet’s age, health and individual circumstances." />
            <ul className="mt-6 space-y-3">{reasons.map((reason) => <li key={reason} className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3.5"><span className="material-symbols-outlined mt-0.5 text-xl text-emerald-700" aria-hidden="true">check_circle</span><span className="text-sm leading-6 text-slate-700">{reason}</span></li>)}</ul>
          </div>
          <Photo src={images.consultation} alt="Pet receiving veterinary care during a health assessment" className="aspect-[4/3]" />
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Before you decide" title="Questions to Ask Your Veterinarian" description="A consultation gives you time to understand the procedure and prepare for your pet’s needs." />
            <ul className="mt-5 space-y-3">{questions.map((question) => <li key={question} className="flex items-start gap-3 rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-emerald-100"><span className="material-symbols-outlined mt-0.5 text-xl text-teal-700" aria-hidden="true">help</span><span className="text-sm leading-6 text-slate-700">{question}</span></li>)}</ul>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
            <span className="material-symbols-outlined text-3xl text-emerald-700" aria-hidden="true">medical_information</span>
            <h3 className="mt-3 text-xl font-bold text-slate-950">Before the Surgery</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Your pet will be examined to make sure it is healthy enough for the procedure, and the veterinarian may recommend tests through our <Link href="/veterinary-diagnostics-mohali/" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-teal-800">veterinary diagnostics service</Link>. You will be given instructions to follow, which commonly include fasting before surgery. Please follow them closely for your pet’s safety.</p>
            <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950"><strong>Important:</strong> Follow the clinic’s specific instructions about food, water and medicines before surgery.</div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8">
          <Photo src={images.recovery} alt="Dog being cared for by a veterinary professional" className="aspect-[4/3] md:order-1" />
          <div className="min-w-0 md:order-2">
            <SectionHeading eyebrow="Safe, considered care" title="The Procedure" description="Spay and neuter surgeries are performed under anaesthesia by the veterinary team. The veterinarian will explain what happens, the possible risks and what to expect on the day." />
            <p className="mt-4 text-sm leading-7 text-slate-600">Surgery on other soft tissues is covered on our <Link href="/soft-tissue-surgery-mohali/" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-teal-800">soft tissue surgery page</Link>.</p>
            <div className="mt-5 flex flex-wrap gap-3"><AppointmentButton /><Link href="/veterinary-diagnostics-mohali/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-emerald-200 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50">Explore Veterinary Diagnostics</Link></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
          <div><SectionHeading eyebrow="Helping your pet heal" title="Recovery and Aftercare" description="Follow the instructions provided by your veterinarian, as your pet’s recovery needs may vary." /><div className="mt-5 overflow-hidden rounded-2xl border border-emerald-100 bg-white"><Photo src={images.recovery} alt="Pet resting while recovering from veterinary care" className="aspect-[16/7] rounded-none border-0" /><p className="p-4 text-sm leading-6 text-slate-600">Keep your pet comfortable, observe the surgical area and contact the clinic if anything concerns you.</p></div></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><ul className="space-y-4">{recoverySteps.map((step, index) => <li key={step} className="flex items-start gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-800">{index + 1}</span><span className="pt-1 text-sm leading-6 text-slate-700">{step}</span></li>)}</ul><p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">Contact us if you notice swelling, discharge, bleeding or if your pet is unusually tired or not eating.</p></div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-teal-800 p-6 text-white shadow-lg sm:p-9">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Community care</p><h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Supporting Community Animal Welfare</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-50">GreenCoatVets also supports spay and neuter work for community dogs. Read more on our <Link href="/community/" className="font-bold text-white underline decoration-emerald-300 underline-offset-4 hover:text-emerald-100">community page</Link>.</p></div>
              <Link href="/community/" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50">Visit Community Page <span className="material-symbols-outlined ml-2 text-lg" aria-hidden="true">arrow_forward</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-9 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Personalised veterinary advice</p><h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">Book a Spay or Neuter Consultation in Mohali</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Talk to our veterinarians about the right plan for your pet. We’ll assess your pet’s needs and explain preparation, surgery and recovery.</p></div><div className="flex flex-wrap gap-3"><AppointmentButton /><Link href={contactUrl} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:border-emerald-500 hover:text-emerald-800">Contact Our Team</Link></div></div></div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">
          <div><SectionHeading eyebrow="Frequently asked questions" title="Spay & Neuter FAQs" description="Answers to common questions about sterilisation, preparation and recovery." /><div className="mt-5"><AppointmentButton /></div></div>
          <div className="space-y-3">{faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white px-4 py-4 transition open:border-emerald-200 open:shadow-sm sm:px-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base"><span>{faq.question}</span><span className="material-symbols-outlined shrink-0 text-xl text-emerald-700 transition-transform group-open:rotate-180" aria-hidden="true">expand_more</span></summary><p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">{faq.answer}</p></details>)}</div>
        </div>
      </section>
    </main>
  );
}
