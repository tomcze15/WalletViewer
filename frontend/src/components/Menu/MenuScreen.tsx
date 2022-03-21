import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from 'constants/colors';
import { IMenuProps } from 'common/types';

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
  background-color: ${(p) => p.theme.menu.background};
  overflow: hidden;
  transition: width 500ms ease, border-radius 500ms ease;
  -moz-box-shadow: 0px 0px 30px ${(p) => p.theme.menu.shadow};
  -webkit-box-shadow: 0px 0px 30px ${(p) => p.theme.menu.shadow};
  box-shadow: 0px 0px 30px ${(p) => p.theme.menu.shadow};

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
  background-color: inherit;
  transition: background-color 0.1s linear;

  &:hover {
    border-radius: 10px;
    background-color: ${(p) => p.theme.menu.hover};
  }

  & svg {
    height: 2rem;
    min-height: 2rem;
    width: 2rem;
    min-width: 2rem;
  }

  &:first-child,
  &:last-child {
    background-color: ${COLORS.TRANSPARENT};
  }

  &:first-child,
  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    padding-left: 0;
    fill: ${(p) => p.theme.menu.icon};
    color: ${(p) => p.theme.menu.icon};
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
  color: ${(p) => p.theme.menu.text.color};
  font-size: 1.2rem;
  height: 100%;

  & svg {
    color: ${(p) => p.theme.menu.icon};
  }

  & span {
    opacity: 0;
    transition: 0.3s ease-in;
  }

  ${MenuNav}:hover & span {
    opacity: 1;
  }
`;

const MenuScreen = ({ header, items, bottom }: IMenuProps): JSX.Element => (
  <MenuContainer>
    <MenuNav>
      <MenuList>
        <MenuItem>
          <header.Icon key={header.label} />
        </MenuItem>
        {items.map(({ label, Icon, href }) => (
          <MenuItem key={label}>
            <ItemWrapper to={href}>
              <Icon />
              <span>{label}</span>
            </ItemWrapper>
          </MenuItem>
        ))}
        <MenuItem key={bottom.label}>
          <bottom.Icon />
        </MenuItem>
      </MenuList>
    </MenuNav>
  </MenuContainer>
);

export default MenuScreen;
