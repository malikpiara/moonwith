import styles from '../styles/utils.module.css';
import React from 'react';

export default function LikeButton({
    likeCount,
    onClick,
	hasLike
 }) {
	const label = '💜'

	return (
		<div
			onClick={onClick}
			className={hasLike ? styles.likeIsTrueWidget : styles.likeWidget }>
				{label + ` ${likeCount}` + " likes"}
		</div>
	);
}
