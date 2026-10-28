import { notFound } from "next/navigation";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { blogPostsHi, getBlogPostHi, getRelatedPostsHi } from "@/lib/blog-content-hi";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

export function generateStaticParams() {
  return blogPostsHi.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostHi(slug);
  if (!post) return { title: "ब्लॉग | हॉपवेल हॉस्पिटल रांची" };
  const ogImage = post.heroImage ?? DEFAULT_OG_IMAGE;
  const ogAlt = post.heroImageAlt ?? post.title;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/hi/blog/${post.slug}`,
      languages: { "en-IN": `/blog/${post.slug}`, "hi-IN": `/hi/blog/${post.slug}` },
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/hi/blog/${post.slug}`,
      type: "article",
      locale: "hi_IN",
      images: [{ url: ogImage, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPageHindi({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostHi(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        author: { "@type": "Organization", name: post.author },
        ...(post.reviewer && {
          reviewedBy: { "@type": "Person", name: post.reviewer.split(",")[0].split(/[-—]/)[0].trim() },
        }),
        publisher: { "@type": "Hospital", name: "Hopewell Hospital", url: SITE_URL },
        mainEntityOfPage: `${SITE_URL}/hi/blog/${post.slug}`,
        about: post.category,
        keywords: post.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "होम", item: `${SITE_URL}/hi` },
          { "@type": "ListItem", position: 2, name: "ब्लॉग", item: `${SITE_URL}/hi/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/hi/blog/${post.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const related = getRelatedPostsHi(slug).map((r) => ({ slug: r.slug, title: r.title, category: r.category }));

  return (
    <>
      <BlogPostTemplate post={post} locale="hi" altHref={`/blog/${slug}`} blogIndexHref="/hi/blog" relatedPosts={related} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
