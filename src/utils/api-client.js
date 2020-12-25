const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

async function client(endpoint = '', searchParams = '&language=en-US&page=1') {
	return window
		.fetch(`${apiURL}${endpoint}?api_key=${apiKey}${searchParams}`)
		.then(async response => {
			const data = await response.json();
			if (response.ok) {
				return data;
			} else {
				return Promise.reject(data);
			}
		});
}

export { client };
