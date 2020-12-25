import { Link } from '../components';

function NotFoundScreen() {
	return (
		<h2>
			Snap! The page you're looking for doesn't exist. Please{' '}
			<Link to="/popular">Go home</Link> instead.
		</h2>
	);
}

export { NotFoundScreen };
