import CategoryPageTemplate from "@/components/blog/CategoryPageTemplate";
import { buildCategoryMetadata } from "@/lib/blog-category-seo";

export const metadata = buildCategoryMetadata("urology");

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  return <CategoryPageTemplate specialityKey="urology" page={page ? Number(page) : 1} />;
}
