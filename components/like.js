import styles from '../styles/utils.module.css';
import React from 'react';
import Heart from './icons/heartIcon';

export default function LikeButton({
    likeCount = 0,
    onClick,
	hasLike
 }) {
	return (
		<>
		<div
			onClick={onClick}
			className={hasLike ? styles.likeIsTrueWidget : styles.likeWidget }>
				{hasLike ? <Heart filled/> : <Heart/> }
				{`${likeCount}`}
		</div>
		</>
	);
}
