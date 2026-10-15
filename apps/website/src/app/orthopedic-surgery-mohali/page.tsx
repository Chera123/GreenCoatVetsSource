
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
  alternates: { canonical: pageUrl },
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
        url: "/orthopedic-surgery-hero.png",
        alt: "Veterinary orthopedic care for dogs at GreenCoatVets in Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/orthopedic-surgery-hero.png"],
  },
};

const conditions = [
  { icon: "healing", title: "Bone fractures" },
  { icon: "accessibility_new", title: "Joint injuries" },
  { icon: "orthopedics", title: "Dislocations" },
  { icon: "monitor_heart", title: "Ligament injuries" },
  { icon: "emergency", title: "Trauma-related orthopedic problems" },
  { icon: "directions_walk", title: "Mobility problems" },
];

const benefits = [
  { icon: "groups", title: "Experienced veterinary team" },
  { icon: "monitor_heart", title: "Modern diagnostic support" },
  { icon: "assignment", title: "Personalized treatment planning" },
  { icon: "medical_services", title: "Comprehensive surgical care" },
  { icon: "favorite", title: "Post-operative guidance" },
  { icon: "pets", title: "Compassionate pet care" },
];

const faqs = [
  {
    question: "When does a pet need orthopedic surgery?",
    answer:
      "Surgery may be recommended for certain fractures, joint injuries, ligament problems and other conditions requiring surgical treatment. Your veterinarian will assess the injury and discuss appropriate treatment options.",
  },
  {
    question: "Do you provide dog orthopedic surgery in Mohali?",
    answer:
      "GreenCoatVets provides orthopedic evaluation and treatment planning for dogs in Mohali. Surgical recommendations depend on your dog's individual condition and treatment needs.",
  },
  {
    question: "How is pet fracture treatment decided?",
    answer:
      "Treatment depends on the location and severity of the fracture, your pet's overall health and individual needs. Assessment may include diagnostic imaging, stabilization, surgery when indicated, medication and follow-up care.",
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

function BookButton({
  children = "Book an Orthopedic Consultation",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

function Heading({
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
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
        {eyebrow}
      </p>
      <h2 className="font-headline text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
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

export default function OrthopedicSurgeryMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-100 bg-slate-50"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-3 text-sm text-slate-500 sm:px-8">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span className="material-symbols-outlined text-base">
            chevron_right
          </span>
          <Link href="/#services" className="hover:text-teal-700">
            Services
          </Link>
          <span className="material-symbols-outlined text-base">
            chevron_right
          </span>
          <span aria-current="page" className="font-semibold text-teal-800">
            Orthopedic Surgery
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-2 text-xs font-semibold text-teal-800">
              <span className="material-symbols-outlined text-base">
                orthopedics
              </span>
              Veterinary Orthopedic Care · Mohali
            </span>

            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Orthopedic Surgery in Mohali for Dogs &amp; Cats
            </h1>

            <h2 className="mt-4 text-lg font-bold leading-snug text-teal-800">
              Expert Orthopedic Care for Your Pet in Mohali
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              At GreenCoatVets, we provide professional orthopedic care for
              dogs and cats in Mohali. From fractures and joint injuries to
              mobility problems, our veterinary team focuses on accurate
              diagnosis, appropriate treatment and comfortable recovery.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton />
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-600">
              {["Dogs and cats", "Diagnostic support", "Recovery guidance"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-teal-700">
                      check_circle
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-teal-200/50 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-xl">
              <Image
                src="/orthopedic-surgery-hero.png"
                alt="Veterinary orthopedic surgery for dogs and cats at GreenCoatVets in Mohali"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-5">
              <p className="font-headline font-bold text-slate-900">
                Compassionate Orthopedic Care
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Supporting comfort, mobility and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orthopedic surgery introduction */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <Image
              src="/orthopedic-dog-fracture-care.png"
              alt="Veterinarian examining a dog's bandaged leg during orthopedic follow-up care"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <Heading
              eyebrow="Specialized veterinary services"
              title="Veterinary Orthopedic Surgery in Mohali"
              description="Our veterinary orthopedic surgery in Mohali helps address conditions affecting your pet's bones, joints, ligaments and movement."
            />

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Every case is carefully evaluated before surgery is
              recommended. When needed, diagnostic imaging helps our
              veterinary team understand the condition and plan appropriate
              treatment.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: "search", label: "Accurate diagnosis" },
                { icon: "monitor_heart", label: "Diagnostic imaging" },
                { icon: "medical_services", label: "Treatment planning" },
                { icon: "favorite", label: "Recovery guidance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-teal-100 bg-teal-50/70 p-3 text-center"
                >
                  <span className="material-symbols-outlined text-2xl text-teal-700">
                    {item.icon}
                  </span>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading
            eyebrow="Pet orthopedic care in Mohali"
            title="Conditions We Treat"
            description="Our orthopedic services focus on evaluating injuries and mobility concerns in dogs and cats."
            centered
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-white bg-white/90 p-4 shadow-sm"
              >
                <span className="material-symbols-outlined flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-xl text-teal-700">
                  {item.icon}
                </span>
                <h3 className="text-sm font-semibold text-slate-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-slate-600">
            The appropriate treatment depends on the diagnosis, injury
            severity and your pet&apos;s overall health.
          </p>
        </div>
      </section>

      {/* Dog and cat care */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <Image
              src="/orthopedic-dog-fracture-care.png"
              alt="Dog receiving veterinary orthopedic assessment for a leg injury"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="aspect-[16/8] w-full object-cover"
            />
            <div className="p-6">
              <h2 className="font-headline text-xl font-bold text-slate-900">
                Dog Orthopedic Surgery in Mohali
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Injuries, accidents, falls and joint problems can make it
                difficult for dogs to walk or stay active. Our veterinary
                team evaluates the condition and discusses surgical care
                when an orthopedic problem requires it.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Our focus is on appropriate treatment, pain management and
                supporting your dog&apos;s recovery.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-teal-100 bg-teal-50/50 shadow-sm">
            <Image
              src="/orthopedic-cat-care.png"
              alt="Veterinarian gently examining a cat's bandaged paw"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="aspect-[16/8] w-full object-cover"
            />
            <div className="p-6">
              <h2 className="font-headline text-xl font-bold text-slate-900">
                Veterinary Bone Surgery &amp; Pet Fracture Treatment
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A fracture needs proper assessment to support healthy
                healing. Our veterinary team evaluates the type and severity
                of the injury before recommending an appropriate approach.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Treatment may involve diagnostic imaging, stabilization,
                surgery when indicated, medication and follow-up care.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-slate-100 bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Heading
              eyebrow="Trusted pet care"
              title="Why Choose GreenCoatVets?"
              description="We aim to provide professional, compassionate and carefully planned orthopedic care for pets in Mohali."
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <span className="material-symbols-outlined text-xl text-teal-700">
                  {item.icon}
                </span>
                <p className="text-xs font-semibold leading-5 text-slate-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment banner */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-800 p-6 text-white sm:p-9">
            <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

            <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-200">
                  Orthopedic care for dogs and cats
                </p>
                <h2 className="mt-3 font-headline text-2xl font-bold sm:text-3xl">
                  Book Your Orthopedic Consultation Today
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-teal-50/90">
                  If your pet is limping, experiencing pain, has suffered an
                  injury or is having difficulty walking, contact our team
                  to discuss the next steps. Prompt veterinary assessment
                  can help determine the appropriate care.
                </p>
                <p className="mt-3 text-sm font-semibold text-white">
                  Help your pet move comfortably again.
                </p>
              </div>

              <div>
                <BookButton>Book Appointment</BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Heading
            eyebrow="Frequently asked questions"
            title="Orthopedic Surgery FAQs"
            description="Learn more about veterinary orthopedic surgery and fracture treatment in Mohali."
          />

          <div className="mt-7 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5 open:border-teal-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 marker:hidden">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-teal-700 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8">
            <BookButton />
          </div>
        </div>
      </section>
    </main>
  );
}
