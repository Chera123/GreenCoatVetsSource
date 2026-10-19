import Link from "next/link";
import { resolveClinic } from "@/lib/clinic/resolve-clinic";
import { getMergedPageContent } from "@/lib/marketing/get-marketing-site";
import { applyClinicPlaceholders } from "@/lib/marketing/page-content";
import { marketingPageMetadata } from "@/lib/marketing/page-metadata";
import { createClient } from "@/lib/supabase/server";

export async function generateMetadata() {
  const clinic = await resolveClinic();

  return marketingPageMetadata({
    slug: "services",
    clinicName: clinic.name,
    path: "/services",
  });
}

const featuredServices = [
  {
    title: "Specialized OPD",
    slug: "specialized-opd-mohali",
    description:
      "Explore specialized outpatient veterinary care and consultations for your pet.",
    icon: "medical_services",
  },
  {
    title: "Orthopedic Surgery",
    slug: "orthopedic-surgery-mohali",
    description:
      "Learn about veterinary orthopedic care for bone, joint, mobility, and injury concerns.",
    icon: "orthopedics",
  },
  {
    title: "Emergency Care",
    slug: "emergency-care-mohali",
    description:
      "Find guidance on urgent veterinary assessment for pets experiencing illness or injury.",
    icon: "emergency",
  },
  {
    title: "Eye Surgery",
    slug: "eye-surgery-mohali",
    description:
      "Explore veterinary eye care for eye conditions that may require specialist assessment or surgery.",
    icon: "visibility",
  },
  {
    title: "Dental Care",
    slug: "dental-care-mohali",
    description:
      "Learn about veterinary dental assessments and treatment to support your pet's oral health.",
    icon: "dentistry",
  },
  {
    title: "Veterinary Diagnostics",
    slug: "veterinary-diagnostics-mohali",
    description:
      "Discover diagnostic testing and investigations that help veterinarians assess your pet's health.",
    icon: "labs",
  },
  {
    title: "Spay & Neuter",
    slug: "spay-neuter-mohali",
    description:
      "Learn about pet sterilization procedures, veterinary assessment, and aftercare.",
    icon: "pets",
  },
  {
    title: "Equine Services",
    slug: "equine-services-mohali",
    description:
      "Explore veterinary health care and medical support for horses.",
    icon: "sound_detection_dog_barking",
  },
];

export default async function ServicesPage() {
  const clinic = await resolveClinic();
  const page = await getMergedPageContent("services");
  const s = page.sections;

  const t = (value: string | undefined) =>
    applyClinicPlaceholders(value ?? "", clinic.name);

  const heroImg = s.hero_image_url?.trim() || "";

  const supabase = createClient();

  const { data: services, error } = await supabase
    .from("services")
    .select("id, title, slug, short_description")
    .eq("clinic_id", clinic.id)
    .eq("is_active", true)
    .order("title", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  const defaultFacilities: { title: string; blurb: string }[] = [
    {
      title: "Specialized OPD",
      blurb:
        "Outpatient care and surgeries — major and minor — under one coordinated team.",
    },
    {
      title: "Diagnostics",
      blurb:
        "Imaging and testing to support clear, timely decisions.",
    },
    {
      title: "In-house path lab",
      blurb:
        "On-site laboratory for faster results when it matters.",
    },
    {
      title: "Dentistry",
      blurb:
        "Dental assessment and treatment for comfort and long-term health.",
    },
    {
      title: "Dermatology",
      blurb:
        "Skin, coat, ear, and allergy support for dogs and cats.",
    },
    {
      title: "Pet boarding",
      blurb:
        "Safe, supervised stays when you need trusted care away from home.",
    },
    {
      title: "Grooming",
      blurb:
        "Bathing, coat care, and tidy-ups to keep pets comfortable.",
    },
  ];

  return (
    <main className="bg-surface pb-20 sm:pb-24">
      {/* Existing Services Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 sm:pb-16 sm:pt-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-primary">
              {t(s.eyebrow)}
            </span>

            <h1 className="mb-6 font-headline text-4xl font-extrabold leading-tight tracking-tight text-on-surface md:text-5xl lg:text-6xl">
              {t(s.title)}
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              {t(s.subtitle)}
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-primary-fixed px-4 py-2 text-sm font-medium text-on-primary-fixed">
                <span className="material-symbols-outlined text-sm">
                  verified
                </span>
                {t(s.badge_1)}
              </div>

              <div className="flex items-center gap-2 rounded-full bg-secondary-container px-4 py-2 text-sm font-medium text-on-secondary-container">
                <span className="material-symbols-outlined text-sm">
                  emergency
                </span>
                {t(s.badge_2)}
              </div>
            </div>
          </div>

          {heroImg ? (
            <div className="relative h-[280px] overflow-hidden rounded-3xl shadow-2xl sm:h-[360px] lg:h-[400px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImg}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ) : null}
        </div>
      </section>

      {/* Existing Services from Supabase */}
      <section className="mx-auto max-w-7xl px-6">
        {!services?.length ? (
          <div className="rounded-[2rem] border border-primary/15 bg-primary/5 p-8 sm:p-12">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              {t(s.empty_eyebrow)}
            </p>

            <h2 className="font-headline text-2xl font-extrabold text-on-surface md:text-3xl">
              {t(s.empty_heading)}
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              {t(s.empty_body)}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {defaultFacilities.map((f) => (
                <article
                  key={f.title}
                  className="flex flex-col rounded-2xl bg-surface-container-lowest p-6 shadow-sm ring-1 ring-outline-variant/10"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-xl">
                      pets
                    </span>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-on-surface">
                    {f.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {f.blurb}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col rounded-3xl bg-surface-container-lowest p-8 transition-colors hover:bg-surface-container-low"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    medical_services
                  </span>
                </div>

                <h2 className="mb-3 font-headline text-xl font-bold">
                  {service.title}
                </h2>

                <p className="mb-auto text-sm leading-relaxed text-on-surface-variant">
                  {service.short_description ??
                    "Learn more about this service."}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-8 inline-flex items-center gap-1 text-sm font-bold text-primary transition-transform group-hover:translate-x-0.5"
                >
                  Learn more
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* New SEO Service Landing Pages */}
      <section
        id="specialized-veterinary-services"
        className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20"
        aria-labelledby="specialized-services-heading"
      >
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Veterinary care
          </p>

          <h2
            id="specialized-services-heading"
            className="font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl"
          >
            Explore Our Veterinary Services
          </h2>

          <p className="mt-4 text-base leading-relaxed text-on-surface-variant sm:text-lg">
            Explore our veterinary service pages to learn more about
            specialized consultations, surgical care, diagnostics, and other
            services for animals. Contact our team if you need help choosing
            the right service for your pet.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <article
              key={service.slug}
              className="group flex h-full flex-col rounded-3xl bg-surface-container-lowest p-6 shadow-sm ring-1 ring-outline-variant/10 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span
                  className="material-symbols-outlined text-2xl"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
              </div>

              <h3 className="font-headline text-lg font-bold text-on-surface">
                <Link
                  href={`/${service.slug}/`}
                  className="rounded-sm outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {service.title}
                </Link>
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-on-surface-variant">
                {service.description}
              </p>

              <Link
                href={`/${service.slug}/`}
                aria-label={`Learn more about ${service.title}`}
                className="mt-6 inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-primary transition-colors hover:text-on-surface"
              >
                Learn more
                <span
                  className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Existing Booking CTA */}
      <section className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-10 text-center sm:p-12">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary-container/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-primary-container/20 blur-3xl" />

          <h2 className="relative z-10 mb-4 font-headline text-3xl font-extrabold text-on-primary sm:text-4xl">
            Questions about a service?
          </h2>

          <p className="relative z-10 mx-auto mb-8 max-w-2xl text-lg text-primary-fixed-dim">
            Our team can help you choose the right visit type for your pet.
          </p>

          <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="rounded-full bg-white px-8 py-4 font-bold text-primary shadow-xl transition-colors hover:bg-surface-container"
            >
              Book a consultation
            </Link>

            <Link
              href="/contact"
              className="rounded-full border-2 border-primary-container px-8 py-4 font-bold text-on-primary transition-colors hover:bg-white/10"
            >
              Contact {clinic.name}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
