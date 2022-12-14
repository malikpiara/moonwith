import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
	// If your access token is expired and you have a refresh token
	// `getAccessToken` will fetch you a new one using the `refresh_token` grant
	const { accessToken } = await getAccessToken(req, res, {
		//scopes: ['read:comments']
	});

	const { commentId } = req.query;

	if (req.method === 'GET') {
		const response = await fetch(
			`https://cobra.moonwith.com/comment/${commentId}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		const comment = await response.json();
		res.status(200).json(comment);
	} else if (req.method === 'PUT') {
		const response = await fetch(
			`https://cobra.moonwith.com/delete/comment/${commentId}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
			}
		);
		const deletedComment = await response.json();
		res.status(200).json(JSON.stringify(deletedComment));
	}
});
