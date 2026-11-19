import Link from "next/link";
import { NAV, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold">মাই বরিশাল</p>
          <p className="muted mt-2 text-sm">বরিশালবাসীর জরুরি সেবা এক জায়গায়। বিনামূল্যে ও বিজ্ঞাপনমুক্ত।</p>
        </div>
        <ul className="space-y-2 text-sm">
          {NAV.map((n) => (<li key={n.href}><Link className="muted hover:text-brand" href={n.href}>{n.label}</Link></li>))}
        </ul>
        <ul className="space-y-2 text-sm">
          <li><a className="muted hover:text-brand" href={SITE.mainSite}>www.mybarishal.com</a></li>
          <li><a className="muted hover:text-brand" href={SITE.playStore}>Google Play Store</a></li>
          <li><a className="muted hover:text-brand" href="/llms.txt">llms.txt</a></li>
        </ul>
      </div>
      <p className="muted border-t border-[var(--line)] py-5 text-center text-xs">© {new Date().getFullYear()} My Barishal. সর্বস্বত্ব সংরক্ষিত।</p>
    </footer>
  );
}
