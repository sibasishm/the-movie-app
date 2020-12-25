/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

import { Label } from './components/design-system';
import { MovieCard } from './components/movie-card';
import { Rating } from './components/rating';
import { Select } from './components/select';

const types = [
	{
		id: 1,
		name: 'All',
	},
	{
		id: 2,
		name: 'Movies',
	},
	{
		id: 3,
		name: 'TV Series',
	},
];

function App() {
	const theme = useTheme();
	return (
		<div
			css={{
				minHeight: '100vh',
				display: 'flex',
			}}
		>
			<div
				css={{
					background: theme.bg,
					color: theme.text,
					flex: 1,
					padding: '1.5rem 1rem',
				}}
			>
				<header
					css={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<h1>Discover</h1>
					<nav>
						<ul
							css={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<li>Popular</li>
							<li>Trend</li>
							<li>Newest</li>
							<li>Top rated</li>
						</ul>
					</nav>
					<div>Search</div>
				</header>
				<main>
					<ol
						css={{
							display: 'grid',
							gap: '1rem',
							gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
						}}
					>
						<li>
							<MovieCard />
						</li>
						<li>
							<MovieCard />
						</li>
					</ol>
				</main>
			</div>
			<aside
				css={{
					minWidth: '300px',
					padding: '1.5rem 1rem',
					background: theme.bgOffset,
					color: theme.textOffset,
				}}
			>
				<h3>Discover options</h3>
				<form>
					<Label>Type</Label>
					<Select value={types[1]} onChange={() => {}}>
						<Select.Button>Movies</Select.Button>
						<Select.Options>
							{types.map(type => (
								<Select.Option key={type.id} value={type}>
									{type.name}
								</Select.Option>
							))}
						</Select.Options>
					</Select>
					<label htmlFor="genre">Genre</label>
					<Select />
					<label htmlFor="year">year</label>
					<div>
						<Select />
						<span> - </span>
						<Select />
					</div>
					<label htmlFor="rating">Rating</label>
					<Rating />
				</form>
			</aside>
		</div>
	);
}

export { App };
