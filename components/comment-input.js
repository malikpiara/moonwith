import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export default function CommentInput({emailAddress, commentContent, emailOnChange, CommentOnChange}) {
  return (
    <div className={`${styles.commentInput} ${utilStyles.flex} ${utilStyles.column}`}>
      <form onSubmit={e => {
        e.preventDefault();
        alert('Submitting! Next step is displaying the data.');
    }}>
        <div className={`${utilStyles.flex} ${styles.commentContainer}`}>
            <input value={emailAddress} onChange={emailOnChange} type="email" placeholder="Your email"></input>
            <textarea value={commentContent} onChange={CommentOnChange} placeholder="Write a comment…"></textarea>
            <div className={`${styles.commentButtonContainer}`}>
                <input className={`${styles.button} ${styles.primary} ${styles.commentButtonContainer}`} type="submit" value="Post" />
            </div>
        </div>
        </form>
    </div>
  );
}