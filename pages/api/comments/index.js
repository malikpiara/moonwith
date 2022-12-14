import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { redirect } from 'next/dist/server/api-utils';

export default withApiAuthRequired(async function handler(req, res) {
  // If your access token is expired and you have a refresh token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res, {
    //scopes: ['read:comments']
  });
  
  const post_id = req.body.post_id
  const user_id = req.body.user_id
  const author = req.body.author
  const content = req.body.content

  if (req.method === 'POST') {
    const response = await fetch(`https://cobra.moonwith.com/comments/${post_id}/${user_id}/${author}/${content}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  res.status(200).json(data);
} else {
    // Redirecting to the homepage if the request is not POST.
    res.redirect('/')
}
});