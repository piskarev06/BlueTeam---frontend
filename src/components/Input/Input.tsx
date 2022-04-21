import React, { FC } from 'react'

import { InputStyled } from './Input.styled'
import { InputVariant } from './Input.types'

interface InputProps {
	placeholder: string
	variant?: InputVariant
	width?: string
}

export const Input: FC<InputProps> = ({ placeholder, variant, width }) => {
	return <InputStyled placeholder={placeholder} variant={variant} width={width} />
}
