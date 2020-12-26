import { Routes, Route } from 'react-router-dom';
import {
	NewestScreen,
	NotFoundScreen,
	PopularScreen,
	TopRatedScreen,
	TrendScreen,
} from './screens';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/popular" element={<PopularScreen />} />
			<Route path="/trend" element={<TrendScreen />} />
			<Route path="/newest" element={<NewestScreen />} />
			<Route path="/top_rated" element={<TopRatedScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	);
}

export { AppRoutes };
