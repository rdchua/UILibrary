import React, { useState } from 'react'
import styled from 'styled-components';
import Tab from '../Tab/Tab';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TabsContainer = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  /* height: 48px; */
  background: white;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    li {
      display: flex;
      justify-content: center;
      flex: 1;
    }
  }
`

type TabsProps = {
  children?: React.ReactNode[];
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (tab: number) => {
    setActiveTab(tab);
  }

  return (
    <Wrapper>
      <TabsContainer>
        {children?.map((tab: any, index: number) => {
          const { label, rightIcon, leftIcon } = tab.props;

          return (
            <Tab
              key={index}
              tabId={index}
              activeTab={activeTab}
              label={label}
              onClick={onTabClick}
              leftIcon={leftIcon}
              rightIcon={rightIcon} />
          )
        })}
      </TabsContainer>
      {children ? children[0] : null}
    </Wrapper>
  )
}

export default Tabs
