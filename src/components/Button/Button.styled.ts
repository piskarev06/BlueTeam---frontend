import styled from 'styled-components'

import { baseTheme } from './../../styles/themes/baseTheme/baseTheme'
import type { ButtonVariant, ButtonType } from './Button.types'

interface ButtonStyledProps {
	type: ButtonType
	variant?: ButtonVariant
	width?: string
	disabled?: boolean
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
	display: inline-block;
	padding: 12px 105px;

	background: ${baseTheme.colors.accent};
	cursor: pointer;
	border: 2px solid ${baseTheme.colors.accent};
	border-radius: 30px;

	width: ${(props) => props.width};

	font-weight: 400;
	font-size: 18px;
	line-height: 25px;

	color: #ffffff;

	letter-spacing: 0.12em;

	transition: all 0.3s linear;

	&:hover {
		background: none;
		color: ${baseTheme.colors.accent};
	}

	padding: ${(props) => props.variant === 'big' && `12px 145px`};

	${(props) =>
		props.variant === 'submit' &&
		`
	padding: 10px 16px;
	font-weight: 600;
	font-size: 11px;
	line-height: 13px; `}

	${(props) =>
		props.variant === 'outlined' &&
		`
	color: ${baseTheme.colors.black};
	background: #fff;

	&:hover {
		background: ${baseTheme.colors.accent};
		color: #fff;
	} `}

	${(props) =>
		props.disabled &&
		`
	border-color: #425feb75;
	background: #425feb75;
	cursor: unset;

	&:hover {
		background: #425feb75;
		color: #fff;
	} `}
`
