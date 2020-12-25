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

export { types, genres, years };
