import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import type { LoginInputs } from './Login.types'
import { SignForm, SignInput, SignBtn } from '../../../pages/AuthorizationPage/Authorization.styled'
import { FormError } from '../Form.styled'

export const Login: FC = () => {
	const validationSchema = yup.object().shape({
		email: yup.string().required('Email is required').email('Email is invalid'),
		password: yup
			.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters')
			.max(40, 'Password must not exceed 40 characters'),
	})

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
		<SignForm onSubmit={handleSubmit(onSubmit)}>
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
