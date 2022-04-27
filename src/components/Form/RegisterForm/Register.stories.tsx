import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Register } from './Register'

export default {
	title: 'Forms/Register',
	component: Register,

	argTypes: {
		width: {
			description: 'Размер формы',
			type: 'string',
			defaultValue: '50%',
		},
	},
} as ComponentMeta<typeof Register>

const Template: ComponentStory<typeof Register> = (args) => <Register {...args} />

export const Default = Template.bind({})
