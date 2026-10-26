import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Veterinary Skin Treatment in Mohali | GreenCoatVets";
const pageDescription =
  "Pet skin treatment in Mohali at GreenCoatVets. Veterinary assessment for itching, rashes, hair loss and ear or skin concerns in pets.";
const pageUrl = "https://www.greencoatvets.com/veterinary-skin-treatment-mohali/";
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
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

const skinProblems = [
  "Persistent itching, scratching or rubbing",
  "Redness, rashes, bumps or sores",
  "Patchy hair loss or a thinning coat",
  "Dry, flaky, greasy or smelly skin",
  "Scabs, moist patches or wounds that are not healing",
  "Frequent ear scratching, head shaking or ear odour",
  "Excessive licking or chewing of the paws or body",
];

const skinCareTips = [
  "Follow the treatment plan and finish the course exactly as prescribed",
  "Attend follow-up visits so progress can be checked",
  "Use only the shampoos and products your veterinarian recommends",
  "Keep up regular parasite prevention as advised",
  "Note anything that seems to trigger flare-ups, such as a new food or product",
];

const faqs = [
  {
    question: "Why is my pet itching so much?",
    answer:
      "Itching can be caused by parasites, allergies, infections or irritation, among other things. Because the causes look similar, a veterinary examination is the best way to find out what is affecting your pet.",
  },
  {
    question: "Can pet skin problems be cured?",
    answer:
      "Some skin problems resolve once the cause is treated. Others, such as certain allergies, usually need long-term management. Your veterinarian will explain what to expect for your pet.",
  },
  {
    question: "Can I use home remedies or human creams?",
    answer:
      "It is best not to. Some products can irritate the skin or be harmful to pets. Please speak to a veterinarian before using any cream, shampoo or medicine.",
  },
  {
    question: "Are pet skin problems contagious?",
    answer:
      "Some are, including certain parasites and fungal infections, while others are not. Your veterinarian can tell you whether precautions are needed for other pets or family members.",
  },
  {
    question: "Can skin problems affect any type of pet?",
    answer:
      "Yes. Many kinds of pets can develop itching, hair loss, sores or ear problems. Some pets groom heavily or hide discomfort, so problems can be easy to miss. Mention any over-grooming, scratching or bald patches to the veterinarian.",
  },
  {
    question: "What should I bring to the skin consultation?",
    answer:
      "Bring details of your pet’s diet, any shampoos or medicines used, parasite control history and when the problem began. Photos of the early signs can be helpful.",
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

export default function VeterinarySkinTreatmentMohaliPage() {
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
            Veterinary Skin Treatment
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
                dermatology
              </span>
              Veterinary Skin Care · Mohali
            </span>
            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Veterinary Skin Treatment in Mohali
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Skin problems are among the most common reasons pet owners visit a veterinarian. Constant scratching, red patches, hair loss or a persistent odour can leave your pet uncomfortable and you worried. At GreenCoatVets in Mohali, our veterinary team examines your pet’s skin, looks for the underlying cause and recommends appropriate care.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Many skin conditions look alike but need very different treatment, which is why guessing at home can delay recovery. A proper veterinary assessment is the safest first step.
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
              {["Skin and coat assessment", "Cause-focused care", "Ongoing guidance"].map((item) => (
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
            <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white p-5 shadow-2xl shadow-teal-950/10 sm:p-7 lg:p-8">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800 sm:size-16">
                <span aria-hidden="true" className="material-symbols-outlined text-3xl sm:text-4xl">
                  pets
                </span>
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Skin, coat and ear concerns
              </p>
              <h2 className="mt-2 font-headline text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                Start with the right assessment
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Itching, hair loss, rashes and ear irritation can have different causes. A veterinary examination helps guide the next steps for your pet.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-teal-100 bg-teal-50/70 p-4">
                  <span className="material-symbols-outlined text-2xl text-teal-700">search</span>
                  <p className="mt-2 text-sm font-bold text-slate-900">Find the cause</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Review symptoms and possible triggers.</p>
                </div>
                <div className="rounded-xl border border-teal-100 bg-teal-50/70 p-4">
                  <span className="material-symbols-outlined text-2xl text-teal-700">health_and_safety</span>
                  <p className="mt-2 text-sm font-bold text-slate-900">Plan appropriate care</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Discuss treatment and follow-up.</p>
                </div>
              </div>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
                GreenCoatVets in Mohali is open 24 hours. Contact our team to discuss your pet’s needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common signs */}
      <section className="bg-[#123d39] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-9 sm:px-6 sm:py-12 md:grid-cols-[0.8fr_1.2fr] md:items-start lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Signs to look out for</p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">Common Skin Problems in Pets</h2>
            <p className="mt-3 text-sm leading-7 text-teal-50 sm:text-base">
              You may want to book a consultation if your pet has any of these signs.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {skinProblems.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-teal-50">
                <span aria-hidden="true" className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-emerald-300">check_circle</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Causes */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Why symptoms can differ" title="Possible Causes of Pet Skin Problems" />
          </div>
          <div className="rounded-3xl border border-teal-100 bg-[#f3f8f5] p-5 sm:p-7">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Skin irritation can have several causes, and sometimes more than one is involved at the same time. Possible causes include parasites such as fleas, ticks and mites, allergies, bacterial or fungal infections, irritation from shampoos or other products, and problems linked to a pet’s general health. Identifying the cause is what allows treatment to be targeted rather than temporary.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              Depending on your pet’s symptoms, your veterinarian may recommend further checks or tests. These can be arranged through our <TextLink href="/veterinary-diagnostics-mohali/">veterinary diagnostics service</TextLink> where relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="bg-[#f3f8f5] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A careful, step-by-step approach"
            title="How We Assess a Pet’s Skin Problem"
            description="The assessment is tailored to your pet’s history and signs. Your veterinarian will explain the findings and discuss whether further investigation is needed."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-extrabold text-teal-800">01</span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">Understanding the history</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Your veterinarian will ask how long the problem has been present, where it started, what your pet eats, how often it is bathed and which parasite control has been used. Photos of how the problem first looked can help.
              </p>
            </article>
            <article className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-extrabold text-teal-800">02</span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">A careful skin and coat examination</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The veterinarian will examine the skin, coat, ears and paws, and note the pattern and severity of the problem. Where relevant, the rest of your pet’s health will be checked as well.
              </p>
            </article>
            <article className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-extrabold text-teal-800">03</span>
              <h3 className="mt-4 text-lg font-bold text-slate-950">Diagnostic tests where relevant</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Depending on the case, the veterinarian may recommend tests to help find the cause, for example examining skin or hair samples or blood tests. These can be arranged through our <TextLink href="/veterinary-diagnostics-mohali/">veterinary diagnostics service</TextLink>.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Care based on the cause" title="Treatment and Ongoing Care" />
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Treatment depends on what is causing the problem. Your veterinarian may recommend parasite control, medicated care, changes to diet or bathing routine, or a combination of these. Some skin conditions settle once the cause is treated, while others, such as certain allergies, may need longer-term management. Your veterinarian will explain what outcome is realistic for your pet and when to return for a review.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Please do not apply human creams, leftover medicines or home remedies without veterinary advice, as some can worsen the problem or be unsafe for pets.
            </p>
          </div>
          <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-7">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">health_and_safety</span>
              Important reminder
            </span>
            <h3 className="mt-3 text-xl font-bold text-slate-950">Use products only as advised</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Products that are suitable for people may not be safe for pets. Ask your veterinarian before starting or changing creams, shampoos or medicines.
            </p>
            <Link href={contactUrl} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-emerald-700">
              Contact our team <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </aside>
        </div>
      </section>

      {/* Home care */}
      <section className="bg-[#f3f8f5] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Between veterinary visits" title="Looking After Your Pet’s Skin Between Visits" />
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Small, consistent steps can support the plan your veterinarian has recommended.
            </p>
          </div>
          <ul className="space-y-3">
            {skinCareTips.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
                <span aria-hidden="true" className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-teal-700">check_circle</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prompt care */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Know when to get help" title="When to See a Veterinarian Promptly" />
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Please book a visit soon if the problem is spreading, your pet seems unwell or in pain, the skin is bleeding or has open sores, or your pet’s ears are painful. If your pet shows facial swelling or difficulty breathing, seek urgent help through our <TextLink href="/emergency-care-mohali/">emergency care team</TextLink>.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              For a general review of your pet’s health, our <TextLink href="/specialized-opd-mohali/">Specialized OPD</TextLink> can help, and a routine <TextLink href="/pet-health-checkup-mohali/">pet health checkup</TextLink> is a good way to catch skin and coat changes early.
            </p>
          </div>
          <div className="rounded-3xl bg-teal-50 p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-800 shadow-sm">
                <span aria-hidden="true" className="material-symbols-outlined text-2xl">support_agent</span>
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-950">Not sure where to start?</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Tell our team what you have noticed, when it began and whether it is getting worse. Photos and details of products or medicines already used may help the discussion.
                </p>
                <Link href={contactUrl} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-emerald-700">
                  Contact our team <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f3f8f5] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your questions answered"
            title="Frequently Asked Questions"
            description="Find answers to common questions about pet skin, coat and ear concerns. Your veterinarian can advise on your individual pet’s needs."
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
                <p className="mt-3 pr-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
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
            <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight sm:text-3xl">Book a Skin Consultation in Mohali</h2>
            <p className="mt-3 text-sm leading-7 text-teal-50 sm:text-base">
              If your pet has an itchy, irritated or unusual-looking skin problem, GreenCoatVets can help you find out what is going on and what to do next. We are open 24 hours.
            </p>
            <p className="mt-2 text-sm font-semibold text-white">Speak to our veterinary team about your pet’s skin concerns.</p>
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
