import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from 'constants/colors';
import { IMenuItem, IMenuProps } from 'common/types';

const MenuContainer = styled.header`
  position: fixed;
  top: 0;
  padding: 1rem 0 1rem 1rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MenuNav = styled.nav`
  height: 100%;
  width: 6rem;
  border-radius: 50px;
  background-color: ${COLORS.STARTPAGE_GRADIENT_END};
  overflow: hidden;
  transition: width 500ms ease, border-radius 500ms ease;
  -moz-box-shadow: 15px 0px 51px ${COLORS.SHADOW};
  -webkit-box-shadow: 15px 0px 51px ${COLORS.SHADOW};
  box-shadow: 15px 0px 51px ${COLORS.SHADOW};

  &:hover {
    width: 15rem;
  }
`;

const MenuList = styled.ul`
  height: 100%;
  list-style: none;
  padding: 0;
  margin: auto 0 auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const MenuItem = styled.li`
  height: 6rem;
  width: 100%;
  padding-left: 2rem;
  border-radius: 10px;
  background-color: ${COLORS.STARTPAGE_GRADIENT_END};
  transition: background-color 0.1s linear;

  &:hover {
    border-radius: 10px;
    background-color: ${COLORS.STARTPAGE_GRADIENT_START};
  }

  & svg {
    height: 2rem;
    min-height: 2rem;
    width: 2rem;
    min-width: 2rem;
  }

  &:first-child,
  &:last-child {
    background-color: ${COLORS.STARTPAGE_GRADIENT_END};
  }

  &:first-child,
  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    padding-left: 0;
    fill: ${COLORS.WHITE};
    color: ${COLORS.WHITE};
  }

  &:first-child {
    margin-bottom: auto;
  }

  &:last-child {
    transform: rotate(0deg);
    margin-top: auto;
    transform: scaleY(-1);
  }

  &:last-child svg {
    transition: 0.4s;
  }

  ${MenuNav}:hover &:last-child {
    display: flex;
    align-items: center;
    height: 4rem;
    margin-top: auto;
  }

  ${MenuNav}:hover &:last-child svg {
    transform: matrix(-1, 0, 0, -1, 60, 0);
  }
`;

const ItemWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  text-decoration: none;
  fill: ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  font-size: 1.2rem;
  height: 100%;

  & span {
    opacity: 0;
    transition: 0.3s ease-in;
  }

  ${MenuNav}:hover & span {
    opacity: 1;
  }
`;

const MenuScreen = ({ header, items, bottom }: IMenuProps): JSX.Element => {
  const HeaderIconComponent = header.Icon;
  const BottomIconComponent = bottom.Icon;

  return (
    <MenuContainer>
      <MenuNav>
        <MenuList>
          <MenuItem>
            <HeaderIconComponent />
          </MenuItem>
          {
            items.map(({ name, Icon, path }) => (
              <MenuItem>
                <ItemWrapper to={path}>
                  <Icon />
                  <span>{name}</span>
                </ItemWrapper>
              </MenuItem>
            ))
          }
          <MenuItem>
            <BottomIconComponent />
          </MenuItem>
        </MenuList>
      </MenuNav>
    </MenuContainer>
  );
};

export default MenuScreen;
