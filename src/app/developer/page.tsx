
import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  CheckCircle2,
  Code2,
  GraduationCap,
  Github,
  Globe,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { DEVELOPER_INFO } from "@/data/developer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ডেভেলপার সম্পর্কে",
  description: `${DEVELOPER_INFO.name} - ${DEVELOPER_INFO.role}। React, Next.js, Node.js ও MongoDB দিয়ে ফুল-স্ট্যাক ওয়েব অ্যাপ ডেভেলপমেন্ট, প্রজেক্ট ও সরাসরি যোগাযোগের তথ্য।`,
  alternates: { canonical: "/developer/" },
};

function buildWhatsAppUrl(number: string) {
  const text = encodeURIComponent(
    `হ্যালো ${DEVELOPER_INFO.name}, আপনার ওয়েবসাইটের "ডেভেলপার সম্পর্কে" পেজ থেকে দেখে একটি প্রজেক্ট নিয়ে কথা বলতে চাচ্ছি।`
  );
  return `https://wa.me/${number}?text=${text}`;
}

export default function DeveloperPage() {
  const primaryWa = DEVELOPER_INFO.whatsappNumbers[0];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: DEVELOPER_INFO.name,
          jobTitle: DEVELOPER_INFO.role,
          url: `${SITE.url}/developer/`,
          email: DEVELOPER_INFO.email,
          sameAs: [
            DEVELOPER_INFO.github,
            DEVELOPER_INFO.portfolio,
            ...DEVELOPER_INFO.socials.map((s) => s.url),
          ],
        }}
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 md:py-16">
        {/* হিরো সেকশন */}
        <section className="card relative overflow-hidden p-6 md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-teal-500/40 bg-gradient-to-br from-teal-700 to-teal-500 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://avatars.githubusercontent.com/u/109913091?v=4"
                  alt={DEVELOPER_INFO.name}
                  sizes="112px"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-brand-light">
                  <Sparkles className="h-3.5 w-3.5" />
                  {DEVELOPER_INFO.availability}
                </span>

                <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  {DEVELOPER_INFO.name}
                </h1>
                <p className="mt-1 text-base font-semibold text-brand-light">
                  {DEVELOPER_INFO.role}
                </p>
                <p className="muted mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
                  {DEVELOPER_INFO.tagline}
                </p>

                <div className="muted mt-4 flex flex-wrap items-center gap-4 text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-brand" />
                    {DEVELOPER_INFO.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4 text-brand" />
                    কাস্টম ওয়েব অ্যাপ্লিকেশন সলিউশন
                  </span>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              {primaryWa && (
                <a
                  href={buildWhatsAppUrl(primaryWa.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-light"
                >
                  <MessageCircle className="h-4 w-4" />
                  হোয়াটসঅ্যাপে প্রজেক্ট শুরু করুন
                </a>
              )}
              <a
                href={`mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(
                  "নতুন প্রজেক্ট সম্পর্কে আলোচনা"
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 px-6 py-3.5 text-sm font-semibold transition hover:border-brand hover:text-brand dark:border-zinc-700"
              >
                <Mail className="h-4 w-4" />
                ইমেইলে মেসেজ পাঠান
              </a>
            </div>
          </div>
        </section>

        {/* সার্ভিসসমূহ */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">আমি যা তৈরি করি</h2>
            <p className="muted mt-1 text-sm">{DEVELOPER_INFO.summary}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {DEVELOPER_INFO.services.map((service) => (
              <div key={service.title} className="card p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-brand">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* টেকনিক্যাল স্কিলস */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">টেকনিক্যাল স্কিলস</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {DEVELOPER_INFO.skills.map((group) => (
              <div key={group.category} className="card p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/10 text-brand">
                    <Layers className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-brand-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* অভিজ্ঞতা ও শিক্ষা */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <Briefcase className="h-5 w-5 text-brand" />
              অভিজ্ঞতা
            </h2>
            <div className="mt-5 space-y-5">
              {DEVELOPER_INFO.experience.map((exp) => (
                <div key={`${exp.company}-${exp.period}`}>
                  <p className="font-bold">{exp.role}</p>
                  <p className="muted text-xs">
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="muted mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <GraduationCap className="h-5 w-5 text-brand" />
              শিক্ষা ও ভাষা
            </h2>
            <div className="mt-5 space-y-4">
              {DEVELOPER_INFO.education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-bold">{edu.degree}</p>
                  <p className="muted text-sm">
                    {edu.institution} | {edu.status}
                  </p>
                </div>
              ))}
              <div className="pt-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider opacity-75">
                  ভাষা
                </p>
                <div className="flex flex-wrap gap-2">
                  {DEVELOPER_INFO.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-brand-light"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* প্রজেক্টসমূহ */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">প্রজেক্টসমূহ</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {DEVELOPER_INFO.projects.map((project) => (
              <div key={project.title} className="card flex flex-col p-6">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="muted mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="muted mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                {(project.liveUrl || project.frontendUrl || project.backendUrl) && (
                  <div className="mt-5 flex flex-wrap gap-2 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-light"
                      >
                        Live
                      </a>
                    )}
                    {project.frontendUrl && (
                      <a
                        href={project.frontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-semibold transition hover:border-brand hover:text-brand dark:border-zinc-700"
                      >
                        Frontend
                      </a>
                    )}
                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-semibold transition hover:border-brand hover:text-brand dark:border-zinc-700"
                      >
                        Backend
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* যোগাযোগ ও সোশ্যাল */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6 md:p-8">
            <h2 className="text-xl font-bold">সরাসরি যোগাযোগ ও হোয়াটসঅ্যাপ</h2>
            <p className="muted mt-1 text-xs">
              প্রজেক্টের বাজেট, সময় বা পরামর্শের জন্য সরাসরি কল বা হোয়াটসঅ্যাপ করুন।
            </p>

            <div className="mt-5 space-y-3">
              <a
                href={DEVELOPER_INFO.phoneHref}
                className="flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 text-sm transition hover:border-brand dark:border-zinc-800"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <Phone className="h-4 w-4 text-brand" />
                  কন্টাক্ট নাম্বার
                </span>
                <span className="font-semibold">{DEVELOPER_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 text-sm transition hover:border-brand dark:border-zinc-800"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <Mail className="h-4 w-4 text-brand" />
                  ইমেইল অ্যাড্রেস
                </span>
                <span className="font-semibold">{DEVELOPER_INFO.email}</span>
              </a>

              <div className="pt-3">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider opacity-75">
                  হোয়াটসঅ্যাপ
                </p>
                <div className="space-y-2.5">
                  {DEVELOPER_INFO.whatsappNumbers.map((wa) => (
                    <a
                      key={wa.number}
                      href={buildWhatsAppUrl(wa.number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl bg-teal-500/5 p-3.5 text-sm transition hover:bg-teal-500/10"
                    >
                      <div>
                        <p className="font-semibold">{wa.display}</p>
                        <p className="muted text-xs">{wa.label}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white">
                        <MessageCircle className="h-3.5 w-3.5" />
                        হোয়াটসঅ্যাপ
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card flex flex-col justify-between p-6 md:p-8">
            <div>
              <h2 className="text-xl font-bold">গিটহাব ও সোশ্যাল অ্যাকাউন্ট</h2>
              <p className="muted mt-1 text-xs">
                আমার আগের প্রজেক্ট, সোর্স কোড ও পেশাদার প্রোফাইলগুলো দেখুন।
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 text-sm transition hover:border-brand dark:border-zinc-800"
                >
                  <span className="flex items-center gap-2.5 font-semibold">
                    <Github className="h-4 w-4 text-brand" />
                    GitHub অ্যাকাউন্ট
                  </span>
                  <span className="text-xs font-semibold text-brand-light">
                    প্রোফাইল দেখুন →
                  </span>
                </a>

                <a
                  href={DEVELOPER_INFO.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 text-sm transition hover:border-brand dark:border-zinc-800"
                >
                  <span className="flex items-center gap-2.5 font-semibold">
                    <Globe className="h-4 w-4 text-brand" />
                    Portfolio
                  </span>
                  <span className="text-xs font-semibold text-brand-light">
                    ভিজিট করুন →
                  </span>
                </a>

                {DEVELOPER_INFO.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-zinc-200/80 p-3.5 text-sm transition hover:border-brand dark:border-zinc-800"
                  >
                    <span className="flex items-center gap-2.5 font-semibold">
                      <Globe className="h-4 w-4 text-brand" />
                      {social.name}
                    </span>
                    <span className="text-xs font-semibold text-brand-light">
                      ভিজিট করুন →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-teal-800 to-teal-600 p-5 text-white">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="text-sm font-bold">
                    আপনার প্রজেক্ট নিয়ে কথা বলুন
                  </p>
                  <p className="mt-1 text-xs opacity-90">
                    ওয়েবসাইট বা ওয়েব অ্যাপ বানানোর আগে টেকনোলজি, খরচ ও সময় সম্পর্কে স্পষ্ট ধারণা পেতে মেসেজ দিন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}