import * as React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { ErrorMessage, FullPageSpinner } from '../components';
import { client } from '../utils/api-client';

const DiscoverContext = React.createContext();

function DiscoverProvider(props) {
	let { pathname } = useLocation();
	let endpoint = '';

	const {
		type: { value: mediaType },
		searchTerm,
	} = props;

	if (pathname.includes('newest')) {
		pathname = mediaType === 'tv' ? '/airing_today' : '/now_playing';
	}

	if (pathname.includes('trending')) {
		endpoint = `trending/${mediaType}/week`;
	} else {
		endpoint = `${mediaType}${pathname}`;
	}

	const { data, error, isLoading, isError, isSuccess } = useQuery(
		endpoint,
		() => client(`/${endpoint}`).then(data => data.results)
	);

	if (isLoading) {
		return <FullPageSpinner />;
	}

	if (isError) {
		return <ErrorMessage>{error.status_message}</ErrorMessage>;
	}

	if (isSuccess) {
		const filteredData = data.filter(({ title, name }) => {
			const nameFiled = (title || name).toLowerCase();
			return nameFiled.includes(searchTerm.toLowerCase());
		});
		return <DiscoverContext.Provider value={filteredData} {...props} />;
	}
}

function useDiscover() {
	return React.useContext(DiscoverContext);
}

export { DiscoverProvider, useDiscover };
