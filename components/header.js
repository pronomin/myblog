import Logo from "components/logo";
import styles from "styles/header.module.css";
import Container from "components/container";

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <div></div>
          <Logo boxOn />
          <div></div>
        </div>
      </Container>
    </header>
  );
}
