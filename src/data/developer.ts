export interface WhatsAppContact {
  label: string;
  number: string; 
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

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  frontendUrl?: string; 
  backendUrl?: string; 
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const DEVELOPER_INFO = {
  name: "জিহাদুল ইসলাম (Jihadul Islam)",
  role: "Full-Stack Developer",
  tagline:
    "React, Next.js, Node.js, Express.js ও MongoDB দিয়ে স্কেলেবল, নির্ভরযোগ্য ও ইউজার-ফ্রেন্ডলি ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
  avatar: "../../public/images/developer.png",
  location: "উজিরপুর, বরিশাল, বাংলাদেশ",
  availability: "নতুন প্রজেক্টের জন্য যোগাযোগ করুন",
  email: "jihadul.islam.dev@gmail.com",
  phoneDisplay: "+880 1611-889746",
  phoneHref: "tel:+8801611889746",
  whatsappNumbers: [
    {
      label: "হোয়াটসঅ্যাপ",
      number: "8801611889746",
      display: "+880 1611-889746",
    },
  ] as WhatsAppContact[],
  github: "https://github.com/jihad-dev",
  portfolio: "https://jihad-portfolio.vercel.app", 
  socials: [
    
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jihadul-islam-web-developer" },
  ] as SocialLink[],
  summary:
    "Full-Stack Developer — React, Next.js, Node.js, Express.js ও MongoDB দিয়ে ওয়েব অ্যাপ্লিকেশন তৈরি, ইন্টিগ্রেশন ও অপটিমাইজেশনে অভিজ্ঞ। REST API, অথেন্টিকেশন, ডিবাগিং ও পারফরম্যান্স অপটিমাইজেশনে দক্ষ, এবং স্কেলেবল, নির্ভরযোগ্য ও ইউজার-ফ্রেন্ডলি সলিউশনে ফোকাসড।",
  services: [
    {
      title: "ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন",
      description:
        "React, Next.js, Node.js, Express ও MongoDB দিয়ে E-Commerce, LMS ও রেস্টুরেন্ট অর্ডারিং-এর মতো সম্পূর্ণ ওয়েব অ্যাপ।",
    },
    {
      title: "REST API ও অথেন্টিকেশন",
      description:
        "Node.js, Express ও FastAPI দিয়ে সিকিউর REST API, JWT অথেন্টিকেশন ও role-based access control। ডাটাবেজ: MongoDB, PostgreSQL, Firebase, Supabase।",
    },
    {
      title: "পেমেন্ট ও রিয়েল-টাইম ফিচার",
      description:
        "aamarPay পেমেন্ট গেটওয়ে ইন্টিগ্রেশন এবং Socket.io দিয়ে রিয়েল-টাইম নোটিফিকেশন ও লাইভ আপডেট।",
    },
    {
      title: "ডিবাগিং ও পারফরম্যান্স অপটিমাইজেশন",
      description:
        "বিদ্যমান ওয়েব অ্যাপের বাগ ফিক্স, স্ট্যাবিলিটি উন্নয়ন ও পারফরম্যান্স অপটিমাইজেশন।",
    },
  ] as ServiceItem[],
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "DaisyUI"],
    },
    {
      category: "Backend & Databases",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST APIs",
        "JWT Auth",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "Supabase",
      ],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "Figma"],
    },
    {
      category: "Soft Skills",
      items: [
        "Communication",
        "Collaboration",
        "Problem-Solving",
        "Adaptability",
        "Time Management",
        "Leadership",
      ],
    },
  ] as SkillGroup[],
  experience: [
    {
      role: "React Developer Intern",
      company: "Creative IT Institute",
      period: "Jun 2024 – Aug 2024",
      highlights: [
        "JWT authentication ও role-based access control সহ MERN stack অ্যাপ্লিকেশন তৈরি ও ডিপ্লয় করেছি।",
        "২০+ critical bug ফিক্স করে অ্যাপের স্ট্যাবিলিটি বাড়িয়েছি এবং গড় user session time ৩০% বৃদ্ধি করেছি।",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "FoodieHub – Restaurant & Ordering System",
      description:
        "কাস্টমার অর্ডার ও অ্যাডমিন অপারেশন ম্যানেজ করার জন্য ফুল-স্ট্যাক রেস্টুরেন্ট অর্ডারিং প্ল্যাটফর্ম।",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
      highlights: [
        "রেস্টুরেন্ট অর্ডার ব্রাউজ ও প্লেস করার জন্য responsive customer-facing interface।",
        "রেস্টুরেন্ট অপারেশন ও কাস্টমার অর্ডার ম্যানেজ করার admin functionality।",
        "Socket.io দিয়ে real-time order notification ও instant order update।",
      ],
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description:
        "প্রোডাক্ট, শপিং কার্ট, চেকআউট ও অনলাইন অর্ডার ম্যানেজমেন্টের জন্য ফুল-স্ট্যাক ই-কমার্স প্ল্যাটফর্ম।",
      techStack: ["React", "Node.js", "Express", "MongoDB", "aamarPay", "Redux"],
      highlights: [
        "Redux দিয়ে dynamic state management সহ product catalog ও shopping cart।",
        "ইউজার ও অ্যাডমিনের জন্য role-based access সহ JWT-based authentication।",
        "aamarPay payment gateway integration ও dynamic checkout workflow।",
      ],
    },
    {
      title: "Learning Management System (LMS)",
      description:
        "কোর্স, এনরোলমেন্ট ও স্টুডেন্ট প্রগ্রেস ম্যানেজ করার জন্য ফুল-স্ট্যাক প্ল্যাটফর্ম।",
      techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      highlights: [
        "role-based dashboard সহ course management ও student enrollment।",
        "অ্যাপ অ্যাক্সেস সিকিউর করতে JWT authentication।",
        "lecture preview, progress tracking, course search ও filtering।",
      ],
    },
  ] as ProjectItem[],
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "University of Global Village (UGV)",
      status: "চলমান",
    },
  ] as EducationItem[],
  languages: ["English (Conversational)", "Bengali (Native)"],
};