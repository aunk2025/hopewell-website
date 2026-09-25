import { notFound } from "next/navigation";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { blogPosts, getBlogPost } from "@/lib/blog-content";
import { SITE_URL } from "@/lib/contact-config";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog | Hopewell Hospital Ranchi" };
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
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
        reviewedBy: { "@type": "Person", name: post.reviewer.split(",")[0].split("—")[0].trim() },
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
