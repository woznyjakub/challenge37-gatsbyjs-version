import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: block;
  padding: 0 2rem;
  font-size: 16px;
  line-height: 3em;
  border-radius: 1.5em;
  text-transform: uppercase;
  border-style: none;
  cursor: pointer;
  ${({ theme }) => theme.font('heebo')}
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ bgColor }) => bgColor};
  position: relative;
  overflow: hidden;
  transition: color .5s;
  z-index: 1;
  text-decoration: none;

  :focus {
    outline: none;
  }
  ${({ theme }) => theme.media('desktop-small')} {
      ::before {
        content:'';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: ${({ hoverBgColor }) => hoverBgColor};
        z-index: -1;

        transform: scaleX(0);
        transform-origin: right;
        transition: transform .5s ${({ theme }) =>
          theme.timingFunctions.scaleX}, background-color 0s .3s;
      }
    :hover {
      color: ${({ hoverFontColor }) => hoverFontColor};
      background-color: transparent;
      /* The transparent background is due to background-color pixels visible
       * at the edge of rounded borders, when the button is filled with blue.
       * You can see it on button in main header. */
      transition: background-color 1.5s .3s; 
      ::before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`

const PrimaryButton = ({
  children,
  className,
  bgColor,
  fontColor,
  hoverBgColor,
  hoverFontColor,
}) => {
  return (
    <StyledButton
      className={className}
      bgColor={bgColor}
      fontColor={fontColor}
      hoverBgColor={hoverBgColor}
      hoverFontColor={hoverFontColor}
    >
      {children}
    </StyledButton>
  )
}

export default PrimaryButton
