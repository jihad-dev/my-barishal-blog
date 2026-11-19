import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const SITE = "https://blog.mybarishal.com";
const MAIN = "https://www.mybarishal.com";
const dir = path.join(process.cwd(), "content/blogs");

const posts = fs
  .readdirSync(dir)
  .filter((f) => /\.mdx?$/.test(f))
  .map((f) => {
    const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
    return { slug: f.replace(/\.mdx?$/, ""), ...data, content };
  })
  .sort((a, b) => (String(a.date) < String(b.date) ? 1 : -1));

const head = `# My Barishal Blog

> মাই বরিশাল (My Barishal) অ্যাপ ও ওয়েব পোর্টালের অফিশিয়াল ব্লগ। বরিশালের হাসপাতাল, রক্তদাতা, অ্যাম্বুলেন্স, ফায়ার সার্ভিস, পুলিশ ও আইনি সহায়তার মতো জরুরি সেবার তথ্য।

- Main site: ${MAIN}
- Blog: ${SITE}
- Android app: https://play.google.com/store/apps/details?id=com.mybarisal.app
`;

const index = posts
  .map((p) => `- [${p.title}](${SITE}/blog/${p.slug}/): ${p.description}`)
  .join("\n");

fs.writeFileSync("public/llms.txt", `${head}\n## Articles\n\n${index}\n`);

const full = posts
  .map((p) => {
    const kt = (p.keyTakeaways ?? []).map((k) => `- ${k}`).join("\n");
    return `# ${p.title}\n\nURL: ${SITE}/blog/${p.slug}/\nCategory: ${p.category}\nPublished: ${p.date}\nUpdated: ${p.updatedAt ?? p.date}\n\n${p.description}\n\n## Key Takeaways\n${kt}\n\n${p.content.trim()}\n`;
  })
  .join("\n---\n\n");

fs.writeFileSync("public/llms-full.txt", `${head}\n---\n\n${full}`);
console.log(`llms.txt generated for ${posts.length} posts`);
