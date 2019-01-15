import React from 'react'
import styled from 'styled-components'

const StyledRectangle = styled.span`
  position: absolute;
  ${({ left }) => (left ? `left: ${left};` : null)}
  ${({ right }) => (right ? `right: ${right};` : null)}
  ${({ top }) => (top ? `top: ${top};` : null)}
  ${({ bottom }) => (bottom ? `bottom: ${bottom};` : null)}

  transform: translate(-50%,-50%) rotate(45deg);
  background-color: ${({ bgColor }) => bgColor};
  ${({ size }) =>
    size
      ? `--size: ${size};
    width: var(--size);
    height: var(--size);`
      : null}
  
  ${({ theme }) => theme.media('super-large')} {
    --growBlockade: ${({ growBlockade }) => growBlockade / 1.41}px;
    max-width: var(--growBlockade);
    max-height: var(--growBlockade);
  }
`

const Rectangle = ({
  left,
  right,
  top,
  bottom,
  bgColor,
  size,
  className,
  growBlockade,
}) => (
  <StyledRectangle
    left={left}
    right={right}
    top={top}
    bottom={bottom}
    bgColor={bgColor}
    size={size}
    className={className}
    growBlockade={growBlockade}
  />
)

export default Rectangle
