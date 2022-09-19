import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// I'm adding a filter to check if "principles" is one of the tags.
// Now I need to understand how to do this dynamically with parameters.

export default function Home({ allPostsData }) {
    const tag = "principles"
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a product manager from Lisbon with a knack for software development and design.</p>
        <p>
        Moonwith is my digital home. Here, I share thoughts on personal growth, emotional intelligence, design and product development.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tagged: {tag}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.filter(a=> a.tags.includes(tag)).map(({ id, date, title, tags }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>{tags.map(tag => (
            <span>{tag}, </span>
          ))}</small>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}