import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleThemeButton } from 'components';

export default {
  title: 'WalletViewer/ToggleThemeButton',
  component: ToggleThemeButton,
} as ComponentMeta<typeof ToggleThemeButton>;

const Template: ComponentStory<typeof ToggleThemeButton> = (args) => (
  <ToggleThemeButton {...args} />
);

export const TemplateToggleButton = Template.bind({});
