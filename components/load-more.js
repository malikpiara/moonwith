import styles from './layout.module.css';

export default function LoadMore({ label = 'Load More' }) {
	return (
		<>
			<div className={`${styles.loadMore}`}>{label}</div>
		</>
	);
}
