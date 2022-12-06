import Logo from "components/logo";
import styles from "styles/header.module.css";
import Container from "components/container";
import Nav from "components/nav";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <div></div>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
