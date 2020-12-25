/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import * as React from 'react';

function Select({ value, onChange, children, label }) {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div
			css={{
				position: 'relative',
				width: '100%',
			}}
		>
			{React.Children.map(children, child => {
				if (child.type.name === 'Button') {
					return React.cloneElement(child, { setIsOpen, isOpen, label });
				} else if (child.type.name === 'Options') {
					return React.cloneElement(child, { isOpen, label, value, onChange });
				}
				return React.cloneElement(child, { label });
			})}
		</div>
	);
}

/**
 * Accessibility checks
  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
 */

Select.Button = function Button({ children, isOpen, setIsOpen, label }) {
	const theme = useTheme();
	const buttonRef = React.useRef(null);

	React.useEffect(() => {
		const handleClickOutside = e => {
			if (buttonRef.current && !buttonRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [buttonRef, setIsOpen]);

	return (
		<button
			ref={buttonRef}
			aria-haspopup="listbox"
			aria-expanded="true"
			aria-labelledby={`listbox-${label}`}
			onClick={e => {
				e.preventDefault();
				setIsOpen(!isOpen);
			}}
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

Select.Options = function Options({
	children,
	isOpen,
	label,
	value,
	onChange,
}) {
	const theme = useTheme();
	return (
		<div
			css={{
				opacity: isOpen ? 1 : 0,
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
				aria-labelledby={`listbox-${label}`}
				aria-activedescendant={`listbox-item-${value.id || value}`}
				css={{
					padding: '4px 0',
					maxHeight: '20rem',
					borderRadius: '4px',
					overflow: 'auto',
				}}
				onClick={e => {
					console.log(e.target.value);
				}}
			>
				{React.Children.map(children, child =>
					React.cloneElement(child, { selected: value === child.value })
				)}
			</ul>
		</div>
	);
};

Select.Option = function Option({ children, value, onChange, selected }) {
	const theme = useTheme();
	return (
		<li
			id={`listbox-item-${value.id || value}`}
			role="option"
			aria-selected={selected}
			value={JSON.stringify(value)}
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
