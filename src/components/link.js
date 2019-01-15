import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const NewLink = ({ as, children, className, to }) => {
  return (
    <StyledLink as={as} to={to} className={className}>
      {children}
    </StyledLink>
  )
}

export default NewLink
