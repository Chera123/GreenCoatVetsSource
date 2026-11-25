import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Exotic Animal & Bird Veterinary Care in Mohali | GreenCoatVets";
const pageDescription =
  "Veterinary care and health assessment for exotic animals and birds in Mohali. Contact GreenCoatVets to discuss special species care for birds, rabbits, guinea pigs, reptiles and other small companion animals.";
const pageUrl =
  "https://www.greencoatvets.com/special-species-veterinary-care-mohali/";

const images = {
  hero: "/special-species-vet-hero.png",
 consultation: "/guinea-pig-ear.png",
  examination: "/birds.jpeg",
};   

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "exotic animal veterinary care Mohali",
    "exotic animals and birds Mohali",
    "exotic bird vet Mohali",
    "special species veterinary care Mohali",
    "exotic pet vet Mohali",
    "avian veterinary care Mohali",
    "bird vet Mohali",
    "rabbit vet Mohali",
    "guinea pig veterinary care",
    "reptile vet Mohali",
    "tortoise veterinary care",
    "small mammal veterinary consultation",
    "GreenCoatVets special species care",
  ],
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
        alt: "Veterinary team at GreenCoatVets",
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

const species = [
  {
    number: "01",
    icon: "cruelty_free",
    title: "Birds & Avian Patients",
    examples: "Parrots, budgies, cockatiels and other pet birds",
    description:
      "Birds can hide signs of illness. Changes in appetite, droppings, breathing, feather condition or activity should be discussed with a veterinarian familiar with avian patients.",
  },
  {
    number: "02",
    icon: "pets",
    title: "Rabbits",
    examples: "Pet rabbits of different ages and breeds",
    description:
      "Rabbit health concerns may include changes in eating, dental problems, digestive changes, reduced activity or skin and coat concerns.",
  },
  {
    number: "03",
    icon: "spa",
    title: "Guinea Pigs & Small Mammals",
    examples: "Guinea pigs, hamsters and other small companion mammals",
    description:
      "Small mammals need species-appropriate handling and assessment. Contact the clinic to confirm whether your particular species and concern can be seen.",
  },
  {
    number: "04",
    icon: "pest_control",
    title: "Reptiles & Tortoises",
    examples: "Tortoises and other kept companion reptiles",
    description:
      "Temperature, habitat, diet and husbandry can affect reptile health. Share details of the enclosure, lighting, feeding and recent behaviour when arranging an assessment.",
  },
];

const signs = [
  "Eating less, refusing food or a change in drinking",
  "Unusual droppings or changes in urination",
  "Breathing changes, discharge or repeated sneezing",
  "Reduced activity, weakness or unusual posture",
  "Changes in feathers, scales, skin or coat",
  "Swelling, wounds, limping or signs of discomfort",
];

const consultationSteps = [
  {
    number: "01",
    title: "Tell us which species you have",
    description:
      "When you contact the clinic, tell us the species, age and any important details about your animal. This helps us discuss whether an appointment is suitable.",
  },
  {
    number: "02",
    title: "Share the history and environment",
    description:
      "Bring information about diet, habitat, temperature, lighting, routine, recent changes and previous medical care where relevant.",
  },
  {
    number: "03",
    title: "Veterinary assessment",
    description:
      "The veterinarian will assess your animal according to its species, symptoms and tolerance for handling, and explain any recommended investigations.",
  },
  {
    number: "04",
    title: "Care advice and next steps",
    description:
      "You will be advised about the treatment or supportive care options, husbandry changes where appropriate and whether a follow-up is needed.",
  },
];

const faqs = [
  {
    question: "What does special species veterinary care mean?",
    answer:
      "Special species veterinary care refers to health assessment and advice for companion animals other than the commonly seen dogs and cats. This can include birds, rabbits, small mammals and reptiles, depending on the clinic’s experience and appointment availability.",
  },
  {
    question: "Does GreenCoatVets provide care for exotic animals and birds?",
    answer:
      "GreenCoatVets can discuss veterinary assessment for exotic companion animals and birds. Please contact the clinic before travelling with your animal and share the species and concern so the team can confirm whether an appropriate appointment and clinical support are available.",
  },
  {
    question: "Can I bring my bird, rabbit or tortoise to GreenCoatVets?",
    answer:
      "Please contact GreenCoatVets before travelling and tell us the species and the reason for the visit. The team can confirm whether an appointment is available and advise you about bringing your animal safely.",
  },
  {
    question: "What should I bring for a special species consultation?",
    answer:
      "Bring any previous medical records, medicines and details of the animal’s diet and living environment. For birds and reptiles, information about the cage or enclosure, temperature, lighting and recent husbandry changes can be helpful.",
  },
  {
    question: "What signs mean my special species pet needs a vet?",
    answer:
      "Changes in eating, droppings, breathing, activity, posture or body condition can be important. Birds and small animals may hide illness, so contact a veterinarian promptly if you notice a change.",
  },
  {
    question: "Do birds and reptiles need different handling from dogs and cats?",
    answer:
      "Yes. Different species have different handling, environmental and health needs. Avoid unnecessary handling and ask the veterinary team how to transport your animal safely.",
  },
  {
    question: "Is special species care available 24 hours?",
    answer:
      "GreenCoatVets is open 24 hours, but special species appointments and emergency support may depend on the species and the clinical team available. Please call ahead to confirm.",
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

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-emerald-200" : "text-emerald-700"}`}>
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 font-headline text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-white/85" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function BookButton({
  children = "Book an Appointment",
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
      className={`relative min-w-0 overflow-hidden rounded-[1.5rem] bg-emerald-50 ${className}`}
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

export default function SpecialSpeciesVeterinaryCarePage() {
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
            Special Species Veterinary Care
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
              <span className="material-symbols-outlined text-base" aria-hidden="true">pets</span>
              Special Species · Mohali
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Thoughtful Care
              <span className="block text-emerald-200">For Every Kind of Companion</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/90 sm:text-lg">
              Birds, rabbits, small mammals and reptiles have unique health and husbandry needs. GreenCoatVets can help you discuss your animal’s concerns, understand the next steps and confirm whether a suitable consultation is available in Mohali.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton>Enquire About a Consultation</BookButton>
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
            <p className="mt-5 max-w-xl text-xs leading-6 text-emerald-100/70">
              Please contact the clinic before travelling so we can confirm species-specific appointment availability.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-emerald-100/15 sm:-inset-4" />
            <Photo
              src={images.hero}
              alt="Veterinary team caring for companion animals at GreenCoatVets"
              priority
              className="aspect-[3/5] max-w-[460px] border border-white/15 shadow-2xl"
            />
            <div className="absolute -bottom-5 left-4 max-w-[calc(100%-2rem)] rounded-2xl border border-white/20 bg-white px-5 py-4 text-slate-900 shadow-xl sm:left-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">GreenCoatVets</p>
              <p className="mt-1 text-sm font-bold">Species-aware veterinary guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Turtle shell repair video */}
      <section className="bg-[#f3f7f3] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Clinical case highlight"
              title="Turtle Carapace Fracture Repair"
              description="A turtle’s upper shell is called the carapace. This clinical video highlights shell repair and stabilisation performed by the GreenCoatVets team. The exact repair technique and recovery plan depend on the individual case."
            />
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Shell injuries require veterinary assessment. If your turtle has a damaged shell, contact the clinic for advice and to confirm the appropriate appointment.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[270px] lg:mx-0">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-slate-900/10">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/turtle-shell-repair-poster.png"
                aria-label="Video showing veterinary turtle carapace repair"
              >
                <source src="/turtle-shell-repair.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Species cards */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who we may be able to help"
            title="Care for Special Species, Exotic Animals & Birds"
            description="We provide species-aware veterinary assessment for exotic companion animals and birds, alongside other special species. Every animal has its own anatomy, behaviour and care requirements. Contact us with your animal’s species and concern so our team can confirm the appropriate appointment."
            centered
          />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {species.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-800 group-hover:text-white">
                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">{item.icon}</span>
                  </span>
                  <span className="text-sm font-extrabold tracking-[0.18em] text-slate-300">{item.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-emerald-800">{item.examples}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Species-specific approach */}
      <section className="bg-[#f3f7f3] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Photo
            src={images.consultation}
            alt="Veterinary consultation at GreenCoatVets"
            className="aspect-[5/4] shadow-lg"
          />
          <div>
            <SectionHeading
              eyebrow="A careful approach"
              title="Special Species Need Species-Specific Care"
              description="The right assessment starts with understanding the animal—not just the symptom. Handling, diet, housing and environmental conditions can all be relevant to the health of birds, rabbits, small mammals and reptiles."
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ["Species and history", "Age, background and previous health concerns"],
                ["Diet and husbandry", "Food, enclosure, temperature and lighting"],
                ["Behaviour and symptoms", "Changes in activity, appetite or routine"],
                ["Safe handling", "Reduce stress during transport and examination"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-emerald-100 bg-white p-5">
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signs to watch */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="When to seek advice"
              title="Signs That Should Not Be Ignored"
              description="Special species can sometimes hide signs of illness. Contact a veterinarian if you notice a new or persistent change."
            />
            <p className="mt-5 text-sm leading-7 text-slate-500">
              If your animal is struggling to breathe, collapses, has severe bleeding or is unresponsive, seek urgent veterinary help and call ahead.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
                <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">task_alt</span>
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Consultation steps */}
      <section className="bg-[#103d33] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Before and during your visit"
            title="What to Expect at a Consultation"
            description="A little preparation can help the veterinary team understand your animal’s needs and plan a calm, appropriate assessment."
            centered
            dark
          />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {consultationSteps.map((step) => (
              <article key={step.number} className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-sm">
                <span className="text-sm font-extrabold tracking-[0.18em] text-emerald-200">{step.number}</span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/90">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prepare */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Help us prepare"
              title="What to Bring or Tell Us"
              description="When booking, share as much relevant information as you can. It helps the team advise you before your visit."
            />
            <ul className="mt-7 space-y-4">
              {[
                "Your animal’s species, age and approximate weight",
                "Symptoms and when you first noticed them",
                "Diet, habitat and daily routine",
                "Previous medical records and test results",
                "Current medicines or supplements",
                "Photos or a short video of unusual behaviour, if safe to record",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-emerald-700" aria-hidden="true">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Photo
            src={images.examination}
            alt="Veterinary diagnostic equipment used during animal assessment"
            className="aspect-[5/4] shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-emerald-800 to-[#103d33] p-7 text-white shadow-xl sm:p-10 lg:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow>GreenCoatVets · Mohali</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                Looking for Care for a Special Species?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-emerald-50/85 sm:text-base">
                Contact our team with your animal’s species and health concern. We can confirm whether a suitable consultation is available and help you understand the next step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <BookButton>Enquire About a Visit</BookButton>
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact GreenCoatVets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <SectionHeading
            eyebrow="Helpful answers"
            title="Exotic Animal & Bird Care FAQs"
            description="Common questions about veterinary care for exotic animals, birds, rabbits, small mammals and reptiles."
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
          </div>
        </div>
      </section>
    </main>
  );
}
