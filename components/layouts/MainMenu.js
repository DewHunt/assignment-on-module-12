import Link from "next/link";

export default function MainMenu() {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link active font-siliguri">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link font-siliguri">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link font-siliguri">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link font-siliguri">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
