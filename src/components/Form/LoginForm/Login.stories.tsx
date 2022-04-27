import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Login } from './Login'

export default {
	title: 'Forms/Login',
	component: Login,

	argTypes: {
		width: {
			description: 'Размер формы',
			type: 'string',
			defaultValue: '50%',
		},
	},
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />

export const Default = Template.bind({})
