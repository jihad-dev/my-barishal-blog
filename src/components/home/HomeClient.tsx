"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { CATEGORIES } from "@/lib/constants";
import { formatDate, type PostMeta } from "@/lib/mdx-types";

const ALL = "সব";

export default function HomeClient({ posts }: { posts: PostMeta[] }) {
  const [cat, setCat] = useState(ALL);
  const [q, setQ] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ["title", "description", "tags", "category"],
        threshold: 0.35,
      }),
    [posts]
  );

  const featured = posts.filter((p) => p.featured).slice(0, 3);

  const filtered = (q.trim() ? fuse.search(q).map((r) => r.item) : posts).filter(
    (p) => cat === ALL || p.category === cat
  );

  return (
    <>
      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-4">
          <h2 className="mb-5 text-2xl font-bold">বিশেষ নির্বাচিত</h2>
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {featured.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <Link
                  href={`/blog/${p.slug}/`}
                  className={`group flex h-full min-h-56 flex-col justify-end rounded-2xl p-6 text-white ${
                    i === 0
                      ? "bg-gradient-to-br from-teal-800 to-teal-500 md:min-h-[26rem]"
                      : i === 1
                      ? "bg-gradient-to-br from-amber-600 to-orange-500"
                      : "bg-gradient-to-br from-zinc-800 to-teal-700"
                  }`}
                >
                  <span className="mb-2 w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    {p.category}
                  </span>
                  <h3
                    className={`font-bold leading-snug ${
                      i === 0 ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs opacity-80" suppressHydrationWarning>
                    {formatDate(p.date)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section id="articles" className="mx-auto mt-16 max-w-6xl px-4">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {[ALL, ...CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  cat === c ? "text-white" : "muted hover:text-brand"
                }`}
              >
                {cat === c && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
          <label className="card flex items-center gap-2 px-4 py-2 md:w-72">
            <Search className="muted h-4 w-4" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="আর্টিকেল খুঁজুন..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
        </div>

        {filtered.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        ) : (
          <p className="muted py-16 text-center">কোনো আর্টিকেল পাওয়া যায়নি।</p>
        )}
      </section>
    </>
  );
}