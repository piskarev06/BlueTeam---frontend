import styled from 'styled-components'

import { baseTheme } from '../../styles/themes/baseTheme/baseTheme'
import type { InputVariant } from './Input.types'
//@ts-ignore
import search from '../../assets/images/search.svg'

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

	width: ${(props) => props.width};

	transition: 0.3s all linear;

	&::placeholder {
		font-size: 16px;
		line-height: 22px;

		color: ${baseTheme.colors.gray};
	}

	${(props) =>
		props.variant === 'search' &&
		`
	padding-left: 75px;
	background-image: url('${search}');
	background-position: 25px;
	background-repeat: no-repeat; `}

	${(props) =>
		props.variant === 'sign' &&
		`
		border: 2px solid rgba(0, 0, 0, 0.2);
		box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
		border-radius: 15px;

		&::placeholder {
			color: ${baseTheme.colors.gray};
		}
	 `}

	 ${(props) =>
		props.invalid === true &&
		`
		margin-bottom: 5px !important;
		border-color: red;
	 `}
`
