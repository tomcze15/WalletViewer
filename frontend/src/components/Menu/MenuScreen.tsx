import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import COLORS from 'constants/colors';
import { IMenuProps } from 'common/types';

const FlexColSpecBtw = css`
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  padding: 1rem 0 1rem 1rem;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const NavWrapper = styled.nav`
  display: flex;
  ${FlexColSpecBtw}
  height: 100%;
  max-height: 60rem;
  width: 6rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.menu.background};
  transition: width 500ms ease, border-radius 500ms ease;
  -moz-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  -webkit-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};

  &:hover {
    border-radius: 50px;
    width: 15rem;
  }
`;

const Top = styled.div`
  border-radius: inherit;
  height: 6rem;
  width: 100%;
`;

const Bottom = styled.div`
  border-radius: inherit;
  height: 6rem;
  width: 100%;
`;

const ListOptions = styled.ul`
  display: flex;
  ${FlexColSpecBtw}
  gap: 1.6rem;
  list-style: none;
  margin: 0;
  padding: 0.4rem;
  width: 100%;
`;

const ListItemWrapper = styled.li`
  height: 5rem;
  width: inherit;
  border-radius: 50px;
`;

const ListItemContainer = styled(NavLink)`
  height: inherit;
  width: inherit;
  border-radius: inherit;
  text-decoration: none;
  color: ${({ theme }) => theme.menu.text.color};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: background-color 200ms ease-out;

  & svg {
    height: 2rem;
    width: 2rem;
    min-height: 2rem;
    min-width: 2rem;
    transform: translateX(1.65rem);
  }

  & span {
    opacity: 0;
    transition: 0.3s ease-in;
    transform: translateX(3.3rem);
  }

  ${NavWrapper}:hover & span {
    opacity: 1;
  }

  &:hover {
    background-color: ${({ theme }) => theme.menu.options.hover};
  }

  &.active {
    transition: background-color 200ms linear;
    background-color: ${({ theme }) => theme.menu.options.selected};
  }
`;

const ItemWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 2rem;
  gap: 1.8rem;
  color: ${(p) => p.theme.menu.text.color};
  font-size: 1.2rem;
  height: 100%;
  width: 100%;

  & svg {
    color: ${(p) => p.theme.menu.icon};
  }

  & span {
    opacity: 0;
    transition: 0.3s ease-in;
  }

  ${NavWrapper}:hover & span {
    opacity: 1;
  }
`;

const MenuScreen = ({ header, items, bottom }: IMenuProps): JSX.Element => (
  <HeaderWrapper>
    <NavWrapper>
      <Top></Top>
      <ListOptions>
        {items.map(({ label, Icon, href }) => (
          <ListItemWrapper>
            <ListItemContainer to={href}>
              <Icon />
              <span>{label}</span>
            </ListItemContainer>
          </ListItemWrapper>
        ))}
      </ListOptions>
      <Bottom></Bottom>
    </NavWrapper>
  </HeaderWrapper>
);

export default MenuScreen;
