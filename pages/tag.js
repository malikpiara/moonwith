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
    const tag = "principles";
    
  return (
    <Layout children>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {allPostsData.map(({ tags }) => (
          <li>{tags}</li>
        ))}
        <h2 className={utilStyles.headingLg}>Tagged: {tag}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.filter(post=> post.tags.includes(tag)).map(({ id, date, title, tags }) => (
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