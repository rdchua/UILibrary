import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 2px dashed #E8E8EA;
  padding: 24px 0;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;

  p:nth-of-type(1) {
    font-weight: normal;
    font-size: 14px;
    flex: 1;
    text-align: left;
    color: var(--kuma-colors-gray-600);
    margin: 0;
  }
  
  p:nth-of-type(2) {
    font-weight: 700;
    font-size: 14px;
    flex: 1;
    text-align: left;
    color: var(--kuma-colors-gray-900);
    margin: 0;
    text-align: right;
  }
`

const renderItem = (item: any) => {
  let items: any[] = [];
  for (const [key, value] of Object.entries(item)) {
    items.push(<Item>
      <p>{key}</p>
      <p>{value}</p>
    </Item>)
  }
  return items;
}

type ListItemProps = {
  item: any
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <Wrapper>
      {renderItem(item)}
    </Wrapper>
  )
}

export default ListItem
