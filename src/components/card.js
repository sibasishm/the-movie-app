/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

function Card({ children }) {
	return <div>{children}</div>;
}

Card.Image = function Image({ src, title }) {
	return <img src={src} alt={`${title} movie poster`} />;
};

Card.Title = function Title({ children }) {
	const theme = useTheme();

	return (
		<h2
			css={{
				color: theme.text,
				fontSize: '1.5rem',
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
				color: theme.textOffset,
			}}
		>
			{children}
		</p>
	);
};

export { Card };
