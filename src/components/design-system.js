/** @jsxRuntime classic */
/** @jsx jsx */
import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import * as colors from '../styles/colors';
import * as mq from '../styles/media-queries';

const Link = styled(RouterLink)({
	color: colors.primary,
	':hover': {
		color: colors.primaryOffset,
	},
});

const Label = styled.label({
	textTransform: 'uppercase',
	color: colors.textOffset,
	display: 'block',
	fontSize: '0.75rem',
	fontWeight: 500,
});
Label.defaultProps = {
	id: 'listbox-label',
};

export { Link, Label };
