import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Date from '../../components/date';
import Comment from '../../components/comment';
import LoadMore from '../../components/load-more';
import CommentInput from '../../components/comment-input';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import { useState } from 'react';
import ListOfComments from '../../components/list-of-comments';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  // I'm giving recommendations based on the first tag we find.
  // This is not great but gets the jobs done for now.
  // The filter is removing the post with the same id from the recommendations.
  const firstTag = postData.tags[0];
  const allPostsData = getSortedPostsData(firstTag).filter(post => post.id !== postData.id).slice(0, 3);

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

  let nextId = 0;

  const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setShowMore(true);
      }

  const tags = postData.tags;

  const [emailAddress, setEmailAddress] = useState('');
  const [commentContent, setCommentContent] = useState('');

  const [listOfSubmittedComments, setSubmittedComment] = useState([]);

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
                  setSubmittedComment([
                    { id: nextId++, email: emailAddress, content: commentContent },
                    ...listOfSubmittedComments, // Keeps old items at the end.
                  ]);
                  // Using next.js Rewrites to replace /api/:path* with my API.
                  // Check next.config.js for more details.
                  fetch(`/api/comments/${postData.id}/${emailAddress}/${commentContent}`, {
                    method: 'put',
                    headers: {'Content-Type':'application/json'}
                   }).then(response => console.log(response.json()));
                  setEmailAddress('');
                  setCommentContent('');
                }}
              />

              <div>
                {listOfSubmittedComments.map(comment => (
                    <Comment author={comment.email} content={comment.content} key={comment.id}/>
                ))}
              </div>

              {
                      <ListOfComments post_id={postData.id} />
                
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