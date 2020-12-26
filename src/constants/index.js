const types = [
	{
		id: 1,
		label: 'Movies',
		value: 'movie',
	},
	{
		id: 2,
		label: 'TV Series',
		value: 'tv',
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

const links = [
	{
		id: 1,
		name: 'Popular',
		link: 'popular',
	},
	{
		id: 2,
		name: 'Trend',
		link: 'trend',
	},
	{
		id: 3,
		name: 'Newest',
		link: 'newest',
	},
	{
		id: 4,
		name: 'Top rated',
		link: '/top_rated',
	},
];

export { types, genres, years, links };
