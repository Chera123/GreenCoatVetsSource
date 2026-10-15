
import type { Metadata } from "next";
import type { ReactNode } from "react";
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
        alt: "Veterinary orthopedic surgery for dogs and cats at GreenCoatVets in Mohali",
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
      "Surgery may be recommended for certain fractures, joint injuries, ligament problems, and other conditions that require surgical treatment.",
  },
  {
    question: "Do you provide dog orthopedic surgery in Mohali?",
    answer:
      "GreenCoatVets provides orthopedic evaluation and treatment planning for dogs in Mohali. Surgical recommendations depend on your dog's individual condition and treatment needs.",
  },
  {
    question: "How is pet fracture treatment decided?",
    answer:
      "Treatment depends on the location and severity of the fracture, along with your pet's overall health and specific needs. Assessment may include diagnostic imaging, stabilization, surgery when indicated, medication, and follow-up care.",
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
  children?: ReactNode;
}) {
  return (
    <Link
      href="/book"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      {eyebrow && (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-xs">
          {eyebrow}
        </p>
      )}
      <h2 className="font-headline text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-xs leading-5 text-slate-600 sm:text-sm">
      <span className="material-symbols-outlined mt-0.5 text-base text-teal-700">
        check_circle
      </span>
      <span>{children}</span>
    </li>
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
        className="border-b border-slate-100 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs sm:px-6 lg:px-8">
          <Link href="/" className="text-slate-500 hover:text-teal-700">
            Home
          </Link>
          <span className="material-symbols-outlined text-sm text-slate-400">
            chevron_right
          </span>
          <Link
            href="/#services"
            className="text-slate-500 hover:text-teal-700"
          >
            Services
          </Link>
          <span className="material-symbols-outlined text-sm text-slate-400">
            chevron_right
          </span>
          <span aria-current="page" className="font-semibold text-teal-800">
            Orthopedic Surgery
          </span>
        </div>
      </nav>

      {/* Hero: text left, surgery image right */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-7 sm:px-6 sm:py-10 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-white px-3 py-1.5 text-[10px] font-semibold text-teal-800 shadow-sm sm:text-xs">
              <span className="material-symbols-outlined text-sm">
                medical_services
              </span>
              Veterinary Orthopedic Care · Mohali
            </span>

            <h1 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Orthopedic Surgery in Mohali for Dogs &amp; Cats
            </h1>

            <p className="mt-3 text-sm font-bold text-teal-800 sm:text-base">
              Expert Orthopedic Care for Your Pet in Mohali
            </p>

            <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              At GreenCoatVets, we provide professional orthopedic care
              for dogs and cats in Mohali. From fractures and joint injuries
              to mobility problems, our veterinary team focuses on accurate
              diagnosis, appropriate treatment, and comfortable recovery.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <BookButton />
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800 sm:text-sm"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {["Dogs and cats", "Diagnostic support"].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1 text-[10px] font-medium text-slate-600 sm:text-xs"
                >
                  <span className="material-symbols-outlined text-sm text-teal-700">
                    check_circle
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -inset-1 rounded-2xl bg-teal-200/60 blur-lg" />
            <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
              <Image
                src="/orthopedic-surgery-hero.png"
                alt="Veterinary orthopedic surgery for dogs and cats at GreenCoatVets in Mohali"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction: dog image left, content right */}
      <section className="py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-9 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-slate-100">
            <Image
              src="/orthopedic-dog-fracture-care.png"
              alt="Dog receiving veterinary orthopedic assessment for a leg injury"
              width={1536}
              height={1024}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <SectionTitle
              eyebrow="Specialized veterinary services"
              title="Veterinary Orthopedic Surgery in Mohali"
            />

            <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Our <strong>veterinary orthopedic surgery in Mohali</strong>{" "}
              helps treat conditions affecting your pet&apos;s bones,
              joints, ligaments, and movement.
            </p>

            <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Every case is carefully evaluated before surgery is
              recommended. When needed, diagnostic imaging helps our
              veterinary team understand the condition and plan appropriate
              treatment.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { icon: "search", label: "Accurate diagnosis" },
                { icon: "monitor_heart", label: "Diagnostic imaging" },
                { icon: "medical_services", label: "Treatment planning" },
                { icon: "favorite", label: "Recovery guidance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-teal-100 bg-teal-50/70 px-2 py-3 text-center"
                >
                  <span className="material-symbols-outlined text-xl text-teal-700">
                    {item.icon}
                  </span>
                  <p className="mt-1 text-[10px] font-semibold leading-4 text-slate-700 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions panel */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Pet orthopedic care in Mohali"
            title="Conditions We Treat"
            description="Our orthopedic services focus on evaluating injuries and mobility concerns in dogs and cats."
            centered
          />

          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((item) => (
              <div
                key={item.title}
                className="flex min-h-12 items-center gap-3 rounded-lg border border-white bg-white/90 px-3 py-2.5 shadow-sm"
              >
                <span className="material-symbols-outlined flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-lg text-teal-700">
                  {item.icon}
                </span>
                <h3 className="text-xs font-semibold text-slate-800 sm:text-sm">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
            Treatment is planned according to your pet&apos;s individual
            condition and health needs.
          </p>
        </div>
      </section>

      {/* Two service cards with separate dog and cat images */}
      <section className="py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-teal-200 hover:shadow-md">
            <Image
              src="/orthopedic-dog-fracture-care.png"
              alt="Veterinarian examining a dog with a leg injury"
              width={1536}
              height={1024}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="aspect-[16/8] w-full object-cover"
            />

            <div className="p-4 sm:p-5">
              <h2 className="font-headline text-base font-bold text-slate-900 sm:text-lg">
                Dog Orthopedic Surgery in Mohali
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                Injuries, accidents, falls, and joint problems can make it
                difficult for dogs to walk or stay active. Our{" "}
                <strong>dog orthopedic surgery in Mohali</strong> provides
                professional evaluation and surgical care when an
                orthopedic condition requires it.
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                Our focus is on appropriate treatment, pain management, and
                supporting your dog&apos;s recovery.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-xl border border-teal-100 bg-white transition hover:shadow-md">
            <Image
              src="/orthopedic-cat-care.png"
              alt="Veterinarian carefully bandaging a cat's paw during orthopedic care"
              width={1536}
              height={1024}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="aspect-[16/8] w-full object-cover"
            />

            <div className="p-4 sm:p-5">
              <h2 className="font-headline text-base font-bold text-slate-900 sm:text-lg">
                Veterinary Bone Surgery &amp; Pet Fracture Treatment
              </h2>

              <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                A fracture needs proper assessment to support healthy
                healing. Our{" "}
                <strong>veterinary bone surgery in Mohali</strong> provides
                surgical treatment when required.
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                For <strong>pet fracture treatment in Mohali</strong>, our
                veterinarians assess the type and severity of the injury
                before recommending appropriate treatment, which may
                include imaging, stabilization, surgery, medication, and
                follow-up care.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-slate-100 bg-white py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl items-start gap-5 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionTitle
              eyebrow="Trusted pet care"
              title="Why Choose GreenCoatVets?"
              description="We aim to provide professional and compassionate orthopedic care for pets in Mohali."
            />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex min-h-14 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3"
              >
                <span className="material-symbols-outlined text-xl text-teal-700">
                  {item.icon}
                </span>
                <p className="text-[10px] font-semibold leading-4 text-slate-700 sm:text-xs">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact appointment banner */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-900 to-emerald-800 p-5 text-white sm:p-7">
            <div className="relative grid items-center gap-5 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-200">
                  Orthopedic care for dogs and cats
                </p>

                <h2 className="mt-2 font-headline text-xl font-bold sm:text-2xl">
                  Book Your Orthopedic Consultation Today
                </h2>

                <p className="mt-2 max-w-2xl text-xs leading-6 text-teal-50/90 sm:text-sm">
                  If your pet is limping, experiencing pain, has suffered
                  an injury, or is having difficulty walking, do not ignore
                  the signs. GreenCoatVets provides professional{" "}
                  <strong>pet orthopedic care in Mohali</strong> with a
                  focus on your pet&apos;s comfort and recovery.
                </p>

                <p className="mt-2 text-xs font-semibold text-teal-100">
                  Help your pet move comfortably again.
                </p>
              </div>

              <div className="md:pl-4">
                <BookButton>Book Appointment</BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Frequently asked questions"
            title="Orthopedic Surgery FAQs"
            description="Learn more about orthopedic surgery and pet fracture treatment in Mohali."
          />

          <div className="mt-5 max-w-4xl space-y-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-slate-200 bg-white px-4 py-3 open:border-teal-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-semibold text-slate-900 sm:text-sm">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-lg text-teal-700 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <p className="mt-3 border-t border-slate-100 pt-3 text-xs leading-6 text-slate-600 sm:text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-5">
            <BookButton />
          </div>
        </div>
      </section>
    </main>
  );
}
