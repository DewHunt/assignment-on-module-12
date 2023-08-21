import CategoryMenu from "@/components/layouts/CategoryMenu";
export default function Layout({ children }) {
  return (
    <div>
      <CategoryMenu />
      {children}
    </div>
  );
}
