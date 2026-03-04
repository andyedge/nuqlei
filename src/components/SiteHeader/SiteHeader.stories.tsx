import type { Meta, StoryObj } from "@storybook/react";
import { SiteHeader } from "./SiteHeader";
import { BannerHeader } from "../BannerHeader";

const meta: Meta<typeof SiteHeader> = {
  title: "Components/SiteHeader",
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The public-facing site navigation bar. Use alongside <BannerHeader> above it when an announcement banner is needed.",
      },
    },
  },
  argTypes: {
    primaryCtaLabel:    { control: "text" },
    secondaryCtaLabel:  { control: "text" },
    onPrimaryCtaClick:  { action: "primaryCta clicked" },
    onSecondaryCtaClick:{ action: "secondaryCta clicked" },
  },
  args: {
    primaryCtaLabel:   "Create Project",
    secondaryCtaLabel: "Sign in",
  },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

/** Navbar only — no banner */
export const Default: Story = {};

/** With BannerHeader above — typical landing page usage */
export const WithBanner: Story = {
  name: "With BannerHeader",
  render: (args) => (
    <>
      <BannerHeader badge="New" message="Frontend Pages Added" dismissible />
      <SiteHeader {...args} />
    </>
  ),
};

/** Minimal nav */
export const MinimalNav: Story = {
  args: {
    navItems: [
      { label: "About" },
      { label: "Features" },
      { label: "Pricing" },
    ],
    primaryCtaLabel:   "Get Started",
    secondaryCtaLabel: "Log in",
  },
};

/** Mobile viewport — shows hamburger menu */
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
};

/** Tablet viewport */
export const Tablet: Story = {
  parameters: { viewport: { defaultViewport: "tablet" } },
};
