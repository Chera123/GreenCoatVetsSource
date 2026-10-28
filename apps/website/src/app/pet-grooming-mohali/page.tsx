import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Grooming in Mohali at a Vet Hospital | GreenCoatVets";
const pageDescription =
  "Pet grooming in Mohali at GreenCoatVets, a veterinary hospital open 24 hours. Coat and hygiene care for pets with veterinary support nearby. Book today.";
const pageUrl = "https://www.greencoatvets.com/pet-grooming-mohali/";
const heroImage = "/pet-grooming-mohali-greencoatvets.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  keywords: [
    "Pet Grooming Mohali",
    "pet grooming services in Mohali",
    "pet bathing and haircut",
    "pet nail trimming",
    "pet ear cleaning",
    "pet grooming near Bestech Mall Mohali",
  ],
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [{ url: heroImage, alt: "Pet being groomed at GreenCoatVets veterinary hospital in Mohali" }],
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
    question: "Where can I get pet grooming near Bestech Mall in Mohali?",
    answer:
      "GreenCoatVets offers pet grooming at SCO 20, near Bestech Mall, Industrial Area Phase 9, Mohali. Contact our team to arrange a visit.",
  },
  {
    question: "Is GreenCoatVets open 24 hours?",
    answer:
      "Yes. GreenCoatVets hospital is open 24 hours. Contact our team to arrange a grooming visit and confirm the available options.",
  },
  {
    question: "Does my pet need to be vaccinated before grooming?",
    answer:
      "Ask our team about requirements when you call. If you are unsure about your pet's vaccination status, see our pet vaccination page or speak to a veterinarian.",
  },
  {
    question: "What happens if a skin or ear problem is found during grooming?",
    answer:
      "Our team will tell you what was noticed, and a veterinarian can examine your pet if needed.",
  },
  {
    question: "Can nervous or older pets be groomed?",
    answer:
      "Tell us about your pet when you call. Our team will discuss your pet's needs and advise on the best approach.",
  },
  {
    question: "How do I book pet grooming?",
    answer:
      "Contact our team or use the online booking page. We will explain what grooming options are available and help arrange your visit.",
  },
];

const groomingServices = [
  {
    number: "01",
    title: "Bathing and drying",
    description: "Help remove dirt, loose hair and everyday odour while keeping your pet's coat clean.",
    icon: "water_drop",
  },
  {
    number: "02",
    title: "Brushing and coat care",
    description: "Reduce tangles and mats with coat care suited to your pet's length and texture of fur.",
    icon: "pets",
  },
  {
    number: "03",
    title: "Trimming and haircuts",
    description: "Keep longer coats manageable with trimming appropriate to your pet's coat and needs.",
    icon: "content_cut",
  },
  {
    number: "04",
    title: "Nail and ear care",
    description: "Support everyday comfort and hygiene with nail trimming and ear cleaning where appropriate.",
    icon: "health_and_safety",
  },
];

const signs = [
  "A matted or tangled coat",
  "Long nails that click on the floor or catch on things",
  "A coat that looks dirty or greasy, or smells even after a wash",
  "Ears that look dirty or smell",
];

const visitTips = [
  "Tell us about your pet's coat, size and temperament.",
  "Mention any skin problems, allergies or existing health conditions.",
  "Let us know if your pet is nervous or older, as they may need a slower approach.",
  "Ask about requirements, such as vaccination status, when you call.",
];

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
    >
      {children}
      <span aria-hidden="true" className="text-lg leading-none">→</span>
    </Link>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition hover:text-teal-950 hover:decoration-teal-700">
      {children}
    </Link>
  );
}

export default function PetGroomingMohaliPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: "GreenCoatVets Pet Grooming",
    url: pageUrl,
    description: pageDescription,
    image: `https://www.greencoatvets.com${heroImage}`,
    telephone: "096085-50006",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCO 20, near Bestech Mall, Industrial Area Phase 9",
      addressLocality: "Sahibzada Ajit Singh Nagar",
      addressRegion: "Punjab",
      postalCode: "160062",
      addressCountry: "IN",
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative isolate bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 rounded-bl-[7rem] bg-teal-100/50 lg:block" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-teal-800">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services/" className="hover:text-teal-800">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-slate-700" aria-current="page">Pet Grooming in Mohali</li>
              </ol>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-800 shadow-sm sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Veterinary hospital · Open 24 hours
            </span>
            <h1 className="mt-6 max-w-2xl font-headline text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
              Pet Grooming in Mohali at a Veterinary Hospital
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A matted coat pulls at the skin. Long nails change how a pet walks. Ears that never get cleaned start to smell. And a coat that stays damp can turn itchy before anyone notices.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Grooming looks like a cosmetic job, but it is really about comfort and hygiene. At GreenCoatVets, pet grooming in Mohali happens inside a veterinary hospital, so a skin or ear problem spotted during a groom does not get ignored. We are open 24 hours, and you can contact our team at any time to arrange a grooming visit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/book/">Book Pet Grooming</PrimaryButton>
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-100">
                Contact Our Team
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-lg text-teal-700">location_on</span> Near Bestech Mall, Mohali</span>
              <span className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-lg text-teal-700">schedule</span> Hospital open 24 hours</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[2rem] border-l-2 border-t-2 border-teal-300 sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-teal-100 shadow-2xl shadow-teal-950/10 sm:rounded-[2.5rem]">
              <Image
                src={heroImage}
                alt="Pet being groomed at GreenCoatVets veterinary hospital in Mohali"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
                <p className="text-lg font-bold text-white sm:text-xl">Comfort, coat care and hygiene</p>
                <p className="mt-1 text-sm text-white/85">With veterinary support close at hand</p>
              </div>
            </div>
            <div className="absolute -bottom-5 right-3 flex max-w-[230px] items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-right-5 sm:max-w-xs sm:p-5">
              <span className="material-symbols-outlined flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-800">health_and_safety</span>
              <div><p className="text-sm font-bold text-slate-900">Veterinary setting</p><p className="mt-1 text-xs leading-5 text-slate-500">Concerns can be referred for assessment</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grooming services */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Everyday coat care</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What Does Pet Grooming Include?</h2>
            <p className="mt-5 leading-7 text-slate-600">Professional pet grooming usually covers bathing and drying, brushing, trimming and nail care, with ear cleaning where needed. What your pet needs depends on its size, coat type and condition. Contact our team to find out which grooming services are available for your pet at GreenCoatVets.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {groomingServices.map((service) => (
              <article key={service.number} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-950/5 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-800 transition group-hover:bg-teal-700 group-hover:text-white"><span className="material-symbols-outlined text-2xl">{service.icon}</span></span>
                  <span className="text-sm font-bold tracking-widest text-slate-300">{service.number}</span>
                </div>
                <h3 className="mt-6 font-headline text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-slate-500">Available options should be confirmed with our team when arranging your visit.</p>
        </div>
      </section>

      {/* Vet hospital difference */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-900 to-emerald-800 p-7 text-white sm:p-10">
            <span className="material-symbols-outlined text-4xl text-teal-200">medical_services</span>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-teal-200">Care beyond the coat</p>
            <h2 className="mt-3 font-headline text-3xl font-bold leading-tight sm:text-4xl">Why Choose Pet Grooming at a Veterinary Hospital in Mohali?</h2>
            <p className="mt-5 leading-7 text-teal-50/90">A groom can be a useful opportunity to notice changes around the skin, ears, paws and coat.</p>
            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="text-sm leading-6 text-teal-50/85">GreenCoatVets is a veterinary hospital, so if something unusual is noticed, our team can advise whether a veterinary examination is needed.</p>
            </div>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-600">A groomer handles every part of your pet. That makes grooming one of the few times someone looks closely at the skin, ears, paws and coat. At a standalone salon, a worrying find means a separate trip to a clinic. At a veterinary hospital, anything unusual can be seen by a veterinarian without you starting again somewhere else.</p>
            <p className="mt-5 text-base leading-8 text-slate-600">A red patch, a lump, a strong ear smell, fleas or ticks are things you would want looked at. If a problem needs more than grooming, our <TextLink href="/specialized-opd-mohali/">Specialized OPD</TextLink> and <TextLink href="/veterinary-skin-treatment-mohali/">skin treatment service</TextLink> are in the same hospital.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/specialized-opd-mohali/">Explore Specialized OPD</PrimaryButton>
              <Link href="/veterinary-skin-treatment-mohali/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-800">Skin Treatment Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Know when to book</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Signs It’s Time to Book a Pet Grooming Visit</h2>
            <p className="mt-5 leading-7 text-slate-600">Routine grooming can help keep your pet's coat and nails manageable. Consider arranging a visit if you notice:</p>
            <ul className="mt-7 space-y-4">
              {signs.map((sign) => <li key={sign} className="flex items-start gap-3"><span className="material-symbols-outlined mt-0.5 text-xl text-teal-700">check_circle</span><span className="leading-7 text-slate-700">{sign}</span></li>)}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-800">info</span>
              <div>
                <h3 className="font-headline text-xl font-bold text-slate-950">When a vet check should come first</h3>
                <p className="mt-3 leading-7 text-slate-700">If your pet is scratching a lot, or has red skin, hair loss or sores, book a veterinary consultation first. That is a medical issue, not a grooming one. Visit our <TextLink href="/veterinary-skin-treatment-mohali/">skin treatment page</TextLink> to learn more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency and price */}
      <section className="bg-emerald-50/70 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:gap-8 lg:px-10">
          <article className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm sm:p-9">
            <span className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-teal-800">calendar_month</span>
            <h2 className="mt-5 font-headline text-2xl font-bold text-slate-950 sm:text-3xl">How Often Should You Groom Your Pet?</h2>
            <p className="mt-4 leading-7 text-slate-600">Most pets need grooming every few weeks to a few months, depending on coat type, length, lifestyle and age. Long or thick coats need regular brushing at home and more frequent professional grooming. Short coats need less. Our team can suggest a schedule that fits your pet.</p>
            <p className="mt-4 leading-7 text-slate-600">Grooming also pairs well with a routine <TextLink href="/pet-health-checkup-mohali/">pet health checkup</TextLink>.</p>
          </article>
          <article className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm sm:p-9">
            <span className="material-symbols-outlined flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-teal-800">payments</span>
            <h2 className="mt-5 font-headline text-2xl font-bold text-slate-950 sm:text-3xl">How Much Does Pet Grooming Cost in Mohali?</h2>
            <p className="mt-4 leading-7 text-slate-600">The price depends on your pet's size, coat condition and the type of grooming needed. Contact GreenCoatVets and our team will explain the available options and the cost.</p>
            <div className="mt-6"><PrimaryButton href="/contact/">Ask About Grooming Costs</PrimaryButton></div>
          </article>
        </div>
      </section>

      {/* Before visit */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">A little preparation helps</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Before Your Grooming Visit</h2>
            <p className="mt-4 leading-7 text-slate-600">Sharing a few details when you contact us can help the team understand your pet's needs before the visit.</p>
            <ul className="mt-7 space-y-4">
              {visitTips.map((tip) => <li key={tip} className="flex items-start gap-3"><span className="material-symbols-outlined mt-0.5 text-xl text-teal-700">task_alt</span><span className="leading-7 text-slate-700">{tip}</span></li>)}
            </ul>
            <p className="mt-6 leading-7 text-slate-600">Not sure about your pet's vaccination status? See our <TextLink href="/pet-vaccination-mohali/">pet vaccination page</TextLink> or speak to a veterinarian.</p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-7 text-white sm:p-9">
            <span className="material-symbols-outlined text-4xl text-teal-300">pets</span>
            <h3 className="mt-5 font-headline text-2xl font-bold sm:text-3xl">Let’s plan a comfortable visit</h3>
            <p className="mt-4 leading-7 text-slate-300">Tell our team about your pet's coat, age and temperament. We can explain what services may be suitable and how to arrange your visit.</p>
            <div className="mt-7"><PrimaryButton href="/contact/">Contact Our Team</PrimaryButton></div>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-200">Visit GreenCoatVets</p>
              <h2 className="mt-3 max-w-3xl font-headline text-3xl font-bold tracking-tight sm:text-4xl">Book Pet Grooming in Mohali</h2>
              <p className="mt-5 max-w-3xl leading-7 text-teal-50/90">GreenCoatVets is at SCO 20, near Bestech Mall, Industrial Area Phase 9, Mohali. The hospital is open 24 hours. Contact our team to arrange a grooming visit, or book online.</p>
              <p className="mt-4 text-sm text-teal-100">SCO 20, near Bestech Mall, Industrial Area Phase 9, Sahibzada Ajit Singh Nagar, Punjab 160062</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <PrimaryButton href="/book/">Book an Appointment</PrimaryButton>
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Helpful answers</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Pet Grooming in Mohali: FAQs</h2>
          </div>
          <div className="mt-9 space-y-4 sm:mt-12">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-teal-200 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-headline font-bold text-slate-900 marker:hidden">
                  <span className="flex gap-3"><span className="text-teal-700">{String(index + 1).padStart(2, "0")}</span>{faq.question}</span>
                  <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-teal-700 transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-4 pl-9 text-sm leading-7 text-slate-600">
                  {index === 2 ? <>Ask our team about requirements when you call. If you are unsure about your pet's vaccination status, see our <TextLink href="/pet-vaccination-mohali/">pet vaccination page</TextLink> or speak to a veterinarian.</> : index === 5 ? <>Contact our team or use the <TextLink href="/book/">booking page</TextLink>. We will explain what is available and arrange your visit.</> : faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-5 text-slate-600">Have a question about grooming for your pet?</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href="/book/">Book Pet Grooming</PrimaryButton>
              <Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-800">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );  
}
