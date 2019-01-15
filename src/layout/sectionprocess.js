import React, { Component } from 'react'
import styled from 'styled-components'

import Heading from '../components/heading'
import Para from '../components/paragraph'
import Button from '../components/primarybutton'
import Rectangle from '../components/rectangle'
import Link from '../components/link'

import Fade from 'react-reveal/Fade'

import data from '../data/process'

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`
const StyledHeading = styled(Heading)`
  ${({ theme }) => theme.media('desktop-large')} {
    text-align: left;
  }
`
const StyledPara = styled(Para)`
  ${({ theme }) => theme.media('desktop-large')} {
    text-align: left;
    max-width: 450px;
    padding: 3rem 0 3rem 1rem;
  }
`
const StyledImagesWrapper = styled.div`
  --skew: -20deg;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${({ theme }) => theme.media('desktop-large')} {
    position: absolute;
    left: 35%;
    top: 50%;
    transform: translateY(-50%);
    width: 75%;
    z-index: 2;
    transition: left 0.3s;
  }
  ${({ theme }) => theme.media('super-large')} {
    --skew: -30deg;
    left: 40%;
    width: 70%;
    max-width: 1440px;
  }
`
const StyledSkewedItem = styled.div`
  transform: skew(var(--skew));
  flex-basis: 90%;
  margin: 0.5rem;
  overflow: hidden;
  ${({ theme }) => theme.media('landscape')} {
    :nth-child(1),
    :nth-child(2) {
      flex-basis: 45%;
    }
  }
  ${({ theme }) => theme.media('tablet')} {
    :nth-child(1),
    :nth-child(2) {
      flex-basis: 29%;
    }
    flex-basis: 29%;
  }
`
const StyledSkewedInverselyItem = styled.div`
  position: relative;
  transform: skew(calc(var(--skew) * -1));
  height: 200px;
  background: url(${({ bgImage }) => bgImage}) 50% 50% / cover;
  margin-left: -2.5rem;
  width: 125%;
  cursor: pointer;
  ${({ theme }) => theme.media('landscape')} {
    width: 135%;
  }
  ${({ theme }) => theme.media('super-large')} {
    height: 300px;
    margin-left: -5.5rem;
    width: 150%;
  }
`
const StyledNumber = styled.span`
  position: absolute;
  top: ${({ active }) => (active ? '-5rem' : '0')};
  left: 6rem;
  ${({ theme }) => theme.font('lato', '700')}
  transition: .3s;

  color: ${({ theme }) => theme.colors.white};
  font-size: 3em;
  line-height: 1.25em;
  ${({ theme }) => theme.media('super-large')} {
    left: 12rem;
    font-size: 3.5em;
  }
`
const StyledSubheading = styled.h3`
  position: absolute;
  left: 50%;
  bottom: ${({ active }) => (active ? '-5rem' : '0')};
  transform: translateX(-75%);
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;
  line-height: 1.5em;
  text-transform: uppercase;
  font-size: 2em;
  transition: 0.3s;
  ${({ theme }) => theme.font('lato', '700')}
  ${({ theme }) => theme.media('super-large')} {
    transform: translateX(-150%);
  }
`
const StyledHiddenText = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: ${({ active }) => (active ? '1' : '0')};
  ${({ active }) => (active ? null : 'cursor: default;')}
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.font('open sans')}
  transition: .3s;
  font-size: 14px;
  margin: 1rem 3rem 1rem 4rem;
  ${({ theme }) => theme.media('landscape')} {
    margin-right: 25%;
  }
  ${({ theme }) => theme.media('tablet')} {
    margin-right: 3rem;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    margin-right: 6rem;
  }
  ${({ theme }) => theme.media('super-large')} {
    margin: 1rem 8rem 1rem 9rem;
    font-size: inherit;
  }
`
class SkewedItem extends Component {
  state = {
    isElementActive: false,
    hoverEffectsPermitted:
      typeof window !== 'undefined' ? window.innerWidth >= 900 : true,
  }

  setElementActive = operationType => {
    this.setState(prevState => {
      let newValue
      if (operationType === 'toggle') newValue = !prevState.isElementActive
      else if (operationType) newValue = true
      else if (!operationType) newValue = false

      const wrapper = document.querySelector('.process-images-wrapper')
      if (window.innerWidth >= 1200 && this.props.number === 3 && newValue) {
        wrapper.style.left = '30%'
        wrapper.style.transitionDelay = '0s'
      } else if (
        window.innerWidth >= 1200 &&
        this.props.number === 3 &&
        !newValue
      ) {
        wrapper.style.transitionDelay = '0.5s'
        if (window.innerWidth >= 1650) wrapper.style.left = '40%'
        else wrapper.style.left = '35%'
      }
      return {
        isElementActive: newValue,
      }
    })
  }

  componentDidMount = () => {
    window.addEventListener('resize', () => {
      this.setState(() => ({
        hoverEffectsPermitted:
          typeof window !== 'undefined' ? window.innerWidth >= 900 : true,
      }))
    })
  }

  render() {
    const { bgImage, number, subheading, text } = this.props
    const { isElementActive, hoverEffectsPermitted } = this.state
    return (
      <StyledSkewedInverselyItem
        bgImage={bgImage}
        onMouseEnter={() =>
          hoverEffectsPermitted ? this.setElementActive(true) : null
        }
        onMouseLeave={() =>
          hoverEffectsPermitted ? this.setElementActive(false) : null
        }
        onClick={() =>
          hoverEffectsPermitted ? null : this.setElementActive('toggle')
        }
      >
        <StyledNumber active={isElementActive}>{`${number}.`}</StyledNumber>
        <StyledSubheading active={isElementActive}>
          {subheading}
        </StyledSubheading>
        <StyledHiddenText active={isElementActive}>{text}</StyledHiddenText>
      </StyledSkewedInverselyItem>
    )
  }
}
const StyledButton = styled(Button)`
  margin: 1rem auto 0;
  ${({ theme }) => theme.media('desktop-large')} {
    margin-left: 0;
  }
`
const StyledRectangle = styled(Rectangle)`
  ${({ theme }) => theme.media('desktop-large')} {
    top: 50%;
    --size: 40vw;
    z-index: 1;
  }
`
const SectionProcess = ({ id }) => {
  return (
    <StyledSection id={id} className="padding-responsive--y">
      <div className="container">
        <StyledHeading>How we works</StyledHeading>
        <StyledPara>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eum
          inventore magni dicta cupiditate adipisci ipsa cumque minus corrupti
          ad fuga quae non officia quos unde sapiente doloribus libero dolor.
        </StyledPara>
        <StyledImagesWrapper className="process-images-wrapper">
          {data.map(({ image, subheading, text }, i) => (
            <StyledSkewedItem key={i}>
              <SkewedItem
                bgImage={image}
                number={i + 1}
                subheading={subheading}
                text={text}
              />
            </StyledSkewedItem>
          ))}
        </StyledImagesWrapper>
        <Fade>
          <Link to="/subpage">
            <StyledButton
              bgColor={({ theme }) => theme.colors.red}
              fontColor={({ theme }) => theme.colors.white}
              hoverBgColor={({ theme }) => theme.colors.purple}
              hoverFontColor={({ theme }) => theme.colors.white}
            >
              Read more
            </StyledButton>
          </Link>
        </Fade>
      </div>
      <StyledRectangle
        size="5rem"
        left="100%"
        top="0"
        bgColor={({ theme }) => theme.colors.red}
        growBlockade="1086"
      />
    </StyledSection>
  )
}

export default SectionProcess
