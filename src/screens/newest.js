import * as React from 'react';
import { Card } from '../components';
import { useDiscover } from '../context/discover-context';

function NewestScreen() {
	const data = useDiscover();

	return data.length ? (
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
	) : (
		<p>No movies found.</p>
	);
}

export { NewestScreen };
