import PageMeta from "@/seo/PageMeta";
import { BlogPostProvider } from "@/shared/sections/blog-details/BlogPostContext";
import Section1 from "@/shared/sections/blog-details/Section1";
import Section2 from "@/shared/sections/blog-details/Section2";

export default function BlogDetailsPage() {
  return (
    <BlogPostProvider>
      <PageMeta title="Klarus AI - Blog" />
      <Section1 />
      <Section2 />
    </BlogPostProvider>
  );
}
