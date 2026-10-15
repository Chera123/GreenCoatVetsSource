
import type { Metadata } from "next";
import Link from "next/link";

const pageTitle =
  "Specialized Veterinary OPD in Mohali | GreenCoatVets";

const pageDescription =
  "Looking for veterinary consultation in Mohali? GreenCoatVets provides specialized veterinary OPD, pet health consultation and compassionate care for dogs and cats.";

const pageUrl =
  "https://www.greencoatvets.com/specialized-opd-mohali/";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Specialized Veterinary OPD in Mohali | GreenCoatVets",
    description:
      "Professional veterinary consultation, pet health care and specialized OPD services for dogs and cats in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialized Veterinary OPD in Mohali | GreenCoatVets",
    description:
      "Professional veterinary consultation and compassionate pet healthcare for dogs and cats in Mohali.",
  },
};

const concerns = [
  {
    icon: "health_and_safety",
    title: "Routine health check-ups",
    description:
      "Regular examinations to help monitor your pet's general health.",
  },
  {
    icon: "thermostat",
    title: "Fever and weakness",
    description:
      "Consultation for fever, low energy and loss of appetite.",
  },
  {
    icon: "gastroenterology",
    title: "Digestive problems",
    description:
      "Assessment of vomiting and other digestive concerns.",
  },
  {
    icon: "pets",
    title: "Skin, coat and ear conditions",
    description:
      "Veterinary assessment of common skin, coat and ear concerns.",
  },
  {
    icon: "air",
    title: "Coughing and breathing concerns",
    description:
      "Consultation when you notice coughing or changes in breathing.",
  },
  {
    icon: "directions_walk",
    title: "Pain and mobility",
    description:
      "Assessment of discomfort, movement difficulties and mobility changes.",
  },
  {
    icon: "monitor_weight",
    title: "Weight and behavioural changes",
    description:
      "Guidance when your pet's weight or behaviour changes.",
  },
  {
    icon: "favorite",
    title: "Preventive and senior pet care",
    description:
      "Health guidance tailored to your pet's age and individual needs.",
  },
];

const benefits = [
  "Experienced veterinary team",
  "Personalized pet care",
  "Comprehensive veterinary services",
  "Modern diagnostic support",
  "Compassionate approach",
  "Clear guidance for pet parents",
];

const faqs = [
  {
    question: "What is a veterinary OPD?",
    answer:
      "A veterinary OPD provides outpatient consultation, examination, diagnosis and treatment guidance for pets. Your veterinarian can assess your pet's concerns and recommend appropriate next steps.",
  },
  {
    question: "When should I book a veterinary consultation in Mohali?",
    answer:
      "Consult a veterinarian if you notice changes in your pet's appetite, behaviour, energy, digestion, skin, breathing or mobility. Seek urgent veterinary care for severe breathing difficulty, collapse or other serious symptoms.",
  },
  {
    question: "Do you provide routine pet health consultation in Mohali?",
    answer:
      "Routine pet health consultations can help monitor your pet's health and identify potential concerns early. Contact GreenCoatVets to discuss your pet's needs and arrange a consultation.",
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
        <p className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function AppointmentButton({
  children = "Book a Veterinary Consultation",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

export default function SpecializedOpdMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Structured data for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-100 bg-slate-50/70"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="transition hover:text-teal-700">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="material-symbols-outlined text-base">
                chevron_right
              </span>
            </li>
            <li>Services</li>
            <li aria-hidden="true">
              <span className="material-symbols-outlined text-base">
                chevron_right
              </span>
            </li>
            <li
              aria-current="page"
              className="font-semibold text-teal-800"
            >
              Specialized OPD
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate bg-gradient-to-br from-teal-50 via-white to-emerald-50/70">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-lg">
                medical_services
              </span>
              Veterinary consultation in Mohali
            </span>

            <h1 className="mt-6 max-w-2xl font-headline text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[54px]">
              Specialized OPD in Mohali for Dogs &amp; Cats
            </h1>

            <p className="mt-6 max-w-xl text-lg font-semibold text-teal-800">
              Expert Veterinary Care for Your Pet in Mohali
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              At GreenCoatVets, our Specialized OPD provides professional and
              compassionate veterinary care for dogs and cats in Mohali.
              Whether your pet needs a routine check-up, treatment for a
              health concern, or ongoing medical care, our veterinary team
              is here to help.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <AppointmentButton />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-bold text-slate-700 transition hover:text-teal-800"
              >
                Contact GreenCoatVets
                <span className="material-symbols-outlined text-lg">
                  arrow_outward
                </span>
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-teal-700">
                  check_circle
                </span>
                Personalized care
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-teal-700">
                  check_circle
                </span>
                Dogs and cats
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-teal-200/50 to-emerald-100/30 blur-xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-teal-100 bg-white p-5 shadow-2xl shadow-teal-900/10 sm:p-7">
              <div className="flex items-center gap-4 rounded-2xl bg-teal-50 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white">
                  <span className="material-symbols-outlined text-3xl">
                    pets
                  </span>
                </div>
                <div>
                  <p className="font-headline text-lg font-bold text-slate-900">
                    Care for every stage
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Consultation, examination and guidance for your pet.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <span className="material-symbols-outlined text-2xl text-teal-700">
                    stethoscope
                  </span>
                  <p className="mt-3 font-bold text-slate-900">
                    Health checks
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    Routine health assessments
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 p-4">
                  <span className="material-symbols-outlined text-2xl text-teal-700">
                    prescription
                  </span>
                  <p className="mt-3 font-bold text-slate-900">
                    Care guidance
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    Recommended next steps
                  </p>
                </div>
                <div className="col-span-2 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                  <span className="material-symbols-outlined text-2xl text-teal-700">
                    favorite
                  </span>
                  <p className="text-sm leading-6 text-slate-700">
                    Every pet is different. Consultation helps your
                    veterinarian understand their symptoms, history and
                    individual needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Personalized attention
            </p>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Trusted Veterinary Consultation in Mohali
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Every pet deserves personalized medical attention. During a
              veterinary consultation in Mohali, our team examines your pet,
              understands their symptoms and medical history, and recommends
              appropriate care based on their individual needs.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              From preventive healthcare to common illnesses and ongoing
              conditions, we focus on helping keep your pet healthy and
              comfortable.
            </p>
          </div>

          <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50/60 p-7 sm:p-9">
            <h3 className="font-headline text-xl font-bold text-slate-900">
              What to expect during a consultation
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Discussion of your pet's symptoms and medical history",
                "A veterinary examination based on your pet's concerns",
                "Clear explanations and care recommendations",
                "Further diagnostic evaluation when considered necessary",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-xl text-teal-700">
                    check_circle
                  </span>
                  <span className="leading-6 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Outpatient veterinary care"
            title="Comprehensive Veterinary OPD in Mohali"
            description="Our veterinary OPD in Mohali provides consultation for a wide range of pet health concerns. Your veterinarian can assess the symptoms and advise whether further evaluation or treatment is appropriate."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {concerns.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="mt-5 font-headline text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
            When required, our veterinarians may recommend further diagnostic
            evaluation or treatment. The appropriate care depends on your
            pet's individual condition.
          </p>
        </div>
      </section>

      {/* Personalized care */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 rounded-3xl bg-slate-900 p-7 text-white sm:p-10 lg:order-1">
            <span className="material-symbols-outlined text-4xl text-teal-300">
              diversity_1
            </span>
            <h3 className="mt-5 font-headline text-2xl font-bold">
              Every pet deserves individual attention.
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Age, breed, lifestyle and medical history can all influence your
              pet's healthcare needs. Sharing these details helps your
              veterinarian understand the bigger picture.
            </p>
            <div className="mt-7">
              <AppointmentButton />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Care tailored to your pet
            </p>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Personalized Pet Health Consultation
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Your pet's age, breed, lifestyle and medical history all
              matter. Our pet health consultation in Mohali focuses on your
              pet's specific needs, helping you understand their condition
              and the appropriate way forward.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We believe good veterinary care starts with listening to both
              pets and their families. We aim to explain recommendations in
              clear, understandable language so you can make informed
              decisions about your companion's care.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-teal-100 bg-teal-50/60 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Care you can understand
            </p>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Veterinary Doctor for Pets You Can Trust
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              At GreenCoatVets, our veterinary team aims to provide
              professional care with a compassionate approach. We take the
              time to explain your pet's condition, available treatment
              options and recommended next steps in simple terms.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our goal is to make veterinary care as clear and comfortable as
              possible for pets and their families.
            </p>
          </div>

          <div className="rounded-3xl border border-white bg-white p-7 shadow-sm sm:p-9">
            <h3 className="font-headline text-xl font-bold text-slate-900">
              Why Choose GreenCoatVets?
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-xl text-teal-700">
                    check_circle
                  </span>
                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pet clinic CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[30px] bg-gradient-to-br from-slate-900 to-teal-950 px-6 py-10 text-center shadow-xl sm:px-12 sm:py-14">
            <span className="material-symbols-outlined text-4xl text-teal-300">
              pets
            </span>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Looking for a Pet Veterinary Clinic in Mohali?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              If your pet has a health concern or simply needs a routine
              check-up, GreenCoatVets is here to help. Contact our team to
              discuss your companion's needs and arrange a consultation.
            </p>
            <div className="mt-8">
              <AppointmentButton>
                Book Your Specialized OPD Appointment
              </AppointmentButton>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Give your pet the care they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Specialized Veterinary OPD FAQs"
            description="Answers to common questions about veterinary consultation and outpatient pet care in Mohali."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-teal-200 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-headline font-bold text-slate-900 marker:hidden">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-teal-700 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 pr-6 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-5 text-slate-600">
              Have another question about your pet's health?
            </p>
            <AppointmentButton />
          </div>
        </div>
      </section>
    </main>
  );
}
