import { AlertTriangle, Lightbulb, Siren } from "lucide-react";

const styles = {
  tip: { c: "border-teal-500/40 bg-teal-500/10", Icon: Lightbulb, label: "টিপস" },
  alert: { c: "border-amber-500/40 bg-amber-500/10", Icon: AlertTriangle, label: "সতর্কতা" },
  emergency: { c: "border-red-500/40 bg-red-500/10", Icon: Siren, label: "জরুরি তথ্য" },
};

export default function Callout({ type = "tip", children }: { type?: keyof typeof styles; children: React.ReactNode }) {
  const { c, Icon, label } = styles[type];
  return (
    <aside className={`not-prose my-6 rounded-xl border p-4 ${c}`}>
      <p className="mb-1 flex items-center gap-2 font-bold"><Icon className="h-5 w-5" />{label}</p>
      <div>{children}</div>
    </aside>
  );
}
