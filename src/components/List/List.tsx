import React from 'react'
import styled from 'styled-components';
import ListItem from '../ListItem/ListItem';

const Wrapper = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 24px;
`

type ListProps = {
  items: any[],
}

const List = ({ items }: ListProps) => {
  return (
    <Wrapper>
      {
        items.map(item => {
          return <ListItem item={item} />
        })
      }
    </Wrapper>
  )
}

export default List
