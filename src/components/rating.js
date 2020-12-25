/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';

import * as colors from '../styles/colors';
import { screenReaderOnly } from './design-system';

function Rating({ value, onChange }) {
	const rootClassName = 'star-list';

	const stars = Array.from({ length: 5 }).map((x, i) => {
		const ratingId = `rating-${i}`;
		const ratingValue = i + 1;
		return (
			<React.Fragment key={i}>
				<input
					name={rootClassName}
					type="radio"
					id={ratingId}
					value={ratingValue}
					checked={ratingValue === value}
					onChange={() => {
						onChange(ratingValue);
					}}
					css={[
						screenReaderOnly,
						{
							[`.${rootClassName} &:checked ~ label`]: { color: colors.border },
							[`.${rootClassName} &:checked + label`]: {
								color: colors.secondary,
							},
							[`.${rootClassName} &:hover ~ label`]: {
								color: `${colors.border} !important`,
							},
							[`.${rootClassName} &:hover + label`]: {
								color: 'secondary !important',
							},
						},
					]}
				/>
				<label
					htmlFor={ratingId}
					css={{
						cursor: 'pointer',
						color: value < 0 ? colors.border : colors.secondary,
						margin: 0,
					}}
				>
					<span css={screenReaderOnly}>
						{ratingValue} {ratingValue === 1 ? 'star' : 'stars'}
					</span>
					<svg
						css={{ width: '1rem', height: '1rem', margin: '0 2px' }}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
				</label>
			</React.Fragment>
		);
	});
	return (
		<div
			onClick={e => e.stopPropagation()}
			className={rootClassName}
			css={{
				display: 'inline-flex',
				alignItems: 'center',
				[`&.${rootClassName}:hover input + label`]: {
					color: colors.secondary,
				},
			}}
		>
			<span css={{ display: 'flex' }}>{stars}</span>
		</div>
	);
}

export { Rating };
