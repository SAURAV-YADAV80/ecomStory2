import type { Meta, StoryObj } from '@storybook/react';
import Billing from './Billing';

const meta: Meta<typeof Billing> = {
  title: 'Components/Billing',
  component: Billing,
  argTypes: {
    newTotal: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    isLoggedIn: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    user: {
      control: { type: 'object' },
      defaultValue: {
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    newTotal: 100,
    isLoggedIn: true,  // This should now work with the updated HOC
    user: { full_name: 'John Doe', email: 'johndoe@example.com' },
  },
};
