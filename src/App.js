/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

import { Label, Link } from './components/design-system';
import { MovieCard } from './components/movie-card';
import { Rating } from './components/rating';
import { SearchBox } from './components/search-box';
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
							<li>
								<Link>Popular</Link>
							</li>
							<li>
								<Link>Trend</Link>
							</li>
							<li>
								<Link>Newest</Link>
							</li>
							<li>
								<Link>Top rated</Link>
							</li>
						</ul>
					</nav>
					<SearchBox />
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
					boxShadow:
						'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
					<Label>Genre</Label>
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
					<Label>Year</Label>
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
					<Label>Rating</Label>
					<Rating listItem={{ id: 1, rating: 3 }} />
				</form>
			</aside>
		</div>
	);
}

export { App };
