import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: {
			description: 'Текст кнопки',
			type: 'string',
			defaultValue: 'Click me',
			name: 'label',
		},
		variant: {
			description: 'Вариант внешнего вида кнопки',
			control: {
				type: 'radio',
			},
			options: ['big', 'primary', 'outlined', 'submit'],
			defaultValue: 'primary',
		},
		type: {
			description: 'Вариант типа кнопки',
			control: {
				type: 'radio',
			},
			options: ['button', 'submit'],
			defaultValue: 'button',
		},
		width: {
			description: 'Размер кнопки',
			type: 'string',
		},
		disabled: {
			description: 'Состояние кнопки',
			type: 'boolean',
			defaultValue: false,
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

export const Disabled = Template.bind({})
Disabled.args = {
	variant: 'primary',
	disabled: true,
}
