import styled from 'styled-components'

import { baseTheme } from './../../styles/themes/baseTheme/baseTheme'
import { ButtonVariant, ButtonType } from './Button.types'

interface ButtonStyledProps {
	type: ButtonType
	variant: ButtonVariant
	width: string
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

	padding: ${(props) => props.variant === 'submit' && `10px 16px`};
	font-weight: ${(props) => props.variant === 'submit' && `600`};
	font-size: ${(props) => props.variant === 'submit' && `11px`};
	line-height: ${(props) => props.variant === 'submit' && `13px`};

	color: ${(props) => props.variant === 'outlined' && baseTheme.colors.black};
	background: ${(props) => props.variant === 'outlined' && `#fff`};

	&:hover {
		background: ${(props) => props.variant === 'outlined' && baseTheme.colors.accent};
		color: ${(props) => props.variant === 'outlined' && `#fff`};
	}
`
