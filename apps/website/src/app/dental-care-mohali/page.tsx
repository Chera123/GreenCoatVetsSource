import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageUrl = "https://www.greencoatvets.com/dental-care-mohali/";
const images = {
  hero: "/dental-care.jpg",
  cat: "/dental-care-cat.jpg",
  examination: "/pet-dental-examination.jpg",
  banner: "/dental-care-banner.jpg",
};

export const metadata: Metadata = {
  title: "Pet Dental Care & Teeth Cleaning in Mohali | GreenCoatVets",
  description:
    "Pet dental care in Mohali at GreenCoatVets: dental examination, professional teeth cleaning and dental surgery for pets. Book a dental visit.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Pet Dental Care & Teeth Cleaning in Mohali | GreenCoatVets",
    description:
      "Veterinary dental examination, professional teeth cleaning and dental surgery for pets in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [{ url: images.hero, alt: "Veterinary checking a pet’s teeth during a dental examination at GreenCoatVets in Mohali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Dental Care & Teeth Cleaning in Mohali | GreenCoatVets",
    description:
      "Pet dental examination, professional teeth cleaning and dental surgery in Mohali. Book a dental visit at GreenCoatVets.",
    images: [images.hero],
  },
};

const signs = [
  "Bad breath",
  "Plaque or tartar build-up on the teeth",
  "Red or inflamed gums",
  "Loose or damaged teeth",
  "Difficulty chewing or dropping food",
  "Pawing at the mouth or avoiding hard food",
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
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-headline text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
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
    <div className={`relative min-w-0 overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50 ${className}`}>
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

function AppointmentButton({ children = "Book a Dental Visit" }: { children?: React.ReactNode }) {
  return (
    <Link
      href="/book/"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-800 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-700 hover:to-teal-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
    >
      <span className="material-symbols-outlined text-lg" aria-hidden="true">calendar_month</span>
      {children}
      <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
    </Link>
  );
}

export default function DentalCareMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Breadcrumb" className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-600 hover:text-emerald-700">Home</Link>
          <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">chevron_right</span>
          <Link href="/#services" className="text-sm text-slate-600 hover:text-emerald-700">Services</Link>
          <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">chevron_right</span>
          <span aria-current="page" className="text-sm font-semibold text-emerald-800">Dental Care</span>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm">
              <span className="material-symbols-outlined text-base" aria-hidden="true">dentistry</span>
              Veterinary Dental Care · Mohali
            </span>
            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Pet Dental Care and Teeth Cleaning in Mohali
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Healthy teeth and gums matter for your pet&apos;s comfort, eating and overall health. At GreenCoatVets in Mohali, our veterinary team provides dental examinations, professional teeth cleaning and dental surgery for pets, and gives guidance on caring for your pet&apos;s mouth at home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AppointmentButton />
              <Link href="/contact/" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 py-3 text-sm font-bold text-emerald-900 transition hover:border-emerald-500 hover:bg-emerald-50">
                Contact Our Team
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {["Dental examinations", "Professional cleaning", "Dental treatment"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Photo src={images.hero} alt="Veterinary checking a pet’s teeth during a dental examination at GreenCoatVets in Mohali" priority className="aspect-[4/3] shadow-xl" />
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8">
          <Photo src={images.cat} alt="Cat receiving attention during a veterinary dental check-up" className="aspect-[4/3]" />
          <div>
            <SectionHeading eyebrow="Know the warning signs" title="Signs of a Dental Problem" description="Dental problems can be uncomfortable for pets, and some signs may be easy to miss. Look out for:" />
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 text-sm leading-6 text-slate-800">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-slate-600">Dental problems often get worse over time, so early assessment helps.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Why it matters" title="Why Dental Health Matters" description="Dental disease is not only about bad breath. Plaque and tartar can irritate the gums, cause pain and make eating uncomfortable, and untreated mouth problems can affect your pet’s general wellbeing. Regular dental care keeps your pet comfortable and helps avoid more serious treatment later." />
            <div className="mt-6 rounded-xl border border-emerald-200 bg-white p-4 sm:p-5">
              <p className="font-bold text-emerald-900">Make dental checks part of routine care</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Include a dental check in your pet’s regular <Link href="/pet-health-checkup-mohali/" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950">health checkup</Link>.</p>
            </div>
          </div>
          <Photo src={images.examination} alt="Dog receiving a veterinary dental examination" className="aspect-[4/3]" />
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Veterinary dental services" title="Dental Examination, Cleaning and Treatment" description="Our veterinary team will assess your pet’s mouth and discuss the next steps based on their needs." />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800"><span className="material-symbols-outlined text-2xl" aria-hidden="true">dentistry</span></span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">Dental Examination</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">The veterinarian will look at your pet’s teeth, gums and mouth and discuss what you have noticed. They will explain what care is needed and whether cleaning or other treatment is recommended.</p>
            </article>
            <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800"><span className="material-symbols-outlined text-2xl" aria-hidden="true">cleaning_services</span></span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">Professional Teeth Cleaning</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Professional cleaning removes plaque and tartar that brushing at home cannot reach. Your veterinarian will explain how the cleaning is done, whether anaesthesia is needed for your pet and how any risks are managed.</p>
            </article>
            <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800"><span className="material-symbols-outlined text-2xl" aria-hidden="true">medical_services</span></span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">Dental Surgery</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Where teeth are damaged, loose or causing pain, your veterinarian may advise dental surgery. Treatment is planned around your pet’s condition, and the procedure and aftercare are explained in advance.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Everyday dental care" title="Caring for Your Pet’s Teeth at Home" description="Small, consistent steps can support your pet’s oral health between veterinary visits." />
            <ul className="mt-5 space-y-3">
              {[
                "Ask your veterinarian how and how often to clean your pet’s teeth.",
                "Do not use human toothpaste, which is not made for pets.",
                "Check your pet’s mouth now and then for smell, redness or broken teeth.",
                "Include a dental check in your pet’s regular health checkup.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">task_alt</span>
                  <span>{item.includes("health checkup") ? <>Include a dental check in your pet’s regular <Link href="/pet-health-checkup-mohali/" className="font-semibold text-emerald-800 underline underline-offset-4">health checkup</Link>.</> : item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-100 to-teal-100 p-6 sm:p-8">
            <span className="material-symbols-outlined text-4xl text-emerald-800" aria-hidden="true">health_and_safety</span>
            <h3 className="mt-3 text-xl font-bold text-slate-950">Not sure what your pet needs?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">Arrange a veterinary consultation to discuss any changes in your pet’s breath, gums, teeth or eating habits. You can also visit our <Link href="/specialized-opd-mohali/" className="font-semibold text-emerald-900 underline underline-offset-4">Specialized OPD</Link> page to learn about veterinary consultations.</p>
            <div className="mt-5"><AppointmentButton>Book an Appointment</AppointmentButton></div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-800 text-white shadow-xl md:grid-cols-[280px_1fr]">
            <div className="relative min-h-52 md:min-h-full">
              <Image src={images.banner} alt="Pet featured in GreenCoatVets dental care information" fill sizes="(max-width: 767px) 100vw, 280px" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">GreenCoatVets · Mohali</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">Book a Dental Consultation in Mohali</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50 sm:text-base">Do not ignore bad breath, tartar, gum problems or difficulty eating. Our team can examine your pet and discuss suitable dental care and next steps.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <AppointmentButton>Book an Appointment</AppointmentButton>
                <Link href="/contact/" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Contact Our Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-emerald-50/70 to-white py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-7 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Frequently asked questions" title="Pet Dental Care FAQs" description="Answers to common questions about dental examinations, teeth cleaning and dental treatment for pets." />
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-emerald-100 bg-white px-4 py-4 shadow-sm transition open:border-emerald-300 sm:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-xl text-emerald-700 transition-transform group-open:rotate-180" aria-hidden="true">expand_more</span>
                </summary>
                <p className="mt-3 border-t border-emerald-50 pt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
            <div className="pt-3"><AppointmentButton /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
