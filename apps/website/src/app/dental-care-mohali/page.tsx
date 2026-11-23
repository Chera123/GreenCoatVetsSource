import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageUrl = "https://www.greencoatvets.com/dental-care-mohali/";

const images = {
  hero: "/dental-care.jpg",
  cat: "/dental-care-cat.jpg",
  examination: "/pet-dental-examination.jpg",
  banner: "/dental-care-banner.jpg",
  rabbitScaling: "/rabbit-scaling.jpeg",
};

const videos = {
  rootCanal: "/root-canal.mp4",
  dentalXray: "/dental-xray.mp4",
};

export const metadata: Metadata = {
  title: "Pet Dental Care & Oral Surgery in Mohali | GreenCoatVets",
  description:
    "Pet dental care in Mohali at GreenCoatVets, including dental examination, scaling and polishing, extraction, periodontal surgery, root canal treatment and oral and maxillofacial procedures.",
  keywords: [
    "pet dental care Mohali",
    "veterinary dentist Mohali",
    "pet teeth cleaning Mohali",
    "dental scaling and polishing for pets",
    "pet dental extraction",
    "periodontal surgery for pets",
    "root canal treatment for pets",
    "oral and maxillofacial surgery for pets",
    "mandibular fracture repair",
    "maxillary fracture repair",
    "jaw tumour excision",
    "rabbit dental care",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Pet Dental Care & Oral Surgery in Mohali | GreenCoatVets",
    description:
      "Veterinary dental examination, cleaning, dental surgery and oral care for pets in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: images.hero,
        alt: "Veterinary dental examination at GreenCoatVets in Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Dental Care & Oral Surgery in Mohali | GreenCoatVets",
    description:
      "Pet dental examinations, scaling, polishing, extractions and oral surgery in Mohali.",
    images: [images.hero],
  },
};

const warningSigns = [
  "Persistent bad breath",
  "Visible plaque or tartar",
  "Red, swollen or bleeding gums",
  "Loose, broken or discoloured teeth",
  "Difficulty chewing or dropping food",
  "Pawing at the mouth or avoiding food",
];

const dentalProcedures = [
  {
    number: "01",
    title: "Dental Examination",
    description:
      "Assessment of the teeth, gums and oral cavity to identify concerns and help plan appropriate care.",
    icon: "dentistry",
  },
  {
    number: "02",
    title: "Scaling & Polishing",
    description:
      "Professional removal of plaque and tartar deposits, followed by polishing as clinically appropriate.",
    icon: "cleaning_services",
  },
  {
    number: "03",
    title: "Dental Extraction",
    description:
      "Removal of a damaged, diseased or problematic tooth when recommended after veterinary assessment.",
    icon: "medical_services",
  },
  {
    number: "04",
    title: "Periodontal Surgery",
    description:
      "The supplied notes mention gingivectomy and appear to mention gingivoplasty. The exact treatment is determined after examination.",
    icon: "healing",
  },
  {
    number: "05",
    title: "Root Canal Treatment",
    description:
      "Endodontic treatment for selected cases involving disease or injury inside a tooth, where clinically appropriate.",
    icon: "health_and_safety",
  },
];

const maxillofacialProcedures = [
  "Mandibular fracture repair",
  "Maxillary fracture repair",
  "Jaw tumour excision",
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
      "GreenCoatVets can assess your pet and discuss whether a dental or oral surgical procedure is appropriate for its condition.",
  },
  {
    question: "Can I use human toothpaste for my pet?",
    answer:
      "No. Human toothpaste is not designed for pets. Ask your veterinarian what is suitable.",
  },
  {
    question: "What happens after dental treatment?",
    answer:
      "Your veterinarian will explain aftercare, which may include softer food for a short time, prescribed medicines and a follow-up visit. Contact the clinic if your pet will not eat or seems in pain.",
  },
  {
    question: "Can rabbits need dental care too?",
    answer:
      "Yes. Rabbits can develop dental problems and should be assessed by a veterinarian familiar with rabbit health. Contact the clinic if you notice changes in eating, drooling or facial swelling.",
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function AppointmentButton({
  children = "Book a Dental Visit",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/book/"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

function ImageFrame({
  src,
  alt,
  className = "",
  priority = false,
  contain = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  contain?: boolean;
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[1.5rem] bg-emerald-50 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px"
        className={contain ? "object-contain" : "object-cover"}
      />
    </div>
  );
}

function DentalVideo({
  title,
  description,
  src,
  poster,
}: {
  title: string;
  description: string;
  src: string;
  poster: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.07)]">
      <div className="relative aspect-video bg-slate-950">
        <video
          className="absolute inset-0 h-full w-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support HTML video.{" "}
          <a href={src}>Open the video directly</a>.
        </video>
      </div>
      <div className="p-5 sm:p-7">
        <h3 className="text-xl font-bold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </article>
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
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-500 transition hover:text-emerald-800">
            Home
          </Link>
          <span className="text-slate-300" aria-hidden="true">/</span>
          <Link href="/#services" className="text-sm text-slate-500 transition hover:text-emerald-800">
            Services
          </Link>
          <span className="text-slate-300" aria-hidden="true">/</span>
          <span aria-current="page" className="text-sm font-semibold text-emerald-900">
            Dental Care
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#103d33] text-white">
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-56 -left-28 h-[34rem] w-[34rem] rounded-full bg-emerald-300/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-100">
              <span className="material-symbols-outlined text-base" aria-hidden="true">dentistry</span>
              Veterinary Dental Care · Mohali
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Healthy Smiles.
              <span className="block text-emerald-200">Healthier, Happier Pets.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/90 sm:text-lg">
              From routine dental examinations and professional cleaning to selected dental and oral surgical procedures, GreenCoatVets helps you understand your pet&apos;s oral health needs and the care options available in Mohali.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppointmentButton />
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Talk to Our Team
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-emerald-50/90">
              {["Dental assessment", "Professional cleaning", "Oral surgery"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-amber-300" aria-hidden="true">check_circle</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-emerald-100/15 sm:-inset-4" />
            <ImageFrame
              src={images.hero}
              alt="Veterinary dental examination at GreenCoatVets in Mohali"
              priority
              className="aspect-[4/3] border border-white/15 shadow-2xl"
            />
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white/20 bg-white px-5 py-4 text-slate-900 shadow-xl sm:left-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">GreenCoatVets</p>
              <p className="mt-1 text-sm font-bold">Pet dental care in Mohali</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionTitle
              eyebrow="Know the early signs"
              title="Could Your Pet Have a Dental Problem?"
              description="Pets may continue eating even when their mouths are uncomfortable. Look for small changes in behaviour, appetite and the appearance of their teeth or gums."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <li key={sign} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">task_alt</span>
                  {sign}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              If you notice any of these signs, arrange a veterinary assessment rather than waiting for the problem to worsen.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <ImageFrame
              src={images.cat}
              alt="Cat receiving attention during a veterinary dental check-up"
              className="aspect-[5/4] shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Dental care overview */}
      <section className="bg-[#f3f7f3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <ImageFrame
              src={images.examination}
              alt="Dog receiving a veterinary dental examination"
              className="aspect-[5/4] shadow-lg"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="Why oral health matters"
              title="Dental Care Is About More Than Fresh Breath"
              description="Plaque and tartar can irritate the gums, contribute to dental disease and make eating uncomfortable. Regular veterinary checks help identify problems and guide appropriate treatment."
            />
            <div className="mt-7 rounded-2xl border border-emerald-100 bg-white p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">event_available</span>
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">Make dental checks part of routine care</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Include a dental check in your pet&apos;s regular{" "}
                    <Link href="/pet-health-checkup-mohali/" className="font-semibold text-emerald-800 underline underline-offset-4">
                      health checkup
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Dental services"
            title="Dental Treatments & Procedures"
            description="The dental procedure list supplied for this page includes the following services and areas of treatment. Your veterinarian will assess your pet and explain which option is appropriate."
            centered
          />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {dentalProcedures.map((procedure) => (
              <article key={procedure.number} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">{procedure.icon}</span>
                  </span>
                  <span className="text-sm font-extrabold tracking-[0.18em] text-slate-300">{procedure.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{procedure.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{procedure.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Maxillofacial surgery */}
      <section className="bg-[#103d33] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Specialist procedure areas</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Oral & Maxillofacial Surgery
            </h2>
            <p className="mt-5 text-base leading-8 text-emerald-50/85">
              The supplied procedure notes also identify oral and maxillofacial surgery, including repair of selected jaw fractures and jaw tumour excision.
            </p>
            <p className="mt-4 text-sm leading-7 text-emerald-100/70">
              The veterinary team can assess the condition and discuss suitable investigations, treatment planning and aftercare.
            </p>
            <div className="mt-7">
              <AppointmentButton>Enquire About Dental Care</AppointmentButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {maxillofacialProcedures.map((procedure, index) => (
              <article key={procedure} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                <span className="text-sm font-bold text-emerald-200">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-bold leading-snug">{procedure}</h3>
                <p className="mt-3 text-sm leading-6 text-emerald-50/75">
                  Veterinary assessment and treatment planning for the individual patient.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rabbit scaling */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-lg lg:order-1">
            <Image
              src={images.rabbitScaling}
              alt="Rabbit receiving dental scaling care"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionTitle
              eyebrow="Care for small patients"
              title="Rabbit Dental Care & Scaling"
              description="Rabbits can develop dental problems that affect eating and comfort. A veterinary examination can help identify concerns and determine whether dental treatment is needed."
            />
            <p className="mt-5 text-sm leading-7 text-slate-600">
              If your rabbit is eating less, drooling, losing weight or showing changes around the mouth, arrange a veterinary assessment.
            </p>
            <div className="mt-7">
              <AppointmentButton>Book a Dental Consultation</AppointmentButton>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-[#f3f7f3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Watch & learn"
            title="Dental Treatment Videos"
            description="Explore these videos related to veterinary dental procedures and diagnostic imaging."
            centered
          />
          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            <DentalVideo
              title="Root Canal Treatment"
              description="An overview of root canal treatment, an endodontic procedure used in selected cases to treat disease or injury inside a tooth."
              src={videos.rootCanal}
              poster={images.hero}
            />
            <DentalVideo
              title="Dental X-ray"
              description="Dental radiographs can help the veterinary team assess structures that are not fully visible during an external oral examination."
              src={videos.dentalXray}
              poster={images.examination}
            />
          </div>
        </div>
      </section>

      {/* Home care */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="At-home oral care"
              title="Simple Habits That Support Dental Health"
              description="Small, consistent steps can support your pet’s oral health between veterinary visits."
            />
            <ul className="mt-7 space-y-4">
              {[
                "Ask your veterinarian how and how often to clean your pet’s teeth.",
                "Do not use human toothpaste, which is not made for pets.",
                "Check your pet’s mouth for odour, redness or broken teeth.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                  {item}
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                <span>
                  Include a dental check in your pet&apos;s regular{" "}
                  <Link href="/pet-health-checkup-mohali/" className="font-semibold text-emerald-800 underline underline-offset-4">
                    health checkup
                  </Link>.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-7 sm:p-9">
            <span className="material-symbols-outlined text-4xl text-emerald-800" aria-hidden="true">health_and_safety</span>
            <h3 className="mt-4 text-2xl font-bold text-slate-950">Not sure what your pet needs?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Arrange a veterinary consultation to discuss changes in your pet&apos;s breath, gums, teeth or eating habits. You can also visit our{" "}
              <Link href="/specialized-opd-mohali/" className="font-semibold text-emerald-800 underline underline-offset-4">
                Specialized OPD
              </Link>{" "}
              page to learn about veterinary consultations.
            </p>
            <div className="mt-6">
              <AppointmentButton>Book an Appointment</AppointmentButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#103d33] text-white shadow-xl lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-64 lg:min-h-full">
            <Image
              src={images.banner}
              alt="Pet featured in GreenCoatVets dental care information"
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <Eyebrow>GreenCoatVets · Mohali</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Give Your Pet a Healthier Smile
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/85 sm:text-base">
              If you have noticed bad breath, tartar, gum problems or difficulty eating, contact our team to arrange an assessment and discuss the next steps.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <AppointmentButton>Book an Appointment</AppointmentButton>
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <SectionTitle
            eyebrow="Helpful answers"
            title="Pet Dental Care FAQs"
            description="Answers to common questions about dental examinations, teeth cleaning and dental treatment for pets."
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition open:border-emerald-200 sm:px-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-xl text-emerald-700 transition-transform group-open:rotate-180" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
            <div className="pt-4">
              <AppointmentButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
