import React from 'react'
import styled from 'styled-components'

import Heading from '../components/heading'
import Rectangle from '../components/rectangle'
import Slider from 'react-slick'
import sliderData from '../data/teamcarousel'

import Fade from 'react-reveal/Fade'

const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.superlightgrey};
  ${({ theme }) => theme.media('desktop-large')} {
    overflow: hidden;
  }
  ${({ theme }) => theme.media('super-large')} {
    overflow: visible;
  }
`
const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`
const StyledSliderItem = styled.div`
  --subscription-top: 110%;
  --size: 225px;
  width: var(--size);
  height: var(--size);
  position: relative;
  margin: 5rem 0 10rem;

  ${({ theme }) => theme.media('landscape')} {
    --subscription-top: 90%;
    margin: 4rem 0 8rem;
    font-size: 14px;
  }
  ${({ theme }) => theme.media('tablet')} {
    margin: 6rem 0 10rem;
    font-size: inherit;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    --subscription-top: 110%;
    margin: 10rem 0 12rem;
  }
`
const StyledRotatedWrapper = styled.div`
  /* className="rotated-square */
  position: absolute;
  left: 50%;
  top: 50%;

  border: 0.75rem solid ${({ theme }) => theme.colors.white};
  --rotation: 45deg;

  transform: translate(-50%, -50%) rotate(var(--rotation)) scale(0.8);
  opacity: 0.8;
  transition: transform 0.3s;
  box-shadow: 0 0 2.5rem ${({ theme }) => theme.colors.lightgrey};
  cursor: grab;

  ${({ theme }) => theme.media('landscape')} {
    --size: 200px;
  }
  ${({ theme }) => theme.media('tablet')} {
    --size: 230px;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    border-width: 1rem;
    --size: 300px;
    box-shadow: 0 0 1.5rem ${({ theme }) => theme.colors.lightgrey};
  }
  ${({ theme }) => theme.media('desktop-large')} {
    --size: 340px;
  }
`

const StyledImageWrapper = styled.div`
  --position-correction: -3rem;

  background: url(${({ bgImage }) => bgImage}) 50% 50% / cover;
  ${({ theme }) => theme.media('desktop-small')} {
    --position-correction: -4rem;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    --position-correction: -4.4rem;
  }
`
const StyledDescriptionSkewedWrapper = styled.span`
  --skew: 40deg;
  padding: ${({ first }) => (first ? `0 2rem` : `0 1.5rem`)};
  position: absolute;
  left: ${({ first }) => (first ? `50%` : `calc(50% + 1rem)`)};
  top: ${({ first }) =>
    first ? `var(--subscription-top)` : `calc(var(--subscription-top) + 2rem)`};
  transform: translateX(-50%) skew(var(--skew));
  transition: transform 0.3s, opacity 0.2s 0.3s ease-out, top 0.2s;
  opacity: ${({ first }) => (first ? 1 : 0)};

  font-size: ${({ first }) => (first ? `1em` : `0.75em`)};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  z-index: 3;
`
const StyledDescription = styled.span`
  display: block;
  line-height: 2em;
  transform: skew(calc(var(--skew) * -1));
  white-space: nowrap;
  ${({ first, theme }) =>
    first
      ? theme.font('open sans', '700')
      : theme.font('open sans', '700', 'italic')};
`
const SectionTeam = ({ id }) => {
  const sliderSettings = {
    arrows: true,
    infinite: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <StyledSection id={id} className="padding-responsive--y">
      <Rectangle
        size="15vw"
        left="0"
        top="0"
        bgColor={({ theme }) => theme.colors.superdarkgrey}
      />
      <StyledContainer>
        <Heading>Our creative team</Heading>
        <Fade>
          <Slider {...sliderSettings}>
            {sliderData.map(({ image, name, position }, i) => (
              <StyledSliderItem className="slider-item" key={i}>
                <StyledRotatedWrapper className="rotated-square">
                  <StyledImageWrapper
                    bgImage={image}
                    className="rotated-image-wrapper"
                    boxShadowColor={({ theme }) => theme.colors.lightgrey}
                  />
                </StyledRotatedWrapper>

                <StyledDescriptionSkewedWrapper
                  first
                  bgColor={({ theme }) => theme.colors.darkgrey}
                >
                  <StyledDescription>{name}</StyledDescription>
                </StyledDescriptionSkewedWrapper>

                <StyledDescriptionSkewedWrapper
                  bgColor={({ theme }) => theme.colors.red}
                  className="slider-profession-subscription"
                >
                  <StyledDescription>{position}</StyledDescription>
                </StyledDescriptionSkewedWrapper>
              </StyledSliderItem>
            ))}
          </Slider>
        </Fade>
      </StyledContainer>
    </StyledSection>
  )
}

export default SectionTeam
