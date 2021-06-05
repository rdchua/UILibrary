import React from 'react'
import { FiCreditCard, FiFlag, FiHome, FiMenu, FiPieChart, FiSearch, FiSettings, FiShoppingCart, FiTag, FiToggleLeft, FiUser } from 'react-icons/fi'
import styled from 'styled-components'
import Avatar from '../Avatar/Avatar'

type SidebarProps = {
  children?: React.ReactNode
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 96px;
  position: fixed;
  left: 0;
  padding: 32px 24px 24px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.08), 0px 4px 48px rgba(0, 0, 0, 0.08);

  svg {
    font-size: 20px;
    margin-top: 31px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <Wrapper>
      <FiMenu style={{ marginBottom: 40 }} />
      <FiHome />
      <FiSearch />
      <FiPieChart />
      <FiTag />
      <FiFlag />
      <FiUser />
      <FiShoppingCart />
      <FiSettings />
      <FiCreditCard />
      <FiToggleLeft />
      <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>
        <Avatar size="medium" active={true} src="https://lh3.googleusercontent.com/ogw/ADGmqu9ntDoWp_o9rkFbfBONKAyC-9CmwHHonpcxJDGaRw=s83-c-mo" />
      </div>
    </Wrapper>
  )
}

export default Sidebar
