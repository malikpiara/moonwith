import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { redirect } from 'next/dist/server/api-utils';

export default withApiAuthRequired(async function handler(req, res) {
	// If your access token is expired and you have a refresh token
	// `getAccessToken` will fetch you a new one using the `refresh_token` grant
	const { accessToken } = await getAccessToken(req, res, {
		//scopes: ['read:comments']
	});

	const postId = req.body.postId;
	const userId = req.body.userId;

	if (req.method === 'POST') {
		const response = await fetch(
			`https://cobra.moonwith.com/likes/${postId}/${userId}`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
			}
		);
		const data = await response.json();
		res.status(200).json(data);
	} else {
		// Redirecting to the homepage if the request is not POST.
		res.redirect('/');
	}
});
