import Link from "next/link";
import { ArrowRight, Download, Globe } from "lucide-react";
import HomeClient from "@/components/home/HomeClient";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts, toMeta } from "@/lib/mdx";
import { SITE } from "@/lib/constants";

export default function Home() {
  const posts = getAllPosts().map(toMeta);
  return (
    <>
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "Organization", name: "My Barishal", url: SITE.mainSite, sameAs: [SITE.playStore] },
        { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "My Barishal", applicationCategory: "LifestyleApplication", operatingSystem: "Android, Web", url: SITE.mainSite, offers: { "@type": "Offer", price: "0", priceCurrency: "BDT" } },
        { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, inLanguage: "bn" },
      ]} />

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 text-center md:pt-24">
        <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-brand-light">অফিশিয়াল ব্লগ ও নলেজ হাব</span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">বরিশালের জরুরি সেবা, <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">এক জায়গায়</span></h1>
        <p className="muted mx-auto mt-5 max-w-2xl text-lg">{SITE.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={SITE.mainSite} className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-light"><Globe className="h-5 w-5" />ওয়েব পোর্টাল</a>
          <a href={SITE.playStore} className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-black transition hover:bg-accent-deep hover:text-white"><Download className="h-5 w-5" />Google Play</a>
        </div>
      </section>

      <HomeClient posts={posts} />

      <section className="mx-auto mt-24 max-w-6xl px-4">
        <div className="rounded-3xl bg-gradient-to-br from-teal-800 to-teal-600 p-8 text-white md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">কেন মাই বরিশাল?</h2>
          <p className="mt-3 max-w-2xl opacity-90">জরুরি মুহূর্তে সঠিক তথ্য খুঁজে পাওয়া কঠিন। মাই বরিশাল হাসপাতাল, রক্তদাতা, অ্যাম্বুলেন্স, ফায়ার সার্ভিস ও আরও অনেক সেবা এক অ্যাপে এনে বরিশালবাসীর জীবন সহজ করতে চায়।</p>
          <Link href="/about/" className="mt-6 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline">মিশন ও ভিশন পড়ুন <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
