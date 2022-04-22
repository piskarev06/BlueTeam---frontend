import React, { FC } from 'react'

import { UserRoutes } from '../routes/UserRoutes/UserRoutes'
import { GuestRoutes } from '../routes/GuestRoutes/GuestRoutes'

export const RouterProvider: FC = () => {
	const isAuth = false

	return <>{isAuth ? <UserRoutes /> : <GuestRoutes />}</>
}
