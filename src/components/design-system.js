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

export { Link, Label };
