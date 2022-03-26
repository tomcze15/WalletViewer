import styled from 'styled-components';
import { TitlePage, Wallet } from 'components';
import { CreatePlusCircle } from 'assets/icons';
import { NavLink } from 'react-router-dom';
import { WALLETS_OPTION_HREF } from 'constants/items';

const WalletsWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: blue;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
`;

const AddWallet = styled(NavLink)`
  height: 10rem;
  width: 10rem;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 3rem;
    width: 3rem;
  }
`;

const index = (): JSX.Element => {
  const onAddNewWalletHandler = () => {};

  return (
    <WalletsWrapper>
      <TitlePage title={'Wallets'} />
      <Wallet />
      <Wallet />
      <Wallet />
      <Wallet />
      <Wallet />
      <AddWallet to={WALLETS_OPTION_HREF.CREATE}>
        <CreatePlusCircle />
      </AddWallet>
    </WalletsWrapper>
  );
};
export default index;
