import { Routes, Route } from 'react-router-dom';
import { DiscoverProvider } from './context/discover-context';
import {
	NewestScreen,
	NotFoundScreen,
	PopularScreen,
	TopRatedScreen,
	TrendScreen,
} from './screens';

function AppRoutes() {
	return (
		<DiscoverProvider>
			<Routes>
				<Route path="/popular" element={<PopularScreen />} />
				<Route path="/trend" element={<TrendScreen />} />
				<Route path="/newest" element={<NewestScreen />} />
				<Route path="/top-rated" element={<TopRatedScreen />} />
				<Route path="*" element={<NotFoundScreen />} />
			</Routes>
		</DiscoverProvider>
	);
}

export { AppRoutes };
