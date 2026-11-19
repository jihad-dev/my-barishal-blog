import Link from "next/link";
import { HeartPulse } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NAV, SITE } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white"><HeartPulse className="h-5 w-5" /></span>
          <span>মাই বরিশাল <span className="muted font-medium">ব্লগ</span></span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="muted hidden rounded-lg px-3 py-2 text-sm font-medium transition hover:text-brand sm:block">{n.label}</Link>
          ))}
          <a href={SITE.mainSite} className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black transition hover:bg-accent-deep hover:text-white">ওয়েব পোর্টাল</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
