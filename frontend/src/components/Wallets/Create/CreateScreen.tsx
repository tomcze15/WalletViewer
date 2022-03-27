import styled from 'styled-components';

import { ICreateWalletProps } from 'common/types';
import { InputForm } from './InputForm';

const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 21px;
  background-color: black;
`;

const Body = styled.form`
  // TODO: Change color path for this form. Stop using menu colors
  background-color: ${({ theme }) => theme.menu.background};
  -moz-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  -webkit-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 3rem;
  border-radius: inherit;
`;

const TitleWrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;

const Title = styled.h1`
  color: white;
`;

export const CreateScreen = (props: ICreateWalletProps) => {
  return (
    <WrapperContent>
      <FormContainer>
        <TitleWrapper>
          <Title>Create a new Wallet</Title>
        </TitleWrapper>
        <Body onSubmit={props.handleFormSubmit}>
          <InputForm
            text="Title"
            type="text"
            handleOnChange={props.handleChangeTitle}
          />
          <InputForm
            text="Balance"
            type="number"
            handleOnChange={props.handleChangeInitialBalance}
          />
          <button>Create</button>
        </Body>
      </FormContainer>
    </WrapperContent>
  );
};
