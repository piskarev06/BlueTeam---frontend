import React, { FC } from 'react'

type ButtonType = 'button' | 'submit'
type ButtonVariant = 'primary' | 'big' | 'outlined'

interface ButtonProps {
	children: string
	type: ButtonType
	variant: ButtonVariant
}

export const Button: FC<ButtonProps> = ({ children, type, variant }) => {
	return (
		<button type={type} className={variant}>
			{children}
		</button>
	)
}
