import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		placeholder: {
			description: 'Placeholder инпута',
			type: 'string',
		},
		variant: {
			description: 'Вариант внешнего вида инпута',
			control: {
				type: 'radio',
			},
			options: ['search', 'sign', 'primary'],
		},
		width: {
			description: 'Размер инпута',
			type: 'string',
		},
		invalid: {
			description: 'Валидность инпута',
			type: 'boolean',
			defaultValue: false,
		},
	},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
	variant: 'primary',
	placeholder: 'Type something',
}

export const Sign = Template.bind({})
Sign.args = {
	variant: 'sign',
	placeholder: 'Enter name',
}

export const Search = Template.bind({})
Search.args = {
	variant: 'search',
	placeholder: 'Search something',
}

export const Invalid = Template.bind({})
Invalid.args = {
	variant: 'sign',
	placeholder: 'Enter name',
	invalid: true,
}
