export default async function handler(req, res) {
	const response = await fetch('https://dev-iopvzgna7se0331k.eu.auth0.com/oauth/token', {
		method: 'POST',
		headers: {'content-type': 'application/json'},
		data: {
			client_id: 'xXKD700aLLZxi32ZJbl5n62T7shXrCji',
			client_secret: 'fKemho0NlfWc9qSF6k46cTw8QXli8h_V5ov-eIzPMraFeppnMg3jJMsLMXVPqLRF',
			audience: 'https://dev-iopvzgna7se0331k.eu.auth0.com/api/v2/',
			grant_type: 'client_credentials'
		}
	});
	const data = await response.json();
	res.status(200).json(data);
	console.log(response);
}