/** @jsxRuntime classic */
/** @jsx jsx */
import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import * as colors from '../styles/colors';

const Link = styled(RouterLink)({
	color: colors.primary,
	fontWeight: 700,
	padding: '0 0.5rem',
	textTransform: 'uppercase',
	fontSize: '0.8rem',
	':hover': {
		color: colors.primaryOffset,
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
