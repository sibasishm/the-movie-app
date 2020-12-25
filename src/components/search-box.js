/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

function SearchBox() {
	const theme = useTheme();
	return (
		<div
			css={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<span
				css={{
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					display: 'flex',
					alignItems: 'center',
					paddingLeft: '0.5rem',
				}}
			>
				<svg
					css={{
						height: '1.25rem',
						width: '1.25rem',
						color: theme.textOffset,
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
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</span>
			<label
				htmlFor="search"
				css={{
					position: 'absolute',
					width: '1px',
					height: '1px',
					padding: 0,
					margin: '-1px',
					overflow: 'hidden',
					clip: 'rect(0, 0, 0, 0)',
					whiteSpace: 'nowrap',
					borderWidth: 0,
				}}
			>
				Search
			</label>
			<input
				type="text"
				name="search"
				id="seach"
				autoComplete="off"
				placeholder="Search"
				css={{
					padding: '0.5rem 2.5rem',
					background: theme.bg,
					border: 0,
					color: theme.text,
					'::placeholder': {
						color: theme.primary,
						fontWeight: 600,
					},
				}}
			/>
		</div>
	);
}

export { SearchBox };
