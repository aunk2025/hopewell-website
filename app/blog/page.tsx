import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import HealthLibrarySearch, { type SearchablePost } from "@/components/blog/HealthLibrarySearch";
import { blogPosts } from "@/lib/blog-content";
import {
  LIVE_SPECIALITY_ORDER,
  SPECIALITY_BY_SLUG,
  SPECIALITY_LABELS,
  SPECIALITY_DESCRIPTIONS,
  SPECIALITY_CARD_IMAGE,
  specialityHref,
} from "@/lib/blog-specialities";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

const TITLE = "Hopewell Health Library | Patient Guides | Hopewell Hospital Ranchi";
const DESCRIPTION =
  "Browse the Hopewell Health Library — medically grounded patient guides on surgery, orthopaedics, fertility, urology and emergency care, organised by specialty.";
const URL = `${SITE_URL}/blog`;

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
    locale: "en_IN",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Hopewell Hospital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogIndexPage() {
  const categories = LIVE_SPECIALITY_ORDER.map((key) => ({
    key,
    label: SPECIALITY_LABELS[key].en,
    description: SPECIALITY_DESCRIPTIONS[key],
    href: specialityHref(key),
    image: SPECIALITY_CARD_IMAGE[key],
    count: blogPosts.filter((p) => SPECIALITY_BY_SLUG[p.slug] === key).length,
  }));

  // Most recently added articles first — posts have no publish-date field,
  // so array order (the order they were written in) is the best available
  // proxy for recency.
  const searchablePosts: SearchablePost[] = [...blogPosts].reverse().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    heroImage: p.heroImage,
    heroImageAlt: p.heroImageAlt,
    readingTime: p.readingTime,
    specialityKey: SPECIALITY_BY_SLUG[p.slug],
    specialityLabel: SPECIALITY_LABELS[SPECIALITY_BY_SLUG[p.slug]].en,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: TITLE,
        description: DESCRIPTION,
        url: URL,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Health Library", item: URL },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar altHref="/hi/blog" />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Health Library" }]} />

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="section-kicker mb-4 before:content-none">Hopewell Health Library</div>
        <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-[-.03em] text-ink sm:text-5xl">
          Patient guides you can trust, organised by specialty
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Medically grounded articles to help patients and families in Ranchi and across Jharkhand
          understand symptoms, treatment options and recovery before a consultation. Search the
          library or browse by specialty below.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 lg:px-8">
        <h2 className="mb-5 text-2xl font-black tracking-[-.02em] text-ink">Browse by specialty</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-teal-700 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
            >
              <img
                src={cat.image.src}
                alt={cat.image.alt}
                title={cat.image.alt}
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-black leading-snug text-ink">{cat.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{cat.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-teal-700/20 pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {cat.count} article{cat.count === 1 ? "" : "s"}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold text-teal-800 transition group-hover:gap-2">
                    Browse <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <HealthLibrarySearch
          posts={searchablePosts}
          specialities={LIVE_SPECIALITY_ORDER.map((key) => ({ key, label: SPECIALITY_LABELS[key].en }))}
        />
      </section>

      <Footer />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
