import BlogList from "@/components/blog/BlogList";
import getPostList from "@/lib/getPostList";

export default async function PostListByCategory({ params }) {
  const categoryId = params.categoryId;
  const allPosts = await getPostList(categoryId);
  return (
    <div className="container mt-5">
      <BlogList postList={allPosts} />
    </div>
  );
}
