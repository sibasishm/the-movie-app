/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled/macro';
import { Link as RouterLink } from 'react-router-dom';

import * as colors from '../styles/colors';

const Link = styled(RouterLink)({
	color: colors.primary,
	':hover': {
		color: colors.primaryOffset,
		textDecoration: 'underline',
	},
});

const Label = styled.label({
	textTransform: 'uppercase',
	color: colors.textOffset,
	display: 'block',
	fontSize: '0.75rem',
	fontWeight: 700,
	margin: '0.75rem 0',
});
Label.defaultProps = {
	id: 'listbox-label',
};

const screenReaderOnly = {
	position: 'absolute',
	width: '1px',
	height: '1px',
	padding: 0,
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	borderWidth: 0,
};

export { Link, Label, screenReaderOnly };
