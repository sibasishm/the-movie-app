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

const customSelectStyles = {
	menu: provided => ({
		...provided,
		background: colors.bg,
	}),
	input: provided => ({
		...provided,
		color: colors.text,
	}),
	singleValue: provided => ({
		...provided,
		color: colors.text,
	}),
	control: provided => ({
		...provided,
		background: colors.bg,
		border: `1px solid ${colors.border}`,
	}),
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? colors.text : colors.textOffset,
	}),
};

const ErrorContainer = styled.div({
	color: colors.secondary,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
});
ErrorContainer.role = 'alert';

const ErrorMessage = styled.pre({
	whiteSpace: 'break-spaces',
	margin: '0.5rem 0 ',
	display: 'block',
});

export {
	Link,
	Label,
	screenReaderOnly,
	customSelectStyles,
	ErrorMessage,
	ErrorContainer,
};
