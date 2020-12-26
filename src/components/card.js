/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

function Card({ children }) {
	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
			}}
		>
			{children}
		</div>
	);
}

Card.Image = function Image({ src, title }) {
	return <img src={src} alt={`${title} movie poster`} />;
};

Card.Title = function Title({ children }) {
	const theme = useTheme();

	return (
		<h2
			css={{
				marginTop: '0.5rem',
				color: theme.primary,
				fontSize: '1rem',
			}}
		>
			{children}
		</h2>
	);
};

Card.Meta = function Meta({ children }) {
	const theme = useTheme();
	return (
		<p
			css={{
				marginTop: '0.25rem',
				color: theme.textOffset,
				fontSize: '0.9rem',
				fontWeight: 700,
			}}
		>
			{children}
		</p>
	);
};

export { Card };
