export default async function getPostCategories() {
  const response = await fetch(`${process.env.API}post-categories`);
  if (!response.ok) {
    throw new Error("Error fetching newest posts");
  }
  return response.json();
}
