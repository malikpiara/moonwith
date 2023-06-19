import styles from '../layout/layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import commentStyles from './comment.module.css';
import React from 'react';

export default function CommentInput({
	commentContent,
	CommentOnChange,
	OnSubmit,
}) {
	const { user, error, isLoading } = useUser();
	return (
		<div
			className={`${styles.commentInput} ${commentStyles.comment_input_wrap}`}
		>
			<form onSubmit={OnSubmit}>
				<div
					className={`${utilStyles.flex} ${commentStyles.comment_input_head}`}
				>
					<img className={commentStyles.avatar} src={user.picture} />
				</div>
				<div
					className={`${utilStyles.flex} ${styles.commentContainer} ${commentStyles.comment_input_right}`}
				>
					<textarea
						value={commentContent}
						onChange={CommentOnChange}
						placeholder="Write a comment…"
					></textarea>
					<div className={`${styles.commentButtonContainer}`}>
						<input
							disabled={commentContent.length === 0}
							className={`${styles.button} ${styles.primary} ${styles.commentButtonContainer}`}
							type="submit"
							value="Post"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
