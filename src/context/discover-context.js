import * as React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { FullPageSpinner } from '../components';
import { client } from '../utils/api-client';

const DiscoverContext = React.createContext();

function DiscoverProvider(props) {
	let { pathname } = useLocation();
	const {
		type: { value: mediaType },
	} = props;

	if (pathname.includes('newest')) {
		pathname = mediaType === 'tv' ? '/airing_today' : '/now_playing';
	}

	const endpoint = `${mediaType}${pathname}`;

	const { data, error, isLoading, isError, isSuccess } = useQuery(
		endpoint,
		() => client(`/${endpoint}`).then(data => data.results)
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

function useDiscover() {
	return React.useContext(DiscoverContext);
}

export { DiscoverProvider, useDiscover };
