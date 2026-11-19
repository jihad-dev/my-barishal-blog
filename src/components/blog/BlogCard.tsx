"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { formatDate, toBn, type PostMeta } from "@/lib/mdx-types";

export default function BlogCard({
  post,
  index = 0,
}: {
  post: PostMeta;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="card group overflow-hidden transition-shadow hover:border-brand hover:shadow-lg hover:shadow-teal-900/10"
    >
      <Link href={`/blog/${post.slug}/`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand via-brand-light to-accent">
          {post.coverImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          )}
        </div>
        <div className="p-5">
          <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-brand-light">
            {post.category}
          </span>
          <h3 className="mt-3 text-lg font-bold leading-snug">{post.title}</h3>
          <p className="muted mt-2 line-clamp-2 text-sm">{post.description}</p>
          <div className="muted mt-4 flex items-center gap-3 text-xs">
            <time dateTime={post.date} suppressHydrationWarning>
              {formatDate(post.date)}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {toBn(post.readingTime ?? 3)} মিনিট
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}