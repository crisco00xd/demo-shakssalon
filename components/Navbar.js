import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="main-menu">
      <ul className="main-menu__list" role="list">
        <li className="main-menu__item">
          <Link href="/">
            <a className="main-menu__link">Home</a>
          </Link>
        </li>
        <li className="main-menu__item">
          <Link href="/services">
            <a className="main-menu__link">Services</a>
          </Link>
        </li>
        <li className="main-menu__item">
          <Link href="/about">
            <a className="main-menu__link">About Us</a>
          </Link>
        </li>
        <li className="main-menu__item">
          <Link href="/gallery">
            <a className="main-menu__link">Gallery</a>
          </Link>
        </li>
        <li className="main-menu__item">
          <Link href="/pricelist">
            <a className="main-menu__link">Price List</a>
          </Link>
        </li>
        <li className="main-menu__item">
          <Link href="/contact">
            <a className="main-menu__link">Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
