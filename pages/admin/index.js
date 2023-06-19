import { useState, useEffect } from 'react';
import styles from '../../styles/utils.module.css';
import Link from 'next/link';
import { CommentPlaceholderAdmin } from '../../components/admin/AdminCommentPlaceholder';
import Date from '../../components/common/FormattedDate';
import Layout from '../../components/admin/LayoutAdmin';


export default function AdminDashboard() {
	const [comments, setComments] = useState([]);
	const [isLoading, setLoading] = useState(false);

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
			<Layout>
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
					<div><Date dateString={comment.createdAt} /></div>
					<div>
						{comment.isDeleted ? (
							<small>Deleted</small>
						) : (
							<button
								onClick={() => deleteComment(comment.id)}
								className={styles.button}
							>Delete</button>
						)}
					</div>
				</div>
			))}
				</>
			)}
			</div>
			</Layout>
	);
}