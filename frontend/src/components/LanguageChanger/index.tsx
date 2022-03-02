import React from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from 'common/types';
import { LNG_OPTIONS, LNG_SHORTCUTNAME } from 'constants/items';
import LanguageChangerScreen from './LanguageChangerScreen';

const LanguageChanger = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: Language): void => {
    switch (lng) {
      case Language.PL: i18n.changeLanguage(LNG_SHORTCUTNAME.PL); break;
      case Language.EN: i18n.changeLanguage(LNG_SHORTCUTNAME.EN); break;
      default: i18n.changeLanguage(LNG_SHORTCUTNAME.EN);
    }
  };

  const currentLng = (): Language => {
    switch (i18n.language) {
      case LNG_SHORTCUTNAME.EN: return Language.EN;
      case LNG_SHORTCUTNAME.PL: return Language.PL;
      default: return Language.EN;
    }
  };

  return (
    <LanguageChangerScreen title={t('HEADER_CHANGE_LNG')} changeLanguage={changeLanguage} lngItems={LNG_OPTIONS} currentLng={currentLng()} />
  );
};

export default LanguageChanger;