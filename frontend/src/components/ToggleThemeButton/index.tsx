import { Moon, Sun } from 'assets/icons';
import { IToggleButtonProps, Theme } from 'common/types';
import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.toggleBtn.background};
  border: 2px solid red;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 0 0;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 3rem;

  svg {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;
    color: ${({ theme }) => (theme.toggleBtn.icon)};

    &:first-child {
      transform: ${({ theme }) => (theme.id === Theme.LIGHT ? 'translateY(0)' : 'translateY(100px)')};
    }

    &:nth-child(2) {
      transform: ${({ theme }) => (theme.id === Theme.LIGHT ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;

const ToggleThemeButton = ({ onToggle }: IToggleButtonProps): JSX.Element => (
  <ToggleContainer title="toggle" onClick={onToggle} type="button">
    <Sun />
    <Moon />
  </ToggleContainer>
);

export default ToggleThemeButton;
