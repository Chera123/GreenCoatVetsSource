import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Veterinary Soft Tissue Surgery in Mohali | GreenCoatVets";
const pageDescription =
  "Veterinary soft tissue surgery in Mohali at GreenCoatVets. Surgical assessment, pre-operative planning and post-operative care for pets.";
const pageUrl = "https://www.greencoatvets.com/soft-tissue-surgery-mohali/";
const heroImage = "/soft-tissue.jpeg";
const assessmentImage = "/soft-tissue-assessment.png";
const recoveryImage = "/soft-tissue-recovery.png";
const bookingUrl = "/book/";
const contactUrl = "/contact/";

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
        alt: "Veterinary surgical team preparing a pet for soft tissue surgery at GreenCoatVets in Mohali",
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
    question: "What is soft tissue surgery in pets?",
    answer:
      "It refers to surgical care that does not involve bones and joints. Your veterinarian can explain which type of surgery, if any, applies to your pet.",
  },
  {
    question: "How is soft tissue surgery different from orthopedic surgery?",
    answer:
      "Orthopedic surgery treats bones, joints and ligaments, for example fractures. Soft tissue surgery deals with other parts of the body. They are different areas of surgical care.",
  },
  {
    question: "Can I ask about my pet’s specific case before booking?",
    answer:
      "Yes. Contact our team and describe your pet’s condition. GreenCoatVets is open 24 hours, and our team will explain whether and how we can help.",
  },
  {
    question: "How should I prepare my pet for surgery?",
    answer:
      "Your veterinarian will give specific instructions, which commonly include fasting and informing the team about any medicines. Follow these closely for your pet’s safety.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "Recovery time depends on the procedure, your pet’s age and overall health. The veterinarian will give you an idea of what to expect and arrange follow-up visits.",
  },
  {
    question: "Do you also offer spay and neuter surgery?",
    answer:
      "Yes. GreenCoatVets offers spay and neuter services, which are described on a dedicated page on this website.",
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
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-headline text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
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

function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-800 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
      <span aria-hidden="true" className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
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
      className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition hover:text-emerald-700"
    >
      {children}
    </Link>
  );
}

const assessmentSteps = [
  {
    n: "01",
    title: "Consultation and examination",
    text: "The veterinarian will take your pet’s history, ask about symptoms and perform a physical examination. You will have the chance to ask questions and share your concerns.",
  },
  {
    n: "02",
    title: "Diagnostic work-up",
    text: "Before recommending surgery, the veterinarian may advise diagnostic tests to understand the condition and check that your pet is fit for an anaesthetic. These are available through our veterinary diagnostics service.",
  },
  {
    n: "03",
    title: "Discussing the options",
    text: "Where surgery is recommended, the veterinarian will explain what the procedure aims to achieve, the alternatives, the possible risks and what recovery will involve. Where surgery is not necessary, you will be told that too.",
  },
];

const aftercareItems = [
  "Restricting activity and giving your pet a quiet place to rest",
  "Keeping the surgical site clean and dry, and preventing licking or chewing as advised",
  "Giving medication only as prescribed",
  "Attending follow-up visits so the wound and recovery can be checked",
];

export default function SoftTissueSurgeryMohaliPage() {
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
          <Link href="/" className="text-sm text-slate-600 hover:text-teal-800">
            Home
          </Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>
          <Link href="/#services" className="text-sm text-slate-600 hover:text-teal-800">
            Services
          </Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>
          <span aria-current="page" className="text-sm font-semibold text-teal-800">
            Soft Tissue Surgery
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-bold text-teal-800 shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-base">
                medical_services
              </span>
              Veterinary Surgery · Mohali
            </span>
            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Veterinary Soft Tissue Surgery in Mohali
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Soft tissue surgery is surgical care for pets that does not involve bones or joints. If your veterinarian has suggested surgery for your pet, or you would like a second opinion, the team at GreenCoatVets in Mohali can assess your pet, explain the options and guide you through each stage of care.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Surgery is not always the first or only answer. Every case begins with an examination and, where needed, diagnostic testing, so that any recommendation is based on what your pet actually needs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={bookingUrl}>Book an Appointment</PrimaryLink>
              <Link
                href={contactUrl}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-300 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {["Individual assessment", "Clear discussion of options", "Recovery guidance"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="material-symbols-outlined text-lg text-teal-700">
                    check_circle
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 hidden rounded-[2rem] border border-teal-200 lg:block" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-teal-100 shadow-2xl shadow-teal-950/15">
              <Image
                src={heroImage}
                alt="Veterinary surgical team preparing a pet for soft tissue surgery at GreenCoatVets in Mohali"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                  GreenCoatVets · Mohali
                </p>
                <p className="mt-2 text-lg font-bold sm:text-xl">
                  Assessment first. Clear options. Thoughtful aftercare.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl border border-teal-100 bg-white p-3 text-center shadow-sm">
                <span className="material-symbols-outlined text-2xl text-teal-700">clinical_notes</span>
                <p className="mt-1 text-xs font-bold text-slate-800 sm:text-sm">Assessment</p>
              </div>
              <div className="rounded-xl border border-teal-100 bg-white p-3 text-center shadow-sm">
                <span className="material-symbols-outlined text-2xl text-teal-700">health_and_safety</span>
                <p className="mt-1 text-xs font-bold text-slate-800 sm:text-sm">Planning</p>
              </div>
              <div className="rounded-xl border border-teal-100 bg-white p-3 text-center shadow-sm">
                <span className="material-symbols-outlined text-2xl text-teal-700">pets</span>
                <p className="mt-1 text-xs font-bold text-slate-800 sm:text-sm">Aftercare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section className="bg-[#123d39] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-9 sm:px-6 sm:py-12 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Understanding the procedure
            </p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">
              What Is Soft Tissue Surgery in Pets?
            </h2>
          </div>
          <div className="border-l-2 border-emerald-400 pl-5 sm:pl-7">
            <p className="text-sm leading-7 text-teal-50 sm:text-base">
              Veterinary surgery is often divided into orthopedic surgery, which deals with bones, joints and ligaments, and soft tissue surgery, which deals with other parts of the body. For fractures and joint problems, please see our{" "}
              <TextLink href="/orthopedic-surgery-mohali/">orthopedic surgery service</TextLink>. Sterilisation procedures are described on our{" "}
              <TextLink href="/spay-neuter-mohali/">spay and neuter page</TextLink>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / case assessment */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-14 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Your pet’s care comes first"
              title="Ask Our Team About Your Pet’s Case"
              description="Every pet’s situation is different, so the best way to find out whether we can help is to speak to our team. Contact GreenCoatVets and describe what your pet needs. Our veterinary team will explain what can be done, what is involved and what to expect. GreenCoatVets is open 24 hours, so you can get in touch at any time."
            />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={bookingUrl}>Book an Appointment</PrimaryLink>
              <Link href={contactUrl} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-800 hover:border-teal-300 hover:text-teal-800">
                Contact Our Team
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-teal-50 p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-800 shadow-sm">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-950">Not sure where to start?</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Tell us about your pet’s symptoms, previous reports or the advice you have already received. Our team can help you understand the next step.
                </p>
                <Link href={contactUrl} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-emerald-700">
                  Contact our team <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment steps */}
      <section className="bg-[#f3f8f5] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="From first visit to informed decisions"
            title="What a Surgical Assessment Involves"
            description="Each recommendation is based on your pet’s condition and needs. Your veterinarian will explain the findings and discuss the next steps with you."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {assessmentSteps.map((item) => (
              <article key={item.n} className="group rounded-2xl border border-teal-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-extrabold text-teal-800 transition group-hover:bg-teal-800 group-hover:text-white">
                  {item.n}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                {item.n === "02" && (
                  <p className="mt-3 text-sm">
                    <TextLink href="/veterinary-diagnostics-mohali/">Explore veterinary diagnostics in Mohali</TextLink>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Image 2 + preparation */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-teal-100 shadow-lg sm:aspect-[4/3]">
            <Image
              src={assessmentImage}
               alt="Veterinarian assessing a pet before surgery"
    fill
    sizes="(max-width: 1023px) 100vw, 50vw"
    className="object-contain object-center"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Before the procedure" title="Preparing for Surgery" />
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Your veterinarian will give specific instructions for your pet. These commonly include fasting before the procedure, informing the team about any medicines your pet is taking, and arranging a calm, quiet space at home for recovery. Please follow the instructions you are given, as they are set for your pet’s safety.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Every surgery and anaesthetic carries some risk, and the veterinarian will discuss this with you before going ahead.
            </p>
            <div className="mt-6 rounded-2xl border border-teal-100 bg-teal-50 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-800">A useful reminder</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">Follow your pet’s specific instructions</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Preparation can vary depending on your pet and the planned procedure. If anything is unclear before the appointment, contact our team to check.
              </p>
              <Link href={contactUrl} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-emerald-700">
                Ask our team <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="bg-[#f3f8f5] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Care continues after surgery"
              title="Recovery and Aftercare"
              description="Good aftercare is an important part of a successful recovery. Your veterinarian will explain what applies to your pet, which typically includes:"
            />
            <ul className="mt-5 space-y-3">
              {aftercareItems.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
                  <span aria-hidden="true" className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-teal-700">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <aside className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                <span aria-hidden="true" className="material-symbols-outlined text-lg">health_and_safety</span>
                When to contact us
              </span>
              <p className="mt-3 text-sm leading-7 text-slate-800">
                Contact us if you notice swelling, discharge or bleeding at the surgical site, loss of appetite, vomiting or unusual tiredness. In a serious situation, please reach our{" "}
                <TextLink href="/emergency-care-mohali/">emergency care team</TextLink> without delay.
              </p>
            </aside>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-teal-100 shadow-lg sm:min-h-[430px]">
            <Image
              src={recoveryImage}
              alt="Pet resting comfortably at home during recovery with its owner nearby"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="text-sm font-bold text-slate-950">Recovery is part of the care plan</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">Follow the veterinary team’s advice and attend any recommended follow-up visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your questions answered"
            title="Frequently Asked Questions"
            description="Learn more about soft tissue surgery and what to expect when discussing your pet’s needs with our veterinary team."
          />
          <div className="mt-7 space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-4 open:border-teal-200 open:bg-teal-50/40 sm:p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-bold leading-6 text-slate-900 sm:text-base">
                  <span>
                    <span className="mr-2 text-teal-700">{`0${index + 1}.`}</span>
                    {faq.question}
                  </span>
                  <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-teal-700 transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-3 pr-2 text-sm leading-7 text-slate-600">
                  {faq.answer}
                  {index === 1 && <> See our <TextLink href="/orthopedic-surgery-mohali/">orthopedic surgery service</TextLink> for bone, joint and ligament care.</>}
                  {index === 5 && <> Visit our <TextLink href="/spay-neuter-mohali/">spay and neuter page</TextLink> to learn more.</>}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-teal-950 via-teal-800 to-emerald-800 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-14 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Veterinary care in Mohali</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight sm:text-3xl">Book a Surgical Consultation in Mohali</h2>
            <p className="mt-3 text-sm leading-7 text-teal-50 sm:text-base">
              If your pet has been advised surgery, or you would like a surgical opinion, GreenCoatVets can assess your pet and explain the next steps. Bring any previous reports, scans or prescriptions with you.
            </p>
            <p className="mt-2 text-sm font-semibold text-white">Speak to our veterinary team about your pet’s surgery.</p>  
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <PrimaryLink href={bookingUrl}>Book an Appointment</PrimaryLink>
            <Link href={contactUrl} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
