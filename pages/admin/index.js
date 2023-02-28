import { useState, useEffect } from 'react';
import styles from '../../styles/utils.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Nav from '../../components/adminNav';
import { CommentPlaceholderAdmin } from '../../components/placeholderCommentAdmin';

export const getServerSideProps = withPageAuthRequired();

export default function AdminDashboard() {
	const [comments, setComments] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const [element, setElement] = useState(false);

	function handleClick() {
		window.open('https://github.com/malikpiara/moonwith/new/main/posts')
	}

	function handleKeyPress(event) {
		if (event.keyCode == 49) {
			window.location.href = '/admin'
		} else if (event.keyCode == 50) {
			window.location.href = '/admin/subscribers'
		} else if (event.keyCode == 51) {
			window.location.href = '/'
		} else if (event.keyCode == 52) {
			if (!element) {setElement(true)}
			else if (element) {setElement(false)}
		}
	}

	const deleteComment = async (commentId) => {
		const response = await fetch(`/api/comments/${commentId}`, {
			method: 'PUT',
		});
		const data = await response.json();
	};

	useEffect(() => {
		setLoading(true);
		fetch('/cobra/comments')
			.then((res) => res.json())
			.then((comments) => {
				setComments(comments);
				setLoading(false);
			});
	}, []);

	return (
		<div className={styles.adminDashboardWrapper}>

		{useEffect(() => {
				document.addEventListener('keydown', handleKeyPress)
				}
		)}

		{element && (
			<div className={styles.magic}>
				<p>Press <strong>4</strong> to load this menu from anywhere.</p>
				<div className={styles.magicOptions}>
					<div>
						<div onClick={handleClick}>0</div>
						<div>New Post</div>
					</div>
					<div>
					<div>1</div>
					<div>Comments</div>
					</div>
					<div>
					<div>2</div>
					<div>Subscribers</div>
					</div>
					</div>
			</div>
		)}
			
		<Nav onClick={handleClick} />
	  
			<div>

			<h3>Comments</h3>
			

			<div className={styles.twoColumns}>

			{isLoading ? (
					<>
					<CommentPlaceholderAdmin/>
					<CommentPlaceholderAdmin/>
					<CommentPlaceholderAdmin/>
					<CommentPlaceholderAdmin/>
					<CommentPlaceholderAdmin/>
					<CommentPlaceholderAdmin/>
					</>
			) : (
				<>
				{comments.map((comment) => (
				<div key={comment.id} className={styles.dataWrapper} id={comment.id}>
					<div>{comment.content}</div>
					<div>
						<Link href={`posts/${comment.post_id}`}>{comment.post_id}</Link>
					</div>
					<div>By {comment.author}</div>
					<div>{comment.createdAt}</div>
					<div>
						{comment.isDeleted ? (
							<small>Deleted</small>
						) : (
							<button
								onClick={() => deleteComment(comment.id)}
								className={styles.button}
							>
                Delete
							</button>
						)}
					</div>
				</div>
			))}
				</>
			)}

			
			</div>
			</div>

		</div>
	);
}