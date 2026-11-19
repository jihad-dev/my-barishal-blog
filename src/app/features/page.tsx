import type { Metadata } from "next";
import { Ambulance, Droplets, Flame, Hospital, Scale, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "ফিচারস ও ডকুমেন্টেশন",
  description: "মাই বরিশাল অ্যাপের হাসপাতাল, রক্তদাতা, অ্যাম্বুলেন্স, ফায়ার সার্ভিস, পুলিশ ও আইনি সহায়তা মডিউলের ব্যবহারবিধি।",
  alternates: { canonical: "/features/" },
};

const modules = [
  { Icon: Hospital, t: "হাসপাতাল", d: "বরিশালের সরকারি ও বেসরকারি হাসপাতালের ঠিকানা, ফোন নম্বর ও বিভাগ।", steps: ["হাসপাতাল মডিউল খুলুন", "এলাকা বা নাম দিয়ে খুঁজুন", "সরাসরি কল করুন"] },
  { Icon: Droplets, t: "রক্তদাতা", d: "রক্তের গ্রুপ ও এলাকা অনুযায়ী ভেরিফায়েড ডোনার খুঁজুন।", steps: ["রক্তের গ্রুপ বেছে নিন", "এলাকা ফিল্টার করুন", "ডোনারকে কল করুন"] },
  { Icon: Ambulance, t: "অ্যাম্বুলেন্স", d: "২৪ ঘণ্টা সেবা দেওয়া অ্যাম্বুলেন্সের তালিকা ও যোগাযোগ।", steps: ["অ্যাম্বুলেন্স মডিউল খুলুন", "নিকটতম সেবা বেছে নিন", "কল করুন"] },
  { Icon: Flame, t: "ফায়ার সার্ভিস", d: "ফায়ার স্টেশনের অবস্থান ও জরুরি নম্বর।", steps: ["ফায়ার সার্ভিস খুলুন", "স্টেশন নির্বাচন করুন", "জরুরি কল দিন"] },
  { Icon: ShieldAlert, t: "পুলিশ স্টেশন", d: "থানার ঠিকানা ও দায়িত্বপ্রাপ্ত কর্মকর্তার যোগাযোগ।", steps: ["পুলিশ মডিউল খুলুন", "থানা খুঁজুন", "যোগাযোগ করুন"] },
  { Icon: Scale, t: "আইনি সহায়তা", d: "বিনামূল্যে ও স্বল্পমূল্যে আইনি সহায়তার তথ্য।", steps: ["আইনি সহায়তা খুলুন", "সেবার ধরন বেছে নিন", "প্রতিষ্ঠানের সাথে যোগাযোগ করুন"] },
];

export default function Features() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="text-4xl font-extrabold">ফিচারস ও ডকুমেন্টেশন</h1>
      <p className="muted mt-3 text-lg">অ্যাপের প্রতিটি মডিউল কীভাবে কাজ করে, এক নজরে।</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {modules.map(({ Icon, t, d, steps }) => (
          <section key={t} className="card p-6">
            <Icon className="h-8 w-8 text-brand-light" />
            <h2 className="mt-3 text-xl font-bold">{t}</h2>
            <p className="muted mt-1">{d}</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
          </section>
        ))}
      </div>
    </div>
  );
}
