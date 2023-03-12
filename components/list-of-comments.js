import { useState, useEffect } from 'react';
import Comment from './comment';
import CommentPlaceholder from './comments_placeholder';
import React from 'react';

/* TO IMPROVE
1. ChatGPT is suggesting we improve the error handling by displaying an error message
to the user or falling back to a default set of comments.
 */

export default function ListOfComments({ post_id }) {
	const [listOfComments, setListOfComments] = useState([]);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		try {
			fetch(`/cobra/comments/${post_id}`)
			.then((res) => res.json())
			.then((listOfComments) => {
				setListOfComments(listOfComments);
				setLoading(false);
			});
		} catch {console.error();}
	}, [post_id]);

	const commentElements = listOfComments.map((comment) => (
		<Comment key={comment.id} {...comment} />
	))

	if (isLoading)
		return (
			<>
				<CommentPlaceholder />
				<br />
				<CommentPlaceholder />
				<br />
				<CommentPlaceholder />
			</>
		);

	return (
		<>
			{commentElements}
		</>
	);
}
