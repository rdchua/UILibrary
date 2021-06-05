import React from 'react'
import styled from 'styled-components';
import BreadcrumbItem from '../BreadcrumbItem/BreadcrumbItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  color: var(--kuma-colors-gray-500);
  font-size: 12px;

  a:first-of-type {
    div {
      padding-left: 0;
    }
  }
`

type BreadCrumbsProps = {
  items: {
    icon?: React.ReactNode,
    text: string
  }[];
  active?: string;
  className?: string
}

const Breadcrumbs = ({ items, active, className }: BreadCrumbsProps) => {
  return (
    <Wrapper className={className}>
      {
        items.map((item, i) => {
          return <React.Fragment key={i}>
            <BreadcrumbItem active={active} icon={item.icon} text={item.text} /> /
          </React.Fragment>
        })
      }
    </Wrapper>
  )
}

export default Breadcrumbs
