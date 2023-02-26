import { useState, useEffect } from 'react';
import styles from '../../styles/utils.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Nav from '../../components/adminNav';

export const getServerSideProps = withPageAuthRequired();

export default function AdminDashboard() {
	const [comments, setComments] = useState([]);

	function handleClick() {
		window.open('https://github.com/malikpiara/moonwith/new/main/posts')
	}

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
			
		<Nav onClick={handleClick} />
	  
			<div>

			<h2>Comments</h2>
			<div className={styles.twoColumns}>
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
			</div>
			</div>

		</div>
	);
}