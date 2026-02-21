import type { MetadataRoute } from "next";

import { content } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = content.seo.siteUrl.replace(/\/$/, "");

  const urls = content.routes.public
    .filter((p) => !content.seo.sitemap.excludePaths.includes(p))
    .map((path) => ({
      url: `${base}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    }));

  return urls;
}
