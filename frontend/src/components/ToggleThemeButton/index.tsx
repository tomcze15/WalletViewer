import styled from 'styled-components';

import { Moon, Sun } from 'assets/icons';
import { IToggleButtonProps, Theme } from 'common/types';

const ToggleContainer = styled.button`
  background-color: ${({ theme }) => theme.settings.toggleBtn.background};
  border: 2px solid ${({ theme }) => theme.settings.toggleBtn.border};
  border-radius: 30px;
  font-size: 0.5rem;
  margin: 0 0;
  padding: 0.5rem;
  width: 6rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  transition: background-color 0.2s linear;

  svg {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.settings.toggleBtn.icon};

    &:first-child {
      transform: ${({ theme }) =>
        theme.id === Theme.LIGHT ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme.id === Theme.LIGHT ? 'translateY(-100px)' : 'translateY(0)'};
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
