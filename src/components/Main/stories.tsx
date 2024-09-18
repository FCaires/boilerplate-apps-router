import { Meta, StoryObj } from "@storybook/react";

import Main from ".";

export default {
  title: "Main",
  component: Main,
  argTypes: {
    title: {
      description: "Este é o título do componente.",
    },
    description: {
      description: "Esta é a descrição do componente.",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryObj = {};

export const Basic: StoryObj = {
  args: {
    title: "title basic",
    description: "description basic",
  },
};
