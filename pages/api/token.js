import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function getPrivateEndpoint(req, res) {
  // If your access token is expired and you have a refresh token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res, {
    //scopes: ['read:comments']
  });
  const response = await fetch('https://cobra.moonwith.com/api/private', {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const data = await response.json();
  res.status(200).json(data);
});