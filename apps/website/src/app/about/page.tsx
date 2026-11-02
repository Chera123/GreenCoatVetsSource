
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

export default async function AboutPage() {
  const clinic = await resolveClinic();
  const page = await getMergedPageContent("about");
  const s = page.sections;

  const t = (value: string | undefined) =>
    applyClinicPlaceholders(value ?? "", clinic.name);

  const whyBullets = sectionLines(s, "why_bullets");
  const stats = sectionLines(s, "stats_list");
  const impactParas = sectionParagraphs(s, "impact_body").map(t);
  const missionParas = sectionParagraphs(s, "mission_body").map(t);
  const promises = sectionLines(s, "promise_list");

  return (
    <main className="overflow-hidden bg-surface pb-20">

      {/* Hero Section */}
      <section className="relative bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">

          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {t(s.eyebrow)}
            </span>

            <h1 className="mt-6 font-headline text-4xl font-extrabold leading-tight text-on-surface sm:text-5xl lg:text-6xl">
              {t(s.title)}
            </h1>

            <div className="mt-6 h-1.5 w-20 rounded-full bg-primary" />

            <h2 className="mt-8 font-headline text-2xl font-bold text-on-surface sm:text-3xl">
              {t(s.who_heading)}
            </h2>

            <p className="mt-5 text-base leading-8 text-on-surface-variant sm:text-lg">
              {t(s.who_p1)}
            </p>

            <p className="mt-4 text-base leading-8 text-on-surface-variant sm:text-lg">
              {t(s.who_p2)}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wide text-on-primary shadow-lg transition hover:opacity-90"
              >
                Book an appointment
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-outline-variant px-8 py-3 text-sm font-bold uppercase tracking-wide text-on-surface transition hover:border-primary hover:text-primary"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-primary/10" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-primary/10" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/team.jpg"
                alt={`${clinic.name} veterinary team`}
                width={900}
                height={700}
                priority
                className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[540px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Why choose us
            </span>

            <h2 className="mt-4 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
              {t(s.why_heading)}
            </h2>

            <p className="mt-5 text-lg leading-8 text-on-surface-variant">
              {t(s.why_intro)}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyBullets.map((line, index) => {
              const [title, ...rest] = line.split(" — ");
              const body = rest.join(" — ");

              return (
                <div
                  key={line}
                  className="group rounded-2xl border border-outline-variant/60 bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 font-headline text-lg font-extrabold text-primary transition group-hover:bg-primary group-hover:text-on-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-6 font-headline text-xl font-bold text-on-surface">
                    {title}
                  </h3>

                  {body && (
                    <p className="mt-3 leading-7 text-on-surface-variant">
                      {body}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
              {t(s.stats_intro)}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((line) => (
              <div
                key={line}
                className="flex min-h-28 items-center justify-center rounded-2xl border border-outline-variant/60 bg-white p-6 text-center font-headline text-lg font-bold text-on-surface shadow-sm"
              >
                {line}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-on-surface-variant">
            {t(s.stats_outro)}
          </p>

          <p className="mt-6 text-center text-3xl" aria-hidden="true">
            ▼・ᴥ・▼
          </p>

          <p className="mt-2 text-center text-xl font-bold text-primary">
            {t(s.pride_line)}
          </p>

        </div>
      </section>

      {/* Community Impact */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Making a difference
            </span>

            <h2 className="mt-4 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
              {t(s.impact_heading)}
            </h2>

            <div className="mt-6 h-1.5 w-20 rounded-full bg-primary" />

            {impactParas.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mt-5 text-lg leading-8 text-on-surface-variant"
              >
                {p}
              </p>
            ))}

            <Link
              href="/community"
              className="mt-8 inline-flex items-center gap-2 font-bold text-primary transition hover:gap-3"
            >
              Read about our community work
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="rounded-3xl bg-surface p-8 sm:p-12">
            <div className="text-5xl text-primary" aria-hidden="true">
              ♥
            </div>

            <h3 className="mt-6 font-headline text-2xl font-bold text-on-surface">
              Care that goes beyond the clinic
            </h3>

            <p className="mt-4 leading-8 text-on-surface-variant">
              Our commitment to animals and the community is an important part
              of who we are. Every step we take is guided by compassion,
              responsibility and care.
            </p>
          </div>

        </div>
      </section>

      {/* Mission and Promises */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="rounded-3xl border border-outline-variant/60 bg-white p-8 shadow-sm sm:p-12">

            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                What drives us
              </span>

              <h2 className="mt-4 font-headline text-3xl font-extrabold text-on-surface sm:text-4xl">
                {t(s.mission_heading)}
              </h2>

              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-primary" />
            </div>

            {missionParas.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mt-6 text-lg leading-8 text-on-surface-variant"
              >
                {p}
              </p>
            ))}

            <div className="mt-12 rounded-2xl bg-surface p-7 sm:p-9">
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                {t(s.promise_intro)}
              </h3>

              <ul className="mt-6 space-y-4">
                {promises.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-on-surface-variant"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      ✓
                    </span>
                    <span className="leading-7">{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-center text-lg font-bold leading-8 text-on-surface">
              {t(s.promise_outro)}
            </p>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="font-headline text-3xl font-extrabold text-on-primary sm:text-4xl">
            Your pet deserves the best care
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-on-primary/90">
            Get in touch with our team and let us help you take the next step
            in your pet&apos;s healthcare journey.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary transition hover:bg-surface"
            >
              Book an appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
 