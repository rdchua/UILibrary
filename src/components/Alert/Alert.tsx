import React from 'react';
import { FiShield } from 'react-icons/fi';
import styled from 'styled-components';

const Wrapper = styled.div<AlertProps>`
  border-radius: 16px;
  background: ${({ type, color }) => type === 'fill' ? `var(--kuma-colors-${color}-50)` : `white`};
  filter: ${({ type }) => type === 'fill' ? null : `drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.08)) drop-shadow(0px 4px 48px rgba(0, 0, 0, 0.08));`}
`

const Container = styled.div<AlertProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 16px 16px 16px 0;

  svg {
    color: ${({ color }) => color ? `var(--kuma-colors-${color}-600)` : `var(--kuma-colors-blue-600)`};
    font-size: 18px;
    margin-right: 16px;
  }
`

const Border = styled.div<{ color?: string }>`
  position: static;
  width: 4px;
  height: 36px;
  left: 0px;
  top: 16px;

  /* Blue/7 */

  background: ${({ color }) => color ? `var(--kuma-colors-${color}-600)` : `var(--kuma-colors-blue-600)`};
  border-radius: 0px 8px 8px 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 16px;
  margin-left: 0;
`

const TextContainer = styled.div<AlertProps>`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  p:nth-child(1) {
    color: ${({ color }) => color ? `var(--kuma-colors-${color}-600)` : `var(--kuma-colors-blue-600)`};
    font-size: 14px;
    font-weight: bold;
  }

  p:nth-child(2) {
    color: var(--kuma-colors-gray-700);
    font-size: 12px;
    font-weight: 600;
  }

`

type AlertProps = {
  color?: string;
  type?: string;
}

const Alert = (props: AlertProps) => {
  return (
    <Wrapper {...props}>
      <Container color={props.color}>
        <Border color={props.color} />
        <FiShield />

        <TextContainer color={props.color}>
          <p>Did you know?</p>
          <p>You can now switch screens by pressing this.</p>
        </TextContainer>
      </Container>
    </Wrapper>
  )
}

export default Alert
