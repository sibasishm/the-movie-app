/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

function Select({ value, onChange, children }) {
	return (
		<div
			css={{
				position: 'relative',
			}}
		>
			{children}
		</div>
	);
}

/**
 * Accessibility checks
  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
 */

Select.Button = function Button({ children }) {
	const theme = useTheme();
	return (
		<button
			aria-haspopup="listbox"
			aria-expanded="true"
			aria-labelledby="listbox-label"
			css={{
				position: 'relative',
				width: '100%',
				background: theme.bg,
				color: theme.text,
				border: `1px solid ${theme.border}`,
				borderRadius: '4px',
				padding: '0.5rem',
				paddingRight: '1rem',
				textAlign: 'left',
			}}
		>
			{children}
			<span
				css={{
					marginLeft: '0.5rem',
					position: 'absolute',
					top: 0,
					bottom: 0,
					right: 0,
					display: 'flex',
					alignItems: 'center',
					paddingRight: '0.5rem',
				}}
			>
				<svg
					css={{
						height: '1rem',
						width: '1rem',
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
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</span>
		</button>
	);
};

Select.Options = function Options({ children }) {
	const theme = useTheme();
	return (
		<div
			css={{
				opacity: 0,
				position: 'absolute',
				marginTop: '0.25rem',
				width: '100%',
				borderRadius: '4px',
				background: theme.bg,
				boxShadow:
					'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			}}
		>
			<ul
				tabIndex="-1"
				role="listbox"
				aria-labelledby="listbox-label"
				aria-activedescendant="lisbox-item-3"
				css={{
					padding: '4px 0',
					maxHeight: '20rem',
					borderRadius: '4px',
					overflow: 'auto',
				}}
			>
				{children}
			</ul>
		</div>
	);
};

Select.Option = function Option({ children }) {
	const theme = useTheme();
	return (
		<li
			id={`listbox-item-1`}
			role="option"
			aria-selected={false}
			css={{
				color: theme.text,
				cursor: 'pointer',
				padding: '0.5rem',
				':hover': {
					background: theme.bgOffset,
				},
			}}
		>
			{children}
		</li>
	);
};

export { Select };
