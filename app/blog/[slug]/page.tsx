import { notFound } from "next/navigation";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { blogPosts, getBlogPost } from "@/lib/blog-content";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/contact-config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog | Hopewell Hospital Ranchi" };
  // Next.js does not merge a page's openGraph/twitter with the parent
  // layout's, so a post without its own hero image would otherwise show no
  // preview image at all — fall back to the site-wide default explicitly.
  const ogImage = post.heroImage ?? DEFAULT_OG_IMAGE;
  const ogAlt = post.heroImageAlt ?? post.title;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
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
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        about: post.category,
        keywords: post.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
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

  return (
    <>
      <BlogPostTemplate post={post} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
