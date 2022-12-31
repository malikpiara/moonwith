import styles from '../styles/utils.module.css';
import React from 'react';

export default function LikeButton({
    label = '💜',
    likeCount,
    onClick
 }) {
	return (
		<>
			<div onClick={onClick} className={`${styles.likeWidget}`}>{label + ` ${likeCount}` + " likes"}</div>
		</>
	);
}
