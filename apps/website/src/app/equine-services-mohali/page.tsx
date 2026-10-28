import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Equine Veterinary Services in Mohali | GreenCoatVets";
const pageDescription =
  "Horse veterinary care in Mohali at GreenCoatVets. Routine health checks, medical assessment, injury evaluation and preventive care for horses.";
const pageUrl = "https://www.greencoatvets.com/equine-services-mohali/";
const bookingUrl = "https://www.greencoatvets.com/book/";
const contactUrl = "https://www.greencoatvets.com/contact/";

/**
 * Keep these local image paths aligned with the image files already used by
 * the GreenCoatVets project. If your existing Equine page uses different
 * filenames, retain those original src values here.
 */
const images = {
  hero: "/team.jpg",
  assessment: "/veterinary-diagnostics-hero.jpg",
  care: "/surgery-prep.png",
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
    images: [
      {
        url: images.hero,
        alt: "Veterinary team providing equine veterinary services in Mohali",
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

const services = [
  {
    icon: "health_and_safety",
    title: "Routine health examinations",
    description:
      "Regular examinations help assess your horse’s general condition and identify concerns that may need attention.",
  },
  {
    icon: "medical_services",
    title: "Medical assessment of illness",
    description:
      "Veterinary assessment helps investigate changes in appetite, drinking, energy, behaviour or weight.",
  },
  {
    icon: "healing",
    title: "Injury and wound evaluation",
    description:
      "Wounds, swelling, lameness and other injuries can be examined so the veterinarian can advise on appropriate care.",
  },
  {
    icon: "vaccines",
    title: "Preventive care guidance",
    description:
      "Get guidance on routine care, health monitoring and prevention tailored to your horse’s age and circumstances.",
  },
  {
    icon: "nutrition",
    title: "Nutrition and management advice",
    description:
      "Discuss feed, body condition, workload and everyday management with the veterinary team.",
  },
  {
    icon: "event_available",
    title: "Supportive care and follow-up",
    description:
      "Where needed, your horse’s care plan can include treatment guidance and follow-up assessment.",
  },
];

const warningSigns = [
  "Loss of appetite or changes in eating or drinking",
  "Lameness or reluctance to move",
  "Wounds, swelling or injuries",
  "Changes in behaviour, energy or weight",
  "Signs of discomfort or pain",
];

const assessmentSteps = [
  {
    number: "01",
    title: "History and routine",
    text: "The veterinarian asks about your horse’s health history, feed, daily routine and workload.",
  },
  {
    number: "02",
    title: "Careful examination",
    text: "Your horse is examined and the findings are considered alongside the symptoms you have noticed.",
  },
  {
    number: "03",
    title: "Clear next steps",
    text: "If more information is needed, diagnostic tests may be recommended. Findings and treatment options are explained clearly.",
  },
];

const faqs = [
  {
    question: "Do you provide veterinary care for horses in Mohali?",
    answer:
      "Yes. GreenCoatVets provides equine veterinary services, including health examinations and assessment of illness and injury.",
  },
  {
    question: "When should I call a vet for my horse?",
    answer:
      "Contact a veterinarian for changes in appetite, lameness, wounds, swelling, pain or unusual behaviour. If your horse is in severe distress, cannot stand or is showing severe pain, contact us immediately.",
  },
  {
    question: "Is GreenCoatVets open 24 hours for horses?",
    answer:
      "GreenCoatVets is open 24 hours. Contact our team to discuss your horse’s situation and the appropriate next steps.",
  },
  {
    question: "Can you give advice on feeding and care?",
    answer:
      "Yes. Nutrition and management advice is part of our equine services. Guidance can be tailored to your horse’s age, workload, body condition and surroundings.",
  },
  {
    question: "How do I book an equine consultation?",
    answer:
      "You can book through our appointment page or contact our team to discuss your horse’s needs.",
  },
  {
    question: "What information should I have ready when I call?",
    answer:
      "If possible, have your horse’s age, symptoms and when they started, feeding and routine details, and information about any medicines or previous treatment ready. This can help the team understand the situation.",
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
    <div
      className={`relative min-w-0 overflow-hidden rounded-2xl bg-emerald-50 ${className}`}
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
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-headline text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
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

function BookingButton({ light = false }: { light?: boolean }) {
  return (
    <Link
      href={bookingUrl}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
        light
          ? "bg-white text-emerald-950 hover:bg-emerald-50"
          : "bg-emerald-700 text-white shadow-md hover:bg-emerald-800"
      }`}
    >
      Book an Appointment
      <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </Link>
  );
}

export default function EquineServicesMohaliPage() {
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
          <Link href="/" className="text-sm text-slate-500 transition hover:text-emerald-700">
            Home
          </Link>
          <span className="material-symbols-outlined text-sm text-slate-400">
            chevron_right
          </span>
          <Link
            href="/#services"
            className="text-sm text-slate-500 transition hover:text-emerald-700"
          >
            Services
          </Link>
          <span className="material-symbols-outlined text-sm text-slate-400">
            chevron_right
          </span>
          <span aria-current="page" className="text-sm font-semibold text-emerald-800">
            Equine Services
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="relative z-10 py-2 lg:py-8 lg:pr-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-sm">
              <span className="material-symbols-outlined text-base">pets</span>
              Equine care · Mohali
            </span>
            <h1 className="mt-6 font-headline text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              Equine Veterinary Services in Mohali
            </h1>
            <div className="mt-5 h-1 w-16 rounded-full bg-emerald-500" />
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
              Horses need veterinary care that suits their size, temperament and
              way of life. GreenCoatVets provides equine veterinary services in
              Mohali for horse owners, with care planned around each horse’s
              condition and needs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookingButton />
              <Link
                href={contactUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-800"
              >
                Contact Our Team
              </Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="material-symbols-outlined text-lg text-emerald-700">
                verified_user
              </span>
              Care planned around your horse’s individual needs
            </p>
          </div>
          <div className="relative mt-2 lg:mt-0">
            <div className="absolute -inset-3 hidden rounded-[2rem] border border-emerald-200 lg:block" />
            <Photo
              src={images.hero}
              alt="Veterinary team providing equine veterinary services in Mohali"
              priority
              className="relative aspect-[4/3] shadow-xl sm:rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
              Care for horses
            </span>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Equine Services We Provide
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Veterinary care and practical guidance to support your horse’s
              health, comfort and ongoing wellbeing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-700 group-hover:text-white">
                  <span className="material-symbols-outlined text-2xl">
                    {service.icon}
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Service 0{index + 1}
                </p>
                <h3 className="mt-2 font-headline text-lg font-bold leading-snug text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* When to call */}
      <section className="bg-[#123d39] py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Know the warning signs
            </p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">
              When to Contact a Veterinarian About Your Horse
            </h2>
            <p className="mt-4 text-sm leading-7 text-teal-50 sm:text-base">
              Changes in your horse’s normal behaviour or physical condition can
              signal a health concern. Contact a veterinarian if you notice any
              of the following:
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7">
            <ul className="space-y-4">
              {warningSigns.map((sign) => (
                <li key={sign} className="flex items-start gap-3 text-sm leading-6 text-teal-50 sm:text-base">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-emerald-300">
                    check_circle
                  </span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-amber-200/30 bg-amber-50/10 p-4">
              <p className="flex items-start gap-2 text-sm font-semibold leading-6 text-white">
                <span className="material-symbols-outlined mt-0.5 text-amber-300">
                  emergency
                </span>
                If your horse shows severe pain, cannot stand or is in obvious
                distress, contact us immediately. GreenCoatVets is open 24 hours.
              </p>
              <Link
                href="/emergency-care-mohali/"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 underline decoration-emerald-400 underline-offset-4 transition hover:text-white"
              >
                Read about emergency care
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="A careful, considered approach"
              title="How We Assess a Horse"
              description="A clear understanding of your horse’s history and current condition helps the veterinarian decide what care may be needed."
            />
            <div className="mt-7 space-y-5">
              {assessmentSteps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-900">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/veterinary-diagnostics-mohali/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 transition hover:text-teal-700"
            >
              Learn about veterinary diagnostics
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl border border-emerald-100 bg-[#edf5f0] shadow-lg">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={images.assessment}
              aria-label="Video showing horse assessment and veterinary care"
            >
              <source src="/horse-access.mp4" type="video/mp4" />
              Your browser does not support HTML video. Please use a modern browser to view this video.
            </video>
          </div>
        </div>
      </section>

      {/* Treatment and prevention */}
      <section className="bg-[#edf5f0] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <Photo
            src={images.care}
            alt="Veterinary team preparing care and treatment for an animal"
            className="aspect-[4/3] shadow-lg"
          />
          <div>
            <SectionHeading
              eyebrow="Treatment and follow-up"
              title="Treatment and Ongoing Care"
              description="Care depends on the problem and may include medication, wound care, supportive treatment and follow-up visits. Your veterinarian will explain the options and advise on feed, management and preventive care for your horse."
            />
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-2xl text-emerald-700">
                  event_repeat
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">
                    Preventive Care for Horses
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Regular veterinary attention helps keep horses healthy and
                    catches problems early. Your veterinarian can advise on
                    routine examinations, feed and body condition, and care
                    suited to your horse’s age, workload and surroundings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final internal links and CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-[#123d39] text-white shadow-xl">
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                Equine veterinary care · Mohali
              </p>
              <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">
                Contact GreenCoatVets About Your Horse
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-teal-50 sm:text-base">
                To discuss your horse’s needs, contact our team. For veterinary
                consultations for other animals, visit our Specialized OPD page.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookingButton light />
                <Link
                  href={contactUrl}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6">
              <p className="text-sm font-bold text-emerald-200">
                Related veterinary service
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">
                Specialized OPD
              </h3>
              <p className="mt-2 text-sm leading-6 text-teal-50">
                Explore consultations and care for other animals.
              </p>
              <Link
                href="/specialized-opd-mohali/"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 underline decoration-emerald-400 underline-offset-4 hover:text-white"
              >
                Visit Specialized OPD
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f5f8f6] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Helpful information
            </p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
              Equine Veterinary Services FAQs
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Find answers to common questions about horse veterinary care in
              Mohali. Contact our team if you need help deciding what to do next.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-4 transition open:border-emerald-200 open:shadow-sm sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-xl text-emerald-700 transition-transform group-open:rotate-180">
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
