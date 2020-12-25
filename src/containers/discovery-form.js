/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';
import Select from 'react-select';
import * as colors from '../styles/colors';
import { Label, Rating } from '../components';

const types = [
	{
		id: 1,
		label: 'Movies',
		value: 'movies',
	},
	{
		id: 2,
		label: 'TV Series',
		value: 'tv_series',
	},
];

const genres = [
	{
		id: 1,
		label: 'Action',
		value: 'action',
	},
	{
		id: 2,
		label: 'Drama',
		value: 'drama',
	},
	{
		id: 3,
		label: 'Comedy',
		value: 'comedy',
	},
];

const years = new Array(20)
	.fill(2000)
	.map((val, i) => val + i)
	.map(val => ({ id: val, label: val, value: val }));

function DiscoveryForm() {
	const [type, setType] = React.useState(types[0].value);
	const [genre, setGenre] = React.useState(genres[0].value);
	const [startYear, setStartYear] = React.useState(years[0].value);
	const [endYear, setEndYear] = React.useState(years[10].value);
	const [rating, setRating] = React.useState(3);

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

	return (
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
	);
}

export { DiscoveryForm };
