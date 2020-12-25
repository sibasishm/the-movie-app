/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { Link as RouterLink, useMatch } from 'react-router-dom';

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
		link: '/top-rated',
	},
];

function NavLink(props) {
	const theme = useTheme();
	const match = useMatch(props.to);
	return (
		<RouterLink
			css={[
				{
					color: theme.primary,
					fontWeight: 700,
					padding: '0 0.5rem',
					textTransform: 'uppercase',
					fontSize: '0.8rem',
					':hover': {
						color: theme.primaryOffset,
					},
				},
				match
					? {
							color: theme.text,
							':hover': {
								color: theme.textOffset,
							},
					  }
					: null,
			]}
			{...props}
		/>
	);
}

function Nav(params) {
	return (
		<nav
			css={{
				position: 'sticky',
				padding: '1em 1.5em',
			}}
		>
			<ul
				css={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				{links.map(({ id, link, name }) => (
					<li key={id}>
						<NavLink to={link}>{name}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export { Nav };
