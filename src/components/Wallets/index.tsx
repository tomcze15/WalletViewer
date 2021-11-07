import React from 'react';
import styled from 'styled-components';
import Wallet from 'components/Wallets/Wallet';

const WalletsWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: blue;
`;

const index = (): JSX.Element => {
  console.log('Rendered Wallets');
  return (
    <WalletsWrapper>
      <Wallet />
      <Wallet />
      <Wallet />
    </WalletsWrapper>
  );
};

export default index;
