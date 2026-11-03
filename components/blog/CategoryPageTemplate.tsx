import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog-content";
import {
  type SpecialityKey,
  SPECIALITY_BY_SLUG,
  SPECIALITY_LABELS,
  SPECIALITY_DESCRIPTIONS,
  SPECIALITY_SERVICE_HREF,
  specialityHref,
} from "@/lib/blog-specialities";
import { groupByJourney } from "@/lib/blog-journey-groups";
import { SITE_URL } from "@/lib/contact-config";

const PAGE_SIZE = 9;

export default function CategoryPageTemplate({
  specialityKey,
  page = 1,
}: {
  specialityKey: SpecialityKey;
  page?: number;
}) {
  const label = SPECIALITY_LABELS[specialityKey].en;
  const description = SPECIALITY_DESCRIPTIONS[specialityKey];
  const serviceHref = SPECIALITY_SERVICE_HREF[specialityKey];
  const href = specialityHref(specialityKey);

  // Most recently added articles first — see note in app/blog/page.tsx.
  const allPosts = [...blogPosts].reverse().filter((p) => SPECIALITY_BY_SLUG[p.slug] === specialityKey);
  const journeyGroups = groupByJourney(specialityKey, allPosts);

  const totalPages = Math.max(1, Math.ceil(allPosts.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const pagedPosts = journeyGroups ? allPosts : allPosts.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${label} | Hopewell Health Library`,
        description,
        url: `${SITE_URL}${href}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Health Library", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: label, item: `${SITE_URL}${href}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#faf5ef]">
      <Navbar altHref="/hi/blog" />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Health Library", href: "/blog" }, { label }]} />

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="section-kicker mb-4 before:content-none">Health Library</div>
        <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-[-.03em] text-ink sm:text-5xl">
          {label}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={serviceHref}
            className="rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            View {label} service
          </Link>
          <a
            href="/appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-teal-700 bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5"
          >
            Book an appointment
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        {allPosts.length === 0 ? (
          <p className="rounded-2xl border border-teal-700/30 bg-white p-8 text-center text-slate-600">
            More articles for this specialty are on the way.
          </p>
        ) : journeyGroups ? (
          <div className="grid gap-12">
            {journeyGroups.map((g) => (
              <div key={g.stage}>
                <h2 className="mb-5 text-2xl font-black tracking-[-.02em] text-ink">{g.label}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {g.posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pagedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <Link
                    key={n}
                    href={n === 1 ? href : `${href}?page=${n}`}
                    aria-current={n === safePage ? "page" : undefined}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold transition ${
                      n === safePage
                        ? "border-ink bg-ink text-white"
                        : "border-teal-700/40 bg-white text-slate-600 hover:border-teal-600 hover:text-ink"
                    }`}
                  >
                    {n}
                  </Link>
                ))}
              </nav>
            )}
          </>
        )}
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
