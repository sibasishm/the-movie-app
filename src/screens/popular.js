import * as React from 'react';
import { useQuery } from 'react-query';
import { Card, Spinner } from '../components';
import { client } from '../utils/api-client';

function PopularScreen() {
	const {
		data,
		error,
		isLoading,
		isError,
		isSuccess,
	} = useQuery('popular-movies', () => client().then(data => data.results));
	console.log(isError);

	if (isLoading) return <Spinner />;
	if (isError) return <p>{error.message}</p>;

	return isSuccess && data.length ? (
		data.map(({ id, title, poster_path, release_date }) => (
			<Card id={id}>
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

export { PopularScreen };
