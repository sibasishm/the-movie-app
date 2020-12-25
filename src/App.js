/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';

import { Label } from './components/design-system';
import { Nav } from './components/nav';
import { Rating } from './components/rating';
import { SearchBox } from './components/search-box';
import { Select } from './components/select';
import {
	NewestScreen,
	NotFoundScreen,
	PopularScreen,
	TopRatedScreen,
	TrendScreen,
} from './screens';

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
					<Nav />
					<SearchBox />
				</header>
				<main
					css={{
						padding: '1rem 0',
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
					}}
				>
					<AppRoutes />
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

function AppRoutes() {
	return (
		<Routes>
			<Route path="/popular" element={<PopularScreen />} />
			<Route path="/trend" element={<TrendScreen />} />
			<Route path="/newest" element={<NewestScreen />} />
			<Route path="/top-rated" element={<TopRatedScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	);
}

export { App };
