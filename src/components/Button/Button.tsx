import React, { FC } from 'react'

import { ButtonType, ButtonVariant } from './Button.types'
import { ButtonStyled } from './Button.styled'

interface ButtonProps {
	children: string
	type?: ButtonType
	variant?: ButtonVariant
	width?: string
	disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ children, type, variant, width, disabled }) => {
	return (
		<ButtonStyled disabled={disabled} type={type} variant={variant} width={width}>
			{children}
		</ButtonStyled>
	)
}
