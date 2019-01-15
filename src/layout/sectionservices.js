import React from 'react'
import styled from 'styled-components'

import Heading from '../components/heading'
import List from '../components/primarylist'
import Subheading from '../components/subheading'
import Para from '../components/paragraph'
import Rectangle from '../components/rectangle'

import data from '../data/services'

const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.superlightgrey};
`
const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledIconWrapper = styled.div`
  --diagonal: 4.5rem;
  width: var(--diagonal);
  height: var(--diagonal);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};
  display: grid;
  place-items: center;
`
const StyledIcon = styled.img`
  max-width: 55%;
  margin-bottom: 0;
`
const StyledArticle = styled.article`
  flex-basis: calc(100% - 5.5rem);
`
const StyledSubheading = styled(Subheading)`
  margin: 1.5rem 0;
  ${({ theme }) => theme.media('desktop-large')} {
    margin: 1rem 0;
  }
`
const StyledPara = styled(Para)`
  padding: 0.5rem 0;
  margin: 2rem 0 0 -5rem;
  ${({ theme }) => theme.media('desktop-large')} {
    margin: 0;
  }
`
const StyledRectangle = styled(Rectangle)`
  display: none;
  ${({ theme }) => theme.media('super-large')} {
    display: block;
    --size: 12rem;
    left: 0;
    top: 50%;
    width: var(--size);
    height: var(--size);
  }
`
const ListItem = ({ children, title, icon, iconAltText }) => (
  <StyledListItem>
    <StyledIconWrapper>
      <StyledIcon src={icon} alt={iconAltText} />
    </StyledIconWrapper>
    <StyledArticle>
      <StyledSubheading>{title}</StyledSubheading>
      <StyledPara>{children}</StyledPara>
    </StyledArticle>
  </StyledListItem>
)

const SectionServices = ({ id }) => (
  <StyledSection id={id} className="padding-responsive--y">
    <div className="container">
      <Heading>What we do</Heading>
      <List className="padding-responsive--top">
        {data.map(({ title, icon, iconAltText, content }, i) => (
          <ListItem title={title} icon={icon} iconAltText={iconAltText} key={i}>
            {content}
          </ListItem>
        ))}
      </List>
    </div>
    <StyledRectangle
      bgColor={({ theme }) => theme.colors.red}
      growBlockade="270"
    />
  </StyledSection>
)

export default SectionServices
