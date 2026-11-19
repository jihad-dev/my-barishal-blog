export interface WhatsAppContact {
  label: string;
  number: string; // দেশের কোডসহ, যেমন 8801XXXXXXXXX
  display: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export const DEVELOPER_INFO = {
  name: "জিহাদুল ইসলাম (Jihadul Islam)",
  role: "Full-Stack Web & Mobile App Developer",
  tagline:
    "আধুনিক ওয়েব অ্যাপ্লিকেশন, Android/iOS মোবাইল অ্যাপ এবং কাস্টম বিজনেস সলিউশন তৈরি করি—যা আপনার ব্যবসাকে দ্রুত ডিজিটাল ও লাভজনক করে তোলে।",
  avatar: "/images/developer.jpg", // public/images/developer.jpg ফোল্ডারে ছবি রাখুন
  location: "বরিশাল, বাংলাদেশ (সারা দেশ ও আন্তর্জাতিক রিমোট ক্লায়েন্ট)",
  availability: "নতুন প্রজেক্ট ও ক্লায়েন্ট কাজের জন্য এভেইলেবল",
  email: "your.email@example.com",
  phoneDisplay: "+880 1XXX-XXXXXX",
  phoneHref: "tel:+8801XXXXXXXXX",
  whatsappNumbers: [
    {
      label: "প্রাইমারি হোয়াটসঅ্যাপ (নতুন প্রজেক্ট ও ক্লায়েন্ট আলোচনা)",
      number: "8801XXXXXXXXX",
      display: "+880 1XXX-XXXXXX",
    },
    {
      label: "সেকেন্ডারি হোয়াটসঅ্যাপ (টেকনিক্যাল সাপোর্ট ও জরুরি যোগাযোগ)",
      number: "8801YYYYYYYYY",
      display: "+880 1YYY-YYYYYY",
    },
  ] as WhatsAppContact[],
  github: "https://github.com/jihad-dev",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
    { name: "Facebook", url: "https://facebook.com/your-page" },
    { name: "YouTube", url: "https://youtube.com/@your-channel" },
  ] as SocialLink[],
  mission:
    "পরিচ্ছন্ন কোড, আধুনিক প্রযুক্তি এবং সহজ ইউজার ইন্টারফেসের মাধ্যমে ব্যবসা প্রতিষ্ঠান ও উদ্যোক্তাদের জন্য নির্ভরযোগ্য ওয়েব ও মোবাইল সফটওয়্যার তৈরি করা।",
  vision:
    "প্রযুক্তিকে সাধারণ মানুষ ও স্থানীয় ব্যবসার হাতের নাগালে নিয়ে আসা—যাতে প্রতিটি প্রতিষ্ঠান স্মার্ট ডিজিটাল সিস্টেমের মাধ্যমে এগিয়ে যেতে পারে।",
  goal:
    "প্রতিটি ক্লায়েন্টকে নির্ধারিত সময়ের মধ্যে মানসম্মত প্রজেক্ট ডেলিভারি দেওয়া, দীর্ঘমেয়াদী টেকনিক্যাল পার্টনার হিসেবে পাশে থাকা এবং ক্লায়েন্টের ব্যবসায়িক প্রবৃদ্ধি নিশ্চিত করা।",
  services: [
    {
      title: "ওয়েবসাইট ও ফুল-স্ট্যাক ওয়েব অ্যাপ",
      description:
        "Next.js, React, FastAPI ও Node.js দিয়ে দ্রুতগতির বিজনেস ওয়েবসাইট, ই-কমার্স ও কাস্টম ড্যাশবোর্ড।",
    },
    {
      title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
      description:
        "React Native (Expo) ব্যবহার করে Android ও iOS-এর জন্য আধুনিক ও ইউজার-ফ্রেন্ডলি মোবাইল অ্যাপ্লিকেশন।",
    },
    {
      title: "ব্যাকএন্ড API ও ম্যানেজমেন্ট সফটওয়্যার",
      description:
        "স্কুল, কুরিয়ার, রেস্টুরেন্ট বা শপ ম্যানেজমেন্টের জন্য সিকিউর ডাটাবেজ ও অটোমেশন সলিউশন।",
    },
  ] as ServiceItem[],
};