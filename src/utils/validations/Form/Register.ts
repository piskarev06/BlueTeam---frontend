import * as yup from 'yup'

export const validationSchema = yup.object().shape({
	name: yup
		.string()
		.required('Username is required')
		.min(3, 'Username must be at least 3 characters')
		.max(20, 'Username must not exceed 20 characters'),
	email: yup.string().required('Email is required').email('Email is invalid'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(40, 'Password must not exceed 40 characters'),
})
