import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

import Tabs from './Tabs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />

const tabs = [
  {
    title: 'TypeScript',
  },
  {
    title: 'Javascript',
  },
  {
    title: 'Dashboard',
  },
  {
    title: 'Payment',
  },
]

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  tabs,
}
