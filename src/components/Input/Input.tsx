import React, { FC } from 'react'

import { InputStyled } from './Input.styled'
import { InputVariant } from './Input.types'

interface InputProps {
	placeholder: string
	variant?: InputVariant
	width?: string
	invalid?: boolean
}

export const Input: FC<InputProps> = ({ placeholder, variant, width, invalid }) => {
	return <InputStyled invalid={invalid} placeholder={placeholder} variant={variant} width={width} />
}
