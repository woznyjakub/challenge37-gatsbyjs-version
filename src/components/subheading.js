import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade'

const StyledSubheading = styled.h3`
  ${({ theme }) => theme.font('open sans', '800')}
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.25em;
  ${({ theme }) => theme.media('tablet')} {
    font-size: 1.5em;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    font-size: 1.75em;
  }
`
const Subheading = ({ children, className }) => (
  <Fade>
    <StyledSubheading className={className}>{children}</StyledSubheading>
  </Fade>
)

export default Subheading
