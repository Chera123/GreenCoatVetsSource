import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
      
const pageTitle = "Pet Health Checkup & Preventive Care Mohali | GreenCoatVets";
const pageDescription =
  "Routine pet health checkup in Mohali at GreenCoatVets. Preventive care, age-based wellness exams and early detection of health concerns for pets.";
const pageUrl =
  "https://www.greencoatvets.com/pet-health-checkup-mohali/";
const bookingUrl = "https://www.greencoatvets.com/book/";
     
// Place pet-ultrasound.jpg in apps/website/public/.
const heroImage = "/soft-tissue.jpeg";   
  
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
        url: heroImage,
        alt: "Veterinarian performing a routine wellness examination on a pet at GreenCoatVets in Mohali",
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
    <div>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-headline text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
    </Link>
  );
}

function AppointmentButton({
  children = "Book an Appointment",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={bookingUrl}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-800 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-700 hover:to-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"
    >
      <span aria-hidden="true" className="material-symbols-outlined text-lg">
        calendar_month
      </span>
      {children}
      <span aria-hidden="true" className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
          <span
            aria-hidden="true"
            className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-teal-700"
          >
            check_circle
          </span>
          <span>{item}</span>
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

      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-600 hover:text-teal-800">Home</Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
          <Link href="/#services" className="text-sm text-slate-600 hover:text-teal-800">Services</Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
          <span aria-current="page" className="text-sm font-semibold text-teal-900">Pet Health Checkup</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-bold text-teal-900 shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-base">health_and_safety</span>
              Preventive Pet Care · Mohali
            </span>
            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.8rem]">
              Pet Health Checkup and Preventive Care in Mohali
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-700">
              A routine health checkup is for the days when your pet seems perfectly fine. At GreenCoatVets in Mohali, our veterinary team offers wellness examinations that look at your pet’s overall health, help you plan preventive care and pick up small changes before they become bigger problems.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-700">
              If your pet is already unwell, a consultation at our{" "}
              <TextLink href="/specialized-opd-mohali/">Specialized OPD</TextLink>{" "}
              is the right place to start. This page is about keeping healthy pets healthy.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <AppointmentButton>Schedule a Checkup</AppointmentButton>
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-600 hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
                Contact Our Team
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {["Routine wellness visits", "Preventive care planning", "Early detection"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="material-symbols-outlined text-lg text-teal-700">check_circle</span>{item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl border border-teal-100 bg-teal-100 shadow-xl">
            <Image
              src={heroImage}
              alt="Veterinarian performing a routine wellness examination on a pet at GreenCoatVets in Mohali"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why checkups matter */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div className="rounded-2xl bg-teal-50 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">Prevention matters</p>
            <h2 className="mt-2 font-headline text-2xl font-bold text-slate-950 sm:text-3xl">Why Regular Pet Health Checkups Matter</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Pets are often good at hiding discomfort. Weight gain, stiffness, dental disease or a slowly worsening skin problem can go unnoticed at home for weeks or months. Because pets age faster than people, a short interval between visits can mean a noticeable change in health.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-700">
              A regular checkup gives your veterinarian a baseline to compare against, so subtle changes are easier to spot.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeading title="Who Should Book a Preventive Checkup?" description="A wellness visit can be useful at different stages of your pet’s life." />
            <BulletList items={[
              "Young pets that need an early health review and guidance on growth",
              "Newly adopted or rescued pets that have not had a veterinary examination",
              "Healthy adult pets due for their regular wellness visit",
              "Senior pets that may benefit from closer monitoring",
              "Pet owners who want advice on diet, weight, teeth or parasite prevention",
            ]} />
          </div>
        </div>
      </section>

      {/* Wellness exam */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Your pet’s visit" title="What a Pet Wellness Checkup May Include" description="The appointment is tailored to your pet. Your veterinarian will explain the findings and discuss suitable next steps." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", title: "Health history and lifestyle discussion", text: "Your veterinarian will ask about appetite, water intake, energy, toileting, exercise, diet and any changes you have noticed. Even small observations, such as sleeping more or hesitating on stairs, can be useful.", icon: "forum" },
              { n: "02", title: "A full physical examination", text: "The examination typically covers weight and body condition, eyes, ears, mouth and teeth, skin and coat, heart and lungs, abdomen and joints. Findings are explained in plain language.", icon: "medical_services" },
              { n: "03", title: "Preventive care planning", text: "Based on the examination, the veterinarian can discuss vaccination status, parasite prevention, nutrition, weight management and dental care.", icon: "health_and_safety" },
              { n: "04", title: "Further tests when advised", text: "A checkup does not always involve tests. If the examination raises a question, your veterinarian may suggest further evaluation through our veterinary diagnostics in Mohali.", icon: "biotech" },
            ].map((card) => (
              <article key={card.n} className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                    <span aria-hidden="true" className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </span>
                  <span className="text-sm font-extrabold tracking-widest text-teal-700">{card.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{card.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-xl border border-teal-100 bg-white p-4 text-sm leading-6 text-slate-700">
            Explore our <TextLink href="/pet-vaccination-mohali/">pet vaccination service</TextLink>,{" "}
            <TextLink href="/dental-care-mohali/">dental care</TextLink>, and{" "}
            <TextLink href="/veterinary-diagnostics-mohali/">veterinary diagnostics in Mohali</TextLink>{" "}
            when a specific need is identified.
          </p>
        </div>
      </section>

      {/* Life stages */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Care at every age" title="Checkups at Different Life Stages" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { title: "Young pets", icon: "pets", text: "Early visits focus on growth, development, nutrition and vaccination planning. They are also a good time to ask about training, socialisation and parasite prevention." },
              { title: "Adult pets", icon: "favorite", text: "Many veterinarians suggest at least one wellness visit a year for healthy adult pets. These visits track weight, teeth, skin and general condition over time." },
              { title: "Senior pets", icon: "elderly", text: "Older pets can develop conditions such as joint discomfort, dental problems or changes in organ function. Your veterinarian may recommend more frequent checkups and, where appropriate, additional tests." },
            ].map((stage) => (
              <article key={stage.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-teal-800">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">{stage.icon}</span>
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-950">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Early signs — readable contrast */}
      <section className="bg-slate-950 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">Small changes can matter</p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Early Signs Worth Mentioning at Your Visit
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Tell the veterinarian about changes even if they seem minor. If symptoms are significant or getting worse, book a consultation rather than waiting for a routine visit.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-200">
              For difficulty breathing, collapse, seizures or other serious signs, contact our{" "}
              <TextLink href="/emergency-care-mohali/">emergency care team</TextLink>{" "}
              immediately.
            </p>
          </div>
          <div className="min-w-0 rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-xl sm:p-7">
            <ul className="space-y-4">
              {[
                "Gradual weight gain or loss",
                "Changes in appetite or thirst",
                "Lower energy or reluctance to play or climb",
                "Stiffness after rest",
                "Bad breath or reluctance to chew",
                "Dull coat, flaking skin or scratching",
                "Changes in behaviour or toileting habits",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white sm:text-base">
                  <span aria-hidden="true" className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-teal-300">check_circle</span>
                  <span className="min-w-0 text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading title="How to Prepare for Your Pet’s Checkup" description="A little preparation can help you make the most of your appointment." />
            <BulletList items={[
              "Bring any vaccination cards and previous medical records",
              "Note your pet’s diet, treats and any supplements",
              "Write down changes you have noticed and questions you want to ask",
              "Bring a sample if the veterinarian has asked for one",
              "Keep your pet secure on a leash or in a carrier, as suits its type",
            ]} />
          </div>
          <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 sm:p-8">
            <span aria-hidden="true" className="material-symbols-outlined text-4xl text-teal-800">event_available</span>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Keep healthy pets healthy</h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              A routine checkup is a simple way to look after your pet’s long-term health. Contact GreenCoatVets to arrange a wellness visit. We are open 24 hours.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AppointmentButton>Schedule a Checkup</AppointmentButton>
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:border-teal-600 hover:text-teal-900">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Common questions" title="Pet Health Checkup FAQs" description="Answers to common questions about routine wellness visits and preventive care." />
          <div className="mt-7 space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-teal-200 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold text-slate-900 marker:hidden">
                  <span><span className="mr-2 text-teal-700">Q{index + 1}.</span>{faq.question}</span>
                  <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-teal-700 transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-3 pr-7 text-sm leading-6 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-900 py-10 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-2xl font-bold text-white sm:text-3xl">Book a Pet Health Checkup in Mohali</h2>
            <p className="mt-3 text-base leading-7 text-teal-50">Schedule your pet’s preventive checkup with GreenCoatVets. Our team can help you plan a wellness visit that suits your pet’s needs.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <AppointmentButton>Book an Appointment</AppointmentButton>
            <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-teal-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-900">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



    