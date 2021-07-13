import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: var(--input-padding);
  height: 56px;
  background: white;
  width: 352px;
  border-radius: 18px;
  border: 1px solid var(--kuma-colors-gray-100);
  position: relative;

   :hover {
     border: 1px solid var(--kuma-colors-blue-900);
   transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
   }

   :focus-within {
     border: 2px solid var(--kuma-colors-blue-900);
     transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
     color: var(--kuma-colors-blue-900);
   }

   svg {
     font-size: 18px;
   }
 `

const Label = styled.span<InputProps>`
  position: absolute;
  pointer-events: none;
  top: 18px;
  left: ${({ leftIcon }) => leftIcon ? '62px' : '24px'};
  font-size: 14px;
  color: var(--kuma-colors-gray-600);
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  transform: translate(0, 0px) scale(1);
`

const SelectStyled = styled.select`
  flex: 1;
  outline: none;
  padding: 0;
  border: 0;
  margin-top: 18px;
  font-size: 14px;
  font-weight: bold;
  appearance:none;
  color: var(--kuma-colors-gray-1000);

  //style the dropdown menu
  ::after {
    background: red;
  }

  ::placeholder {
    color: var(--kuma-colors-gray-400)
  }

  :focus + span, :not(:focus):valid + span {
    color: var(--kuma-colors-gray-600);
    transform: translate(0, -12px) scale(1);
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }

  option {
    padding: var(--input-padding)
  }
`

const StyledIcon = styled.div`
  background: var(--kuma-colors-blue-600);
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  margin-right: 12px;
  margin-left: -8px;

  svg {
    color: white;
  }
`

type InputProps = {
  leftIcon?: React.ReactNode,
  placeholder?: string,
  label?: string
}

const Select = (props: InputProps) => {
  return (
    <SelectWrapper>
      {props.leftIcon && <StyledIcon>{props.leftIcon}</StyledIcon>}
      <SelectStyled>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </SelectStyled>
      <Label {...props}>{props.label}</Label>
      <FiChevronDown />
    </SelectWrapper>
  )
}

export default Select
