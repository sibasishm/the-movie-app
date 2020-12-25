/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

import { MovieCard } from './components/movie-card';
import { Rating } from './components/rating';
import { Select } from './components/select';

function App() {
	const theme = useTheme();
	return (
		<div
			css={{
				minHeight: '100vh',
				background: theme.bg,
				color: theme.text,
			}}
		>
			<div>
				<header>
					<h1>Discover</h1>
					<nav>
						<ul>
							<li>Popular</li>
							<li>Trend</li>
							<li>Newest</li>
							<li>Top rated</li>
						</ul>
					</nav>
					<div>Search</div>
				</header>
				<main>
					<ol>
						<li>
							<MovieCard />
						</li>
						<li>
							<MovieCard />
						</li>
					</ol>
				</main>
			</div>
			<aside>
				<h3>Discover options</h3>
				<form>
					<label htmlFor="type">Type</label>
					<Select />
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
