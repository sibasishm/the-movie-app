import * as React from 'react';
import { Card } from '../components';
import { useDiscover } from '../context/discover-context';
import { getYear } from '../utils';

function NewestScreen() {
	const data = useDiscover();

	return data.length ? (
		data.map(
			({
				id,
				title,
				poster_path,
				release_date,
				first_air_date,
				vote_average,
			}) => (
				<Card key={id}>
					<Card.Image
						src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`}
						title={title}
					/>
					<Card.Title>{title}</Card.Title>
					<Card.Meta>{`${vote_average}/10 | ${getYear(
						release_date,
						first_air_date
					)}`}</Card.Meta>
				</Card>
			)
		)
	) : (
		<p>No movies found.</p>
	);
}

export { NewestScreen };
