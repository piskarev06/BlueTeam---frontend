import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'
import type { InputVariant } from './Input.types'

interface InputStyledProps {
	variant?: InputVariant
	width?: string
	invalid?: boolean
}

export const InputStyled = styled.input<InputStyledProps>`
	padding: 15px 25px;

	background: #fff;
	border: none;
	border-radius: 30px;

	font-size: 16px;
	line-height: 22px;

	color: ${baseTheme.colors.gray};

	transition: 0.3s all linear;

	&::placeholder {
		font-size: 16px;
		line-height: 22px;

		color: ${baseTheme.colors.gray};
	}

	padding-left: ${(props) => props.variant === 'search' && `75px`};
	background-image: ${(props) => props.variant === 'search' && `url('../images/search.svg')`};
	background-position: ${(props) => props.variant === 'search' && `25px`};
	background-repeat: ${(props) => props.variant === 'search' && `no-repeat`};

	border: ${(props) => props.variant === 'sign' && `2px solid rgba(0, 0, 0, 0.2)`};
	box-shadow: ${(props) => props.variant === 'sign' && `0px 2px 3px rgba(0, 0, 0, 0.25)`};
	border-radius: ${(props) => props.variant === 'sign' && `15px`};
	&::placeholder {
		color: ${(props) => props.variant === 'sign' && baseTheme.colors.gray};
	}

	margin-bottom: ${(props) => props.invalid === true && `5px !important`};
	border-color: ${(props) => props.invalid === true && `red`};
`
