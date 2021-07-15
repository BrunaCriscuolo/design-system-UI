import { Story, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  component: Button,
  title: 'Component/Button',
} as Meta;

const Template: Story = ({ label }) => <Button>{label}</Button>;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
};
