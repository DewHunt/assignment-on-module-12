import BlogList from "@/components/blog/BlogList";
import getNewestPosts from "@/lib/getNewestPosts";

export default async function Blog() {
  const allNewestPosts = await getNewestPosts();
  return (
    <div className="container mt-5">
      <BlogList postList={allNewestPosts} />
    </div>
  );
}
