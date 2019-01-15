import React from 'react'
import styled from 'styled-components'

const StyledHamburger = styled.button`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  cursor: pointer;
  background-color: transparent;
  outline: none;
  border-style: none;

  ${({ theme }) => theme.media('desktop-small')} {
    display: none;
  }
`

const StyledLine = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ height }) => `${height / 2}px`};
  transition: 0.3s ease-in-out;

  :nth-child(1) {
    top: 0;
  }
  :nth-child(2) {
    top: calc(50% - 2px);
  }
  :nth-child(3) {
    top: calc(100% - 4px);
  }

  ${({ hamburgerActive }) => {
    if (hamburgerActive) {
      return `
        :nth-child(1) {
          top: calc(50% - 2px);
          transform: rotate(-220deg);
        }
        :nth-child(2) {
          opacity: 0;
        }
        :nth-child(3) {
          top: calc(50% - 2px);
          transform: rotate(220deg);
        }
      `
    }
  }}
`
const Hamburger = ({
  onClick,
  width,
  height,
  linesHeight,
  hamburgerActive,
}) => {
  const hamburgerlines = []
  for (let i = 0; i < 3; i++) {
    hamburgerlines.push(
      <StyledLine
        key={i}
        height={linesHeight}
        hamburgerActive={hamburgerActive}
      />
    )
  }
  return (
    <StyledHamburger onClick={onClick} width={width} height={height}>
      {hamburgerlines}
    </StyledHamburger>
  )
}

export default Hamburger
