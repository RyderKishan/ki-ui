import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button
} as ComponentMeta<typeof Button>;
// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button'
};
