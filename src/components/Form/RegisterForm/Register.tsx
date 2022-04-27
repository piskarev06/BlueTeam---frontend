import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import type { RegisterInputs } from './Register.types'
import { SignForm, SignInput, SignBtn } from '../../../pages/AuthorizationPage/Authorization.styled'
import { validationSchema } from '../../../utils/validations/Form/Register'
import { FormError } from '../Form.styled'

interface RegisterProps {
	width?: string
}

export const Register: FC<RegisterProps> = ({ width }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<RegisterInputs>({
		mode: 'onBlur',
		resolver: yupResolver(validationSchema),
	})
	const onSubmit = (data: RegisterInputs) => {
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
				invalid={errors.name ? true : false}
				{...register('name')}
				variant="sign"
				type="text"
				placeholder="Name"
			/>
			<FormError>{errors.name?.message}</FormError>
			<SignInput
				invalid={errors.password ? true : false}
				{...register('password')}
				variant="sign"
				type="password"
				placeholder="Password"
			/>
			<FormError>{errors.password?.message}</FormError>

			<SignBtn type="submit" disabled={!isValid}>
				Sign Up
			</SignBtn>
		</SignForm>
	)
}
