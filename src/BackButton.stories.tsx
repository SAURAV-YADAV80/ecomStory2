import type { Meta, StoryObj } from '@storybook/react';
import BackButton from './BackButton';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  tags: ['autodocs'],
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
      control: 'color',
      defaultValue: '#ff0000',
      description: 'Background color of the button',
    },
    fontColor: {
      control: 'color',
      defaultValue: '#ffffff',
      description: 'Font color of the button text',
    },
    fontSize: {
      control: 'select',
      options: ['text-sm', 'text-base', 'text-lg', 'text-xl'],
      defaultValue: 'text-base',
      description: 'Font size of the button text',
    },
    children: {
      control: 'text',
      defaultValue: 'Back',
      description: 'Content of the button',
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: '#ff0000',
    fontColor: '#ffffff',
    fontSize: 'text-base',
    children: 'Back', 
  },
};

export const LargeButton: Story = {
  args: {
    bgColor: '#0000ff',
    fontColor: '#ffffff',
    fontSize: 'text-lg',
    children: 'Next', 
  },
};

export const SmallButton: Story = {
  args: {
    bgColor: '#00ff00',
    fontColor: '#000000', 
    fontSize: 'text-sm',
    children: 'Submit', 
  },
};