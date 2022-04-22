import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { Chats } from '../../pages/ChatsPage/Chats'
import { NotFound } from '../../pages/NotFoundPage/NotFound'

export const UserRoutes: FC = () => {
	let element = useRoutes([
		{ path: '/chats', element: <Chats /> },
		{ path: '*', element: <NotFound /> },
	])

	return element
}
