import styled from 'styled-components';

import { ICreateWalletProps } from 'common/types';
import { InputForm } from './InputForm';
import Card from 'components/Card';

// const FormWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 100%;
// `;

// const FormContainer = styled.form`
//   height: 90%;
//   width: 70%;
//   border-radius: 5%;
//   // TODO: Change color path for this form. Stop using menu colors
//   background-color: ${({ theme }) => theme.menu.background};
//   -moz-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
//   -webkit-box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
//   box-shadow: 0px 0px 30px ${({ theme }) => theme.menu.shadow};
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 3rem;
// `;

export const CreateScreen = (props: ICreateWalletProps) => {
  const test = "I'm tomcze15. ";
  return (
    <>
      <Card title="Create a wallet">
        <Card.Body>{test.repeat(1000)}</Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>Test</Card.Body>
      </Card>
    </>
    // <FormWrapper>
    //   <FormContainer onSubmit={props.handleFormSubmit}>
    //     <InputForm
    //       text="Title"
    //       type="text"
    //       handleOnChange={props.handleChangeTitle}
    //     />
    //     <InputForm
    //       text="Balance"
    //       type="number"
    //       handleOnChange={props.handleChangeInitialBalance}
    //     />
    //     {/* <button>Create</button> */}
    //   </FormContainer>
    // </FormWrapper>
  );
};
