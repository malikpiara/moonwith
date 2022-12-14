import { useState, useEffect } from 'react';
import styles from '../styles/utils.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default function AdminDashboard() {
	const [comments, setComments] = useState([]);

	const deleteComment = async (commentId) => {
		const response = await fetch(`/api/comments/${commentId}`, {
			method: 'PUT',
		});
		const data = await response.json();
		console.log(data);
	};

	useEffect(() => {
		fetch('/cobra/comments')
			.then((res) => res.json())
			.then((comments) => {
				setComments(comments);
			});
	}, []);

	return (
		<div className={styles.adminDashboardWrapper}>
			<h2>Manage Comments</h2>
			{comments.map((comment) => (
				<div className={styles.dataWrapper} id={comment.id}>
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
		</div>
	);
}

/* Protecting this page (Server side rendered)
I can also choose Client-Side Rendered (CSR) Page implementation:
https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md */
export const getServerSideProps = withPageAuthRequired();
