import React from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from 'common/types';
import { LNG_OPTIONS } from 'constants/items';
import LanguageChangerScreen from './LanguageChangerScreen';

const LanguageChanger = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: Language): void => {
    switch (lng) {
      case Language.PL: i18n.changeLanguage('pl'); break;
      case Language.EN: i18n.changeLanguage('en'); break;
      default: i18n.changeLanguage('en');
    }
  };

  return (
    <LanguageChangerScreen title={t('HEADER_CHANGE_LNG')} changeLanguage={changeLanguage} lngItems={LNG_OPTIONS} />
  );
};

export default LanguageChanger;
