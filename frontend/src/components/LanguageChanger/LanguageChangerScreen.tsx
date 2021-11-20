import React from 'react';
import styled from 'styled-components';

import { ILanguageChangerProps } from 'common/types';
import { Checkmark } from 'assets/icons';

const LangWrapper = styled.table`
  height: 16rem;
  width: 30rem;
  border-radius: 21px 21px 0 0;
  border-spacing: 0;
  -moz-box-shadow: 0px 0px 30px ${(p) => p.theme.menu.shadow};
  -webkit-box-shadow: 0px 0px 30px ${(p) => p.theme.menu.shadow};
  box-shadow: 0px 0px 30px ${(p) => p.theme.menu.shadow};
  overflow: hidden;
`;

const Header = styled.thead`
  height: 3rem;
  width: 100%;
  background: #434e5e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ECECEC;

  & h3 {
    font-weight: bold;
  }
`;

const Body = styled.tbody`
  height: 13rem;
  width: 100%;
  background: lightgray;
`;

const LngOptionContainer = styled.tr`
  & :hover {
    background: red;
  }
`;

const LngOptionContent = styled.td`
  padding: 1rem 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LanguageName = styled.span`
  font-size: 1.6rem;
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
