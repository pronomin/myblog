import Hero from "components/hero";
import Container from "components/container";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column.js";

export default function Home() {
  return (
    <Container>
      <Hero title="画像" subtitle="ドット" />
      <TwoColumn>
        <TwoColumnMain></TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
