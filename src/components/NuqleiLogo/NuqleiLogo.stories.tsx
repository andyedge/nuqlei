import type { Meta, StoryObj } from "@storybook/react";
import { NuqleiLogo } from "./NuqleiLogo";

const meta: Meta<typeof NuqleiLogo> = {
  title: "Components/NuqleiLogo",
  component: NuqleiLogo,
  argTypes: {
    size:    { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    variant: { control: "radio",  options: ["default", "white", "black"] },
    symbolOnly:   { control: "boolean" },
    wordmarkOnly: { control: "boolean" },
  },
  args: { size: "md", variant: "default" },
};

export default meta;
type Story = StoryObj<typeof NuqleiLogo>;

export const Default: Story = {};

export const White: Story = {
  args: { variant: "white" },
  parameters: { backgrounds: { default: "dark" } },
};

export const Black: Story = {
  args: { variant: "black" },
};

export const SymbolOnly: Story = {
  name: "Symbol Only",
  args: { symbolOnly: true },
};

export const WordmarkOnly: Story = {
  name: "Wordmark Only",
  args: { wordmarkOnly: true },
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24, background: "#f8fafc" }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 12, color: "#737373", width: 28, flexShrink: 0 }}>{s}</span>
          <NuqleiLogo size={s} variant="default" />
        </div>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, overflow: "hidden", borderRadius: 12 }}>
      <div style={{ padding: "32px 40px", background: "#f8fafc" }}>
        <NuqleiLogo size="md" variant="default" />
      </div>
      <div style={{ padding: "32px 40px", background: "#ffffff", borderTop: "1px solid #e5e5e5" }}>
        <NuqleiLogo size="md" variant="black" />
      </div>
      <div style={{ padding: "32px 40px", background: "#0f172b" }}>
        <NuqleiLogo size="md" variant="white" />
      </div>
    </div>
  ),
};
