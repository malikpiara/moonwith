import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export default function CommentInput() {
  return (
    <div className={`${styles.commentInput} ${utilStyles.flex} ${utilStyles.column}`}>
        <div className={`${utilStyles.flex} ${styles.commentContainer}`}>
            <input type="email" placeholder="Your email"></input>
            <textarea placeholder="Write a comment…"></textarea>
            <div className={`${styles.commentButtonContainer}`}>
                <input className={`${styles.button} ${styles.primary} ${styles.commentButtonContainer}`} type="submit" value="Post" />
            </div>
        </div>
    </div>
  );
}