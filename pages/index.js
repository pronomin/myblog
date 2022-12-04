import Hero from "components/hero";
import Container from "components/container";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column.js";
import Meta from "components/meta";
import { getAllPosts } from "lib/api";
import Posts from "components/posts";
//汎用OGP画像
import siteImg from "images/ogp.jpg";
import { getPlaiceholder } from "plaiceholder";
//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta
        pageTitle="農民の百姓日記"
        pageImg={siteImg.src}
        pageImgW={siteImg.width}
        pageImgH={siteImg.height}
      />
      <Hero title="画像" subtitle="ドット" />
      <TwoColumn>
        <TwoColumnMain>
          <Posts posts={posts} />
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
