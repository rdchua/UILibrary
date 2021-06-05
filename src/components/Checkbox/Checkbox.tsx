import React from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' }) <any>`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`
const IconContainer = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 1.5px;
  width: 18px;
  height: 18px;
  align-self: center;
`

const StyledCheckbox = styled.div<any>`
  cursor: pointer;
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 9px;

  ${props => props.checked ? `
    background: #003CFF;
    border: 0;
  ` : `
    border: 2px solid var(--kuma-colors-gray-100);
    background: transparent;
  `}

  transition: all 150ms;

  &::after {
    content: "";
    position: absolute;
    display: block;
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = React.forwardRef(({ ...props }: any, ref) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox onClick={props.onClick} ref={ref} {...props} />
      <StyledCheckbox {...props} >
        <IconContainer>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </IconContainer>
      </StyledCheckbox>
    </CheckboxContainer>
  )
});

export default Checkbox;