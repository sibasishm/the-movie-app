import * as React from 'react';
import { useQuery } from 'react-query';
import { Card, FullPageSpinner } from '../components';
import { client } from '../utils/api-client';

function NewestScreen() {
	const {
		data,
		error,
		isLoading,
		isError,
		isSuccess,
	} = useQuery('newest-movies', () =>
		client('/movie/now_playing').then(data => data.results)
	);

	if (isLoading) return <FullPageSpinner />;
	if (isError) return <p>{error.message}</p>;

	return isSuccess && data.length ? (
		data.map(({ id, title, poster_path, release_date }) => (
			<Card key={id}>
				<Card.Image
					src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`}
					title={title}
				/>
				<Card.Title>{title}</Card.Title>
				<Card.Meta>{release_date.split('-')[0]}</Card.Meta>
			</Card>
		))
	) : isSuccess && !data.length ? (
		<p>No movies found.</p>
	) : null;
}

export { NewestScreen };
