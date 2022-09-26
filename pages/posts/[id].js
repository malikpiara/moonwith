import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Date from '../../components/date';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData("principles").slice(0, 3);

  return {
    props: {
      postData,
      allPostsData
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, allPostsData }) {

  const tags = postData.tags;

    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

          <section>
            <h3 className={utilStyles.headingMd}>Tags</h3>
        
          {tags.map(tag => (
            <Link href={`/tags/${tag}`}>
              <span className='tag'>{tag}</span>
            </Link>
          ))}
          </section>

          <section>
            <br/>
            <h3 className={utilStyles.headingMd}>Other essays you may like</h3>
            <div>
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${id}`}>
              <div className={utilStyles.recommendedEntry} key={id}>
                
                  <div className={utilStyles.headingSmall}><a>{title}</a></div>
               
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </div>
              </Link>
            ))}
          </div>
        </section>
          
        </article>
      </Layout>
    );
  }