/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Card } from '../components';
import { useDiscover } from '../context/discover-context';
import { getYear } from '../utils';

function DiscoverScreen() {
	const data = useDiscover();

	return data.length ? (
		<ol
			css={{
				display: 'grid',
				gap: '4rem',
				gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
			}}
		>
			{data.map(
				({
					id,
					title,
					name,
					poster_path,
					release_date,
					first_air_date,
					vote_average,
				}) => (
					<li key={id}>
						<Card>
							<Card.Image
								src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`}
								title={title || name}
							/>
							<Card.Title>{title || name}</Card.Title>
							<Card.Meta>{`${vote_average}/10 | ${getYear(
								release_date,
								first_air_date
							)}`}</Card.Meta>
						</Card>
					</li>
				)
			)}
		</ol>
	) : (
		<p>Nothing found. Please try again.</p>
	);
}

export { DiscoverScreen };
