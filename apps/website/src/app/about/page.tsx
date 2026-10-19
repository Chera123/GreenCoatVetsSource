
import Image from "next/image";
import Link from "next/link";
import { resolveClinic } from "@/lib/clinic/resolve-clinic";
import { getMergedPageContent } from "@/lib/marketing/get-marketing-site";
import {
  applyClinicPlaceholders,
  sectionLines,
  sectionParagraphs,
} from "@/lib/marketing/page-content";
import { marketingPageMetadata } from "@/lib/marketing/page-metadata";

export async function generateMetadata() {
  const clinic = await resolveClinic();

  return marketingPageMetadata({
    slug: "about",
    clinicName: clinic.name,
    path: "/about",
  });
}

// Replace these example paths and details with your actual team information.
// Store the images inside apps/website/public/images/team/.
const teamMembers = [
  {
    name: "Team Member Name",
    role: "Veterinarian",
    image: "/team.jpg",
    alt: "Veterinarian at GreenCoatVets in Mohali",
  },
  {
    name: "Dr. Karanveer Singh",
    role: "Veterinary Professional",
    image: "/karanveer.jpeg",
    alt: "Veterinary professional at GreenCoatVets",
  },
  {
    name: "Team Member Name",
    role: "Veterinary Care Team",
    image: "/images/team/team-member-3.webp",
    alt: "GreenCoatVets veterinary care team member",
  },
  {
    name: "Team Member Name",
    role: "Veterinary Support",
    image: "/images/team/team-member-4.webp",
    alt: "GreenCoatVets team member supporting animal care",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-on-surface-variant sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default async function AboutPage() {
  const [clinic, page] = await Promise.all([
    resolveClinic(),
    getMergedPageContent("about"),
  ]);

  const s = page.sections;

  const t = (value: string | undefined) =>
    applyClinicPlaceholders(value ?? "", clinic.name);

  const whyBullets = sectionLines(s, "why_bullets");
  const stats = sectionLines(s, "stats_list");
  const impactParas = sectionParagraphs(s, "impact_body").map(t);
  const missionParas = sectionParagraphs(s, "mission_body").map(t);
  const promises = sectionLines(s, "promise_list");

  return (
    <main className="overflow-hidden bg-surface text-on-surface">
      {/* Hero */}
      <section className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-surface to-surface"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm">
              {t(s.eyebrow) || "About Our Veterinary Team"}
            </p>

            <h1 className="mt-6 font-headline text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t(s.title) || `Caring for Pets, Supporting Their People`}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-on-surface-variant sm:text-lg">
              {t(s.who_p1) ||
                `${clinic.name} is dedicated to supporting the health and wellbeing of animals through thoughtful veterinary care and a compassionate approach.`}
            </p>

            {s.who_p2 ? (
              <p className="mt-4 max-w-xl text-base leading-8 text-on-surface-variant">
                {t(s.who_p2)}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold text-on-primary shadow-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Book an Appointment
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant bg-surface px-7 py-3 text-sm font-bold text-on-surface transition hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-on-surface-variant">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="text-primary">✓</span>
                Compassionate care
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="text-primary">✓</span>
                Pet-focused approach
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-primary/10 sm:-inset-5"
            />

            <div className="relative overflow-hidden rounded-3xl border border-outline-variant/50 bg-surface shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/team/greencoatvets-team.webp"
                  alt={`${clinic.name} veterinary team in Mohali`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="font-headline text-xl font-bold">
                  Meet the people behind the care
                </p>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  A team committed to treating every animal with care,
                  attention and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-outline-variant/50 bg-surface-container-low py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Why GreenCoatVets"
            title={t(s.why_heading) || "Care Built Around Your Pet"}
            description={
              t(s.why_intro) ||
              "We believe good veterinary care combines clinical attention, clear communication and compassion for every animal."
            }
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyBullets.length > 0
              ? whyBullets.map((line) => {
                  const [title, ...rest] = line.split(" — ");
                  const body = rest.join(" — ");

                  return (
                    <article
                      key={line}
                      className="rounded-2xl border border-outline-variant/60 bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary"
                      >
                        ✓
                      </span>
                      <h3 className="mt-5 text-lg font-bold">{title}</h3>
                      {body ? (
                        <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                          {body}
                        </p>
                      ) : null}
                    </article>
                  );
                })
              : (
                <>
                  <article className="rounded-2xl border border-outline-variant/60 bg-surface p-6 shadow-sm">
                    <span aria-hidden="true" className="text-2xl text-primary">♡</span>
                    <h3 className="mt-4 text-lg font-bold">Compassion First</h3>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                      We aim to make every visit considerate of pets and their families.
                    </p>
                  </article>
                  <article className="rounded-2xl border border-outline-variant/60 bg-surface p-6 shadow-sm">
                    <span aria-hidden="true" className="text-2xl text-primary">✚</span>
                    <h3 className="mt-4 text-lg font-bold">Thoughtful Veterinary Care</h3>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                      We focus on understanding each animal&apos;s needs and supporting informed care decisions.
                    </p>
                  </article>
                  <article className="rounded-2xl border border-outline-variant/60 bg-surface p-6 shadow-sm">
                    <span aria-hidden="true" className="text-2xl text-primary">♡</span>
                    <h3 className="mt-4 text-lg font-bold">Support for Pet Families</h3>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                      We value communication and helping pet owners understand their options.
                    </p>
                  </article>
                </>
              )}
          </div>
        </div>
      </section>

      {/* Team gallery */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="The People Behind the Care"
            title="Meet Our Team"
            description={`Get to know the people who help make ${clinic.name} a caring place for animals and their families.`}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.image}
                className="group overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-sm leading-6 text-on-surface-variant">
            Team names and professional designations should be updated to
            reflect your actual staff.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface-container-low py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Our Purpose
            </p>
            <h2 className="mt-3 font-headline text-3xl font-extrabold sm:text-4xl">
              {t(s.mission_heading) || "Our Mission"}
            </h2>

            {missionParas.length > 0 ? (
              missionParas.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 80)}
                  className="mt-5 text-base leading-8 text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mt-5 text-base leading-8 text-on-surface-variant">
                Our aim is to support animal health through compassionate
                veterinary care, responsible guidance and respect for the
                bond between pets and their families.
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-outline-variant/60 bg-surface p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Our Commitment
            </p>

            <h3 className="mt-3 font-headline text-2xl font-extrabold">
              {t(s.promise_intro) || "What You Can Expect From Us"}
            </h3>

            <ul className="mt-6 space-y-4">
              {(promises.length > 0
                ? promises
                : [
                    "Respectful and compassionate attention",
                    "Clear communication with pet owners",
                    "A thoughtful approach to animal wellbeing",
                  ]
              ).map((promise) => (
                <li key={promise} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-7 text-on-surface-variant">
                    {promise}
                  </span>
                </li>
              ))}
            </ul>

            {s.promise_outro ? (
              <p className="mt-6 border-t border-outline-variant pt-5 text-sm leading-7 text-on-surface-variant">
                {t(s.promise_outro)}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Impact and existing statistics */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Beyond the Clinic"
            title={t(s.impact_heading) || "Our Community Impact"}
          />

          {impactParas.length > 0 ? (
            <div className="mx-auto mt-8 max-w-3xl">
              {impactParas.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 80)}
                  className="mt-4 text-base leading-8 text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {stats.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-outline-variant/60 bg-surface-container-low p-6 text-center"
                >
                  <p className="text-base font-semibold leading-7">{stat}</p>
                </div>
              ))}
            </div>
          ) : null}

          {s.stats_intro ? (
            <p className="mt-8 text-center text-base leading-8 text-on-surface-variant">
              {t(s.stats_intro)}
            </p>
          ) : null}

          {s.stats_outro ? (
            <p className="mt-3 text-center text-base leading-8 text-on-surface-variant">
              {t(s.stats_outro)}
            </p>
          ) : null}

          <p className="mt-6 text-center text-lg font-semibold">
            {t(s.pride_line)}
          </p>

          <div className="mt-6 text-center">
            <Link
              href="/community"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-outline-variant px-6 py-3 text-sm font-bold transition hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Discover Our Community Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-on-primary sm:px-12 sm:py-16">
          <h2 className="font-headline text-3xl font-extrabold sm:text-4xl">
            Here for You and Your Pet
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 opacity-90 sm:text-lg">
            Have a question or need veterinary care? Contact our team to
            discuss your pet&apos;s needs or arrange an appointment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-surface px-7 py-3 text-sm font-bold text-on-surface transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface"
            >
              Book an Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-on-primary/40 px-7 py-3 text-sm font-bold text-on-primary transition hover:bg-on-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
