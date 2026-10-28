import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Grooming in Mohali at a Vet Hospital | GreenCoatVets";
const pageDescription = "Pet grooming in Mohali at GreenCoatVets, a veterinary hospital open 24 hours. Coat and hygiene care for pets with veterinary support nearby. Book today.";
const pageUrl = "https://www.greencoatvets.com/pet-grooming-mohali/";
const heroImage = "/pet-grooming-mohali-greencoatvets.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  keywords: ["Pet Grooming Mohali", "pet grooming services in Mohali", "pet bathing and haircut", "pet nail trimming", "pet ear cleaning", "pet grooming near Bestech Mall Mohali"],
  openGraph: { type: "website", url: pageUrl, title: pageTitle, description: pageDescription, siteName: "GreenCoatVets", locale: "en_IN", images: [{ url: heroImage, alt: "Pet being groomed at GreenCoatVets veterinary hospital in Mohali" }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [heroImage] },
};

const faqs = [
  { question: "Where can I get pet grooming near Bestech Mall in Mohali?", answer: "GreenCoatVets offers pet grooming at SCO 20, near Bestech Mall, Industrial Area Phase 9, Mohali." },
  { question: "Is GreenCoatVets open 24 hours?", answer: "Yes. The hospital is open 24 hours. Contact our team to arrange a grooming visit." },
  { question: "Does my pet need to be vaccinated before grooming?", answer: "Ask our team about requirements when you call. If you are unsure about your pet's vaccination status, see our pet vaccination page or speak to a veterinarian." },
  { question: "What happens if a skin or ear problem is found during grooming?", answer: "We'll tell you what was noticed, and a veterinarian can examine your pet if needed." },
  { question: "Can nervous or older pets be groomed?", answer: "Tell us about your pet when you call. Our team will advise on the best approach." },
  { question: "How do I book pet grooming?", answer: "Contact our team or use the booking page. We'll explain what's available and arrange your visit." },
];

const services = [
  { number: "01", icon: "water_drop", title: "Bathing & drying", text: "Help remove dirt, loose hair and everyday odour while keeping your pet's coat clean." },
  { number: "02", icon: "pets", title: "Brushing & coat care", text: "Reduce tangles and mats with care suited to your pet's coat length and texture." },
  { number: "03", icon: "content_cut", title: "Trimming & haircuts", text: "Keep longer coats manageable with trimming appropriate to your pet's needs." },
  { number: "04", icon: "health_and_safety", title: "Nail & ear care", text: "Support comfort and hygiene with nail trimming and ear cleaning where appropriate." },
];
const signs = ["A matted or tangled coat", "Long nails that click on the floor or catch on things", "A coat that looks dirty or greasy, or smells even after a wash", "Ears that look dirty or smell"];
const visitTips = ["Tell us about your pet's coat, size and temperament.", "Mention any skin problems, allergies or health conditions.", "Let us know if your pet is nervous or older and may need a slower approach.", "Ask about requirements, such as vaccination status, when you call."];

function Button({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-5 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200 ${light ? "border border-white/35 bg-white/10 text-white hover:bg-white/20" : "bg-amber-400 text-slate-950 shadow-sm hover:bg-amber-300"}`}>{children}<span aria-hidden="true">↗</span></Link>;
}    
function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950">{children}</Link>;
}

export default function PetGroomingMohaliPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  const businessSchema = {
    "@context": "https://schema.org", "@type": "VeterinaryCare", name: "GreenCoatVets", url: pageUrl, description: pageDescription,
    image: `https://www.greencoatvets.com${heroImage}`, telephone: "096085-50006",
    address: { "@type": "PostalAddress", streetAddress: "SCO 20, near Bestech Mall, Industrial Area Phase 9", addressLocality: "Sahibzada Ajit Singh Nagar", addressRegion: "Punjab", postalCode: "160062", addressCountry: "IN" },
  };

  return <main className="overflow-hidden bg-[#fbfaf6] text-slate-800">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    {/* Hero */}
    <section className="relative bg-[#123f35] text-white">
      <div aria-hidden="true" className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/10 sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-emerald-300/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <nav aria-label="Breadcrumb" className="mb-10 text-xs font-medium text-emerald-100/80 sm:text-sm"><ol className="flex flex-wrap items-center gap-2"><li><Link href="/" className="hover:text-white">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services/" className="hover:text-white">Services</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-white">Pet Grooming in Mohali</li></ol></nav>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/25 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-emerald-100 sm:text-sm"><span className="h-2 w-2 rounded-full bg-amber-400" /> Grooming with veterinary support</div>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Pet Grooming in Mohali <span className="text-emerald-200">at a Veterinary Hospital</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/90 sm:text-lg">A matted coat pulls at the skin. Long nails change how a pet walks. Ears that never get cleaned start to smell. And a coat that stays damp can turn itchy before anyone notices.</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/75 sm:text-base">Grooming is about comfort and hygiene, not just appearance. At GreenCoatVets, a skin or ear concern noticed during a groom can be referred for veterinary assessment. Our hospital is open 24 hours; contact the team to arrange a grooming visit.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/book/">Book Pet Grooming</Button><Button href="/contact/" light>Contact Our Team</Button></div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-emerald-50/85"><span className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-emerald-200">location_on</span> Near Bestech Mall, Mohali</span><span className="inline-flex items-center gap-2"><span className="material-symbols-outlined text-emerald-200">schedule</span> Hospital open 24 hours</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-emerald-100/15 sm:-inset-4 sm:rounded-[2.5rem]" />
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.75rem] bg-emerald-900 sm:aspect-[5/4] sm:rounded-[2rem]">
              <Image src={heroImage} alt="Pet being groomed at GreenCoatVets veterinary hospital in Mohali" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08271f]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-200">Comfort first</span><p className="mt-2 max-w-sm text-2xl font-bold leading-snug sm:text-3xl">Thoughtful coat care for your pet</p><p className="mt-2 text-sm text-white/80">With veterinary support close at hand</p></div>
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-[#fbfaf6] p-4 text-slate-800 shadow-xl sm:left-auto sm:right-5 sm:w-72 sm:p-5"><div className="flex items-center gap-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-900"><span className="material-symbols-outlined text-2xl">health_and_safety</span></span><div><p className="font-bold">A veterinary setting</p><p className="mt-1 text-xs leading-5 text-slate-500">Concerns can be referred for assessment</p></div></div></div>
          </div>
        </div>
      </div>
      <div className="h-2 bg-amber-400" />
    </section>

    {/* Services */}
    <section className="py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">Clean coat, comfortable pet</p><h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">What Does Pet Grooming Include?</h2></div><p className="max-w-2xl leading-8 text-slate-600">Professional grooming usually covers bathing and drying, brushing, trimming and nail care, with ear cleaning where needed. The right approach depends on your pet's size, coat type and condition. Contact us to confirm which services are available.</p></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">{services.map((service) => <article key={service.number} className="group rounded-2xl border border-[#e5e8df] bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 sm:p-7"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2e9] text-emerald-900 transition group-hover:bg-[#123f35] group-hover:text-white"><span className="material-symbols-outlined text-2xl">{service.icon}</span></span><span className="text-sm font-bold tracking-widest text-slate-300">{service.number}</span></div><h3 className="mt-7 text-xl font-bold text-slate-950">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p></article>)}</div>
      <p className="mt-6 text-center text-sm text-slate-500">Please confirm available grooming options with our team when arranging your visit.</p>
    </div></section>

    {/* Veterinary difference */}
    <section className="bg-[#eef2e9] py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-10">
      <div className="rounded-[1.75rem] bg-[#123f35] p-7 text-white sm:rounded-[2rem] sm:p-10"><span className="material-symbols-outlined text-4xl text-amber-300">medical_services</span><p className="mt-6 text-xs font-extrabold uppercase tracking-[.2em] text-emerald-200">Care beyond the coat</p><h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Why Choose Pet Grooming at a Veterinary Hospital in Mohali?</h2><p className="mt-5 leading-7 text-emerald-50/85">Grooming brings attention to the skin, ears, paws and coat. If something unusual is noticed, our team can advise whether a veterinary examination is needed.</p><div className="mt-8 border-t border-white/20 pt-6"><p className="text-sm leading-6 text-emerald-50/75">A red patch, lump, strong ear smell, fleas or ticks may need more than grooming.</p></div></div>
      <div><p className="text-base leading-8 text-slate-700">A groomer handles every part of your pet. At a standalone salon, a concerning finding may mean arranging a separate trip to a clinic. At GreenCoatVets, veterinary care is available in the same hospital if a concern needs to be assessed.</p><p className="mt-5 text-base leading-8 text-slate-700">If your pet needs further attention, learn about our <InlineLink href="/specialized-opd-mohali/">Specialized OPD</InlineLink> or <InlineLink href="/veterinary-skin-treatment-mohali/">skin treatment service</InlineLink>.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button href="/specialized-opd-mohali/">Explore Specialized OPD</Button><Link href="/veterinary-skin-treatment-mohali/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:border-emerald-700 hover:text-emerald-900">Skin Treatment Service</Link></div></div>
    </div></section>

    {/* Signs */}
    <section className="py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">Know when to book</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Signs It's Time to Book a Pet Grooming Visit</h2><p className="mt-5 leading-8 text-slate-600">Routine grooming can help keep your pet's coat and nails manageable. Consider arranging a visit if you notice:</p><ul className="mt-7 space-y-4">{signs.map((sign) => <li key={sign} className="flex items-start gap-3"><span className="material-symbols-outlined mt-0.5 text-xl text-emerald-800">check_circle</span><span className="leading-7 text-slate-700">{sign}</span></li>)}</ul></div><aside className="rounded-[1.75rem] border border-amber-200 bg-[#fff6df] p-6 sm:rounded-[2rem] sm:p-8"><div className="flex items-start gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-200/70 text-amber-950"><span className="material-symbols-outlined text-2xl">info</span></span><div><h3 className="text-xl font-bold text-slate-950">When a vet check should come first</h3><p className="mt-3 leading-7 text-slate-700">If your pet is scratching a lot, or has red skin, hair loss or sores, book a veterinary consultation first. These may be medical concerns rather than grooming needs. Visit our <InlineLink href="/veterinary-skin-treatment-mohali/">skin treatment page</InlineLink>.</p></div></div></aside></div></section>

    {/* Frequency and cost */}
    <section className="border-y border-[#e3e8de] bg-white py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:gap-8 lg:px-10">
      <article className="rounded-2xl bg-[#f2f5ed] p-7 sm:p-9"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-900"><span className="material-symbols-outlined text-2xl">calendar_month</span></span><h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">How Often Should You Groom Your Pet?</h2><p className="mt-4 leading-7 text-slate-600">Most pets need grooming every few weeks to a few months, depending on coat type, length, lifestyle and age. Long or thick coats often need regular brushing at home and more frequent professional grooming, while short coats may need less.</p><p className="mt-4 leading-7 text-slate-600">Our team can suggest a schedule for your pet. Grooming also pairs well with a routine <InlineLink href="/pet-health-checkup-mohali/">pet health checkup</InlineLink>.</p></article>
      <article className="rounded-2xl bg-[#123f35] p-7 text-white sm:p-9"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-amber-300"><span className="material-symbols-outlined text-2xl">payments</span></span><h2 className="mt-5 text-2xl font-bold sm:text-3xl">How Much Does Pet Grooming Cost in Mohali?</h2><p className="mt-4 leading-7 text-emerald-50/85">The price depends on your pet's size, coat condition and the type of grooming needed. Contact GreenCoatVets and our team will explain the available options and cost.</p><div className="mt-6"><Button href="/contact/">Ask About Grooming Costs</Button></div></article>
    </div></section>

    {/* Visit preparation */}
    <section className="py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16 lg:px-10"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">A little preparation helps</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Before Your Grooming Visit</h2><p className="mt-4 leading-7 text-slate-600">Sharing a few details when you contact us can help the team understand your pet's needs before the visit.</p><ul className="mt-7 space-y-4">{visitTips.map((tip) => <li key={tip} className="flex items-start gap-3"><span className="material-symbols-outlined mt-0.5 text-xl text-emerald-800">task_alt</span><span className="leading-7 text-slate-700">{tip}</span></li>)}</ul><p className="mt-6 leading-7 text-slate-600">Unsure about vaccination status? See our <InlineLink href="/pet-vaccination-mohali/">pet vaccination page</InlineLink> or speak to a veterinarian.</p></div><div className="rounded-[1.75rem] border border-[#e4e8df] bg-white p-7 shadow-sm sm:rounded-[2rem] sm:p-9"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2e9] text-emerald-900"><span className="material-symbols-outlined text-2xl">pets</span></span><h3 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">Let's plan a comfortable visit</h3><p className="mt-4 leading-7 text-slate-600">Tell our team about your pet's coat, age and temperament. We can explain what services may be suitable and how to arrange your visit.</p><div className="mt-7"><Button href="/contact/">Contact Our Team</Button></div></div></div></section>

    {/* Location CTA */}
    <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10"><div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#123f35] text-white sm:rounded-[2rem]"><div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-200">Visit GreenCoatVets</p><h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Book Pet Grooming in Mohali</h2><p className="mt-5 max-w-3xl leading-7 text-emerald-50/85">GreenCoatVets is at SCO 20, near Bestech Mall, Industrial Area Phase 9, Mohali. The hospital is open 24 hours. Contact our team to arrange a grooming visit, or book online.</p><p className="mt-4 text-sm text-emerald-100/70">SCO 20, near Bestech Mall, Industrial Area Phase 9, Sahibzada Ajit Singh Nagar, Punjab 160062</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Button href="/book/">Book an Appointment</Button><Button href="/contact/" light>Contact Our Team</Button></div></div></div></section>

    {/* FAQs */}
    <section className="border-t border-[#e3e8de] bg-[#f0f3ec] py-20 sm:py-24"><div className="mx-auto max-w-4xl px-5 sm:px-8"><div className="text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-800">Helpful answers</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Pet Grooming in Mohali: FAQs</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">A few things to know before arranging your pet's grooming visit.</p></div><div className="mt-9 space-y-3 sm:mt-12">{faqs.map((faq, index) => <details key={faq.question} className="group rounded-xl border border-[#e0e5da] bg-white p-5 open:border-emerald-300 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-slate-900 marker:hidden"><span className="flex gap-3"><span className="shrink-0 font-extrabold text-emerald-800">{String(index + 1).padStart(2, "0")}</span><span>{faq.question}</span></span><span aria-hidden="true" className="material-symbols-outlined shrink-0 text-emerald-800 transition-transform group-open:rotate-180">expand_more</span></summary><p className="mt-4 pl-9 text-sm leading-7 text-slate-600">{index === 2 ? <>Ask our team about requirements when you call. If you are unsure about your pet's vaccination status, see our <InlineLink href="/pet-vaccination-mohali/">pet vaccination page</InlineLink> or speak to a veterinarian.</> : index === 5 ? <>Contact our team or use the <InlineLink href="/book/">booking page</InlineLink>. We'll explain what's available and arrange your visit.</> : faq.answer}</p></details>)}</div><div className="mt-10 rounded-2xl bg-white p-6 text-center sm:p-8"><h3 className="text-xl font-bold text-slate-950">Ready to arrange a grooming visit?</h3><p className="mt-2 text-sm leading-6 text-slate-600">Contact our team to discuss your pet's needs and available services.</p><div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/book/">Book Pet Grooming</Button><Button href="/contact/" light={false}>Contact Our Team</Button></div></div></div></section>
  </main>;
}
