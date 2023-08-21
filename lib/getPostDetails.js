export default async function getPostDetails(postId) {
  const response = await fetch(`${process.env.API}post-details/${postId}`);
  if (!response.ok) {
    throw new Error("Error fetching posts details");
  }
  return response.json();
}
