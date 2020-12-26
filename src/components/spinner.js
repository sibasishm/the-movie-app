/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, keyframes } from '@emotion/react';

const spin = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' },
});

function Spinner() {
	return (
		<svg
			aria-label="loading"
			css={{
				animation: `${spin} 1s ease-out infinite`,
			}}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}

function FullPageSpinner() {
	return (
		<div
			css={{
				height: '90vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Spinner />
		</div>
	);
}

export { Spinner, FullPageSpinner };
