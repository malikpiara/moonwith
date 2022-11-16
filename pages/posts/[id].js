import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Date from '../../components/date';
import Comment from '../../components/comment';
import LoadMore from '../../components/load-more';
import CommentInput from '../../components/comment-input';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';

export async function loadComments() {
  // Call piara.li endpoint to get comments dummy.
  const res = await fetch('https://piara.li/comments')
  const data = await res.json()
  return data
}

export async function getStaticProps({ params }) {
  const comments = await loadComments();
  const postData = await getPostData(params.id);

  // I'm giving recommendations based on the first tag we find.
  // This is not great but gets the jobs done for now.
  // The filter is removing the post with the same id from the recommendations.
  const firstTag = postData.tags[0];
  const allPostsData = getSortedPostsData(firstTag).filter(post => post.id !== postData.id).slice(0, 3);

  return {
    props: {
      postData,
      allPostsData,
      comments
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

export default function Post({ postData, allPostsData, comments }) {

  const tags = postData.tags;

    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <section>
        <article>
          <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

          <section>
            <h3 className={utilStyles.headingMd}>Tags</h3>
        
          {
            tags.map(tag => (
              <Link href={`/tags/${tag}`}>
                <span className='tag'>{tag.slice(0,1).toUpperCase() + tag.slice(1)}</span>
              </Link>
            ))
          }
          </section>

          <br/>
          <section>
            <LoadMore label={"Load Comments"}></LoadMore>
            
            <h3 className={utilStyles.headingMd}>Comments</h3>
            <CommentInput></CommentInput>

            {
              // Only displaying comments that have the same post id
              // for any give post. TODO: Change the Backend to only entries with the
              // post_id parameter by design.
              comments
              .filter(comment => comment.post_id == postData.id)
              .map((comment) => {
                return (
                      <Comment comment={comment} key={comment.id} />
                )
              })
            }
          </section>

          <br/>
          <section>
            <h3 className={utilStyles.headingMd}>Other essays you may like</h3>
            <div>
            {allPostsData.map(({ id, date, title, contentPreview }) => (
              <Link href={`/posts/${id}`}>
              <div className={utilStyles.recommendedEntry} key={id}>
                
                  <div className={utilStyles.headingSmall}><a>{title}</a></div>
               
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>

                <div dangerouslySetInnerHTML={{ __html: contentPreview.slice(0, 120) + "…"}} />
              </div>
              </Link>
            ))}
          </div>
        </section>
       
        </article>
        </section>
      </Layout>
    );
  }