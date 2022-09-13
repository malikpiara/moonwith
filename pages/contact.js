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

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1 className={utilStyles.headingXl}>Get in touch with me</h1>
      
      <section className={utilStyles.headingMd}>
            <h2 className={utilStyles.headingLg}>Around the web</h2>
            <p>I share content related with emotional intelligence, product development and my personal projects.</p>
            <ul>
                <li>
                    <a class="link" href="https://twitter.com/malikpiara" target="_blank">Twitter.</a>
                </li>
                <li>
                    <a class="link" href="https://linkedin.com/in/malikpiara/" target="_blank">Linkedin.</a>
                </li>
                <li>
                    <a class="link" href="https://instagram.com/malikpiara/" target="_blank">Instagram.</a>
                </li>
            </ul>
        </section>

        <section className={utilStyles.headingMd}>
            <h2 className={utilStyles.headingLg}>Reach me directly</h2>
            <ul>
                <li><a class="link" href="mailto:malik@hey.com" target="_blank">malik@hey.com.</a> I take one week on average to reply.</li>
                <li><a class="link" href="https://t.me/malikpiara" target="_blank">@malikpiara on Telegram.</a></li>
            </ul>
        </section>
    </Layout>
  );
}