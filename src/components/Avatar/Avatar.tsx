import React from 'react'
import styled from 'styled-components';


const AvatarContainer = styled.div<AvatarProps>`
  display: flex;
  align-items: flex-end;
  position: relative;

  div {
    ${props =>
    props.size === 'medium' && `
        width: 12px;
        height: 12px;
        border: 2px solid white;
      ` ||
    props.size === 'small' && `
        width: 8px;
        height: 8px;
        border: 1px solid var(--kuma-colors-blue-800);
      `
  };
    background-color: ${({ active }) => active ? 'var(--kuma-colors-green-1100)' : 'var(--kuma-colors-red-1100)'};
    border-radius: 99px;
    position: absolute;
    right: 0
  }
`

const Image = styled.img<AvatarProps>`

  ${props =>
    props.size === 'medium' && `
      width: 48px;
      height: 48px;
      border-radius: 18px;
    ` ||
    props.size === 'small' && `
      width: 32px;
      height: 32px;
      border-radius: 12px;
    `
  }
  object-fit: cover;
`

type AvatarProps = {
  src?: string;
  active?: boolean;
  size?: string;
}

const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer {...props}>
      <div></div>
      <Image {...props} />
    </AvatarContainer>
  )
}

export default Avatar
