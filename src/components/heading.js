import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade'

const StyledHeading = styled.h2`
  font-size: 1.75em;
  ${({ theme }) => theme.font('passion one')}
  text-align: center;

  ${({ theme }) => theme.media('tablet')} {
    font-size: 2.25em;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    font-size: 3em;
  }
`

const Heading = ({ children, className }) => (
  <Fade>
    <StyledHeading className={className}>{children}</StyledHeading>
  </Fade>
)

export default Heading
