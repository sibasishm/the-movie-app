import * as React from 'react';
import { useQuery } from 'react-query';
import { FullPageSpinner } from '../components';
import { client } from '../utils/api-client';

const DiscoverContext = React.createContext();

function DiscoverProvider(props) {
	const {
		data,
		error,
		isLoading,
		isError,
		isSuccess,
	} = useQuery('newest-movies', () =>
		client('/movie/now_playing').then(data => data.results)
	);

	if (isLoading) {
		return <FullPageSpinner />;
	}

	if (isError) {
		return <p>{error.message}</p>;
	}

	if (isSuccess) {
		return <DiscoverContext.Provider value={data} {...props} />;
	}
}

export { DiscoverProvider };
