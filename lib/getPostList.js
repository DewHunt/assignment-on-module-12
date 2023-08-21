export default async function getPostList(categoryId) {
  const response = await fetch(`${process.env.API}post-list/${categoryId}`);
  if (!response.ok) {
    throw new Error("Error fetching newest posts");
  }
  return response.json();
}
