import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import SEO from '../components/seo'
import { theme } from '../utils/theme'

import Nav from '../components/nav'
import MainHeader from '../layout/mainheader'
import SectionAbout from '../layout/sectionabout'
import SectionServices from '../layout/sectionservices'
import SectionProcess from '../layout/sectionprocess'
import SectionTeam from '../layout/sectionteam'
import SectionTestimonials from '../layout/sectiontestimonials'
import Footer from '../layout/footer'

import CssReset from '../components/cssreset'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import GlobalStyles from '../components/globalstyles'

const StyledMainContainer = styled.div`
  overflow-x: hidden;
  max-width: 2560px;
  margin: 0 auto;
`

const IndexPage = () => (
  <>
    <SEO
      title="Think outsude of the box"
      keywords={[`gatsby`, `multipage`, `react`]}
    />
    <ThemeProvider theme={theme}>
      <StyledMainContainer>
        <CssReset />
        <GlobalStyles />
        <Nav
          id="main-nav"
          items={[
            {
              name: 'Home',
              scrollTo: 'main-header',
            },
            {
              name: 'About us',
              scrollTo: 'section-about',
            },
            {
              name: 'Services',
              scrollTo: 'section-services',
            },
            {
              name: 'Process',
              scrollTo: 'section-process',
            },
            {
              name: 'Team',
              scrollTo: 'section-team',
            },
            {
              name: 'Clients',
              scrollTo: 'section-testimonials',
            },
            {
              name: 'Contact',
              scrollTo: 'footer',
            },
          ]}
        />
        <MainHeader id="main-header" />
        <SectionAbout id="section-about" />
        <SectionServices id="section-services" />
        <SectionProcess id="section-process" />
        <SectionTeam id="section-team" />
        <SectionTestimonials id="section-testimonials" />
        <Footer id="footer" />
      </StyledMainContainer>
    </ThemeProvider>
  </>
)

export default IndexPage
