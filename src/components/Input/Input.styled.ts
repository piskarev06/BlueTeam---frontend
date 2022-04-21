import styled from 'styled-components'

import { baseTheme } from './../../styles/themes/baseTheme/baseTheme'
import { InputVariant } from './Input.types'

interface InputStyledProps {
	variant?: InputVariant
	width?: string
}

export const InputStyled = styled.input<InputStyledProps>`
	padding: 15px 25px;

	background: #fff;
	border: none;
	border-radius: 30px;

	font-size: 16px;
	line-height: 22px;

	color: ${baseTheme.colors.gray};

	&::placeholder {
		font-size: 16px;
		line-height: 22px;

		color: ${baseTheme.colors.gray};
	}

	padding-left: ${(props) => props.variant === 'search' && `75px`};
	background-image: ${(props) => props.variant === 'search' && `url('../images/search.svg')`};
	background-position: ${(props) => props.variant === 'search' && `25px`};
	background-repeat: ${(props) => props.variant === 'search' && `no-repeat`};
`
