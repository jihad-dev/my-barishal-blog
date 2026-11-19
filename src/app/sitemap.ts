import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about/", "/features/"].map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 }));
  const posts = getAllPosts().map((p) => ({ url: `${SITE.url}/blog/${p.slug}/`, lastModified: new Date(p.updatedAt), priority: 0.8 }));
  return [...pages, ...posts];
}
