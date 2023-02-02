import styles from '../styles/utils.module.css';
import React from 'react';

// I wonder if label should be a prop or a const. What would be the best practice?
export default function LikeButton({
    likeCount,
    onClick
 }) {
	const label = '💜'
	return (
		<>
			<div onClick={onClick} className={`${styles.likeWidget}`}>{label + ` ${likeCount}` + " likes"}</div>
		</>
	);
}
