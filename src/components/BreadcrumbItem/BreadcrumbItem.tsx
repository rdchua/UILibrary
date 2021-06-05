import React from 'react'
import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';

const Wrapper = styled.a<{ active?: string, text: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  padding-right: 16px;

  ${({ active, text }) => active === text ? `
    color: var(--kuma-colors-blue-900);
    font-weight: 700;
  ` : `
    color: var(--kuma-colors-gray-500);
  `};
`

const IconWrapper = styled.div`
  padding: 0 8.5px;
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-top: -3px;
`

type BreadcrumbItemProps = {
  icon?: React.ReactNode,
  text: string,
  active?: string
}

const BreadcrumbItem = ({ active, icon, text }: BreadcrumbItemProps) => {
  return (
    <Wrapper active={active} text={text}>
      <IconWrapper>
        {icon}
      </IconWrapper>
      {text}
    </Wrapper>
  )
}

export default BreadcrumbItem
