import type { Metadata } from "next";       
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Pet Vaccination in Mohali | Vaccine Guidance | GreenCoatVets";
const pageDescription =
  "Book pet vaccination in Mohali at GreenCoatVets. Veterinary vaccination assessment, vaccine schedules and booster guidance for pets.";
const pageUrl = "https://www.greencoatvets.com/pet-vaccination-mohali/";
const imageAlt =
  "Veterinarian preparing a vaccination for a pet at GreenCoatVets pet vaccination clinic in Mohali";

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
    images: [{ url: "/pet-vaccination.jpg", alt: imageAlt }],    
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/pet-vaccination.jpg"],
  },
};

const faqs = [
  {
    question: "When should I start vaccinating my young pet?",
    answer:
      "Young pets usually begin a vaccination series in the first weeks to months of life. Your veterinarian will confirm the right starting point and the gaps between doses after examining your pet.",
  },
  {
    question: "Do adult pets need booster vaccinations?",
    answer:
      "Many do. Protection from some vaccines reduces over time, so boosters help maintain immunity. Your veterinarian will advise which boosters your pet needs based on its history and lifestyle.",
  },
  {
    question: "Can a sick pet be vaccinated?",
    answer:
      "Generally, vaccines are given to pets that are well. If your pet has a fever, digestive upset or other illness, the veterinarian may recommend treating the problem first and vaccinating later.",
  },
  {
    question:
      "What if I have lost my pet’s vaccination record or adopted a pet with an unknown history?",
    answer:
      "Bring your pet in for an examination. Your veterinarian will take whatever history you have and recommend a suitable plan for your pet.",
  },
  {
    question: "Are there any side effects after vaccination?",
    answer:
      "Mild tiredness, reduced appetite or soreness at the injection site can occur for a short time. Contact a veterinarian if you notice swelling of the face, repeated vomiting, difficulty breathing or symptoms that continue.",
  },
  {
    question: "Which vaccines are available at GreenCoatVets?",
    answer:
      "The vaccines recommended for your pet depend on its species, age and risk. Our team will explain the vaccines suitable for your pet when you call or visit. GreenCoatVets is open 24 hours, so you can contact our team at any time.",
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

function SectionHeading({ eyebrow, title, description }: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">{eyebrow}</p>}
      <h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

function AppointmentButton({ children = "Book an Appointment" }: { children?: React.ReactNode }) {
  return (
    <Link href="/book/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
      {children}<span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
    </Link>
  );
}

export default function PetVaccinationMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\u003c") }} />

      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="transition hover:text-teal-700">Home</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-base">chevron_right</span></li>
            <li><Link href="/services/" className="transition hover:text-teal-700">Services</Link></li>
            <li aria-hidden="true"><span className="material-symbols-outlined text-base">chevron_right</span></li>
            <li aria-current="page" className="font-semibold text-teal-800">Pet Vaccination in Mohali</li>
          </ol>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm"><span className="material-symbols-outlined text-lg">vaccines</span>Pet Vaccination · Mohali</span>
            <h1 className="mt-6 font-headline text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">Pet Vaccination in Mohali</h1>
            <p className="mt-5 text-xl font-semibold text-teal-800">Personalised vaccine and booster guidance for your pet</p>
            <p className="mt-4 text-base leading-8 text-slate-600">Vaccination is one of the most effective ways to protect pets from serious infectious diseases that can often be prevented. At GreenCoatVets in Mohali, our veterinary team assesses each pet individually and guides you towards a vaccination plan that suits their age, health and lifestyle. Whether you have a new young pet, an adult pet due for a booster, or a rescue with no vaccination history, we can help you understand what your pet needs and when.</p>
            <p className="mt-4 text-base leading-8 text-slate-600">Vaccination is not a one-size-fits-all service. The right schedule depends on your pet’s species, age, previous vaccination record and everyday exposure to other animals, which is why a short veterinary assessment always comes first.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><AppointmentButton /><Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800">Contact Our Team</Link></div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600"><span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-teal-700">check_circle</span>Individual assessment</span><span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-teal-700">check_circle</span>Schedule and booster guidance</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-3 rounded-[30px] bg-teal-200/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-2xl shadow-slate-900/10"><Image src="/specialized-opd-veterinary.jpg" alt={imageAlt} width={1536} height={1024} priority sizes="(max-width: 1024px) 100vw, 600px" className="aspect-[4/3] w-full rounded-[20px] object-cover" /></div>
            <div className="relative mx-4 -mt-5 rounded-2xl border border-teal-100 bg-white px-5 py-4 shadow-lg sm:mx-7"><div className="flex items-start gap-3"><span className="material-symbols-outlined rounded-xl bg-teal-50 p-2 text-2xl text-teal-700">health_and_safety</span><div><p className="font-headline font-bold text-slate-900">Care tailored to your pet</p><p className="mt-1 text-sm leading-6 text-slate-600">Your veterinarian will guide you on an appropriate vaccination plan.</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><SectionHeading eyebrow="Is it time for a visit?" title="Who Should Book a Pet Vaccination Consultation?" description="Most pets benefit from vaccination at some stage of life. You may want to book a visit if:"/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["You have recently brought home a new pet","Your adult pet is due for a booster, or you are not sure when the last dose was given","You have adopted or rescued a pet and do not know its vaccination history","Your pet’s vaccination records are incomplete or have been lost","Your pet will be meeting other animals, going for boarding or travelling"].map((item, i) => <article key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 font-headline font-bold text-teal-800">0{i+1}</span><p className="leading-7 text-slate-700">{item}</p></article>)}</div></div></section>

      <section className="bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><SectionHeading eyebrow="Your visit" title="What Happens During a Vaccination Visit" description="A consultation helps your veterinarian understand your pet’s health, history and individual needs before recommending a schedule."/><div className="grid gap-5 md:grid-cols-3">{[{n:"01",title:"A health assessment comes first",body:"Vaccines are generally given to pets that are well enough to receive them. Your veterinarian will ask about your pet’s appetite, energy, past illnesses and any earlier reaction to vaccines, and will carry out a physical examination. If your pet is unwell, the veterinarian may advise postponing vaccination until it has recovered.",icon:"stethoscope"},{n:"02",title:"Guidance on the vaccine schedule",body:"Which vaccines are recommended, and when, depends on your pet’s species, age, health and exposure risk. Our veterinarian will explain the suggested schedule in clear, simple language and let you know when the next dose or booster is due, so you are not left guessing.",icon:"event_available"},{n:"03",title:"Keeping a vaccination record",body:"Your pet’s vaccination details should be recorded so that you can refer to them later. A clear record is useful for future veterinary visits, boarding facilities and travel, and it helps your veterinarian plan boosters correctly.",icon:"folder_open"}].map((item)=><article key={item.n} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700"><span className="material-symbols-outlined text-2xl">{item.icon}</span></span><span className="font-headline text-3xl font-extrabold text-teal-100">{item.n}</span></div><h3 className="mt-5 font-headline text-xl font-bold text-slate-900">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p></article>)}</div></div></section>

      <section className="py-16 sm:py-20"><div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">A strong start</p><h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Vaccination for Young Pets</h2><p className="mt-6 leading-8 text-slate-600">Young animals usually need a series of vaccinations over their first months rather than a single dose. Protection passed on by the mother gradually fades, so doses are spaced out to help your young pet’s own immunity develop. The exact timing is decided by your veterinarian based on your pet’s age and health.</p><p className="mt-4 leading-8 text-slate-600">Until the series is complete, young pets can be more vulnerable to infection. Ask our team about safe socialisation, and check with us before taking your young pet to public places where unvaccinated animals may be present.</p></div><div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 p-7 sm:p-10"><span className="material-symbols-outlined text-4xl text-teal-700">pets</span><h3 className="mt-4 font-headline text-2xl font-bold text-slate-900">A plan for your pet’s age and health</h3><p className="mt-3 leading-7 text-slate-600">Ask your veterinarian about timing, safe socialisation and the next step in your young pet’s vaccination series.</p><div className="mt-7"><AppointmentButton>Discuss Your Pet’s Vaccination</AppointmentButton></div></div></div></section>

      <section className="bg-slate-900 py-16 text-white sm:py-20"><div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-300">Keep protection up to date</p><h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Booster Doses for Adult Pets</h2><p className="mt-6 leading-8 text-slate-300">Protection from some vaccines reduces over time, which is why boosters are recommended to keep your pet’s immunity up to date. If you are unsure when your adult pet was last vaccinated, or a booster has been missed, do not assume it is too late. Bring your pet in, share whatever records you have, and the veterinarian will advise on the best way forward.</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-7"><span className="material-symbols-outlined text-4xl text-teal-300">event_repeat</span><h3 className="mt-4 font-headline text-xl font-bold">Not sure when the last dose was given?</h3><p className="mt-3 leading-7 text-slate-300">Bring any vaccination card or previous records you have. Our team can review the history with you.</p><div className="mt-6"><Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-teal-50">Contact Our Team</Link></div></div></div></section>

      <section className="py-16 sm:py-20"><div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">After your visit</p><h2 className="font-headline text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">After Vaccination: What to Expect</h2><p className="mt-6 leading-8 text-slate-600">Some pets feel a little tired, eat less or have mild soreness at the injection site for a day or so after vaccination. Let your pet rest, keep fresh water available and avoid strenuous activity.</p><p className="mt-4 leading-8 text-slate-600">Contact us if you notice facial swelling, repeated vomiting, a swelling at the injection site that keeps growing, or symptoms that do not settle. If your pet has difficulty breathing or collapses, seek urgent help straight away through our <Link href="/emergency-care-mohali/" className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">emergency veterinary care in Mohali</Link>.</p></div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><div className="flex items-start gap-3"><span className="material-symbols-outlined text-2xl text-amber-700">emergency</span><div><h3 className="font-headline text-lg font-bold text-slate-900">When to seek urgent help</h3><p className="mt-2 leading-7 text-slate-700">Difficulty breathing or collapse requires urgent veterinary help. For other concerning or persistent symptoms, contact your veterinarian for advice.</p><Link href="/emergency-care-mohali/" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950">Emergency Care <span className="material-symbols-outlined">arrow_forward</span></Link></div></div></div></div></section>

      <section className="bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><SectionHeading eyebrow="Preventive care" title="Vaccination as Part of Everyday Pet Care" description="Vaccination works best alongside regular veterinary attention."/><div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10"><p className="leading-8 text-slate-600">A routine <Link href="/pet-health-checkup-mohali/" className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">pet health checkup and preventive care</Link> visit lets your veterinarian review vaccination status together with weight, teeth, skin and general condition. If your pet is showing signs of illness, our <Link href="/specialized-opd-mohali/" className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">Specialized OPD</Link> can examine your pet first and advise whether vaccination should wait.</p><div className="mt-7 grid gap-4 sm:grid-cols-2"><Link href="/specialized-opd-mohali/" className="group rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:bg-teal-50/50"><span className="material-symbols-outlined text-2xl text-teal-700">medical_services</span><h3 className="mt-2 font-headline font-bold text-slate-900">Specialized OPD</h3><span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal-800">Explore service <span className="material-symbols-outlined text-base transition group-hover:translate-x-1">arrow_forward</span></span></Link><Link href="/pet-health-checkup-mohali/" className="group rounded-xl border border-slate-200 p-5 transition hover:border-teal-300 hover:bg-teal-50/50"><span className="material-symbols-outlined text-2xl text-teal-700">health_and_safety</span><h3 className="mt-2 font-headline font-bold text-slate-900">Pet Health Checkup</h3><span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal-800">Explore service <span className="material-symbols-outlined text-base transition group-hover:translate-x-1">arrow_forward</span></span></Link></div></div></div></section>

      <section className="py-16 sm:py-20"><div className="mx-auto max-w-5xl px-6 lg:px-8"><div className="rounded-[30px] bg-gradient-to-br from-slate-900 to-teal-950 px-6 py-10 text-center shadow-xl sm:px-12 sm:py-14"><span className="material-symbols-outlined text-4xl text-teal-300">pets</span><h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">Book a Pet Vaccination Consultation in Mohali</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">If you are looking for pet vaccination in Mohali, the GreenCoatVets team is happy to review your pet’s history and explain the next steps. Bring any vaccination card or previous records you have. GreenCoatVets is open 24 hours, so you can contact our team at any time.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><AppointmentButton>Book an Appointment</AppointmentButton><Link href="/contact/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Contact Our Team</Link></div></div></div></section>

      <section className="bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-4xl px-6 lg:px-8"><SectionHeading eyebrow="Helpful answers" title="Pet Vaccination FAQs" description="Common questions about pet vaccination and booster guidance in Mohali."/><div className="space-y-4">{faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-teal-200 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-headline font-bold text-slate-900 marker:hidden"><span>{faq.question}</span><span aria-hidden="true" className="material-symbols-outlined shrink-0 text-teal-700 transition-transform group-open:rotate-180">expand_more</span></summary><p className="mt-4 pr-6 text-sm leading-7 text-slate-600">{faq.answer}</p></details>)}</div><div className="mt-10 text-center"><p className="mb-5 text-slate-600">Have questions about your pet’s vaccination history?</p><AppointmentButton>Book a Consultation</AppointmentButton></div></div></section>
    </main>
  );
}
