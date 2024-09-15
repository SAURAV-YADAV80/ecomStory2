import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  tags: ['autodocs'],
  component: Footer,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f0f0f0' },
        { name: 'dark', value: '#333' },
        { name: 'blue', value: '#e0f7fa' },
        { name: 'green', value: '#e8f5e9' },
      ],
    },
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
      defaultValue: '#f9fafb',
    },
    textColor: {
      control: 'color',
      defaultValue: '#1f2937',
    },
    fontSize: {
      control: 'text',
      defaultValue: '0.875rem',
    },
    borderRadius: {
      control: 'text',
      defaultValue: '0px',
    },
    titleText: {
      control: 'text',
      defaultValue: 'Copyright © 2022 | Saurav',
    },
    subtitleText: {
      control: 'text',
      defaultValue: 'Powered by Saurav Yadav',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: "#8baaca",
    textColor: "#cbd8ea",
    fontSize: "15px",
    borderRadius: "10px",
  },
};

export const WithCustomText: Story = {
  args: {
    backgroundColor: "#ffcc00",
    textColor: "#333",
    fontSize: "1rem",
    borderRadius: "5px",
    titleText: "Custom Footer Title",  // Custom title text
    subtitleText: "Custom subtitle for the footer",  // Custom subtitle text
  },
};
