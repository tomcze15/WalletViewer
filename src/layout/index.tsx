import React from 'react';

import { ILayoutProps } from 'common/types';
import Menu from 'components/Menu';
import styled from 'styled-components';

const LayoutWrapper = styled.main`
  padding: 0 18rem 0 18rem;
  height: 100%;
  width: 100%;
`;

const index = ({ children }: ILayoutProps): JSX.Element => (
  <>
    <Menu />
    <LayoutWrapper>
      { children }
    </LayoutWrapper>
  </>
);

export default index;
