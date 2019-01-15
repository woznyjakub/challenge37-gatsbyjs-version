import React, { Fragment } from 'react'
import styled from 'styled-components'

import Heading from '../components/heading'
import Para from '../components/paragraph'
import List from '../components/primarylist'
import Subheading from '../components/subheading'

import BgMobile from '../images/sitting-people-mobile.jpg'
import BgDesktop from '../images/sitting-people.jpg'

import contactData from '../data/contact'
import iconsData from '../data/socialmediaicons'
import iconAuthorsData, { licence, source } from '../data/credits'

import Fade from 'react-reveal/Fade'

const StyledFooter = styled.footer`
  background: 50% 50% / cover;
  @media (max-width: 1199px) {
    background-image: url(${BgMobile});
  }
  ${({ theme }) => theme.media('desktop-large')} {
    background-image: url(${BgDesktop});
  }
`
const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.lightgrey};
`
const StyledList = styled(List)`
  padding-top: 1rem;
  ${({ theme }) => theme.media('landscape')} {
    grid-template-columns: repeat(6, 1fr);
  }
`
const StyledListItem = styled.div`
  display: flex;
  padding-left: 1.5rem;
  ${({ theme }) => theme.media('landscape')} {
    justify-content: center;
    padding-left: 0;
  }
`
const StyledIcon = styled.img`
  --size: 3rem;
  width: var(--size);
  height: var(--size);
  margin: auto 0;
  ${({ theme }) => theme.media('desktop-large')} {
    --size: 4rem;
  }
`
const StyledTextWrapper = styled.div`
  padding-left: 1.25rem;
`
const StyledSubheading = styled(Subheading)`
  color: ${({ theme }) => theme.colors.white};
`
const StyledContact = styled.span`
  display: block;
  ${({ theme }) => theme.font('open sans')};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.media('landscape')} {
    font-size: 14px;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    font-size: inherit;
  }
`
const StyledSocialMediaIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`
const StyledSocialMediaIcon = styled.img`
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  margin: 0.5rem;
  cursor: pointer;
  ${({ theme }) => theme.media('landscape')} {
    margin: 1rem;
  }
`
const StyledCreditsWrapper = styled.div`
  padding: 1rem 0.5rem;
`
const StyledPara = styled(Para)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;
  padding: 0;
  text-align: center;
  line-height: 1.5em;
  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
  }
`
const Footer = ({ id }) => {
  return (
    <StyledFooter id={id} className="padding-responsive--top">
      <div className="container">
        <StyledHeading>Get in touch</StyledHeading>
        <Fade>
          <StyledList>
            {contactData.map(({ icon, iconAltText, title, contacts }, i) => (
              <StyledListItem key={i}>
                <StyledIcon src={icon} alt={iconAltText} />
                <StyledTextWrapper>
                  <StyledSubheading>{title}</StyledSubheading>
                  {contacts.map((contact, i) => (
                    <StyledContact key={i}>{contact}</StyledContact>
                  ))}
                </StyledTextWrapper>
              </StyledListItem>
            ))}
          </StyledList>
        </Fade>
        <StyledSocialMediaIconsWrapper className="padding-responsive--top">
          {iconsData.map(({ icon, iconAltText, href }, i) => (
            <a href={href} target="_blank" rel="noopener noreferrer" key={i}>
              <StyledSocialMediaIcon src={icon} alt={iconAltText} />
            </a>
          ))}
        </StyledSocialMediaIconsWrapper>
        <StyledCreditsWrapper>
          <StyledPara>
            Copyright &copy; 2017. PSDFreebies.com | Best PSD Template for free.
            | Coded by Jakub Woźny as exercises.
          </StyledPara>
          <StyledPara>
            Icons made by{' '}
            {iconAuthorsData.map(({ name, href }, i) => (
              <Fragment key={i}>
                <a
                  href={href}
                  title={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
                <>{i < iconAuthorsData.length - 1 ? `, ` : ` `}</>
              </Fragment>
            ))}
            from{' '}
            <a href={source.href} target="_blank" rel="noopener noreferrer">
              {source.name}
            </a>{' '}
            licenced by{' '}
            <a
              href={licence.href}
              title={licence.fullname}
              target="_blank"
              rel="noopener noreferrer"
            >
              {licence.shortname}
            </a>
            .
          </StyledPara>
        </StyledCreditsWrapper>
      </div>
    </StyledFooter>
  )
}

export default Footer
