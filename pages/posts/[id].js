import Head from 'next/head';
import Layout from '../../components/layout';
import {
	getAllPostIds,
	getPostData,
	getSortedPostsData,
} from '../../lib/posts';
import Date from '../../components/date';
import Comment from '../../components/comment';
import LikeButton from '../../components/like';
import PostRecommendation from '../../components/post_recommendation';
import LoadMore from '../../components/load-more';
import CommentInput from '../../components/comment-input';
import Tag from '../../components/tag';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import { useState, useEffect } from 'react';
import ListOfComments from '../../components/list-of-comments';
import { useUser } from '@auth0/nextjs-auth0';
import CommentButton from '../../components/commentButton';

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);

	// I'm giving recommendations based on the first tag we find.
	// This is not great but gets the jobs done for now.
	// The filter is removing the post with the same id from the recommendations.
	const firstTag = postData.tags[0];
	const allPostsData = getSortedPostsData(firstTag)
		.filter((post) => post.id !== postData.id)
		.slice(0, 3);

	return {
		props: {
			postData,
			allPostsData,
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
	const { user, error, isLoading } = useUser();

	/* if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>; */

	let nextId = 0;

	const [showMore, setShowMore] = useState(false);

	function handleClick() {
		setShowMore(true);
	}

	function handleCommentClick() {
		window.open('#comments', "_self")
	}

	const tagElements = postData.tags.map((tag) => (
			<Tag key={tag} tag={tag}/>
	))

	//const [emailAddress, setEmailAddress] = useState('');
	const [commentContent, setCommentContent] = useState('');

	const [listOfSubmittedComments, setSubmittedComment] = useState([]);

	const [hasUserLike, setHasUserLike] = useState(false);
	const [likeValue, setLikeValue] = useState(0);

	function handleCommentChange(e) {
		setCommentContent(e.target.value);
	}

	function toggleLike() {
		setHasUserLike(prevState => !prevState)
		hasUserLike ? (
			setLikeValue(prevLikeValue => prevLikeValue - 1)
		) : (
			setLikeValue(prevLikeValue => prevLikeValue + 1)
		)}

	// Check if the id of the user is in the response.
	// if it is, update the state.
	const [likeId, setLikeId] = useState(0)

	useEffect(() => {
		fetch(`https://cobra.moonwith.com/likes/${postData.id}`)
			.then((res) => res.json())
			.then((likeValue) => {
				setLikeValue(likeValue.length);
				likeValue.forEach(like => {
					// If the userId fetched from Auth0 is equal to a userId
					// in the list of likes, setHasUserLike to true.
					user?.sub == like.userId ? (setHasUserLike(true)) : (setHasUserLike(false));
					setLikeId(like.id)
				});
			});
	}, [user?.sub]);

	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<section>
				<article>
					<h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
					
					{/* <div className={utilStyles.lightText}>
						<Date dateString={postData.date} />
					</div> */}

					{ hasUserLike ? 
					(
						<div className={utilStyles.postMeta}>
						<LikeButton hasLike likeCount={likeValue} onClick={() => {
	
							fetch(`/api/likes/${likeId}`, {
								method: 'DELETE',
								body: JSON.stringify({
									id: likeId
								}),
								headers: { 'Content-Type': 'application/json' },
							}).then((response) => console.log(response.json()));

							toggleLike()
						}}
						/>
						<CommentButton onClick={handleCommentClick}/>
						</div>
					) : user ? (
						<div className={utilStyles.postMeta}>
						<LikeButton likeCount={likeValue} onClick={() => {
	
							fetch('/api/likes', {
								method: 'POST',
								body: JSON.stringify({
									postId: postData.id,
									userId: user.sub
								}),
								headers: { 'Content-Type': 'application/json' },
							}).then((response) => console.log(response.json()));

							toggleLike()
						}}
						/>
						<CommentButton onClick={handleCommentClick}/>
						</div>
					) :
					
					(
						<div className={utilStyles.postMeta}>
						<LikeButton likeCount={likeValue} onClick={() => {
							window.location = `/api/auth/login?returnTo=/posts/${postData.id}`
						}}
						/>
						<CommentButton onClick={handleCommentClick}/>
						</div>
					) }

					{/* TODO */}
					<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

					<section>
						<h3 className={utilStyles.headingMd}>Tags</h3>
						{tagElements}
					</section>

					<br />
					
					<section id="comments">
						{!showMore ? (
							<>
								<LoadMore label={'Load Comments'} onClick={handleClick} />
							</>
						) : (
							<>
								<h3 className={utilStyles.headingMd}>Comments</h3>

								{user ? (
									<CommentInput
										commentContent={commentContent}
										CommentOnChange={handleCommentChange}
										OnSubmit={(e) => {
											e.preventDefault();
											setSubmittedComment([
												{
													id: nextId++,
													author: user.nickname,
													content: commentContent,
												},
												...listOfSubmittedComments, // Keeps old items at the end.
											]);

											fetch('/api/comments', {
												method: 'POST',
												body: JSON.stringify({
													post_id: postData.id,
													author: user.nickname,
													user_id: user.sub,
													content: commentContent,
												}),
												headers: { 'Content-Type': 'application/json' },
											}).then((response) => console.log(response.json()));
											setCommentContent('');
										}}
									/>
								) : (
									<div className={utilStyles.commentsSignup}>
                    🌙 Be part of my exclusive community.{' '}
										<Link
											href={`/api/auth/login?returnTo=/posts/${postData.id}`}
										>
                      Sign up
										</Link>{' '}
                    in order to leave a comment and see the hidden side of the
                    Moon.
									</div>
								)}

								<div>
									{/* TODO: Fetch user details from Auth0 based on the user_id (sub). */}
									{listOfSubmittedComments.map((comment) => (
										<Comment
											author={comment.author}
											content={comment.content}
											key={comment.id}
										/>
									))}
								</div>

								{<ListOfComments post_id={postData.id} />}
							</>
						)}
					</section>

					<br />
					<section>
						<h3 className={utilStyles.headingMd}>Other essays you may like</h3>
						<div>
							{allPostsData.map(({ id, title, contentPreview }) => (
								<PostRecommendation
									id={id}
									key={id}
									title={title}
									contentPreview={contentPreview}
								/>
							))}
						</div>
					</section>
					<div className='gradient-overlay'></div>
				</article>
			</section>
		</Layout>
	);
}
