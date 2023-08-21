export default async function getNewestPosts() {
  const response = await fetch(`${process.env.API}post-newest`);
  if (!response.ok) {
    throw new Error("Error fetching newest posts");
  }
  return response.json();
}
