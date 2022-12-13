import { useState, useEffect } from 'react';
import Comment from './comment';

export default function ListOfComments({post_id}) {
  const [listOfComments, setListOfComments] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`/cobra/comments/${post_id}`)
      .then((res) => res.json())
      .then((listOfComments) => {
        setListOfComments(listOfComments)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      {listOfComments
      .map(comment => (
        <Comment author={comment.author} content={comment.content}/>
      ))}
      </>
  );
}