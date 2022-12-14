import commentStyles from './comment.module.css';
import utilStyles from '../styles/utils.module.css';

export default function CommentPlaceholder() {
  return (
    <>
          <div className={`${commentStyles.commentContainer} ${utilStyles.flex} ${utilStyles.gap20}`}>
            <div className={`${utilStyles.avatarPlaceholder} ${utilStyles.pulse}`}/>
            <div>
              <div className={commentStyles.commentHead}>
                <div className={`${utilStyles.commentAuthorPlaceholder} ${utilStyles.pulse}`}></div>
              </div>
              <div className={commentStyles.commentBody}>
                <div className={`${utilStyles.commentPlaceholder} ${utilStyles.pulse}`}></div>
              </div>
            </div>
          </div>
      </>
  );
}