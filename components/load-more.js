import styles from './layout.module.css';
import React from 'react';

export default function LoadMore({ label = 'Load More' }) {
	return (
		<>
			<div className={`${styles.loadMore}`}>{label}</div>
		</>
	);
}
