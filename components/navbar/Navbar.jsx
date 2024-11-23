import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

const links = [
  { href: "/", label: "products" },
  { href: "/cart", label: "cart" },
  { href: "", label: "women" },
  { href: "", label: "men" },
  { href: "", label: "designers" },
  { href: "", label: "clothing" },
  { href: "", label: "shoes" },
  { href: "", label: "bags" },
  { href: "", label: "accessories" },
  { href: "", label: "jewellery" },
];

export default function Navbar() {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.list}>
        {links.map(({ href, label }) => (
          <li className={styles.item} key={label}>
            <Link href={href || "#"} className={!href ? styles.disabled : ""}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
