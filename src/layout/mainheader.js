import React from 'react'
import styled from 'styled-components'

import RedCityMobileImage from '../images/city-red-700x700.jpg'
import RedCityDesktopImage from '../images/city-red-1664x912.jpg'
import GreyCityMobileImage from '../images/city-grey-700x700.jpg'
import GreyCityDesktopImage from '../images/city-grey-1664x912.jpg'
import SkaterImage from '../images/skater.png'

import PrimaryButton from '../components/primarybutton'
import Link from '../components/link'

const StyledHeader = styled.header`
  min-height: 100vh;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: 50% 50% / cover;
    z-index: -1;

    @media (max-width: 899px) {
      background-image: url(${RedCityMobileImage});
    }
    ${({ theme }) => theme.media('desktop-small')} {
      background-image: url(${RedCityDesktopImage});
    }
  }
`
const StyledSloganWrapper = styled.div`
  height: 100%;
  background: 50% 50% / cover;
  -webkit-background-clip: text;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 899px) {
    background-image: url(${GreyCityMobileImage});
  }
  ${({ theme }) => theme.media('desktop-small')} {
    background-image: url(${GreyCityDesktopImage});
  }
`
// This could look odd, but it's necessary to keep good-looking shade on text (it doesn't work with one h1 element).
const StyledSlogan = styled.h1`
  --top-gap: 10vh;
  color: ${({ theme }) => theme.colors.transparent};
  ${({ theme }) => theme.font.heebo}
  text-transform: uppercase;
  text-align: center;
  font-size: 4em;
  line-height: 0.75em;
  letter-spacing: -4px;
  max-width: 320px;
  ${({ theme }) => theme.font('heebo')}
  span {
    display: block;
    line-height: 0.67em;
    font-size: 0.67em;
  }
  /* In portrait I use transformX -50% and left 50% to center shade item and margin auto for second one
   (That's why i assigned --left--gap to left and margin-left much times). */
  ${({ shade }) => {
    if (shade) {
      return `
        position: absolute;
        top: var(--top-gap);
        left: 50%;
        transform: translateX(-50%);
        text-shadow: 0 0 150px #400, 0 0 100px #000;
        z-index: -1;
      `
    } else {
      return `
        margin: var(--top-gap) auto 0;
      `
    }
  }}

  ${({ theme }) => theme.media('landscape')} {
    ${({ shade }) => {
      const stylesForBoth = `
        --left-gap: 2%;
        --top-gap: 20vh;
        font-size: 5em;
        max-width: 380px;
      `

      if (shade) {
        return `
        left: var(--left-gap);
        transform: none;
        ${stylesForBoth}
      `
      } else {
        return `
        margin-left: var(--left-gap);
        ${stylesForBoth}
      `
      }
    }}
  }
  ${({ theme }) => theme.media('tablet')} {
    ${({ shade }) => {
      const stylesForBoth = `
        --top-gap: 10vh;
        font-size: 7.5em;
        max-width: 600px;
      `

      if (shade) {
        return `
        top: var(--top-gap);
        left: 50%;
        transform: translateX(-50%);
        ${stylesForBoth}
      `
      } else {
        return `
        margin: var(--top-gap) auto 0;
        ${stylesForBoth}
      `
      }
    }}
  }

  ${({ theme }) => theme.media('desktop-small')} {
    ${({ shade }) => {
      const stylesForBoth = `
        --left-gap: 0;
        --top-gap: calc(50vh - 200px);
        max-width: 68.5%;
        letter-spacing: -6px;
        span {
          letter-spacing: -4px;
          line-height: 0.7em;
        }
      `

      if (shade) {
        return `
        top: var(--top-gap);
        left: var(--left-gap);
        transform: none;
        ${stylesForBoth}
      `
      } else {
        return `
        margin-left: var(--left-gap);
        ${stylesForBoth}
      `
      }
    }}
  }

  ${({ theme }) => theme.media('desktop-large')} {
    ${({ shade }) => {
      const stylesForBoth = `
        --left-gap: 2%;
        font-size: 9.5em;
        letter-spacing: -8px;
      `
      if (shade) {
        return `
        top: var(--top-gap);
        transform: none;
        ${stylesForBoth}
      `
      } else {
        return `
        ${stylesForBoth}
      `
      }
    }}
  }

  ${({ theme }) => theme.media('super-large')} {
    --top-gap: calc(50vh - 250px);
    font-size: 11em;
    width: 60%;
    letter-spacing: -12px;
    line-height: 0.74em;
    max-width: 1280px;
  }
`
const StyledRestWrapper = styled.div`
  --gap: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--gap) 0 1.5rem;

  ${({ theme }) => theme.media('landscape')} ${() =>
    ` and (max-width: 767px)`} {
    --gap: 0px;
    flex-direction: row-reverse;
    padding-bottom: 0;
    align-items: flex-end;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    --gap: 0px;
  }
`
const StyledSkaterImage = styled.img`
  display: block;
  margin: 0;
  z-index: 1;
  ${({ theme }) => theme.media('landscape')} ${() =>
    ` and (max-width: 767px)`} {
    width: 70%;
    margin-bottom: -100px;
    transform: translateX(100px);
  }
  ${({ theme }) => theme.media('desktop-small')} {
    width: 70%;
    /* This margin-top makes header looking good on landscape and portait oriented screens with 1 breakpoint */
    margin: calc(45vh - 300px) 0 -10rem 50%;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    margin-right: 1%;
    margin-top: 3%;
    margin-bottom: -240px;
    max-width: 1024px;
    transform: translate(100px, -2rem);
  }
  ${({ theme }) => theme.media('super-large')} {
    margin-right: 18%;
  }
`
const StyledButton = styled(PrimaryButton)`
  margin-top: -2rem;
  z-index: 2;

  ${({ theme }) => theme.media('landscape')} ${() =>
    ` and (max-width: 767px)`} {
    position: absolute;
    left: 18%;
    bottom: 2rem;
  }
  ${({ theme }) => theme.media('tablet')} {
    margin-top: -5rem;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    position: absolute;
    left: 28%;
    top: 95vh; /* vh instead of % is important here */
  }
  ${({ theme }) => theme.media('desktop-large')} {
    left: 32.5%;
  }
  ${({ theme }) => theme.media('super-large')} {
    left: 29%;
    top: 90vh;
  }
`

const MainHeader = ({ id }) => {
  return (
    <StyledHeader id={id}>
      <StyledSloganWrapper>
        <StyledSlogan shade key="shade">
          Think outside <span>of the box</span>
        </StyledSlogan>
        <StyledSlogan key="transparentLetters">
          Think outside <span>of the box</span>
        </StyledSlogan>
      </StyledSloganWrapper>
      <StyledRestWrapper>
        <StyledSkaterImage src={SkaterImage} alt="jumping skater" />
        <Link to="/subpage">
          <StyledButton
            fontColor={({ theme }) => theme.colors.black}
            bgColor={({ theme }) => theme.colors.white}
            hoverBgColor={({ theme }) => theme.colors.darkblue}
            hoverFontColor={({ theme }) => theme.colors.white}
          >
            Read more
          </StyledButton>
        </Link>
      </StyledRestWrapper>
    </StyledHeader>
  )
}

export default MainHeader
