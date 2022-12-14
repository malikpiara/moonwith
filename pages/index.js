import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import LoadMore from "../components/load-more";
import PostPreview from "../components/post_preview";
import { useState } from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      isGreen: false,
    },
  };
}

export default function Home({ allPostsData }) {
  const [showMore, setShowMore] = useState(8);

  function handleClick() {
    setShowMore(showMore + 8);
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section
        onClick={handleClick}
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <div>
          {allPostsData
            .map(({ id, title, contentPreview }) => (
              <PostPreview
                id={id}
                title={title}
                contentPreview={contentPreview}
              ></PostPreview>
            ))
            .slice(0, showMore)}
        </div>

        <br />
        {showMore <= allPostsData.length && (
          <LoadMore label={"Load More Posts"} />
        )}
      </section>
    </Layout>
  );
}
