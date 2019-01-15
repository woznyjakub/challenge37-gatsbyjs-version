import React from 'react'
import styled from 'styled-components'

const StyledList = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.media('landscape')} {
    grid-template-columns: repeat(4, 1fr);
    > * {
      grid-column-end: span 2;
    }
  }
  ${({ theme }) => theme.media('desktop-large')} {
    grid-template-columns: repeat(6, 1fr);
  }
`
const PrimaryList = ({ children, className }) => (
  <StyledList className={className}>{children}</StyledList>
)

export default PrimaryList
