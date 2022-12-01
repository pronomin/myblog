import Link from "next/link";
import styles from "styles/logo.module.css";

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      農民の百姓日記
    </Link>
  );
}
