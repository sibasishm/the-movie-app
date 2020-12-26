/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { Link as RouterLink, useMatch } from 'react-router-dom';
import { links } from '../constants';

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
		<nav>
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
