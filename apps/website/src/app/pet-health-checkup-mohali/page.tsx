import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Health Checkup & Preventive Care Mohali | GreenCoatVets";
const pageDescription =
  "Routine pet health checkup in Mohali at GreenCoatVets. Preventive care, age-based wellness exams and early detection of health concerns for pets.";
const pageUrl = "https://www.greencoatvets.com/pet-health-checkup-mohali/";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  keywords: [
    "Pet Health Checkup Mohali",
    "pet health checkup",
    "preventive veterinary care",
    "routine pet examination",
    "wellness checkup for pets",
    "senior pet checkup",
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
        url: "/pet-health-checkup-mohali.jpg",
        alt: "Veterinarian performing a routine wellness examination on a pet at GreenCoatVets in Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/pet-health-checkup-mohali.jpg"],
  },
};

const faqs = [
  {
    question: "How often should my pet have a health checkup?",
    answer:
      "Many veterinarians suggest at least one checkup a year for healthy adult pets. Young and senior pets may need more frequent visits. Your veterinarian will advise what suits your pet.",
  },
  {
    question: "How is a health checkup different from an OPD consultation?",
    answer:
      "A checkup is a routine wellness visit for a pet that seems healthy, focused on prevention and early detection. A consultation at our Specialized OPD is for a pet with symptoms or a specific health concern.",
  },
  {
    question: "My pet looks healthy. Does it still need a checkup?",
    answer:
      "Yes, it can still be helpful. Many conditions develop slowly and show few outward signs at first. A checkup helps your veterinarian notice changes early.",
  },
  {
    question: "What should I bring to the appointment?",
    answer:
      "Bring any vaccination or medical records, details of your pet’s diet and routine, and a list of questions or observations. If a sample has been requested, bring that as well.",
  },
  {
    question: "Do senior pets need different checkups?",
    answer:
      "Older pets may need closer monitoring, and the veterinarian may recommend additional tests to track their health. The plan is tailored to your pet’s age and condition.",
  },
  {
    question: "Will my pet need tests at every checkup?",
    answer:
      "Not always. Tests are recommended only when the examination or your pet’s age and history make them useful.",
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
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function AppointmentButton({
  children = "Book an Appointment",
}: {
  children?: ReactNode;
}) {
  return (
    <Link
      href="/book/"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
      <span aria-hidden="true" className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-700">
          <span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-xl text-teal-700">
            check_circle
          </span>
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PetHealthCheckupMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="transition hover:text-teal-700">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-base">chevron_right</span></li>
            <li><Link href="/#services" className="transition hover:text-teal-700">Services</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-base">chevron_right</span></li>
            <li aria-current="page" className="font-semibold text-teal-800">Pet Health Checkup</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">health_and_safety</span>
              Preventive Pet Care · Mohali
            </span>
            <h1 className="mt-6 font-headline text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Pet Health Checkup and Preventive Care in Mohali
            </h1>
            <p className="mt-5 text-xl font-semibold text-teal-800">Helping keep healthy pets healthy</p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A routine health checkup is for the days when your pet seems perfectly fine. At GreenCoatVets in Mohali, our veterinary team offers wellness examinations that look at your pet’s overall health, help you plan preventive care and pick up small changes before they become bigger problems.
            </p>
            <p className="mt-3 text-base leading-8 text-slate-600">
              If your pet is already unwell, a consultation at our <Link href="/specialized-opd-mohali/" className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">Specialized OPD</Link> is the right place to start. This page is about keeping healthy pets healthy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppointmentButton />
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800">Contact Our Team</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2"><span aria-hidden="true" className="material-symbols-outlined text-lg text-teal-700">check_circle</span>Routine wellness reviews</span>
              <span className="flex items-center gap-2"><span aria-hidden="true" className="material-symbols-outlined text-lg text-teal-700">check_circle</span>Care tailored to life stage</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-3 rounded-[30px] bg-teal-200/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-2xl shadow-slate-900/10">
              <Image
                src="/pet-health-checkup-mohali.jpg"
                alt="Veterinarian performing a routine wellness examination on a pet at GreenCoatVets in Mohali"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="aspect-[4/3] w-full rounded-[20px] object-cover"
              />
            </div>
            <div className="relative mx-4 -mt-5 rounded-2xl border border-teal-100 bg-white px-5 py-4 shadow-lg sm:mx-7">
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="material-symbols-outlined rounded-xl bg-teal-50 p-2 text-2xl text-teal-700">favorite</span>
                <div><p className="font-headline font-bold text-slate-900">Preventive care starts with a checkup</p><p className="mt-1 text-sm leading-6 text-slate-600">Discuss changes, routine care and questions with your veterinary team.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why checkups matter */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Prevention and early awareness</p>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Regular Pet Health Checkups Matter</h2>
            <p className="mt-6 leading-8 text-slate-600">Pets are often good at hiding discomfort. Weight gain, stiffness, dental disease or a slowly worsening skin problem can go unnoticed at home for weeks or months. Because pets age faster than people, a short interval between visits can mean a noticeable change in health.</p>
            <p className="mt-4 leading-8 text-slate-600">A regular checkup gives your veterinarian a baseline to compare against, so subtle changes are easier to spot.</p>
          </div>
          <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 p-7 sm:p-9">
            <h3 className="font-headline text-xl font-bold text-slate-900">Who should book a preventive checkup?</h3>
            <CheckList items={[
              "Young pets that need an early health review and guidance on growth",
              "Newly adopted or rescued pets that have not had a veterinary examination",
              "Healthy adult pets due for their regular wellness visit",
              "Senior pets that may benefit from closer monitoring",
              "Pet owners who want advice on diet, weight, teeth or parasite prevention",
            ]} />
          </div>
        </div>
      </section>

      {/* Checkup details */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Your pet's wellness visit" title="What a Pet Wellness Checkup May Include" description="The appointment is tailored to your pet’s history, age and current condition. Your veterinarian will explain the findings and discuss any recommended next steps." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "chat", title: "Health history and lifestyle discussion", text: "Your veterinarian will ask about appetite, water intake, energy, toileting, exercise, diet and any changes you have noticed. Even small observations, such as sleeping more or hesitating on stairs, can be useful." },
              { icon: "health_and_safety", title: "A full physical examination", text: "The examination typically covers weight and body condition, eyes, ears, mouth and teeth, skin and coat, heart and lungs, abdomen and joints. Findings are explained in plain language." },
              { icon: "event_available", title: "Preventive care planning", text: "Discuss vaccination status, parasite prevention, nutrition, weight management and dental care. Our pet vaccination service and dental care are available when something specific is needed." },
              { icon: "biotech", title: "Further tests when advised", text: "A checkup does not always involve tests. If the examination raises a question, or age or history makes it sensible, your veterinarian may suggest further evaluation through our veterinary diagnostics in Mohali." },
            ].map((item) => (
              <article key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white"><span aria-hidden="true" className="material-symbols-outlined text-2xl">{item.icon}</span></div>
                <h3 className="mt-5 font-headline text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <Link href="/pet-vaccination-mohali/" className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">Pet vaccination service <span aria-hidden="true">→</span></Link>
            <Link href="/dental-care-mohali/" className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">Dental care <span aria-hidden="true">→</span></Link>
            <Link href="/veterinary-diagnostics-mohali/" className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">Veterinary diagnostics in Mohali <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* Life stages */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Care as your pet grows" title="Checkups at Different Life Stages" description="Your pet’s needs change over time. A wellness plan can be adapted to their age, health and lifestyle." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: "pets", title: "Young pets", text: "Early visits focus on growth, development, nutrition and vaccination planning. They are also a good time to ask about training, socialisation and parasite prevention." },
              { icon: "favorite", title: "Adult pets", text: "Many veterinarians suggest at least one wellness visit a year for healthy adult pets. These visits track weight, teeth, skin and general condition over time." },
              { icon: "elderly", title: "Senior pets", text: "Older pets can develop conditions such as joint discomfort, dental problems or changes in organ function. Your veterinarian may recommend more frequent checkups and, where appropriate, additional tests to monitor their health." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-teal-200 hover:shadow-lg">
                <span aria-hidden="true" className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-700">{item.icon}</span>
                <h3 className="mt-5 font-headline text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Early signs */}
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-300">Small changes can matter</p>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Early Signs Worth Mentioning at Your Visit</h2>
            <p className="mt-5 leading-8 text-slate-300">Tell the veterinarian about changes even if they seem minor. If symptoms are significant or getting worse, book a consultation rather than waiting for a routine visit.</p>
            <p className="mt-4 leading-8 text-slate-300">For difficulty breathing, collapse, seizures or other serious signs, contact our <Link href="/emergency-care-mohali/" className="font-semibold text-teal-300 underline decoration-teal-500 underline-offset-4 hover:text-white">emergency care team</Link> immediately.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-9">
            <CheckList items={[
              "Gradual weight gain or loss",
              "Changes in appetite or thirst",
              "Lower energy or reluctance to play or climb",
              "Stiffness after rest",
              "Bad breath or reluctance to chew",
              "Dull coat, flaking skin or scratching",
              "Changes in behaviour or toileting habits",
            ]} />
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 p-7 sm:p-9">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Make the most of your visit</p>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900">How to Prepare for Your Pet’s Checkup</h2>
            <CheckList items={[
              "Bring any vaccination cards and previous medical records",
              "Note your pet’s diet, treats and any supplements",
              "Write down changes you have noticed and questions you want to ask",
              "Bring a sample if the veterinarian has asked for one",
              "Keep your pet secure on a leash or in a carrier, as suits its type",
            ]} />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Routine care, with clear next steps</h2>
            <p className="mt-5 leading-8 text-slate-600">A checkup is an opportunity to discuss your pet’s overall health, ask questions and understand whether any follow-up is appropriate. Your veterinarian will tailor recommendations to your pet rather than assuming every visit needs the same tests.</p>
            <div className="mt-7"><Link href="/specialized-opd-mohali/" className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">Learn about Specialized OPD <span aria-hidden="true">→</span></Link></div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Helpful answers" title="Pet Health Checkup FAQs" description="Answers to common questions about routine wellness examinations and preventive care." />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-headline text-base font-bold text-slate-900 sm:text-lg">
                  <span><span className="mr-2 text-teal-700">{`0${index + 1}.`}</span>{faq.question}</span>
                  <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-teal-700 transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-4 pr-2 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-700 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span aria-hidden="true" className="material-symbols-outlined text-5xl text-teal-100">favorite</span>
          <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">Book a Pet Health Checkup in Mohali</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-teal-50">A routine checkup is a simple way to look after your pet’s long-term health. Contact GreenCoatVets to arrange a wellness visit for your pet. We are open 24 hours.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <AppointmentButton>Schedule Your Preventive Checkup</AppointmentButton>
            <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
