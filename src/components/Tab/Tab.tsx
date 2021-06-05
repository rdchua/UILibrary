import React from 'react'
import styled from 'styled-components';

const TabItem = styled.li<TabProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.2px;
  
  ${({ activeTab, tabId }) => activeTab === tabId ? `
    border-bottom: 3px solid #003CFF;
    color: #003CFF;
  ` : null};

  div {
    margin-left: 8px; 
  }
`

type TabProps = {
  tabId: number;
  activeTab?: number;
  label?: string;
  onClick?: any;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Tab = (props: TabProps) => {
  return (
    <TabItem {...props} onClick={() => props.onClick(props.tabId)}>
      {props.leftIcon}
      {props.label}
      {props.rightIcon}
    </TabItem>
  )
}

export default Tab
