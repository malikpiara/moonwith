import styles from '../styles/utils.module.css';
import Link from 'next/link';

export default function PostRecommendation({id, title, contentPreview}) {
  return (
    <div className={styles.postPreview}>
        <Link href={`/posts/${id}`}>
            <div className={styles.recommendedEntry} key={id}>
            <h2 className={styles.headingSmall}>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: contentPreview.slice(0, 120) + "…"}} />
            </div>
        </Link>
    </div>
  );
}