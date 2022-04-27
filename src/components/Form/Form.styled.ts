import styled from 'styled-components'

interface FormStyledProps {
	width?: string
}

export const FormStyled = styled.form<FormStyledProps>`
	max-width: 100%;
	width: ${(props) => props.width};
`

export const FormError = styled.span`
	font-size: 12px;
	color: red;
`
