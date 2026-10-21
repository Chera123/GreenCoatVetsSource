
import type { Metadata } from "next";
import { FaqAccordion, type FaqItem } from "@/components/faq/faq-accordion";
import { resolveClinic } from "@/lib/clinic/resolve-clinic";
import { getMergedPageContent } from "@/lib/marketing/get-marketing-site";
import { applyClinicPlaceholders } from "@/lib/marketing/page-content";
import { marketingPageMetadata } from "@/lib/marketing/page-metadata";
import { createClient } from "@/lib/supabase/server";

export async function generateMetadata(): Promise<Metadata> {
  const clinic = await resolveClinic();

  return marketingPageMetadata({
    slug: "faq",
    clinicName: clinic.name,
    path: "/faq",
  });
}

type FaqSchemaItem = {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
};

function stripHtml(value: string): string {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|div|li|h[1-6])>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "animals",
    question: "What types of animals does GreenCoatVets treat?",
    answer: (
      <p>
        We provide expert care for{" "}
        <strong>canines, felines, exotics, avian, and equine</strong>{" "}
        patients. Whether it&apos;s a puppy, parrot, or pony — we&apos;ve
        got them covered.
      </p>
    ),
  },
  {
    id: "services",
    question: "What services do you offer at your clinics?",
    answer: (
      <ul className="list-inside list-disc space-y-2">
        <li>Specialized OPDs</li>
        <li>Major &amp; minor surgeries</li>
        <li>In-house diagnostics and pathology</li>
        <li>Dentistry</li>
        <li>Pet grooming</li>
        <li>Boarding</li>
        <li>Pharmacy</li>
        <li>Community outreach (low-cost spaying, vaccinations, etc.)</li>
      </ul>
    ),
  },
  {
    id: "vaccination",
    question: "Do you offer vaccination?",
    answer: (
      <p>
        Yes. We offer essential pet vaccinations, including{" "}
        <strong>free rabies vaccines</strong> as part of our{" "}
        <strong>Tricity Rabies-Free</strong> campaign, subject to campaign
        availability.
      </p>
    ),
  },
  {
    id: "idexx",
    question: "What technology do you use for diagnostics?",
    answer: (
      <p>
        We use <strong>IDEXX</strong> — one of the world&apos;s most
        advanced diagnostic systems — for accurate, reliable results
        that help us treat with confidence.
      </p>
    ),
  },
  {
    id: "booking",
    question: "How can I book an appointment?",
    answer: (
      <p>
        Use our <strong>online booking</strong> on this website, call
        your nearest branch, or reach out via the contact form. We
        recommend booking ahead for non-urgent visits.
      </p>
    ),
  },
  {
    id: "emergency",
    question: "Do you provide emergency services?",
    answer: (
      <p>
        Yes — we handle <strong>urgent cases during operational hours</strong>.
        For after-hours emergencies, please call our helpline and we
        will guide you on next steps.
      </p>
    ),
  },
  {
    id: "different",
    question: "What makes GreenCoatVets different?",
    answer: (
      <p>
        Our approach is{" "}
        <strong>community-first, pet-focused, and technology-driven</strong>.
        We combine expert care with compassion, aiming for a stress-free
        experience for both pets and owners.
      </p>
    ),
  },
];

export default async function FaqPage() {
  const clinic = await resolveClinic();
  const supabase = createClient();

  const { data, error } = await supabase
    .from("marketing_faqs")
    .select("id, question, answer")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  const dbItems: FaqItem[] =
    !error && (data?.length ?? 0) > 0
      ? (data ?? []).map((row) => ({
          id: row.id as string,
          question: row.question as string,
          answer: <p>{row.answer as string}</p>,
        }))
      : [];

  const items = dbItems.length > 0 ? dbItems : FAQ_ITEMS;

  const page = await getMergedPageContent("faq");
  const s = page.sections;
  const t = (value: string | undefined) =>
    applyClinicPlaceholders(value ?? "", clinic.name);

  // Generate schema from the same FAQ items displayed on the page.
  const faqSchemaItems: FaqSchemaItem[] = items
    .map((item) => {
      const question = stripHtml(item.question);

      // Database answers are plain text; fallback answers may contain JSX.
      // Use the matching visible fallback answer text for schema below.
      const fallbackAnswerById: Record<string, string> = {
        animals:
          "We provide expert care for canines, felines, exotics, avian, and equine patients. Whether it's a puppy, parrot, or pony — we've got them covered.",
        services:
          "Specialized OPDs; Major and minor surgeries; In-house diagnostics and pathology; Dentistry; Pet grooming; Boarding; Pharmacy; Community outreach including low-cost spaying and vaccinations.",
        vaccination:
          "Yes. We offer essential pet vaccinations, including free rabies vaccines as part of our Tricity Rabies-Free campaign, subject to campaign availability.",
        idexx:
          "We use IDEXX diagnostic systems for accurate, reliable results that help us treat with confidence.",
        booking:
          "Use our online booking on this website, call your nearest branch, or reach out via the contact form. We recommend booking ahead for non-urgent visits.",
        emergency:
          "Yes. We handle urgent cases during operational hours. For after-hours emergencies, please call our helpline and we will guide you on next steps.",
        different:
          "Our approach is community-first, pet-focused, and technology-driven. We combine expert care with compassion, aiming for a stress-free experience for both pets and owners.",
      };

      const answer =
        dbItems.length > 0
          ? stripHtml(
              // The database answer is also rendered on the page.
              String(
                (data ?? []).find((row) => row.id === item.id)?.answer ?? ""
              )
            )
          : fallbackAnswerById[item.id] ?? "";

      if (!question || !answer) {
        return null;
      }

      return {
        "@type": "Question" as const,
        name: question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: answer,
        },
      };
    })
    .filter((item): item is FaqSchemaItem => item !== null);

  const faqSchema =
    faqSchemaItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSchemaItems,
        }
      : null;

  return (
    <main className="bg-surface pb-20">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <p className="font-label text-sm font-bold uppercase tracking-widest text-primary">
          {t(s.eyebrow)}
        </p>

        <h1 className="mt-2 font-headline text-4xl font-extrabold text-on-surface sm:text-5xl">
          {t(s.title)}
        </h1>

        <p className="mt-4 text-lg text-on-surface-variant">
          {t(s.intro)}
        </p>

        <div className="mt-10">
          <FaqAccordion items={items} />
        </div>
      </div>
    </main>
  );
}
