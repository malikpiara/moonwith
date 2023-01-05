import styles from '../styles/utils.module.css';
import Link from 'next/link';
import React from 'react';

export default function PostRecommendation(props) {
	return (
		<div className={styles.postPreview}>
			<Link href={`/posts/${props.id}`}>
				<div className={styles.recommendedEntry} key={props.id}>
					<h3 className={styles.headingSmall}>{props.title}</h3>
					<React.Fragment>
						{props.contentPreview.slice(0, 120) + '…'}
					</React.Fragment>
				</div>
			</Link>
		</div>
	);
}
