import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin: 0;
    font-weight: 600;
    color: ${({ color }) =>
    color === 'green' && `var(--kuma-colors-${color}-1100)` ||
    color === 'blue' && `var(--kuma-colors-${color}-600)` ||
    color === 'gray' && `var(--kuma-colors-${color}-600)` ||
    color === 'red' && `var(--kuma-colors-${color}-900)` ||
    color === 'orange' && `var(--kuma-colors-${color}-900)` ||
    `var(--kuma-colors-${color}-300)`
  };
    letter-spacing: 0.03em;
    font-size: 12px;
  }
`

const Circle = styled.div<{ color: string }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ color }) => `var(--kuma-colors-${color}-600)`};
  margin-right: 5px;
`

type StatusProps = {
  children: React.ReactNode;
  color: string;
}

const Status = (props: StatusProps) => {
  return (
    <Wrapper color={props.color}>
      <Circle color={props.color} />
      <p>{props.children}</p>
    </Wrapper>
  )
}

export default Status
