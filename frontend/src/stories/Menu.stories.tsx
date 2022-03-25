import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuScreen from 'components/Menu/MenuScreen';
import { MENU_TOP, MENU_OPTIONS, MENU_BOTTOM } from 'constants/items';

export default {
  title: 'WalletViewer/Menu',
  component: MenuScreen,
} as ComponentMeta<typeof MenuScreen>;

const Template: ComponentStory<typeof MenuScreen> = (args) => (
  <MenuScreen {...args} />
);

export const VeryLargeMenu = Template.bind({});
VeryLargeMenu.args = {
  header: MENU_TOP,
  items: MENU_OPTIONS,
  bottom: MENU_BOTTOM,
};
