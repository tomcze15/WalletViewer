import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Language } from 'common/types';

import LanguageChangerScreen from 'components/LanguageChanger/LanguageChangerScreen';
import { LNG_OPTIONS } from 'constants/items';

export default {
  title: 'WalletViewer/LanguageChangerScreen',
  component: LanguageChangerScreen,
} as ComponentMeta<typeof LanguageChangerScreen>;

const Template: ComponentStory<typeof LanguageChangerScreen> = (args) => {
  args.changeLanguage = (lng: Language) => {};
  args.title = 'Change a language';
  args.lngItems = LNG_OPTIONS;
  return <LanguageChangerScreen {...args} />;
};

export const TemplateLanguageChangerScreen = Template.bind({});
