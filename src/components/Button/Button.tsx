import React from 'react'
import styled from 'styled-components';

const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;
  border-radius: 12px;
  align-self: center;
  border: 0;
  color: white;
  font-weight: bold;
  letter-spacing: 0.03em;
  background: ${({ color }) => `var(--kuma-colors-${color}-900)`};
  transition: 150ms ease-in-out;
  outline: none;

  ${({ size }) => (!size || size === 'large') ? `
    padding: 8px 16px;
    font-size: 16px;
  ` : null};

  ${({ size }) => size === 'medium' ? `
    padding: 8px;
    font-size: 14px;
  ` : null};

  ${({ size }) => size === 'small' ? `
    padding: 8px 16px;
    font-size: 12px;
  ` : null}

  ${({ view, textColor }) => view === 'outline' ? `
    padding: 8px 16px;
    background: transparent;
    border: 1px solid #E8E8EA;
    color: ${textColor ? textColor : 'var(--kuma-colors-gray-900)'};
  ` : null}

  svg {
    /* stroke-width: 1.5px; */
  }

  svg ~ span {
    margin-left: 5px;
  }

  span + svg {
    margin-left: 5px;
  }

  :hover {
    ${({ view, color }) => view === 'outline' ? `
      border: 1px solid var(--kuma-colors-${color}-600);
      color: ${color ? `var(--kuma-colors-${color}-600)` : 'var(--kuma-colors-gray-600)'};
      ` : `
      background-color: var(--kuma-colors-${color}-700);
    `} 
    transition: 150ms ease-in-out;
  }

  :focus {
    ${({ view, color }) => view === 'outline' ? `
      border: 2px solid var(--kuma-colors-${color}-900);
      color: ${color ? `var(--kuma-colors-${color}-900)` : 'var(--kuma-colors-gray-900)'};
      ` : `
      border: 4px solid var(--kuma-colors-${color}-200);
    `}
  }

  :disabled {
    cursor: not-allowed;
    ${({ view, color }) => view === 'outline' ? `
      border: 1px solid var(--kuma-colors-gray-100);
      color: ${color ? `var(--kuma-colors-${color}-300)` : 'var(--kuma-colors-gray-300)'};
      ` : `
      background-color: var(--kuma-colors-${color}-300);
    `}
  }

`

type ButtonProps = {
  children?: React.ReactNode,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  text?: string;
  size: string;
  view: string;
  color: string;
  textColor?: string;
  disabled?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled {...props}>
      {props.leftIcon}
      <span>{props.text}</span>
      {props.rightIcon}
    </ButtonStyled>
  )
}

export default Button;
