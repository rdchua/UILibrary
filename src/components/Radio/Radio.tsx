import React from 'react'
import styled from 'styled-components';

/* Create a custom radio button */
const Checkmark = styled.span<RadioProps>`
  position: absolute;
  background-color: #fff;
  border: 1px solid var(--kuma-colors-gray-200);
  border-radius: 50%;

  ${({ size }) =>
    size === 'small' ? `
      height: 20px;
      width: 20px;
      top: 25%;
      left: 2px;

      :after {
        top: 5px;
        left: 5px;
        width: 10px;
        height: 10px;
      }
    ` :
      size === 'medium' ? `
      height: 24px;
      width: 24px;
      top: 15%;
      left: 0px;

      :after {
        top: 6px;
        left: 6px;
        width: 12px;
        height: 12px;
      }
    ` :
        size === 'large' ? `
      height: 32px;
      width: 32px;
      top: 5%;
      left: 0px;

      :after {
        top: 8px;
        left: 8px;
        width: 16px;
        height: 16px;
      }
    ` : null}

  /* Create the indicator (the dot/circle - hidden when not checked) */
  :after {
    content: "";
    position: absolute;
    display: none;
    border-radius: 50%;
    background: white;
  }
`
/* Customize the label (the container) */
const Wrapper = styled.label<RadioProps>`
  /* background: ${({ color }) => color ? `var(--kuma-colors-${color}-900)` : `var(--kuma-colors-blue-900)`}; */
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default radio button */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* On mouse-over, add a grey background color */
  :hover input ~ ${Checkmark} {
    border: 2px solid var(--kuma-colors-blue-900);
  }


  ${({ checked }) => checked ? `
      input:checked ~ ${Checkmark} {
        background-color: var(--kuma-colors-blue-900);
      }

      input:checked ~ ${Checkmark}:after {
        display: block;
      }
  ` : null};

`;

const LabelWrapper = styled.div<RadioProps>`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  ${({ size }) => size === 'large' ? ` margin-left: 16px` : null}
`

const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const Caption = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: var(--kuma-colors-gray-300);
  margin-top: -5px;
`;


type RadioProps = {
  color?: string;
  checked?: boolean;
  size?: string;
}


const Radio = (props: RadioProps) => {
  const size = props.size || 'medium';
  const checked = props.checked || false;

  return (
    <Wrapper checked={checked} size={size}>
      <LabelWrapper size={size}>
        <Label>Label</Label>
        <Caption>Label</Caption>
      </LabelWrapper>
      <input type="checkbox" checked={checked}></input>
      <Checkmark size={size} />
    </Wrapper>
  )
}

export default Radio
