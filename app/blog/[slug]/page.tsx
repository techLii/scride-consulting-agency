// app/blog/[slug]/page.tsx
import { SingleBlog } from "@/cosmic/blocks/blog/SingleBlog";

export default async function SingleBlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  return (
    <main className="p-4">
      <SingleBlog query={{ slug: params.slug, type: "blog-posts" }} />
    </main>
  );
}
