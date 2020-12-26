function getYear(date1 = '', date2 = '') {
	const date = date1 || date2;
	return date.split('-')[0];
}

export { getYear };
