import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string',
			description: 'Текст кнопки',
			defaultValue: 'Click me',
			name: 'label',
		},
		variant: {
			description: 'Вариант внешнего вида кнопки',
			control: {
				type: 'radio',
			},
			options: ['big', 'primary', 'outlined', 'submit'],
		},
		type: {
			description: 'Вариант типа кнопки',
			control: {
				type: 'radio',
			},
			options: ['button', 'submit'],
		},
		width: {
			type: 'string',
			description: 'Размер кнопки',
		},
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	variant: 'primary',
}

export const Big = Template.bind({})
Big.args = {
	variant: 'big',
}

export const Submit = Template.bind({})
Submit.args = {
	variant: 'submit',
	type: 'submit',
}

export const Outlined = Template.bind({})
Outlined.args = {
	variant: 'outlined',
}
