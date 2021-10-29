import React from 'react';
import styled from 'styled-components';
import COLORS from 'constants/colors';
import { IMenuProps } from 'common/types';

const MenuContainer = styled.header`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MenuWrapper = styled.nav`
  height: calc(100% - 2rem);
  width: 6rem;
  margin: 1rem 0 1rem 0;
  border-radius: 50px;
  background-color: ${COLORS.STARTPAGE_GRADIENT_END};
  transition: width 500ms ease, border-radius 500ms ease;

  &:hover {
    width: 15rem;
  }
`;

const Menu = (props: IMenuProps): JSX.Element => {
  console.log('Menu props', props);
  return (
    <MenuContainer>
      <MenuWrapper />
    </MenuContainer>
  );
};

export default Menu;
