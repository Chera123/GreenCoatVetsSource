
import { cache } from "react";
import { createPublicClient } from "@/lib/supabase/public";

export type FooterNavLink = {
  id: string;
  label: string;
  href: string;
  openInNewTab: boolean;
};

export type FooterNavGroup = {
  id: string;
  slug: string;
  title: string;
  links: FooterNavLink[];
};

export const DEFAULT_FOOTER_NAV: FooterNavGroup[] = [
  {
    id: "fallback-quick",
    slug: "quick",
    title: "Quick links",
    links: [
      { id: "", label: "About", href: "/about", openInNewTab: false },
      { id: "", label: "Services", href: "/services", openInNewTab: false },
      { id: "", label: "Locations", href: "/locations", openInNewTab: false },
      { id: "", label: "Blog", href: "/blog", openInNewTab: false },
      { id: "", label: "Our team", href: "/doctors", openInNewTab: false },
      { id: "", label: "Community", href: "/community", openInNewTab: false },
      { id: "", label: "FAQ", href: "/faq", openInNewTab: false },
      {
        id: "",
        label: "Book appointment",
        href: "/book",
        openInNewTab: false,
      },
      { id: "", label: "Contact", href: "/contact", openInNewTab: false },
    ],
  },
  {
    id: "fallback-account",
    slug: "account",
    title: "Account & staff",
    links: [
      {
        id: "",
        label: "Pet owner portal",
        href: "/account",
        openInNewTab: false,
      },
      {
        id: "",
        label: "Pet owner login",
        href: "/login",
        openInNewTab: false,
      },
      {
        id: "",
        label: "Create account",
        href: "/signup",
        openInNewTab: false,
      },
      {
        id: "",
        label: "Online store",
        href: "/store",
        openInNewTab: false,
      },
      { id: "", label: "Cart", href: "/cart", openInNewTab: false },
      {
        id: "",
        label: "Staff / admin login",
        href: "/admin/login",
        openInNewTab: false,
      },
    ],
  },
];

function logFooterQuery(
  label: string,
  startedAt: number,
  error?: { message: string } | null,
) {
  console.info(
    `[DB Performance] footer navigation - ${label}: ${Math.round(
      performance.now() - startedAt,
    )}ms`,
    error ? `ERROR: ${error.message}` : "OK",
  );
}

/**
 * Active footer columns for the public marketing site (active links only).
 * Omits groups that have no active links.
 */
export const getMarketingFooterNav = cache(
  async (): Promise<FooterNavGroup[]> => {
    const functionStartedAt = performance.now();
    const supabase = createPublicClient();

    try {
      const groupsStartedAt = performance.now();

      const { data: groups, error: groupsError } = await supabase
        .from("marketing_footer_groups")
        .select("id, slug, title, sort_order")
        .order("sort_order", { ascending: true });

      logFooterQuery("groups query", groupsStartedAt, groupsError);

      if (groupsError) {
        console.info(
          `[DB Performance] footer navigation total: ${Math.round(
            performance.now() - functionStartedAt,
          )}ms (default fallback)`,
        );
        return DEFAULT_FOOTER_NAV;
      }

      if (!groups?.length) {
        console.info(
          `[DB Performance] footer navigation total: ${Math.round(
            performance.now() - functionStartedAt,
          )}ms (no groups)`,
        );
        return [];
      }

      const linksStartedAt = performance.now();

      const { data: links, error: linksError } = await supabase
        .from("marketing_footer_links")
        .select("id, group_id, label, href, sort_order, open_in_new_tab")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .order("label", { ascending: true });

      logFooterQuery("links query", linksStartedAt, linksError);

      if (linksError) {
        console.info(
          `[DB Performance] footer navigation total: ${Math.round(
            performance.now() - functionStartedAt,
          )}ms (links query error)`,
        );
        return [];
      }

      const linkRows = links ?? [];

      if (linkRows.length === 0) {
        console.info(
          `[DB Performance] footer navigation total: ${Math.round(
            performance.now() - functionStartedAt,
          )}ms (no links)`,
        );
        return [];
      }

      const byGroup = new Map<string, FooterNavLink[]>();

      for (const row of linkRows) {
        const groupId = row.group_id as string;
        const list = byGroup.get(groupId) ?? [];

        list.push({
          id: row.id as string,
          label: row.label as string,
          href: row.href as string,
          openInNewTab: Boolean(row.open_in_new_tab),
        });

        byGroup.set(groupId, list);
      }

      const output: FooterNavGroup[] = [];

      for (const group of groups) {
        const groupId = group.id as string;
        const groupLinks = byGroup.get(groupId);

        if (!groupLinks?.length) continue;

        output.push({
          id: groupId,
          slug: group.slug as string,
          title: group.title as string,
          links: groupLinks,
        });
      }

      console.info(
        `[DB Performance] footer navigation total: ${Math.round(
          performance.now() - functionStartedAt,
        )}ms`,
      );

      return output;
    } catch (error) {
      console.error(
        `[DB Performance] footer navigation failed after ${Math.round(
          performance.now() - functionStartedAt,
        )}ms`,
        error,
      );

      throw error;
    }
  },
);
