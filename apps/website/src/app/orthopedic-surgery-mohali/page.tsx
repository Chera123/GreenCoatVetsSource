
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle =
  "Veterinary Orthopedic Surgery in Mohali | GreenCoatVets";

const pageDescription =
  "Looking for orthopedic care for your pet in Mohali? GreenCoatVets provides veterinary orthopedic surgery, pet fracture treatment and compassionate surgical care.";

const pageUrl =
  "https://www.greencoatvets.com/orthopedic-surgery-mohali/";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description:
      "Professional orthopedic surgery, fracture treatment and specialized care for dogs and cats in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: "/orthopedic-surgery-mohali.png",
        alt: "Veterinary orthopedic surgery for dogs and cats at GreenCoatVets in Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/orthopedic-surgery-mohali.png"],
  },
};

const conditions = [
  {
    icon: "orthopedics",
    title: "Bone fractures",
    description:
      "Assessment and treatment planning for broken bones and suspected fractures.",
  },
  {
    icon: "accessibility_new",
    title: "Joint injuries",
    description:
      "Evaluation of joint pain, swelling and movement difficulties.",
  },
  {
    icon: "healing",
    title: "Dislocations",
    description:
      "Assessment of injuries that affect normal joint positioning.",
  },
  {
    icon: "monitor_heart",
    title: "Ligament injuries",
    description:
      "Evaluation of ligament damage and its effect on stability and movement.",
  },
  {
    icon: "emergency",
    title: "Trauma-related injuries",
    description:
      "Assessment of orthopedic problems following falls, accidents or trauma.",
  },
  {
    icon: "directions_walk",
    title: "Mobility problems",
    description:
      "Investigation of limping, discomfort and difficulty walking.",
  },
];

const benefits = [
  {
    icon: "groups",
    title: "Experienced veterinary team",
  },
  {
    icon: "monitor_heart",
    title: "Modern diagnostic support",
  },
  {
    icon: "assignment",
    title: "Personalized treatment planning",
  },
  {
    icon: "medical_services",
    title: "Comprehensive surgical care",
  },
  {
    icon: "favorite",
    title: "Post-operative guidance",
  },
  {
    icon: "pets",
    title: "Compassionate pet care",
  },
];

const faqs = [
  {
    question: "When does a pet need orthopedic surgery?",
    answer:
      "Surgery may be recommended for certain fractures, joint injuries, ligament problems and other conditions that require surgical treatment. Your veterinarian will assess the injury and discuss suitable options.",
  },
  {
    question: "Do you provide dog orthopedic surgery in Mohali?",
    answer:
      "GreenCoatVets provides orthopedic evaluation and treatment planning for dogs in Mohali. Surgical recommendations depend on your dog's individual condition and the available treatment options.",
  },
  {
    question: "How is pet fracture treatment decided?",
    answer:
      "Treatment depends on the location and severity of the fracture, along with your pet's overall health and specific needs. Assessment may include diagnostic imaging, stabilization, surgery when indicated, medication and follow-up care.",
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

function AppointmentButton({
  children = "Book an Orthopedic Consultation",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
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
    <div className="mb-10 max-w-3xl">
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

export default function OrthopedicSurgeryMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
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

            <li>
              <Link
                href="/#services"
                className="transition hover:text-teal-700"
              >
                Services
              </Link>
            </li>

            <li aria-hidden="true">
              <span className="material-symbols-outlined text-base">
                chevron_right
              </span>
            </li>

            <li
              aria-current="page"
              className="font-semibold text-teal-800"
            >
              Orthopedic Surgery
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-lg">
                orthopedics
              </span>
              Veterinary Orthopedic Surgery · Mohali
            </span>

            <h1 className="mt-6 font-headline text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Orthopedic Surgery in Mohali for Dogs &amp; Cats
            </h1>

            <p className="mt-5 text-xl font-semibold text-teal-800">
              Expert Orthopedic Care for Your Pet in Mohali
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              At GreenCoatVets, we provide professional orthopedic care
              for dogs and cats in Mohali. From fractures and joint
              injuries to mobility problems, our veterinary team focuses
              on accurate diagnosis, appropriate treatment and comfortable
              recovery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppointmentButton />

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
              {[
                "Dogs and cats",
                "Diagnostic support",
                "Recovery guidance",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-teal-700">
                    check_circle
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Orthopedic hero image */}
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-3 rounded-[30px] bg-teal-200/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-2xl shadow-slate-900/10">
              <Image
                src="/orthopedic-surgery-mohali.png"
                alt="Veterinary orthopedic surgery for dogs and cats at GreenCoatVets in Mohali"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="aspect-[4/3] w-full rounded-[20px] object-cover"
              />
            </div>

            <div className="relative mx-4 -mt-5 rounded-2xl border border-teal-100 bg-white p-4 shadow-lg sm:mx-7">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined rounded-xl bg-teal-50 p-2 text-2xl text-teal-700">
                  favorite
                </span>

                <div>
                  <p className="font-headline font-bold text-slate-900">
                    Compassionate Surgical Care
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Helping your pet move comfortably again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veterinary orthopedic surgery */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-teal-50">
            <Image
              src="/orthopedic-surgery-mohali.png"
              alt="Veterinary team providing orthopedic assessment and care for an injured dog"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 550px"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Specialized orthopedic care"
              title="Veterinary Orthopedic Surgery in Mohali"
            />

            <p className="-mt-5 leading-8 text-slate-600">
              Our veterinary orthopedic surgery in Mohali helps treat
              conditions affecting your pet&apos;s bones, joints, ligaments
              and movement.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Every case is carefully evaluated before surgery is
              recommended. When needed, diagnostic imaging helps our
              veterinary team understand the condition and plan the
              appropriate treatment.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: "stethoscope", label: "Accurate diagnosis" },
                { icon: "monitor_heart", label: "Diagnostic imaging" },
                { icon: "medical_services", label: "Surgical treatment" },
                { icon: "favorite", label: "Recovery guidance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-teal-100 bg-teal-50/70 p-4 text-center"
                >
                  <span className="material-symbols-outlined text-2xl text-teal-700">
                    {item.icon}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-5 text-slate-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Orthopedic care for dogs and cats"
            title="Pet Orthopedic Surgery for Dogs & Cats"
            description="Our pet orthopedic surgery services in Mohali may help with the following conditions. Treatment is planned according to your pet's individual condition and health needs."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5"
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

          <p className="mt-7 text-sm leading-6 text-slate-500">
            Not every orthopedic condition requires surgery. Your
            veterinarian will recommend an appropriate approach after
            assessing your pet.
          </p>
        </div>
      </section>

      {/* Dog orthopedic surgery and fracture treatment */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 p-7 sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
              <span className="material-symbols-outlined text-3xl">
                pets
              </span>
            </div>

            <h2 className="mt-5 font-headline text-2xl font-bold text-slate-900">
              Dog Orthopedic Surgery in Mohali
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Injuries, accidents, falls and joint problems can make it
              difficult for dogs to walk or stay active. Our dog orthopedic
              surgery in Mohali provides professional evaluation and
              surgical care when an orthopedic condition requires it.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Our focus is on appropriate treatment, pain management and
              supporting your dog&apos;s recovery.
            </p>

            <div className="mt-6">
              <AppointmentButton />
            </div>
          </article>

          <article className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-7 sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-800 shadow-sm">
              <span className="material-symbols-outlined text-3xl">
                orthopedics
              </span>
            </div>

            <h2 className="mt-5 font-headline text-2xl font-bold text-slate-900">
              Veterinary Bone Surgery &amp; Pet Fracture Treatment
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A fracture needs proper assessment to support healthy
              healing. Our veterinary bone surgery in Mohali provides
              surgical treatment when required.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              For pet fracture treatment in Mohali, our veterinarians
              assess the type and severity of the injury before
              recommending an appropriate approach, which may include
              imaging, stabilization, surgery, medication and follow-up
              care.
            </p>
          </article>
        </div>
      </section>

      {/* Why choose GreenCoatVets */}
      <section className="border-y border-teal-100 bg-teal-50/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trusted orthopedic care"
            title="Why Choose GreenCoatVets?"
            description="We aim to provide professional, compassionate and carefully planned orthopedic care for dogs and cats in Mohali."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white bg-white p-5 text-center shadow-sm"
              >
                <span className="material-symbols-outlined text-3xl text-teal-700">
                  {item.icon}
                </span>
                <p className="mt-3 text-sm font-semibold leading-5 text-slate-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final appointment CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-900 to-teal-950 lg:grid-cols-[1fr_auto]">
            <div className="p-8 sm:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">
                Orthopedic care for your pet in Mohali
              </p>

              <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Orthopedic Care for Your Pet in Mohali
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                If your pet is limping, experiencing pain, has suffered an
                injury or is having difficulty walking, do not ignore the
                signs. GreenCoatVets provides professional pet orthopedic
                care in Mohali with a focus on your pet&apos;s comfort
                and recovery.
              </p>

              <div className="mt-8">
                <AppointmentButton>
                  Book Your Orthopedic Consultation
                </AppointmentButton>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Help your pet move comfortably again.
              </p>
            </div>

            <div className="hidden items-center justify-center px-10 lg:flex">
              <span className="material-symbols-outlined text-8xl text-teal-300/80">
                pets
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Orthopedic Surgery FAQs"
            description="Answers to common questions about veterinary orthopedic surgery and fracture treatment in Mohali."
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
            <AppointmentButton />
          </div>
        </div>
      </section>
    </main>
  );
}
