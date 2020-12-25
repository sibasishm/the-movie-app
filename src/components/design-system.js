/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled/macro';
import * as colors from '../styles/colors';

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

export { Label };
