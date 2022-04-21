import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		placeholder: {
			type: 'string',
			description: 'Placeholder инпута',
		},
		variant: {
			description: 'Вариант внешнего вида инпута',
			control: {
				type: 'radio',
			},
			options: ['search', 'primary'],
		},
		width: {
			type: 'string',
			description: 'Размер инпута',
		},
	},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
	variant: 'primary',
	placeholder: 'Type something',
}

export const Search = Template.bind({})
Search.args = {
	variant: 'search',
	placeholder: 'Search something',
}
