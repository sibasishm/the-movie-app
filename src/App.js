/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import { jsx, useTheme } from '@emotion/react';
import { ErrorBoundary } from 'react-error-boundary';
import Select from 'react-select';

import { DiscoverProvider } from './context/discover-context';
import {
	Nav,
	SearchBox,
	Label,
	Rating,
	customSelectStyles as customStyles,
	ErrorMessage,
	ErrorContainer,
	screenReaderOnly,
	FullPageSpinner,
} from './components';
import { types, genres, years } from './constants';

const AppRoutes = React.lazy(() =>
	import(/* webpackPrefetch: true */ './app-routes')
);

function ErrorFallback({ error }) {
	return (
		<ErrorContainer>
			<h3>Oops! Some error occured.</h3>
			<ErrorMessage>{error.status_message}</ErrorMessage>
		</ErrorContainer>
	);
}

function App() {
	const theme = useTheme();

	const [type, setType] = React.useState(types[0]);
	const [genre, setGenre] = React.useState(genres[0]);
	const [startYear, setStartYear] = React.useState(years[0]);
	const [endYear, setEndYear] = React.useState(years[10]);
	const [rating, setRating] = React.useState(3);
	const [searchTerm, setSearchTerm] = React.useState('');

	const props = {
		type,
		genre,
		startYear,
		endYear,
		rating,
		searchTerm,
	};

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
					maxWidth: `calc(100vw - 300px)`,
				}}
			>
				<header
					css={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						position: 'sticky',
						top: '0',
						background: theme.bg,
						padding: '1.5rem 2rem',
						height: '4.5rem',
					}}
				>
					<h1>Discover</h1>
					<Nav />
					<SearchBox val={searchTerm} onChange={setSearchTerm} />
				</header>
				<main css={{ padding: '1.5rem 2rem' }}>
					<React.Suspense fallback={<FullPageSpinner />}>
						<ErrorBoundary FallbackComponent={ErrorFallback}>
							<DiscoverProvider {...props}>
								<AppRoutes />
							</DiscoverProvider>
						</ErrorBoundary>
					</React.Suspense>
				</main>
			</div>
			<aside
				css={{
					position: 'fixed',
					top: 0,
					bottom: 0,
					right: 0,
					minWidth: '300px',
					padding: '2rem 1.5rem',
					background: theme.bgOffset,
					color: theme.textOffset,
					boxShadow:
						'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				}}
			>
				<h3>Discover options</h3>
				<form>
					<Label htmlFor="type">Type</Label>
					<Select
						inputId="type"
						value={type}
						styles={customStyles}
						options={types}
						onChange={val => setType(val)}
					/>
					<Label htmlFor="genre">Genre</Label>
					<Select
						inputId="genre"
						value={genre}
						styles={customStyles}
						options={genres}
						onChange={val => setGenre(val)}
					/>
					<Label htmlFor="startYear">Year</Label>
					<Label htmlFor="endYear" css={screenReaderOnly}>
						End Year
					</Label>
					<div
						css={{
							display: 'flex',
							alingItems: 'center',
						}}
					>
						<span
							css={{
								width: '100%',
							}}
						>
							<Select
								inputId="startYear"
								value={startYear}
								styles={customStyles}
								options={years}
								onChange={val => setStartYear(val)}
							/>
						</span>
						<span
							css={{
								fontSize: '2rem',
								fontWeight: 700,
								padding: '0 0.5rem',
							}}
						>
							-
						</span>
						<span
							css={{
								width: '100%',
							}}
						>
							<Select
								inputId="endYear"
								value={endYear}
								styles={customStyles}
								options={years}
								onChange={val => setEndYear(val)}
							/>
						</span>
					</div>
					<Label>Rating</Label>
					<Rating value={rating} onChange={val => setRating(val)} />
				</form>
			</aside>
		</div>
	);
}

export { App };
