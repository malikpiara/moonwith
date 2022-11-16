import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Date from '../../components/date';
import Comment from '../../components/comment';
import LoadMore from '../../components/load-more';
import CommentInput from '../../components/comment-input';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import commentStyles from '../../components/comment.module.css';
import { useState } from 'react';

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

  let nextId = 0;

  const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setShowMore(true);
      }

  const tags = postData.tags;

  const [emailAddress, setEmailAddress] = useState('');
  const [commentContent, setCommentContent] = useState('');

  const [listOfComments, SetListOfComments] = useState([]);

  function handleEmailChange(e) {
    setEmailAddress(e.target.value);
  }

  function handleCommentChange(e) {
    setCommentContent(e.target.value);
  }

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
          {/* FIX: I shouldn't be targetting the whole section but the LoadMore element.  */}
          <section  onClick={handleClick}>
            {!showMore ?
            (
              <>
              <LoadMore label={"Load Comments"}/>
              </>
            ) :
            (
              <>
              <h3 className={utilStyles.headingMd}>Comments</h3>
              
              <CommentInput
                emailAddress={emailAddress}
                commentContent={commentContent}
                emailOnChange={handleEmailChange}
                CommentOnChange={handleCommentChange}
                OnSubmit={e => {
                  e.preventDefault();
                  SetListOfComments([
                    { id: nextId++, email: emailAddress, content: commentContent },
                    ...listOfComments, // Keeps old items at the end.
                  ]);
              }}
              />

              <div>
                {listOfComments.map(comment => (
                  <div key={comment.id}>
                    <div className={commentStyles.commentHead}>{comment.email}</div>
                    <div className={commentStyles.commentBody}>{comment.content}</div>
                    </div>
                ))}
              </div>

              {
              // Only displaying comments that have the same post id
              // for any give post. TODO: Change the Backend to only fetch entries with the
              // post_id parameter without filter.
              comments
              .filter(comment => comment.post_id == postData.id)
              .map((comment) => {
                return (
                      <Comment comment={comment} key={comment.id} />
                )
              })
            }
              </>
            )
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