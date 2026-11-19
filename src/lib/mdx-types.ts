export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  coverImage?: string;
  readingTime?: number;
}

export interface Post extends PostMeta {
  content: string;
}

export function toMeta(post: Post): PostMeta {
  const { content: _content, ...meta } = post;
  return meta;
}

export function toBn(value?: number | string | null): string {
  if (value === undefined || value === null || value === "") return "০";
  return String(value).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);
}

export function formatDate(date?: string | Date | null): string {
  if (!date) return "";

  const parsed = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return String(date);
  }

  return parsed.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}