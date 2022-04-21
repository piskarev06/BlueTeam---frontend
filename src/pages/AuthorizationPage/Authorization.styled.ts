import styled from 'styled-components'

import { baseTheme } from 'styles/themes/baseTheme/baseTheme'
import { InputStyled } from 'components/Input/Input.styled'
import { ButtonStyled } from 'components/Button/Button.styled'

export const SignInner = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	height: 100vh;

	@media (max-width: 1040px) {
		justify-content: space-between;
	}
	@media (max-width: 992px) {
		flex-direction: column;
		justify-content: center;

		gap: 40px;
	}
`

export const SignVideo = styled.div`
	width: 620px;
	height: 410px;

	margin-left: -200px;

	& video {
		max-width: 100%;
	}

	@media (max-width: 1040px) {
		margin-left: -100px;
	}
	@media (max-width: 992px) {
		margin: 0 auto;

		max-width: 100%;
	}
	@media (max-width: 768px) {
		display: none;
	}
`

export const SignBlock = styled.div`
	max-width: 373px;
	width: 100%;
`

export const SignTabs = styled.ul`
	display: flex;
	justify-content: flex-end;
	gap: 40px;

	list-style: none;

	margin-bottom: 25px;

    & .tabs__item {
        padding-bottom: 3px;
  
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
  
        transition: all 0.3s linear;
        border-bottom: 2px solid transparent;
  
        cursor: pointer;
  
        &.active,
        &:hover {
          color: ${baseTheme.colors.accent};
          border-bottom: 2px solid ${baseTheme.colors.accent};
        }
`

export const SignContent = styled.div`
.content__item {
    display: none;

    &.active {
      display: block;
    }
`

export const SignTitle = styled.h1`
	margin-bottom: 25px;
`

export const SignForm = styled.form`
	margin-bottom: 10px;
`

export const SignInput = styled(InputStyled)`
	width: 100%;

	&:not(:last-child) {
		margin-bottom: 20px;
	}
`

export const SignBtn = styled(ButtonStyled)`
	margin-top: 40px;

	width: 100%;

	border-radius: 30px;
`

export const SignOr = styled.div`
	text-align: center;

	font-size: 16px;
	line-height: 22px;

	color: $light-gray;

	& span {
		display: block;
		margin-bottom: 10px;
	}
`
