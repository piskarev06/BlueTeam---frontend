import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import type { LoginInputs } from './Login.types'
import { SignForm, SignInput, SignBtn } from '../../../pages/AuthorizationPage/Authorization.styled'
import { validationSchema } from '../../../utils/validations/Form/Login'
import { FormError } from '../Form.styled'

interface LoginProps {
	width?: string
}

export const Login: FC<LoginProps> = ({ width }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<LoginInputs>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	})
	const onSubmit = (data: LoginInputs) => {
		console.log(JSON.stringify(data, null, 2))

		reset()
	}

	return (
		<SignForm width={width} onSubmit={handleSubmit(onSubmit)}>
			<SignInput
				invalid={errors.email ? true : false}
				{...register('email')}
				variant="sign"
				type="email"
				placeholder="Email"
			/>
			<FormError>{errors.email?.message}</FormError>
			<SignInput
				invalid={errors.password ? true : false}
				{...register('password')}
				variant="sign"
				type="password"
				placeholder="Password"
			/>
			<FormError>{errors.password?.message}</FormError>

			<SignBtn type="submit" disabled={!isValid}>
				Sign In
			</SignBtn>
		</SignForm>
	)
}
