import React from 'react'
import styled from 'styled-components'

const BadgeStyled = styled.div<BadgeProps>`

  ${props => props.type === 'number' ? `
    padding: 0 6px;
    background-color: ${props.backgroundColor};
    color: white;
    font-weight: 700;
    border-radius: 6px;
  `: `
    padding: 4px 8px;
    background-color: var(--kuma-colors-${props.backgroundColor}-50);
    color: var(--kuma-colors-${props.backgroundColor}-1100);
    font-weight: 700;
    border-radius: 6px;
  `}
`

type BadgeProps = {
  children?: string;
  backgroundColor?: string;
  type?: string;
}

const Badge = ({ children, backgroundColor, type }: BadgeProps) => {
  return (
    <BadgeStyled backgroundColor={backgroundColor} type={type}>
      {children}
    </BadgeStyled>
  )
}

export default Badge
