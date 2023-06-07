import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function fetchAuth0(req, res) {
	// If your access token is expired and you have a refresh token
	// `getAccessToken` will fetch you a new one using the `refresh_token` grant
	const { accessToken } = await getAccessToken(req, res, {
		scopes: ['read:users'],
	});
	const response = await fetch(
		'https://dev-iopvzgna7se0331k.eu.auth0.com/api/v2/users',
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'content-type': 'application/json',
			},
		}
	);
	const data = await response.json();
	res.status(200).json(data);
});
