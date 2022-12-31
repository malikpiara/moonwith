import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
	// If your access token is expired and you have a refresh token
	// `getAccessToken` will fetch you a new one using the `refresh_token` grant
	const { accessToken } = await getAccessToken(req, res, {
		//scopes: ['read:comments']
	});

	const { postId } = req.query;
	const id = req.body.id;

	if (req.method === 'GET') {
		const response = await fetch(
			`https://cobra.moonwith.com/likes/${postId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const like = await response.json();
		res.status(200).json(like);
	} else if (req.method === 'DELETE') {
		const response = await fetch(
			`https://cobra.moonwith.com/likes/${id}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
			}
		);
		const removedLike = await response.json();
		res.status(200).json(JSON.stringify(removedLike));
	}
});
