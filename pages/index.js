import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, contentPreview }) => (
            <li className={utilStyles.recommendedEntry} key={id}>
            <Link href={`/posts/${id}`}>
              <h2 className={utilStyles.headingXl}>{title}</h2>
            </Link>
            
            <div dangerouslySetInnerHTML={{ __html: contentPreview.slice(0, 250) + "…"}} />

          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}