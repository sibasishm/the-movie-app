import { Routes, Route } from 'react-router-dom';

import { DiscoverScreen, NotFoundScreen } from './screens';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/popular" element={<DiscoverScreen />} />
			<Route path="/newest" element={<DiscoverScreen />} />
			<Route path="/trending" element={<DiscoverScreen />} />
			<Route path="/top_rated" element={<DiscoverScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	);
}

export { AppRoutes };
