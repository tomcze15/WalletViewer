import React from 'react';

import { MENU_ITEMS } from 'constants/items';
import MenuScreen from './MenuScreen';

const Menu = (): JSX.Element => {
  const header = MENU_ITEMS[0];
  const bottom = MENU_ITEMS[MENU_ITEMS.length - 1];
  const menuOptions = MENU_ITEMS
    .slice(1, MENU_ITEMS.length - 1)
    .map((item) => ({
      ...item,
      name: item.name.toUpperCase(),
    }));

  return (
    <MenuScreen header={header} items={menuOptions} bottom={bottom} />
  );
};

export default Menu;
