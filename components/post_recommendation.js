import styles from '../styles/utils.module.css';
import Link from 'next/link';
import React from 'react';

export default function PostRecommendation(props) {
	return (
		<div className={styles.postPreview}>
			<Link href={`/posts/${props.id}`}>
				<div className={styles.recommendedEntry} key={props.id}>
					<h3 className={styles.headingSmall}>{props.title}</h3>
					<>
					<div dangerouslySetInnerHTML={{__html: props.contentPreview.slice(0, 120) + '…'}} />
					</>
				</div>
			</Link>
		</div>
	);
}
