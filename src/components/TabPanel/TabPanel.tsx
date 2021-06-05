import React from 'react'

type TabPanelProps = {
  children?: React.ReactNode;
  label?: string;
  activeTab?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const TabPanel = ({ children }: TabPanelProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default TabPanel
