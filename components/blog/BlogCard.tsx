import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

export type BlogCardPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  heroImage?: string;
  heroImageAlt?: string;
  readingTime: string;
};

export default function BlogCard({
  post,
  basePath = "/blog",
  readLabel = "Read",
}: {
  post: BlogCardPost;
  basePath?: string;
  readLabel?: string;
}) {
  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-teal-700 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
    >
      {post.heroImage && (
        <img
          src={post.heroImage}
          alt={post.heroImageAlt ?? post.title}
          title={post.heroImageAlt ?? post.title}
          className="h-44 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="section-kicker mb-3 before:content-none">{post.category}</div>
        <h3 className="text-lg font-black leading-snug text-ink">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-teal-700/20 pt-4">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Clock size={12} /> {post.readingTime}
          </div>
          <span className="flex items-center gap-1 text-sm font-bold text-teal-800 transition group-hover:gap-2">
            {readLabel} <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
