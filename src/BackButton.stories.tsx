import type { Meta, StoryObj } from '@storybook/react';
import BackButton from './BackButton';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  component: BackButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    bgColor: {
      control: 'select',
      options: ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-gray-500'],
      defaultValue: 'bg-red-500',
      description: 'Background color of the button',
    },
    fontSize: {
      control: 'select',
      options: ['text-sm', 'text-base', 'text-lg', 'text-xl'],
      defaultValue: 'text-base',
      description: 'Font size of the button text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: 'bg-red-500',
    fontSize: 'text-base',
  },
};