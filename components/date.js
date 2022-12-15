import { parseISO, format } from 'date-fns';
import React from 'react';

export default function Date({ dateString }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
