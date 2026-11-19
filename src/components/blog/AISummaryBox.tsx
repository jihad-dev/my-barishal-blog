import { Sparkles } from "lucide-react";

export default function AISummaryBox({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section aria-label="মূল তথ্য" className="my-8 rounded-2xl border border-teal-500/30 bg-teal-500/5 p-6">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-brand-light"><Sparkles className="h-5 w-5" />মূল তথ্য (Key Takeaways)</h2>
      <ul className="list-disc space-y-1.5 pl-5">
        {items.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </section>
  );
}
