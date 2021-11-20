import React from 'react';
import { useTranslation } from 'react-i18next';

import { MENU_OPTIONS, MENU_TOP, MENU_BOTTOM } from 'constants/items';
import MenuScreen from './MenuScreen';

const Menu = (): JSX.Element => {
  const { t } = useTranslation();

  const menuOptions = MENU_OPTIONS
    .map((option) => ({
      ...option,
      label: t(`MENU_ITEM.${option.label}`).toUpperCase(),
    }));

  return (
    <MenuScreen header={MENU_TOP} items={menuOptions} bottom={MENU_BOTTOM} />
  );
};

export default Menu;
