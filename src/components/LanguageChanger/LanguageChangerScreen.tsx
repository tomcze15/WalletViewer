import React from 'react';
import styled from 'styled-components';

import { ILanguageChangerProps } from 'common/types';

const LangWrapper = styled.div`
  height: 15rem;
  width: 30rem;
  background: orange;
  border-radius: 5px;
`;

const Header = styled.div`
  height: 3rem;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background: #C27300;
  display: flex;
  justify-content: center;
  align-items: center;

  & h3 {
    font-weight: bold;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  background: lightgray;
`;

const LanguageChangerScreen = ({ title, lngItems, changeLanguage }: ILanguageChangerProps): JSX.Element => (
  <LangWrapper>
    <Header>
      {title}
    </Header>
    <Content>
      {
        lngItems.map((item) => (
          <button onClick={() => { changeLanguage(item.type); }} type="button">{item.name}</button>
        ))
      }
    </Content>
  </LangWrapper>
);

export default LanguageChangerScreen;
