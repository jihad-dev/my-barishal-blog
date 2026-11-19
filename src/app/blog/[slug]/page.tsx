import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Clock } from "lucide-react";
import { formatDate, getAllPosts, getPost, toBn, toMeta } from "@/lib/mdx";
import { SITE } from "@/lib/constants";
import ReadingProgress from "@/components/blog/ReadingProgress";
import TableOfContents from "@/components/blog/TableOfContents";
import AISummaryBox from "@/components/blog/AISummaryBox";
import FAQAccordion from "@/components/blog/FAQAccordion";
import ShareButtons from "@/components/blog/ShareButtons";
import Callout from "@/components/blog/Callout";
import BlogCard from "@/components/blog/BlogCard";
import JsonLd from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => getAllPosts().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE.url}/blog/${slug}/`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: post.title, description: post.description, publishedTime: post.date, modifiedTime: post.updatedAt, tags: post.tags, images: post.coverImage ? [post.coverImage] : undefined },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${slug}/`;
  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 2)
    .map(toMeta);

  const schema = [
    {
      "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description,
      datePublished: post.date, dateModified: post.updatedAt, keywords: post.tags.join(", "), inLanguage: "bn",
      mainEntityOfPage: url, image: post.coverImage ? `${SITE.url}${post.coverImage}` : undefined,
      author: { "@type": "Organization", name: "My Barishal", url: SITE.mainSite },
      publisher: { "@type": "Organization", name: "My Barishal", url: SITE.mainSite },
      articleBody: post.content.replace(/[#*>`]/g, "").slice(0, 5000),
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "হোম", item: SITE.url },
        { "@type": "ListItem", position: 2, name: post.category, item: SITE.url },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    ...(post.faqs.length ? [{
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    }] : []),
  ];

  return (
    <>
      <ReadingProgress />
      <JsonLd data={schema} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1fr_17rem]">
        <article className="min-w-0">
          <header>
            <nav aria-label="Breadcrumb" className="muted mb-4 text-sm"><Link href="/" className="hover:text-brand">হোম</Link> / {post.category}</nav>
            <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-brand-light">{post.category}</span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">{post.title}</h1>
            <p className="muted mt-3 text-lg">{post.description}</p>
            <div className="muted mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <span>লেখক: My Barishal Team</span>
              <span>প্রকাশ: <time dateTime={post.date}>{formatDate(post.date)}</time></span>
              {post.updatedAt !== post.date && <span>আপডেট: <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></span>}
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{toBn(post.readingTime)} মিনিট পড়া</span>
            </div>
          </header>

          <AISummaryBox items={post.keyTakeaways} />

          <div className="prose prose-lg dark:prose-invert prose-a:text-brand-light prose-headings:font-bold">
            <MDXRemote
              source={post.content}
              components={{ Callout }}
              options={{ mdxOptions: { rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]] } }}
            />
          </div>

          <FAQAccordion faqs={post.faqs} />

          <div className="mt-10 border-t border-[var(--line)] pt-6"><ShareButtons url={url} title={post.title} /></div>

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-5 text-2xl font-bold">আরও পড়ুন</h2>
              <div className="grid gap-6 sm:grid-cols-2">{related.map((p, i) => <BlogCard key={p.slug} post={p} index={i} />)}</div>
            </section>
          )}
        </article>

        <aside className="hidden lg:block"><div className="sticky top-24"><TableOfContents headings={post.headings} /></div></aside>
      </div>
    </>
  );
}
