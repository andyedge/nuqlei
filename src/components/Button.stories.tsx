import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button Text",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ── Individual variant stories ── */

export const Primary: Story = {
  args: { children: "Primary", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Danger: Story = {
  args: { children: "Danger", variant: "danger" },
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const DisabledSecondary: Story = {
  name: "Disabled — Secondary",
  args: { children: "Disabled", variant: "secondary", disabled: true },
};

/* ── Size stories ── */

export const Small: Story = {
  args: { children: "Small Button", size: "sm" },
};

export const Medium: Story = {
  args: { children: "Medium Button", size: "md" },
};

export const Large: Story = {
  args: { children: "Large Button", size: "lg" },
};

export const FullWidth: Story = {
  args: { children: "Full Width Button", fullWidth: true },
  decorators: [
    (Story) => (
      <div style={{ width: 320, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

/* ── All variants side-by-side ── */

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <Button variant="primary" size="lg">Primary — lg</Button>
        <Button variant="primary" size="md">Primary — md</Button>
        <Button variant="primary" size="sm">Primary — sm</Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <Button variant="secondary" size="lg">Secondary — lg</Button>
        <Button variant="secondary" size="md">Secondary — md</Button>
        <Button variant="secondary" size="sm">Secondary — sm</Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <Button variant="danger" size="lg">Danger — lg</Button>
        <Button variant="danger" size="md">Danger — md</Button>
        <Button variant="danger" size="sm">Danger — sm</Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <Button variant="primary" disabled>Primary — Disabled</Button>
        <Button variant="secondary" disabled>Secondary — Disabled</Button>
        <Button variant="danger" disabled>Danger — Disabled</Button>
      </div>
    </div>
  ),
};
