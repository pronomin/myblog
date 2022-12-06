import Link from "next/link";
import styles from "styles/nav.module.css";
import { useState } from "react";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };
  const closeNav = () => {
    setNavIsOpen(false);
  };
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            HOME
          </Link>
        </li>
        <li>
          <Link href="/blog/category/idol" onClick={closeNav}>
            アイドル
          </Link>
        </li>
        <li>
          <Link href="/blog/category/architect" onClick={closeNav}>
            一級建築士
          </Link>
        </li>
      </ul>
    </nav>
  );
}
