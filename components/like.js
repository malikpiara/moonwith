import styles from '../styles/utils.module.css';
import React from 'react';

export default function LikeButton({
    likeCount,
    onClick,
	likeIsTrue
 }) {
	const label = '💜'

	return (
		<>
			{likeIsTrue ? (
		<div
			onClick={onClick}
			className={`${styles.likeIsTrueWidget}`}>{label + ` ${likeCount}` + " likes"}
		</div>
		
		) : (
		<div
			onClick={onClick}
			className={`${styles.likeWidget}`}>{label + ` ${likeCount}` + " likes"}
		</div>
		)
	}
		</>
	);
}
