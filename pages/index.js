import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import LoadMore from '../components/load-more';
import { useState } from 'react';

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

      <section onClick={handleClick} className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, contentPreview }) => (
            <li className={utilStyles.recommendedEntry} key={id}>
              <Link href={`/posts/${id}`}>
                <h2 className={utilStyles.headingXl}>{title}</h2>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: contentPreview.slice(0, 250) + "…"}} />
            </li>
          )).slice(0, showMore)}
        </ul>

        <br/>
        { showMore <= allPostsData.length && (
          <LoadMore label={"Load More Posts"}></LoadMore>
        )}
        

      </section>
    </Layout>
  );
}