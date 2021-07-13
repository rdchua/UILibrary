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
    border: 2px solid var(--kuma-colors-blue-900) !important;
  }

  :hover {
    border: 1px solid var(--kuma-colors-blue-900);
  }

  svg {
    font-size: 18px;
  }
`

const Label = styled.span<{ leftIcon?: React.ReactDOM }>`
  position: absolute;
  pointer-events: none;
  left: ${({ leftIcon }) => leftIcon ? '48px' : '24px'};
  top: 16px;
  font-size: 14px;
  color: var(--kuma-colors-gray-600);
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  transform: translate(0, 0px) scale(1);
`

const InputStyled = styled.input<InputProps>`
  flex: 1;
  outline: none;
  background-color: #fff;
  border: 0;
  padding: ${props => props.leftIcon ? '0 14px' : '0 8px'};
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: var(--kuma-colors-gray-1000);

  ::placeholder {
    color: var(--kuma-colors-gray-400)
  }

  :disabled {
    color: var(--kuma-colors-gray-300)
  }

  :disabled + span, :not(:focus):valid + span {
    color: var(--kuma-colors-gray-300);
    transform: translate(0, -12px) scale(1);
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }

  :focus + span, :not(:focus):valid + span {
    color: var(--kuma-colors-gray-600);
    transform: translate(0, -12px) scale(1);
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }
`

const HelperText = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: var(--kuma-colors-gray-500);
`

type InputProps = {
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  placeholder?: string,
  label?: string
}

const Input = ({ leftIcon, rightIcon, ...props }: InputProps) => {
  return (
    <>
      <InputWrapper>
        {leftIcon}
        <InputStyled required="required" leftIcon={leftIcon} />
        <Label leftIcon={leftIcon}>{props.label}</Label>
        {rightIcon}
      </InputWrapper>
      <HelperText>Helper text</HelperText>
    </>
  )
}

export default Input
