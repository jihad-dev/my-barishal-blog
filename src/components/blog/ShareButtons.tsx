import { Facebook, MessageCircle, Twitter } from "lucide-react";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url), t = encodeURIComponent(title);
  const links = [
    { href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, Icon: Facebook, label: "Facebook" },
    { href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`, Icon: Twitter, label: "X" },
    { href: `https://wa.me/?text=${t}%20${u}`, Icon: MessageCircle, label: "WhatsApp" },
  ];
  return (
    <div className="flex items-center gap-2">
      <span className="muted text-sm">শেয়ার করুন:</span>
      {links.map(({ href, Icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="card grid h-10 w-10 place-items-center transition hover:border-brand hover:text-brand"><Icon className="h-4 w-4" /></a>
      ))}
    </div>
  );
}
