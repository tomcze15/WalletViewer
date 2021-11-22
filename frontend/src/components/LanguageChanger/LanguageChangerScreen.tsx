import React from 'react';
import styled from 'styled-components';

import { ILanguageChangerProps } from 'common/types';
import { Checkmark } from 'assets/icons';

const LangWrapper = styled.table`
  height: 16rem;
  width: 30rem;
  background: ${({ theme }) => theme.settings.languageChanger.background};
  border-radius: 21px;
  border-spacing: 0;
  -moz-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  -webkit-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  overflow: hidden;
`;

const Header = styled.thead`
  height: 5rem;
  width: 100%;
  background: ${({ theme }) => theme.settings.languageChanger.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.settings.languageChanger.headerFont};
  font-size: 1.5rem;

  & h3 {
    font-weight: bold;
  }
`;

const Body = styled.tbody`
  height: 100%;
  width: 100%;

  & tr:first-child {
    border-radius: 21px 21px 0 0;
    -webkit-box-shadow: 0px 7px 47px 11px ${({ theme }) => theme.settings.languageChanger.contentShadow};
    -moz-box-shadow: 0px 7px 47px 11px ${({ theme }) => theme.settings.languageChanger.contentShadow};
    box-shadow: 0px 7px 47px 11px ${({ theme }) => theme.settings.languageChanger.contentShadow};
  }

  & tr:first-child td {
    border-radius: 21px 21px 0 0;
  }

  & tr:hover td {
    background-color: ${({ theme }) => theme.settings.languageChanger.item.hover};
  }

  & tr:first-child:hover {
    border-radius: 21px 21px 0 0;
  }
`;

const LngOptionContainer = styled.tr`
  width: 100%;
  height: 100%;
`;

const LngOptionContent = styled.td`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.settings.languageChanger.item.background};

  transition: background-color 0.1s linear;
`;

const LanguageName = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.settings.languageChanger.item.font};
`;

const FlagCheckmarkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const CountryImg = styled.img`
  height: 4rem;
  width: 6rem;
  border-radius: 10px;
`;

const CheckmarkContainer = styled.div`
  height: 1.4rem;
  width: 1.4rem;

  & svg {
    color: ${({ theme }) => theme.settings.languageChanger.item.font};
    height: 1.4rem;
    width: 1.4rem;
  }
`;

const LanguageChangerScreen = ({
  title,
  lngItems,
  currentLng,
  changeLanguage,
}: ILanguageChangerProps): JSX.Element => (
  <LangWrapper>
    <Header>
      <tr>
        <th>{title}</th>
      </tr>
    </Header>
    <Body>
      {
        lngItems.map((item) => (
          <LngOptionContainer onClick={() => { changeLanguage(item.type); }}>
            <LngOptionContent>
              <LanguageName>{item.name}</LanguageName>
              <FlagCheckmarkContainer>
                <CountryImg src={item.image} alt={item.shortcut} />
                <CheckmarkContainer>
                  {item.type === currentLng ? <Checkmark /> : null}
                </CheckmarkContainer>
              </FlagCheckmarkContainer>
            </LngOptionContent>
          </LngOptionContainer>
        ))
      }
    </Body>
  </LangWrapper>
);

export default LanguageChangerScreen;
