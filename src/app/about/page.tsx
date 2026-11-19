import type { Metadata } from "next";
import { Eye, Heart, Rocket, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে — মিশন ও ভিশন",
  description: "মাই বরিশালের মিশন, ভিশন, মূল্যবোধ এবং প্ল্যাটফর্মের গল্প।",
  alternates: { canonical: "/about/" },
};

const values = [
  { Icon: Rocket, t: "মিশন", d: "বরিশালবাসীর কাছে জরুরি সেবার সঠিক তথ্য দ্রুত ও বিনামূল্যে পৌঁছে দেওয়া।" },
  { Icon: Eye, t: "ভিশন", d: "বরিশালকে একটি সংযুক্ত, তথ্যসমৃদ্ধ ও সেবাবান্ধব ডিজিটাল শহর হিসেবে গড়ে তোলা।" },
  { Icon: ShieldCheck, t: "স্বচ্ছতা", d: "যাচাইকৃত তথ্য, বিজ্ঞাপনমুক্ত অভিজ্ঞতা এবং খোলামেলা যোগাযোগ।" },
  { Icon: Heart, t: "কমিউনিটি", d: "স্থানীয়দের অংশগ্রহণে তৈরি, বরিশালবাসীর জন্য নিবেদিত।" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "Organization", name: "My Barishal", url: SITE.mainSite },
        { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "My Barishal", applicationCategory: "LifestyleApplication", operatingSystem: "Android, Web", url: SITE.mainSite, identifier: SITE.appId },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "হোম", item: SITE.url }, { "@type": "ListItem", position: 2, name: "আমাদের সম্পর্কে", item: `${SITE.url}/about/` }] },
      ]} />
      <h1 className="text-4xl font-extrabold">আমাদের সম্পর্কে</h1>
      <p className="muted mt-4 text-lg">মাই বরিশাল একটি জনসেবামূলক প্ল্যাটফর্ম, যেখানে হাসপাতাল, রক্তদাতা, অ্যাম্বুলেন্স, ফায়ার সার্ভিস, পুলিশ স্টেশন ও আইনি সহায়তার তথ্য এক জায়গায় পাওয়া যায়।</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {values.map(({ Icon, t, d }) => (
          <div key={t} className="card p-6">
            <Icon className="h-7 w-7 text-brand-light" />
            <h2 className="mt-3 text-xl font-bold">{t}</h2>
            <p className="muted mt-1">{d}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-2xl font-bold">প্ল্যাটফর্ম ইকোসিস্টেম</h2>
      <ul className="mt-4 space-y-3">
        <li className="card p-5"><b>মোবাইল অ্যাপ</b> — <a target="_blank" className="text-brand-light underline" href={SITE.playStore}>Google Play</a> থেকে ডাউনলোড করুন।</li>
        <li className="card p-5"><b>ওয়েব পোর্টাল</b> — <a target="_blank" className="text-brand-light underline" href={SITE.mainSite}>www.mybarishal.com</a></li>
      </ul>

      <h2 className="mt-14 text-2xl font-bold">টিম ও গল্প</h2>
      <p className="muted mt-3">নিজের শহরের মানুষের জরুরি প্রয়োজনে তথ্যের অভাব দেখে এই উদ্যোগের শুরু। আজ এটি একটি কমিউনিটি-চালিত প্রজেক্ট, যা প্রতিদিন আরও সমৃদ্ধ হচ্ছে।</p>
    </div>
  );
}
