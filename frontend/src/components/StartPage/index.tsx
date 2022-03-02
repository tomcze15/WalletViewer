import React from 'react';
import styled, { Keyframes, keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

import COLORS from 'constants/colors';
import { WalletLogo } from 'assets/icons';

type DirectionType = 'left' | 'right';

const animateOpacity = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const animatePosition = (direction?: DirectionType): Keyframes => (
  keyframes`
    0% {
      transform: translateX(${direction === 'right' ? '-' : null}25px);
    }

    100% {
      transform: translateX(0px);
    }
  `
);

const StartWrapper = styled.header`
  height: 100vh;
  width: 100vw;
  background: ${COLORS.STARTPAGE_GRADIENT_START};
  background: linear-gradient(45deg, ${COLORS.STARTPAGE_GRADIENT_START} 0%, ${COLORS.STARTPAGE_GRADIENT_END} 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

const Logo = styled(WalletLogo).attrs({
  alt: 'SVG_LOGO_ALT',
})`
  width: 8rem;
  height: 8rem;
  fill: ${COLORS.WHITE};
  animation: ${animateOpacity} 1s, ${animatePosition('left')} 1s;
`;

const Divider = styled.div`
  height: 11rem;
  width: 0.5rem;
  border-radius: 0.5rem;
  background: ${COLORS.WHITE};
`;

const Title = styled.h1`
  padding-top: 1rem;
  color: ${COLORS.WHITE};
  font-family: 'Nunito', sans-serif;
  font-size: 5rem;
  animation: ${animateOpacity} 1s, ${animatePosition('right')} 1s;
`;

const StartPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StartWrapper>
      <Logo />
      <Divider />
      <Title>
        { t('APP_NAME') }
      </Title>
    </StartWrapper>
  );
};

export default StartPage;