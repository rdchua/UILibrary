import React from 'react'
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 56px;
  background: white;
  width: 352px;
  border-radius: 18px;
  border: 1px solid var(--kuma-colors-gray-100);
  position: relative;
  padding: 0 16px;

  
  :focus-within {
    border: 1px solid var(--kuma-colors-blue-900);
  }

  svg {
    font-size: 18px;
  }
`

const Label = styled.span`
  position: absolute;
  pointer-events: none;
  left: 50px;
  font-size: 14px;
  color: var(--kuma-colors-gray-600);
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  transform: translate(0, 0px) scale(1);
`

const InputStyled = styled.input`
  flex: 1;
  outline: none;
  background-color: #fff;
  border: 0;
  padding: 0 16px;
  margin-top: 12.5px;
  font-size: 14px;
  font-weight: bold;
  color: var(--kuma-colors-gray-1000);

  ::placeholder {
    color: var(--kuma-colors-gray-400)
  }


  :focus + span, :not(:focus):valid + span {
    color: var(--kuma-colors-gray-600);
    transform: translate(0, -12px) scale(1);
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }
`

type InputProps = {
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  placeholder?: string,
  label?: string
}

const Input = ({ leftIcon, rightIcon, ...props }: InputProps) => {
  return (
    <InputWrapper>
      {leftIcon}
      <InputStyled required="required" />
      <Label>{props.label}</Label>
      {rightIcon}
    </InputWrapper>
  )
}

export default Input
