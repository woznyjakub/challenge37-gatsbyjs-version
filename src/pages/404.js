import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import SEO from '../components/seo'
import { theme } from '../utils/theme'
import Link from '../components/link'

import Heading from '../components/heading'
import Para from '../components/paragraph'
import Button from '../components/primarybutton'

import CssReset from '../components/cssreset'
import GlobalStyles from '../components/globalstyles'

const StyledContainer = styled.div`
  overflow: hidden;
`
const StyledSubheader = styled.header`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkgrey};
  display: grid;
  place-items: center;
`
const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
`
const StyledPara = styled(Para)`
  color: ${({ theme }) => theme.colors.white};
  max-width: 1024px;
  margin: 0 auto;
`
const StyledButton = styled(Button)`
  margin: 1rem auto;
`
const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <CssReset />
          <GlobalStyles />
          <StyledSubheader>
            <div>
              <StyledHeading>NOT FOUND</StyledHeading>
              <StyledPara>
                You just hit a route that doesn&#39;t exist... the sadness.
              </StyledPara>
              <Link to="/">
                <StyledButton
                  bgColor={({ theme }) => theme.colors.white}
                  fontColor={({ theme }) => theme.colors.darkgrey}
                  hoverFontColor={({ theme }) => theme.colors.white}
                  hoverBgColor={({ theme }) => theme.colors.blue}
                >
                  Go home
                </StyledButton>
              </Link>
            </div>
          </StyledSubheader>
        </StyledContainer>
      </ThemeProvider>
    </>
  )
}
export default NotFoundPage
