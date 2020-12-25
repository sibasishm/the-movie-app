/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

function Select({ value, onChange, children }) {
	return (
		<div
			css={{
				marginTop: '0.5rem',
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
				border: `1px solid ${theme.border}`,
				borderRadius: '4px',
				padding: '4px 6px 4px 16px',
				textAlign: 'left',
			}}
		>
			{children}
		</button>
	);
};

Select.Options = function Options({ children }) {
	return (
		<div
			css={{
				position: 'absolute',
				marginTop: '0.5rem',
			}}
		>
			<ul>{children}</ul>
		</div>
	);
};

Select.Option = function Option({ children }) {
	return <li>{children}</li>;
};

export { Select };
