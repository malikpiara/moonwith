import { parseISO, format } from 'date-fns';
import commentStyles from './comment.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Comment({comment}) {
  // const date = parseISO(dateString);
  return (
    <>
    <div className={`${commentStyles.commentContainer} ${utilStyles.flex} ${utilStyles.gap20}`}>
      <div className={commentStyles.avatar}>{comment.author.slice(0, 1)}</div>
      <div>
        <div className={commentStyles.commentHead}>
            <>{comment.author}</>
        </div>
        <div className={commentStyles.commentBody}>
            <p>{comment.content}</p>
        </div>
        </div>
    </div>
    </>
  );
}