const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

console.log(apiURL);

async function client(searchParams = '') {
	return window
		.fetch(`${apiURL}/?api_key=${apiKey}${searchParams}`)
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
