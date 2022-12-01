import Hero from "components/hero";
import Container from "components/container";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column.js";
import Meta from "components/meta";

export default function Home() {
  return (
    <Container>
      <Meta pageTitle="農民の百姓日記" pageDesc />
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
