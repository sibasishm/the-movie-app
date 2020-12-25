/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';

import { Nav, SearchBox } from './components';
import { DiscoveryForm } from './containers';
import {
	NewestScreen,
	NotFoundScreen,
	PopularScreen,
	TopRatedScreen,
	TrendScreen,
} from './screens';

function App() {
	const theme = useTheme();
	return (
		<div
			css={{
				minHeight: '100vh',
				display: 'flex',
			}}
		>
			<div
				css={{
					background: theme.bg,
					color: theme.text,
					flex: 1,
					maxWidth: `calc(100vw - 300px)`,
				}}
			>
				<header
					css={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						position: 'sticky',
						top: '0',
						background: theme.bg,
						padding: '1.5rem 2rem',
						height: '4.5rem',
					}}
				>
					<h1>Discover</h1>
					<Nav />
					<SearchBox />
				</header>
				<main
					css={{
						padding: '1rem 2rem',
						display: 'grid',
						gap: '4rem',
						gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
					}}
				>
					<AppRoutes />
				</main>
			</div>
			<aside
				css={{
					position: 'fixed',
					top: 0,
					bottom: 0,
					right: 0,
					minWidth: '300px',
					padding: '2rem 1.5rem',
					background: theme.bgOffset,
					color: theme.textOffset,
					boxShadow:
						'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				}}
			>
				<h3>Discover options</h3>
				<DiscoveryForm />
			</aside>
		</div>
	);
}

function AppRoutes() {
	return (
		<Routes>
			<Route path="/popular" element={<PopularScreen />} />
			<Route path="/trend" element={<TrendScreen />} />
			<Route path="/newest" element={<NewestScreen />} />
			<Route path="/top-rated" element={<TopRatedScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	);
}

export { App };
