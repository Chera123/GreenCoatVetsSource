import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Shop in Mohali | Pet Food & Supplies | GreenCoatVets";
const pageDescription =
  "Visit the GreenCoatVets pet shop in Mohali for pet food, supplies, toys, leashes and accessories, backed by a veterinary hospital team.";
const pageUrl = "https://www.greencoatvets.com/pet-shop-mohali/";
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
    images: [{ url: "/pet-shop-mohali.jpg", alt: "Pet food, toys, leashes and accessories at the GreenCoatVets pet shop in Mohali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/pet-shop-mohali.jpg"],
  },
};

const faqs = [
  {
    question: "What does the GreenCoatVets pet shop sell?",
    answer:
      "The shop offers everyday supplies for pets such as pet food, toys, leashes and accessories. Please contact the team to check availability of a specific item.",
  },
  {
    question: "Where is the pet shop located?",
    answer:
      "The pet shop is at GreenCoatVets, SCO 20, near Bestech Mall, Industrial Area Phase 9, Mohali, Punjab 160062.",
  },
  {
    question: "Can I get advice on which food is right for my pet?",
    answer:
      "General guidance is available from our team. If your pet has a health condition, allergies or a weight concern, a veterinary consultation is the best way to decide on a diet.",
  },
  {
    question: "How do I choose the right collar or leash size?",
    answer:
      "Choose a size suited to your pet’s neck, weight and strength. A collar should be comfortable but secure, neither slipping off nor pressing uncomfortably on your pet.",
  },
  {
    question: "Should I give my pet medicines I buy without a veterinary prescription?",
    answer:
      "No. Medicines should only be given as advised by a veterinarian, because the right choice and dose depend on your pet’s condition. If your pet is unwell, please book a consultation.",
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

const shopItems = [
  { icon: "restaurant", title: "Pet food", text: "Everyday food options for your pet’s feeding routine." },
  { icon: "health_and_safety", title: "Daily-care supplies", text: "Useful essentials for feeding and routine care." },
  { icon: "sports_baseball", title: "Toys and enrichment", text: "Play items to support activity and engagement." },
  { icon: "pets", title: "Leashes and collars", text: "Walking essentials chosen for a comfortable fit." },
  { icon: "shopping_bag", title: "Pet accessories", text: "Everyday accessories for pets and their owners." },
];

const safetyTips = [
  "Match toy size to your pet so it cannot be swallowed or cause choking.",
  "Avoid toys with small parts that can break off.",
  "Choose a collar or harness that fits securely without being too tight.",
  "Select a leash suited to your pet’s size and strength.",
  "Check toys and accessories regularly and replace worn items.",
];

export default function PetShopMohaliPage() {
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
          <Link href="/" className="text-sm text-slate-600 hover:text-teal-800">Home</Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
          <Link href="/services/" className="text-sm text-slate-600 hover:text-teal-800">Services</Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
          <span aria-current="page" className="text-sm font-semibold text-teal-800">Pet Shop in Mohali</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-bold text-teal-800 shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-base">shopping_bag</span>
              Pet Food &amp; Supplies · Mohali
            </span>
            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Pet Shop in Mohali at GreenCoatVets
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Looking for a pet shop in Mohali where you can pick up everyday supplies for your pet? GreenCoatVets runs a pet shop alongside its veterinary hospital, so you can shop for essentials and speak to a team that works with pets every day.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Find food, toys, leashes and accessories for everyday pet care. Stock can vary, so contact us before visiting if you need a particular item.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={contactUrl}>Contact GreenCoatVets</PrimaryLink>
              <Link href={bookingUrl} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-300 hover:text-teal-800">
                Book an Appointment
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {["Everyday pet essentials", "Veterinary team on site", "Hospital open 24 hours"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="material-symbols-outlined text-lg text-teal-700">check_circle</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 hidden rounded-[2rem] border border-teal-200 lg:block" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-teal-100 shadow-2xl shadow-teal-950/15">
              <Image
                src="/pet-shop-mohali.jpg"
                alt="Pet food, toys, leashes and accessories on display at the GreenCoatVets pet shop in Mohali"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">GreenCoatVets · Mohali</p>
                <p className="mt-2 text-lg font-bold sm:text-xl">Everyday essentials, with veterinary care close by.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: "restaurant", label: "Pet Food" },
                { icon: "toys", label: "Toys" },
                { icon: "pets", label: "Accessories" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-teal-100 bg-white p-3 text-center shadow-sm">
                  <span className="material-symbols-outlined text-2xl text-teal-700">{item.icon}</span>
                  <p className="mt-1 text-xs font-bold text-slate-800 sm:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-[#123d39] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-9 sm:px-6 sm:py-12 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Pet essentials</p>
            <h2 className="mt-3 font-headline text-2xl font-bold leading-tight sm:text-3xl">What You Can Find at Our Pet Shop</h2>
          </div>
          <div className="border-l-2 border-emerald-400 pl-5 sm:pl-7">
            <p className="text-sm leading-7 text-teal-50 sm:text-base">
              Our pet shop in Mohali stocks everyday items for pets, including food, daily-care supplies, toys, leashes, collars and accessories. Stock can vary, so if you are looking for a particular item, please contact the team before you visit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Everyday needs" title="Pet Supplies for Daily Care" description="Explore common essentials for feeding, play, walks and routine care. Contact us to check current stock before making a special trip." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shopItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                  <span aria-hidden="true" className="material-symbols-outlined text-2xl">{item.icon}</span>
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Veterinary team */}
      <section className="bg-[#f3f8f5] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-teal-100 shadow-lg sm:min-h-[380px]">
            <Image
              src="/pet-shop-veterinary-team.jpg"
              alt="Pet owner discussing everyday pet care with the GreenCoatVets team"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Care and convenience" title="Pet Supplies From a Veterinary Hospital Team" />
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Because the shop is part of GreenCoatVets, your pet’s health and everyday needs sit in one place. If you are unsure whether a product suits your pet, you can discuss it with our veterinary team during a consultation, particularly if your pet has a health condition or is on a special diet.
            </p>
            <div className="mt-6 rounded-2xl border border-teal-100 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-bold text-slate-950">Need advice for your pet?</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Our <TextLink href="/specialized-opd-mohali/">Specialized OPD</TextLink> can assess your pet and help you discuss care needs with a veterinarian.</p>
              <div className="mt-5"><PrimaryLink href={bookingUrl}>Book an Appointment</PrimaryLink></div>
            </div>
          </div>
        </div>
      </section>

      {/* Food guidance */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Feeding and nutrition" title="Choosing the Right Pet Food" />
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The right food depends on your pet’s species, age, size and health. Young pets need food suited to growth, adult pets need balanced maintenance diets, and senior pets or pets with medical conditions may have special requirements.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              If you want to change your pet’s food, introduce the new food gradually over several days to avoid digestive upset. If your pet has a health condition, allergies or weight concerns, please speak to a veterinarian before changing the diet. Our <TextLink href="/specialized-opd-mohali/">Specialized OPD</TextLink> can review your pet and advise.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-teal-100 shadow-lg sm:min-h-[380px]">
            <Image
              src="/pet-food-supplies.jpg"
              alt="Pet food and everyday feeding supplies"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Accessories safety */}
      <section className="bg-[#f3f8f5] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Play, walks and comfort" title="Choosing Toys, Leashes and Accessories" description="Choose products that suit your pet’s size, behaviour and strength. A few simple checks can help make everyday items safer to use." />
          </div>
          <ul className="space-y-3">
            {safetyTips.map((tip) => (
              <li key={tip} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
                <span aria-hidden="true" className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-teal-700">check_circle</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Combined visit */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
            <SectionHeading eyebrow="Make the most of your visit" title="Combine a Shop Visit With Your Pet’s Checkup" />
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              If you are visiting for a <TextLink href="/pet-health-checkup-mohali/">routine pet health checkup</TextLink> or a consultation, you can pick up supplies on the same trip. You can also browse all of our hospital’s services on the <TextLink href="/services/">Services page</TextLink>.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={contactUrl}>Contact GreenCoatVets</PrimaryLink>
              <Link href="/services/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-300 hover:text-teal-800">Explore Services</Link>
            </div>
          </div>
          <div className="rounded-3xl bg-teal-50 p-6 sm:p-8">
            <span className="material-symbols-outlined text-3xl text-teal-800">location_on</span>
            <h3 className="mt-3 text-xl font-bold text-slate-950">Visit Our Pet Shop in Mohali</h3>
            <address className="mt-3 not-italic text-sm leading-7 text-slate-700">
              SCO 20, near Bestech Mall,<br />
              Industrial Area Phase 9,<br />
              Mohali, Punjab 160062
            </address>
            <p className="mt-3 text-sm leading-7 text-slate-600">The GreenCoatVets hospital is open 24 hours. Please contact the team to confirm stock and shop timings for specific items.</p>
            <Link href={contactUrl} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-emerald-700">Contact our team <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span></Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f3f8f5] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Your questions answered" title="Frequently Asked Questions" description="Helpful information about visiting the GreenCoatVets pet shop in Mohali." />
          <div className="mt-7 space-y-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-4 open:border-teal-200 open:bg-teal-50/40 sm:p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-bold leading-6 text-slate-900 sm:text-base">
                  <span><span className="mr-2 text-teal-700">{`0${index + 1}.`}</span>{faq.question}</span>
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Pet shop · Mohali</p>
            <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight sm:text-3xl">Plan Your Visit to GreenCoatVets</h2>
            <p className="mt-3 text-sm leading-7 text-teal-50 sm:text-base">Contact our team to check whether your preferred food, toy or accessory is in stock. For veterinary advice, book an appointment with our team.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <PrimaryLink href={contactUrl}>Contact Our Team</PrimaryLink>
            <Link href={bookingUrl} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20">Book an Appointment</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
