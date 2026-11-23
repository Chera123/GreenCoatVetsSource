import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Veterinary Education & Training in Mohali | GreenCoatVets";
const pageDescription =
  "Explore veterinary education, clinical training and hands-on workshops at GreenCoatVets in Mohali, covering hematology, ultrasound, exotic pet surgery, spay and neuter surgery, paravet training and dermatology.";
const pageUrl = "https://www.greencoatvets.com/education-training-mohali/";
const imageBase = "/training";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  keywords: [
    "veterinary education Mohali",
    "veterinary training Mohali",
    "veterinary workshops Punjab",
    "paravet staff training",
    "veterinary ultrasound training",
    "hematology training for veterinarians",
    "exotic pet surgery workshop",
    "veterinary dermatology workshop",
    "spay and neuter surgery training",
  ],
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: `${imageBase}/training1.jpeg`,
        alt: "Veterinary education and training session at GreenCoatVets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${imageBase}/training1.jpeg`],
  },
};

const focusAreas = ["Exotics", "Avian", "Oncology", "Trauma Care"];

const programmes = [
  {
    number: "01",
    icon: "biotech",
    title: "Hematology & Ultrasound Training",
    description:
      "Learning sessions focused on hematology and diagnostic ultrasound, helping veterinary professionals strengthen their understanding of clinical investigations and diagnostic support.",
    topics: ["Hematology", "Ultrasound training", "Diagnostic learning"],
  },
  {
    number: "02",
    icon: "pets",
    title: "Exotic Pet Surgery Workshops",
    description:
      "Dedicated learning around the care and surgical management of exotic pets, including rabbits and tortoises. The notes also identify an exotic workshop and camp associated with Dr Heena Gangwala.",
    topics: ["Rabbit care", "Tortoise care", "Exotic pet surgery"],
  },
  {
    number: "03",
    icon: "medical_services",
    title: "ABC (Spay & Neuter) Surgery Training",
    description:
      "Practical learning focused on Animal Birth Control (ABC) procedures, including spay and neuter surgery training and the clinical principles involved in these procedures.",
    topics: ["ABC programme", "Spay surgery", "Neuter surgery"],
  },
  {
    number: "04",
    icon: "school",
    title: "Paravet Staff Training Programmes",
    description:
      "Training programmes designed to support paraveterinary staff in developing practical knowledge, confidence and skills that contribute to day-to-day veterinary care.",
    topics: ["Clinical support skills", "Practical learning", "Team development"],
  },
  {
    number: "05",
    icon: "dermatology",
    title: "Hands-on Skin & Dermatology Workshops",
    description:
      "Interactive learning focused on veterinary skin and dermatology, with an emphasis on practical understanding of common skin concerns and clinical approaches.",
    topics: ["Veterinary dermatology", "Skin conditions", "Hands-on workshop"],
  },
];

const galleryImages = Array.from({ length: 20 }, (_, index) => ({
  src: `${imageBase}/training${index + 1}.jpeg`,
  alt: `GreenCoatVets veterinary education and training event photograph ${index + 1}`,
}));

const trainingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  url: pageUrl,
  description: pageDescription,
  about: {
    "@type": "Organization",
    name: "GreenCoatVets",
    url: "https://www.greencoatvets.com/",
  },
};

function BookOrContactLinks() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href="/contact/"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
      >
        Enquire About Training <span aria-hidden="true">↗</span>
      </Link>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Explore GreenCoatVets
      </Link>
    </div>
  );
}

export default function EducationTrainingMohaliPage() {
  return (
    <main className="overflow-hidden bg-[#fbfcfa] text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(trainingSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#123f35] text-white">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-32 h-96 w-96 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-10 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs text-emerald-100/80 sm:text-sm">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-semibold text-white">Education & Training</li>
              </ol>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100/25 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> Learning · Skills · Veterinary Care
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Veterinary Education <span className="text-emerald-200">& Training</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/90 sm:text-lg">
              Building clinical knowledge through educational sessions, practical training and focused veterinary workshops at GreenCoatVets.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/75 sm:text-base">
              Our training themes include diagnostic learning, surgery, exotic animal care, dermatology and skill development for veterinary support teams.
            </p>
            <div className="mt-8"><BookOrContactLinks /></div>
            <div className="mt-8 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-50">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-emerald-100/15 sm:-inset-4" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/15 bg-emerald-950 shadow-2xl sm:rounded-[2rem]">
              <Image
                src={`${imageBase}/training1.jpeg`}
                alt="Veterinary professionals taking part in a GreenCoatVets training event"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08271f]/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">Knowledge in practice</p>
                <p className="mt-2 text-2xl font-bold sm:text-3xl">Learn. Practise. Grow.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2 bg-amber-400" />
      </section>

      {/* Introduction */}
      <section className="px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center md:gap-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">Learning at GreenCoatVets</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">Sharing Knowledge. Strengthening Veterinary Skills.</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <p>Veterinary learning continues beyond textbooks. Workshops, demonstrations and practical sessions create opportunities to discuss clinical approaches, share experience and build professional skills.</p>
            <p>GreenCoatVets&apos; education and training themes cover diagnostic areas, surgical learning, exotic animal care, staff development and dermatology. The photographs and video on this page offer a glimpse of our training activities.</p>
          </div>
        </div>
      </section>

      {/* Training video */}
      <section className="bg-[#eef2e9] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-black shadow-xl sm:rounded-3xl">
            <video
              className="block aspect-video w-full bg-black object-contain"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/training/training1.jpeg"
              aria-label="GreenCoatVets education and training event video"
            >
              <source
                src="/training/trainingvid.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">Inside our training sessions</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">A Look at Learning in Action</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">Watch moments from veterinary education and training activities at GreenCoatVets. The video complements the event photographs and gives visitors a closer look at the learning environment.</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">Interested in a training programme or workshop? Contact our team to enquire about upcoming opportunities and details.</p>
            <div className="mt-7">
              <Link href="/contact/" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300">Enquire About Training <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">Our learning themes</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Education & Training Programmes</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Explore the key areas identified for GreenCoatVets&apos; educational sessions and practical workshops.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {programmes.map((programme) => (
              <article key={programme.number} className="group rounded-2xl border border-[#e2e9df] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2e9] text-emerald-900 transition group-hover:bg-[#123f35] group-hover:text-white">
                    <span aria-hidden="true" className="material-symbols-outlined text-2xl">{programme.icon}</span>
                  </span>
                  <span className="text-sm font-bold tracking-widest text-slate-300">{programme.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-snug text-slate-950">{programme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{programme.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {programme.topics.map((topic) => (
                    <span key={topic} className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">{topic}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop notes */}
      <section className="bg-[#123f35] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center md:gap-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-200">Workshops & knowledge sharing</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Learning with Experienced Professionals</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-emerald-50/85 sm:text-base sm:leading-8">
            <p>The training notes include focused sessions in hematology and ultrasound, a dermatology workshop, and an exotic animal workshop and camp.</p>
            <p><strong className="text-white">Dr Heena Gangwala</strong> is named in the notes in connection with the exotic workshop and camp.</p>
            <p>For details about faculty, dates, eligibility and future sessions, please contact GreenCoatVets directly.</p>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">Moments from our events</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Training & Workshop Gallery</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">A collection of photographs from GreenCoatVets&apos; educational sessions, workshops and training activities.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e2e9df] bg-[#eef2e9] shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-1 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                  Training moment {index + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-y border-[#e2e9df] bg-[#f2f5ef] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">Areas of clinical interest</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Broadening Veterinary Knowledge</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">The focus areas listed in the training notes include:</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-xl border border-emerald-100 bg-white px-4 py-5 text-base font-bold text-emerald-950 shadow-sm sm:py-7 sm:text-lg">{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#123f35] p-7 text-white sm:rounded-[2rem] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-200">Connect with GreenCoatVets</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Interested in Veterinary Education & Training?</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-emerald-50/85 sm:text-base sm:leading-8">Contact our team to ask about training programmes, workshops, participation details and upcoming educational activities.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300">Contact Our Team <span aria-hidden="true">↗</span></Link>
              <Link href="/book/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">Book an Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
