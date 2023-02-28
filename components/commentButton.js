import styles from '../styles/utils.module.css';
import React from 'react';
import SpeechBubble from './icons/speechIcon';

export default function CommentButton({
    likeCount = 0,
    onClick,
	hasLike
 }) {
	return (
		<div
			onClick={onClick}
			className={styles.commentButton}>
			<SpeechBubble/>
		</div>
	);
}
