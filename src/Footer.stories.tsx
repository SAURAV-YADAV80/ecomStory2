import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

// Meta configuration for Storybook
const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered', // Center the component in Storybook
    backgrounds: {
      default: 'light', // Set the background to light for better visibility
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Define the default Story with customizable props
export const Default: Story = {
  args: {
    backgroundColor: '#f9fafb',
    textColor: '#1f2937',
    fontSize: '0.875rem',
    borderRadius: '0px',
  },
};

// Additional Stories
export const CustomStyles: Story = {
  args: {
    backgroundColor: "rgba(104, 80, 165, 1)", // Light blue background
    textColor: "#46a493", // Dark teal text
    fontSize: "15px", // Larger font size
    borderRadius: "150px", // Rounded corners
  },
};