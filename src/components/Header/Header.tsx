import React from 'react'
import { FiMenu, FiShoppingBag } from 'react-icons/fi'
import styled from 'styled-components'
import Avatar from '../Avatar/Avatar'

const Wrapper = styled.header`
  padding: 16px;
  background: var(--kuma-colors-blue-800);
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  svg {
    width: 24px;
    height: 24px;
  }
`

const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Nunito Sans';
  letter-spacing: 0.03em;
  font-weight: bold;
  font-size: 16px;

  svg {
    margin: 0 8px;
  }
`

const Header = () => {
  return (
    <Wrapper>
      <MenuButton><FiMenu /></MenuButton>
      <PageTitle> <FiShoppingBag /> Orders </PageTitle>
      <Avatar size="small" active={true} src="https://lh3.googleusercontent.com/ogw/ADGmqu9ntDoWp_o9rkFbfBONKAyC-9CmwHHonpcxJDGaRw=s83-c-mo" />
    </Wrapper>
  )
}

export default Header
