import type { Meta, StoryObj } from "@storybook/react";
import { BannerHeader } from "./BannerHeader";

const meta: Meta<typeof BannerHeader> = {
  title: "Components/BannerHeader",
  component: BannerHeader,
  parameters: { layout: "fullscreen" },
  argTypes: {
    badge:       { control: "text" },
    message:     { control: "text" },
    dismissible: { control: "boolean" },
  },
  args: {
    badge:       "New",
    message:     "Frontend Pages Added",
    dismissible: false,
  },
};

export default meta;
type Story = StoryObj<typeof BannerHeader>;

export const Default: Story = {};

export const Dismissible: Story = {
  args: { dismissible: true },
};

export const CustomMessage: Story = {
  name: "Custom message",
  args: {
    badge:   "Update",
    message: "Nuqlei v2.0 is now available — see what's new",
    dismissible: true,
  },
};

export const NoBadge: Story = {
  name: "No badge",
  args: {
    badge:   "",
    message: "Save valuable time and effort when searching for a solution · Contact us",
  },
};
