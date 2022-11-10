import { parseISO, format } from 'date-fns';
import commentStyles from './comment.module.css';

export default function Comment({comment}) {
  // const date = parseISO(dateString);
  return (
    <>
    <div className={commentStyles.commentContainer}>
        <div className={commentStyles.commentHead}>
            <>{comment.author}</>
        </div>
        <div className={commentStyles.commentBody}>
            <p>{comment.content}</p>
        </div>
    </div>
    </>
  );
}