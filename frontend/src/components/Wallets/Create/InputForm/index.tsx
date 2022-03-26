import React from 'react';
import styled from 'styled-components';

type InputType = 'text' | 'email' | 'password' | 'number';

interface IInputForm {
  text: string;
  type: InputType;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 3rem;
`;

const DynamicText = styled.label`
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  padding: 0 0.5rem;
  color: white;
  cursor: text;
  transition: top 100ms ease-in, left 100ms ease-in, font-size 100ms ease-in;
  background-color: ${({ theme }) => theme.menu.background};
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #e1e5ee;
  padding: 1.25rem;
  border-radius: 0.5rem;
  color: white;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  background: none;

  &:hover {
    border-color: #adffff;
  }

  &:focus {
    border-color: #18ffff;
  }

  &:focus ~ ${DynamicText} {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }

  &:not(:placeholder-shown) {
    &:not(:focus) ~ ${DynamicText} {
      top: -0.5rem;
      font-size: 0.8rem;
      left: 0.8rem;
    }
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const InputForm = ({ text, type, handleOnChange }: IInputForm) => {
  return (
    <InputContainer>
      <Input
        type={type}
        id={type}
        autoComplete="off"
        placeholder=" "
        onChange={handleOnChange}
      />
      <DynamicText htmlFor={type}>{text}</DynamicText>
    </InputContainer>
  );
};
