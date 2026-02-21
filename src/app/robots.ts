import type { MetadataRoute } from "next";

import { content } from "@/content";

export default function robots(): MetadataRoute.Robots {
  const base = content.seo.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: content.seo.robots.userAgent,
      allow: content.seo.robots.allow,
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
