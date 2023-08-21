import getPostCategories from "@/lib/getPostCategories";
import Link from "next/link";

export default async function CategoryMenu() {
  const categories = await getPostCategories();
  return (
    <nav className="navbar navbar-expand-sm bg-success navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          {categories.map((category) => (
            <li key={category.id} className="nav-item">
              <Link
                href={`/blog/category/${category.id}`}
                className="nav-link font-siliguri">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
