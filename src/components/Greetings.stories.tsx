import Greetings from "./Greetings";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Greetings",
  component: Greetings,
} as ComponentMeta<typeof Greetings>;

const Template: ComponentStory<typeof Greetings> = (args) => (
  <Greetings {...args} />
);

export const Simple: ComponentStory<typeof Greetings> = Template.bind({});
