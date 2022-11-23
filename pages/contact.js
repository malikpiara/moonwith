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
    <Layout children>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>

      <h1 className={utilStyles.heading2Xl}>Get in touch with me</h1>
      
      <section>
        <p>When I was a teenager, I started reaching out to people I looked up to. Wouldn't be here without them. I'll  never say no to coffee or to sharing the few things I know with you. Don't be shy :)</p>
        <h2 className={utilStyles.headingMd}>Around the web</h2>
        <p>I share content related with emotional intelligence, product development and my personal projects.</p>
            <ul>
                <li>
                    <a className="link" href="https://twitter.com/malikpiara" target="_blank">Twitter.</a>
                </li>
                <li>
                    <a className="link" href="https://linkedin.com/in/malikpiara/" target="_blank">Linkedin.</a>
                </li>
                <li>
                    <a className="link" href="https://instagram.com/malikpiara/" target="_blank">Instagram.</a>
                </li>
            </ul>
        </section>

        <section>
            <h2 className={utilStyles.headingMd}>Reach me directly</h2>
            <ul>
                <li><a className="link" href="mailto:malik@hey.com" target="_blank">malik@hey.com.</a> I take time to reply because my priorities are often elsewhere. Please don't take it personally.</li>
                <li><a className="link" href="https://t.me/malikpiara" target="_blank">@malikpiara on Telegram.</a></li>
            </ul>
        </section>
        </section>
    </Layout>
  );
}