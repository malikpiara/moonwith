import styles from '../styles/utils.module.css';
import Link from 'next/link';
import React from 'react';

export default function PostPreview(props) {
	return (
		<div className={styles.postPreview}>
			<Link href={`/posts/${props.id}`}>
				<div className={styles.recommendedEntry} key={props.id}>
					<h2 className={styles.headingXl}>{props.title}</h2>
					<React.Fragment>
						{props.contentPreview.slice(0, 250) + '…'}
					</React.Fragment>
				</div>
			</Link>
		</div>
	);
}
