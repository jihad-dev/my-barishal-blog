"use client";
import { useEffect, useState } from "react";
import type { Heading } from "@/lib/mdx";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-90px 0px -70% 0px" }
    );
    headings.forEach((h) => { const el = document.getElementById(h.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [headings]);

  if (!headings.length) return null;
  return (
    <nav aria-label="সূচিপত্র" className="card p-5 text-sm">
      <p className="mb-3 font-bold">সূচিপত্র</p>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
            <a href={`#${h.id}`} className={`block border-l-2 py-0.5 pl-3 transition ${active === h.id ? "border-brand font-semibold text-brand-light" : "muted border-transparent hover:text-brand"}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
