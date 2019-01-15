import React from 'react'
import styled from 'styled-components'

import Heading from '../components/heading'
import Para from '../components/paragraph'
import Button from '../components/primarybutton'
import MacbookImage from '../images/macbook.png'
import Rectangle from '../components/rectangle'
import Link from '../components/link'

import Fade from 'react-reveal/Fade'

const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ theme }) => theme.media('landscape')} {
    flex-direction: row;
    > * {
      flex-basis: 50%;
    }
  }
`
const StyledArticle = styled.article`
  ${({ theme }) => theme.media('desktop-large')} {
    padding: 0 2rem;
  }
`
const StyledHeading = styled(Heading)`
  text-align: center;
  ${({ theme }) => theme.media('desktop-large')} {
    text-align: left;
  }
`
const StyledPara = styled(Para)`
  ${({ theme }) => theme.media('desktop-large')} {
    padding: 1rem;
    max-width: 450px;
  }
`
const StyledButton = styled(Button)`
  margin: 0 auto;
  z-index: 1;
  position: relative;
  ${({ theme }) => theme.media('desktop-large')} {
    margin: 0;
  }
`
const StyledImageWrapper = styled.div`
  display: grid;
  place-items: center;
`
const StyledMacbookImage = styled.img`
  width: 100%;
  max-width: 680px;
  display: block;
  margin-top: 1rem;
  z-index: 1;
`
const StyledRectangle = styled(Rectangle)`
  ${({ theme }) => theme.media('landscape')} {
    --size: 75vw;
    top: 0;
  }
  ${({ theme }) => theme.media('tablet')} {
    --size: 80vw;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    --size: 65vw;
    --max-size: 970px;
    max-width: var(--max-size);
    max-height: var(--max-size);
    left: calc(50% + 400px);
  }
`

const SectionAbout = ({ id }) => (
  <StyledSection id={id} className="padding-responsive--y">
    <StyledWrapper className="container">
      <StyledArticle>
        <StyledHeading>Who we are</StyledHeading>
        <StyledPara>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam esse
          est voluptates et rem, fugiat necessitatibus! Minima natus ab
          quibusdam voluptate asperiores, aliquid inventore numquam cupiditate
          excepturi fugit? Praesentium, rem.
        </StyledPara>
        <Fade>
          <Link to="/subpage">
            <StyledButton
              fontColor={({ theme }) => theme.colors.white}
              bgColor={({ theme }) => theme.colors.red}
              hoverBgColor={({ theme }) => theme.colors.purple}
              hoverFontColor={({ theme }) => theme.colors.white}
            >
              Read more
            </StyledButton>
          </Link>
        </Fade>
      </StyledArticle>
      <StyledImageWrapper>
        <StyledMacbookImage src={MacbookImage} alt="macbook" />
      </StyledImageWrapper>
      <StyledRectangle
        bgColor={({ theme }) => theme.colors.superdarkgrey}
        size="120vw"
        left="100%"
        top="100%"
        growBlockade="1370"
      />
    </StyledWrapper>
  </StyledSection>
)

export default SectionAbout
