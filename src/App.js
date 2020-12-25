/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import { jsx, useTheme } from '@emotion/react';
import Select from 'react-select';

import { AppRoutes } from './app-routes';
import { Nav, SearchBox, Label, Rating } from './components';
import { types, genres, years } from './constants';
import * as colors from './styles/colors';

const customStyles = {
	menu: provided => ({
		...provided,
		background: colors.bg,
	}),
	input: provided => ({
		...provided,
		color: colors.text,
	}),
	singleValue: provided => ({
		...provided,
		color: colors.text,
	}),
	control: provided => ({
		...provided,
		background: colors.bg,
		border: `1px solid ${colors.border}`,
	}),
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? colors.text : colors.textOffset,
	}),
};

function App() {
	const theme = useTheme();

	const [type, setType] = React.useState(types[0].value);
	const [genre, setGenre] = React.useState(genres[0].value);
	const [startYear, setStartYear] = React.useState(years[0].value);
	const [endYear, setEndYear] = React.useState(years[10].value);
	const [rating, setRating] = React.useState(3);
	const [searchTerm, setSearchTerm] = React.useState('');

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
				<main
					css={{
						padding: '1rem 2rem',
						display: 'grid',
						gap: '4rem',
						gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
					}}
				>
					<AppRoutes />
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
					<Label>Type</Label>
					<Select
						value={type}
						styles={customStyles}
						options={types}
						onChange={val => setType(val)}
					/>
					<Label>Genre</Label>
					<Select
						value={genre}
						styles={customStyles}
						options={genres}
						onChange={val => setGenre(val)}
					/>
					<Label>Year</Label>
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
