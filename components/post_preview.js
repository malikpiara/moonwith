import styles from '../styles/utils.module.css';
import Link from 'next/link';

export default function PostPreview({ id, title, contentPreview }) {
	return (
		<div className={styles.postPreview}>
			<Link href={`/posts/${id}`}>
				<div className={styles.recommendedEntry} key={id}>
					<h2 className={styles.headingXl}>{title}</h2>
					<div
						dangerouslySetInnerHTML={{
							__html: contentPreview.slice(0, 250) + '…',
						}}
					/>
				</div>
			</Link>
		</div>
	);
}
