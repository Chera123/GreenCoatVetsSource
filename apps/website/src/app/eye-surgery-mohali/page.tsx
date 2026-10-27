
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Veterinary Eye Surgery & Eye Care in Mohali | GreenCoatVets";

const pageDescription =
  "Veterinary eye surgery and pet eye treatment in Mohali at GreenCoatVets. Eye examination, medical and surgical care for pets. Book a consultation.";

const pageUrl =
  "https://www.greencoatvets.com/eye-surgery-mohali/";

const bookingUrl = "https://www.greencoatvets.com/book/";

const images = {
  hero: "/eye-surgery-dog.jpg",
  examination: "/pet-eye-examination.jpg",
  treatment: "/veterinary-eye-treatment.png",
  banner: "/eye-surgery-dog.jpg",
};

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
      "Professional eye surgery, veterinary ophthalmology and pet eye treatment for dogs and cats in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: images.hero,
        alt: "Veterinary eye surgery and eye care for dogs and cats at GreenCoatVets in Mohali",
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

const eyeConditions = [
  { icon: "healing", title: "Eye injuries" },
  { icon: "remove_red_eye", title: "Eyelid problems" },
  { icon: "health_and_safety", title: "Infections and related complications" },
  { icon: "visibility", title: "Conditions affecting the surface of the eye" },
  { icon: "medical_services", title: "Problems that may need surgical correction" },
];

const benefits = [
  { icon: "groups", title: "Experienced veterinary team" },
  { icon: "visibility", title: "Careful eye examination" },
  { icon: "assignment", title: "Personalized treatment planning" },
  { icon: "monitor_heart", title: "Modern diagnostic support" },
  { icon: "medical_services", title: "Surgical and medical eye care" },
  { icon: "favorite", title: "Compassionate care for pets" },
];

const services = [
  {
    icon: "pets",
    title: "Pet Eye Surgery for Dogs & Cats",
    paragraphs: [
      <>
        Our <strong>pet eye surgery</strong> services may be considered for
        conditions such as eye injuries, eyelid problems, certain eye
        infections or complications, conditions affecting the eye surface,
        and eye conditions requiring surgical correction.
      </>,
      <>
        Every case is different, so treatment is planned according to your
        pet&apos;s individual needs.
      </>,
    ],
  },
  {
    icon: "visibility",
    title: "Veterinary Ophthalmology in Mohali",
    paragraphs: [
      <>
        <strong>Veterinary ophthalmology</strong> focuses on diagnosing and
        treating eye conditions in animals. At GreenCoatVets, our team
        provides careful evaluation of eye problems and recommends
        appropriate medical or surgical treatment when required.
      </>,
      <>
        If you notice redness, discharge, swelling, squinting, cloudiness,
        or changes in your pet&apos;s vision, a timely veterinary examination
        is important.
      </>,
    ],
  },
  {
    icon: "pets",
    title: "Dog Eye Surgery in Mohali",
    paragraphs: [
      <>
        Eye problems can develop suddenly or gradually in dogs. Our{" "}
        <strong>dog eye surgery in Mohali</strong> provides professional
        evaluation and surgical care when an eye condition requires it.
      </>,
      <>
        We focus on appropriate treatment, pain management, and supporting
        your dog&apos;s recovery.
      </>,
    ],
  },
  {
    icon: "medical_services",
    title: "Pet Eye Treatment",
    paragraphs: [
      <>
        Not every eye problem requires surgery. Depending on the condition,{" "}
        <strong>pet eye treatment</strong> may include medication, cleaning,
        monitoring, or other veterinary care.
      </>,
      <>
        Our veterinarians assess your pet first and recommend the treatment
        that best suits their condition.
      </>,
    ],
  },
];

const faqs = [
  {
    question: "Do you provide eye surgery for pets in Mohali?",
    answer:
      "Yes. GreenCoatVets provides veterinary eye assessment, treatment and surgical care for pets.",
  },
  {
    question: "What are signs of an eye problem in pets?",
    answer:
      "Redness, swelling, discharge, squinting, a cloudy look, rubbing the eye or signs of reduced vision can all indicate a problem.",
  },
  {
    question: "Does every eye problem need surgery?",
    answer:
      "No. Many conditions are treated with medication, cleaning and monitoring. Surgery is advised only when needed.",
  },
  {
    question: "How should I care for my pet after eye surgery?",
    answer:
      "Follow your veterinarian’s instructions. This usually includes prescribed medicines, preventing rubbing and attending follow-up visits.",
  },
  {
    question: "Should I wait to see if the eye improves?",
    answer:
      "It is best to have eye problems checked early, especially after an injury or if your pet seems to be in pain.",
  },
  {
    question: "Can I use human eye drops for my pet?",
    answer:
      "No. Some human eye drops can harm pets. Please speak to a veterinarian before using any medicine in your pet’s eyes.",
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
    <div>
      {eyebrow && (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-xs">
          {eyebrow}
        </p>
      )}

      <h2 className="font-headline text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>
      )}
    </div>
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
      className={`relative min-w-0 overflow-hidden rounded-xl border border-teal-100 bg-teal-50 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px"
        className="object-cover"
      />
    </div>
  );
}

function AppointmentButton({
  children = "Book an Eye Consultation",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={bookingUrl}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-700 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      <span className="material-symbols-outlined text-lg">
        calendar_month
      </span>
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-teal-100 bg-white px-2 py-3 text-center">
      <span className="material-symbols-outlined text-2xl text-teal-700">
        {icon}
      </span>
      <p className="mt-2 text-xs font-semibold leading-4 text-slate-800">
        {title}
      </p>
    </div>
  );
}

export default function EyeSurgeryMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-600 hover:text-teal-700"
          >
            Home
          </Link>

          <span className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>

          <Link
            href="/#services"
            className="text-sm text-slate-600 hover:text-teal-700"
          >
            Services
          </Link>

          <span className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>

          <span
            aria-current="page"
            className="text-sm font-semibold text-teal-800"
          >
            Eye Surgery
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-7 sm:px-6 sm:py-10 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-semibold text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-base">
                visibility
              </span>
              Veterinary Eye Care · Mohali
            </span>

            <h1 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem]">
              Veterinary Eye Surgery and Eye Care in Mohali
            </h1>

            <h2 className="mt-3 text-base font-bold text-teal-800 sm:text-lg">
              Expert Eye Care for Your Pet
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              Eye problems can be painful and can affect your pet’s vision, so they should not be left to settle on their own. At GreenCoatVets in Mohali, our veterinary team examines pets with eye concerns, recommends treatment and provides surgical care when it is needed.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <AppointmentButton />

              <Link
                href="/contact/"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {[
                "Careful eye examination",
                "Personalized treatment",
                "Compassionate care",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-700"
                >
                  <span className="material-symbols-outlined text-base text-teal-700">
                    check_circle
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Photo
            src={images.hero}
            alt="Veterinarian examining a pet’s eye at GreenCoatVets in Mohali"
            priority
            className="aspect-[4/3] shadow-lg"
          />
        </div>
      </section>

      {/* Veterinary eye surgery */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
          <Photo
            src={images.examination}
            alt="Veterinarian examining a dog's eyes during a veterinary consultation"
            className="aspect-[4/3]"
          />

          <div className="min-w-0">
            <SectionHeading
              eyebrow="Professional veterinary eye care"
              title="Eye Examination and Treatment Planning"
              description="Our veterinary eye surgery in Mohali helps treat eye conditions that may require surgical care."
            />

            <p className="mt-3 text-sm leading-6 text-slate-700">
              The veterinarian will ask about your pet’s history and symptoms and examine the eyes carefully. If more information is needed, further tests may be advised through our{" "}
              <Link href="/veterinary-diagnostics-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">veterinary diagnostics service</Link>. You will then be given a clear treatment plan.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Many eye conditions are managed with medication, cleaning and careful monitoring. Surgery is recommended only when it is the best option for your pet, and your veterinarian will explain why.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              <Feature icon="visibility" title="Eye assessment" />
              <Feature icon="health_and_safety" title="Treatment planning" />
              <Feature icon="favorite" title="Pet comfort" />
            </div>
          </div>
        </div>
      </section>

      {/* Eye conditions */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Recognize the warning signs"
              title="Eye Problems We Assess"
              description="Our veterinary team examines a range of eye concerns and recommends care based on your pet’s symptoms and examination."
            />

            <div className="mt-5 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
              {eyeConditions.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5"
                >
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-teal-700">
                    check_circle
                  </span>
                  <span className="text-sm leading-5 text-slate-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-lg border border-teal-100 bg-white/80 p-3 text-sm leading-6 text-slate-700">
              Every case is different, so treatment is planned according
              to your pet&apos;s individual needs.
            </p>
          </div>

          <Photo
            src={images.treatment}
            alt="Dog receiving a careful veterinary eye examination"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-8 sm:py-11">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-7">
            <SectionHeading
              eyebrow="Know the warning signs"
              title="Warning Signs to Watch For"
              description="Please have your pet seen promptly if you notice any of these signs, particularly after an injury."
            />
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Redness or swelling",
                "Discharge from the eye",
                "Squinting or keeping the eye closed",
                "A cloudy or changed appearance",
                "Rubbing or pawing at the eye",
                "Signs of reduced vision, such as bumping into things",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-amber-800" aria-hidden="true">warning</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <Photo
              src={images.treatment}
              alt="Veterinarian carefully examining a pet's eye at GreenCoatVets in Mohali"
              className="aspect-[4/3] shadow-md"
            />
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Avoid using human eye drops or leftover medicines unless a veterinarian advises you to. Early assessment can help identify the right treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment planning and recovery */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 sm:py-11">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:gap-7 lg:px-8">
          <article className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm sm:p-7">
            <SectionHeading
              eyebrow="Care tailored to your pet"
              title="Not Every Eye Problem Needs Surgery"
              description="Many eye conditions can be managed without an operation."
            />
            <p className="mt-4 text-sm leading-6 text-slate-700">
              Depending on the condition, treatment may include medication, cleaning and careful monitoring. Surgery is recommended only when it is the best option for your pet. Your veterinarian will explain the reasons for the recommendation and the available options.
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
            <SectionHeading
              eyebrow="Aftercare matters"
              title="Eye Surgery and Recovery"
              description="Follow your veterinarian’s instructions to help support healing."
            />
            <ul className="mt-4 space-y-3">
              {[
                "Give prescribed medicines exactly as instructed.",
                "Prevent your pet from rubbing or scratching the eye.",
                "Keep the area clean as advised by your veterinarian.",
                "Attend follow-up visits so healing can be checked.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                  <span className="material-symbols-outlined mt-0.5 text-lg text-teal-700" aria-hidden="true">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Eye protection */}
      <section className="py-8 sm:py-11">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Everyday prevention"
            title="Protecting Your Pet’s Eyes"
            description="Simple precautions can help protect eye health and make changes easier to notice."
          />
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Do not use human eye drops or leftover medicines without veterinary advice.",
              "Keep sharp objects, plants and chemicals away from your pet’s face.",
              "Gently wipe away discharge only as your veterinarian advises.",
              "Have eye changes checked early and include eye checks in regular health visits.",
            ].map((item, index) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">{index + 1}</span>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            For general consultations, visit our{" "}
            <Link href="/specialized-opd-mohali/" className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950">Specialized OPD</Link>.
          </p>
        </div>
      </section>

      {/* Eye care service cards */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-2 lg:gap-4 lg:px-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-200 hover:shadow-md sm:gap-4 sm:p-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 sm:size-14">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  {service.icon}
                </span>
              </span>

              <div className="min-w-0">
                <h2 className="font-headline text-base font-bold leading-snug text-slate-900 sm:text-lg">
                  {service.title}
                </h2>

                {service.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mt-2 text-sm leading-6 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose GreenCoatVets */}
      <section className="border-y border-slate-100 bg-white py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Trusted veterinary eye care"
              title="Why Choose GreenCoatVets?"
              description="We focus on careful evaluation, personalized treatment planning, and compassionate support for pets and their families."
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[68px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition hover:border-teal-200 hover:bg-teal-50 sm:px-4"
              >
                <span className="material-symbols-outlined shrink-0 text-2xl text-teal-700">
                  {item.icon}
                </span>
                <p className="text-sm font-semibold leading-5 text-slate-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment banner */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-800 text-white shadow-lg md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="relative min-h-[180px] md:min-h-full">
              <Image
                src={images.banner}
                alt="Dog receiving attentive veterinary eye care"
                fill
                sizes="(max-width: 767px) 100vw, 280px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:p-8">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-200">
                  Looking for eye surgery for your pet in Mohali?
                </p>

                <h2 className="mt-2 font-headline text-xl font-bold leading-tight sm:text-2xl">
                  Book an Eye Consultation in Mohali
                </h2>

                <p className="mt-3 text-sm leading-6 text-teal-50">
                  If your pet has an eye injury, persistent redness,
                  discharge, swelling, squinting, or another eye concern,
                  don&apos;t ignore it. GreenCoatVets provides professional{" "}
                  <strong>veterinary eye care in Mohali</strong> for dogs
                  and cats.
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  Healthy eyes mean a happier, more comfortable pet.
                </p>
              </div>

              <div className="shrink-0">
                <AppointmentButton>Book Appointment</AppointmentButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-start gap-5 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Veterinary Eye Care FAQs"
              description="Answers to common questions about pet eye symptoms, treatment, surgery and recovery in Mohali."
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-4 transition open:border-teal-200 open:shadow-sm sm:px-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold leading-5 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined shrink-0 text-xl text-teal-700 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}

            <div className="pt-2">
              <AppointmentButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
