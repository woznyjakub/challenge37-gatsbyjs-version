import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade'

const StyledPara = styled.p`
  padding: 0 0.5rem;
  ${({ theme }) => theme.font('open sans')}
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  line-height: 2em;
  font-size: 14px;

  ${({ theme }) => theme.media('landscape')} {
    text-align: left;
  }
  ${({ theme }) => theme.media('tablet')} {
    font-size: 16px;
    padding: 0 1rem;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    font-size: 17px;
  }
  
  
`
const Paragraph = ({ children, className }) => {
  return (
    <Fade>
      <StyledPara className={className}>{children}</StyledPara>
    </Fade>
  )
}

export default Paragraph
