import styles from '../styles/utils.module.css';
import React from 'react';

export default function LikeIsTrueButton({
    label = '💜',
    likeCount,
    onClick
 }) {
	return (
		<>
			<div onClick={onClick} className={`${styles.likeIsTrueWidget}`}>{label + ` ${likeCount}`}</div>
		</>
	);
}
