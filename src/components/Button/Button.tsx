import React, { FC } from 'react'

import { ButtonType, ButtonVariant } from './Button.types'
import { ButtonStyled } from './Button.styled'

interface ButtonProps {
	children: string
	type?: ButtonType
	variant?: ButtonVariant
	width?: string
}

export const Button: FC<ButtonProps> = ({ children, type, variant, width }) => {
	return (
		<ButtonStyled type={type} variant={variant} width={width}>
			{children}
		</ButtonStyled>
	)
}
