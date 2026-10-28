import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPostsHi } from "@/lib/blog-content-hi";
import { blogListingDict } from "@/lib/i18n";
import { groupBySpeciality } from "@/lib/blog-specialities";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "पेशेंट गाइड एवं ब्लॉग | हॉपवेल हॉस्पिटल रांची";
const DESCRIPTION =
  "रांची, झारखंड में सर्जरी, लेप्रोस्कोपिक प्रक्रियाओं, पित्त की पथरी एवं फर्टिलिटी केयर पर हॉपवेल हॉस्पिटल के पेशेंट गाइड पढ़ें।";
const URL = `${SITE_URL}/hi/blog`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "en-IN": "/blog", "hi-IN": "/hi/blog" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Hopewell Hospital",
    type: "website",
    locale: "hi_IN",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Hopewell Hospital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogIndexPageHindi() {
  const t = blogListingDict.hi;
  const groups = groupBySpeciality(blogPostsHi, "hi");

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar locale="hi" altHref="/blog" />

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="section-kicker mb-4 before:content-none">{t.kicker}</div>
        <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-[-.03em] text-ink sm:text-5xl">
          {t.h1}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {t.subtitle}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid gap-12">
          {groups.map((group) => (
            <div key={group.key}>
              <h2 className="mb-5 text-2xl font-black tracking-[-.02em] text-ink">{group.label}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/hi/blog/${post.slug}`}
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
                          {t.readLabel} <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer locale="hi" />
    </main>
  );
}
