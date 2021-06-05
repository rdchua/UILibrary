import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 24px;
  margin-inline-start: 96px;

  @media (max-width: 768px) {
    padding: 0;
    margin-inline-start: 0;
  }
`
type ContentProps = {
  children?: React.ReactNode
}


const Content = ({ children }: ContentProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Content
