import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.span`
  display: block;
  font-size: 1.5em;
  line-height: 2em;
  color: ${({ theme }) => theme.colors.white};
  cursor: default;
  ${({ theme }) => theme.font('lato', '800')};

  ${({ theme }) => theme.media('desktop-small')} {
    font-size: 2em;
  }
`
const Logo = () => <StyledLogo>Agency</StyledLogo>

export default Logo
