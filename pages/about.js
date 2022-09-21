import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function About() {
  return (
    <Layout children>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1 className={utilStyles.headingXl}>About me</h1>
      
        <section className={utilStyles.headingMd}>
            <p>Talent is distributed globally but opportunities aren't. — I want to help change that.</p>
        </section>

        <section>
            <p>My name is Malik and I work on initiatives that promote more access to opportunities for people who don't have them. My mission is to help build a world where more people can have the freedom to decide who they want to be.</p>
            <p>Moonwith is my digital home. The place where I share my thoughts on personal growth, emotional intelligence and product development.</p>
            <p>As of October, I'm starting as teaching assistant for product management at CODE University. And a design thinking 16-week program at Hasso Plattner Institute of design (D-School). </p>
        </section>

    </Layout>
  );
}