import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { Authorization } from '../../pages/AuthorizationPage/Authorization'
import { NotFound } from '../../pages/NotFoundPage/NotFound'

export const GuestRoutes: FC = () => {
	let element = useRoutes([
		{ path: '/', element: <Authorization /> },
		{ path: '*', element: <NotFound /> },
	])

	return element
}
