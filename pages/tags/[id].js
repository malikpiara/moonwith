import Head from 'next/head';
import Layout from '../../components/layout';
import { getSortedPostsData, getAllTags } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData(params.id);

  return {
    props: {
      allPostsData,
      params,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllTags();
  
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ allPostsData, params }) {

    return (
      <Layout>
        <h1>Essays on {params.id}</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </Layout>
    );
  }