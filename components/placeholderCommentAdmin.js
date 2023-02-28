import styles from '../styles/utils.module.css';

export function CommentPlaceholderAdmin() {
    return (
        <div className={styles.dataWrapper}>
            <div className={`${styles.mediumPlaceholder} ${styles.pulse}`}/>
            <br/>
            <div className={`${styles.commentAuthorPlaceholder} ${styles.pulse}`}/>
            <div className={`${styles.commentAuthorPlaceholder} ${styles.pulse}`}/>
        </div>
    )
}