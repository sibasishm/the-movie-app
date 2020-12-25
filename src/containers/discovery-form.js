/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';
import { Label, Rating, Select } from '../components';

const types = [
	{
		id: 1,
		name: 'Movies',
	},
	{
		id: 2,
		name: 'TV Series',
	},
];

const genres = [
	{
		id: 1,
		name: 'Action',
	},
	{
		id: 2,
		name: 'Drama',
	},
	{
		id: 3,
		name: 'Comedy',
	},
];

const years = new Array(20).fill(2000).map((val, i) => val + i);

function DiscoveryForm() {
	const [type, setType] = React.useState(types[0]);
	const [genre, setGenre] = React.useState(genres[0]);
	const [startYear, setStartYear] = React.useState(years[0]);
	const [endYear, setEndYear] = React.useState(years[10]);
	const [rating, setRating] = React.useState(3);

	return (
		<form>
			<Label>Type</Label>
			<Select value={type} onChange={val => setType(val)} label="type">
				<Select.Button>{type.name}</Select.Button>
				<Select.Options>
					{types.map(type => (
						<Select.Option key={type.id} value={type}>
							{type.name}
						</Select.Option>
					))}
				</Select.Options>
			</Select>
			<Label>Genre</Label>
			<Select value={genre} onChange={val => setGenre(val)} label="genre">
				<Select.Button>{genre.name}</Select.Button>
				<Select.Options>
					{genres.map(genre => (
						<Select.Option key={genre.id} value={genre}>
							{genre.name}
						</Select.Option>
					))}
				</Select.Options>
			</Select>
			<Label>Year</Label>
			<div
				css={{
					display: 'flex',
					alingItems: 'center',
				}}
			>
				<Select
					value={startYear}
					onChange={val => setStartYear(val)}
					label="start-year"
				>
					<Select.Button>{startYear}</Select.Button>
					<Select.Options>
						{years.map(year => (
							<Select.Option key={year} value={year}>
								{year}
							</Select.Option>
						))}
					</Select.Options>
				</Select>
				<span
					css={{
						fontSize: '2rem',
						fontWeight: 700,
						padding: '0 0.5rem',
					}}
				>
					-
				</span>
				<Select
					value={endYear}
					onChange={val => setEndYear(val)}
					label="end-year"
				>
					<Select.Button>{endYear}</Select.Button>
					<Select.Options>
						{years.map(year => (
							<Select.Option key={year} value={year}>
								{year}
							</Select.Option>
						))}
					</Select.Options>
				</Select>
			</div>
			<Label>Rating</Label>
			<Rating value={rating} onChange={val => setRating(val)} />
		</form>
	);
}

export { DiscoveryForm };