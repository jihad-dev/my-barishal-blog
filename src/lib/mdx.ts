
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const DIR = path.join(process.cwd(), "content/blogs");

export type Faq = { question: string; answer: string };
export type Heading = { id: string; text: string; level: 2 | 3 };
export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt: string;
  category: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  keyTakeaways: string[];
  faqs: Faq[];
  readingTime: number;
};
export type Post = PostMeta & { content: string; headings: Heading[] };

function parse(file: string): Post {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  const clean = content.replace(/```[\s\S]*?```/g, "");
  for (const m of clean.matchAll(/^(#{2,3})\s+(.+)$/gm)) {
    const text = m[2].replace(/[*_`]/g, "").trim();
    headings.push({ id: slugger.slug(text), text, level: m[1].length as 2 | 3 });
  }
  return {
    slug,
    title: data.title,
    description: data.description ?? "",
    date: String(data.date),
    updatedAt: String(data.updatedAt ?? data.date),
    category: data.category ?? "",
    tags: data.tags ?? [],
    featured: !!data.featured,
    coverImage: data.coverImage,
    keyTakeaways: data.keyTakeaways ?? [],
    faqs: data.faqs ?? [],
    readingTime: Math.max(1, Math.ceil(words / 180)),
    content,
    headings,
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(parse)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPost = (slug: string) => getAllPosts().find((p) => p.slug === slug);

export function toMeta(p: Post): PostMeta {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { content, headings, ...meta } = p;
  return meta;
}

export function formatDate(d: string) {
  return new Date(d).toLocaleDateString("bn-BD", { year: "numeric", month: "long", day: "numeric" });
}

export const toBn = (n: number) => n.toLocaleString("bn-BD");
