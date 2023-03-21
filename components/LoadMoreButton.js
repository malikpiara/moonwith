import styles from './layout/layout.module.css';
import React from 'react';

export default function LoadMore({ label = 'Load More', onClick }) {
	return (
		<>
			<div className={`${styles.loadMore}`} onClick={onClick}>
				{label}
			</div>
		</>
	);
}
