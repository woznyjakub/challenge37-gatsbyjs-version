import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Heading from '../components/heading'
import Para from '../components/paragraph'
import Rectangle from '../components/rectangle'

import MarkImage from '../images/icons/mark.png'
import data, { smallImages } from '../data/testimonials'

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`
const StyledOverflowKeeper = styled.div`
  position: relative;
  overflow: hidden;
`
const StyledSmallRectangle = styled(Rectangle)`
  display: none;
  ${({ theme }) => theme.media('landscape')} {
    display: block;
    left: 100%;
    top: 0;
  }
`
const StyledContainer = styled.div`
  max-width: 1280px;
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media('landscape')} {
    flex-direction: row;
    justify-content: space-between;
  }
`
const StyledMainImageWrapper = styled.div`
  /* className="rotated-square */
  --size: 200px;
  --rotation: 45deg;
  transform: rotate(var(--rotation));
  border: 0.5rem solid ${({ theme }) => theme.colors.white};
  margin: 3rem auto 4rem;
  box-shadow: 0 0 2.5rem ${({ theme }) => theme.colors.black};
  z-index: 1;
  ${({ theme }) => theme.media('landscape')} {
    margin: 2rem auto;
    margin-left: calc(24vw - 150px);
  }
  ${({ theme }) => theme.media('desktop-large')} {
    --size: 350px;
    margin: 6rem 0 6rem 1rem;
    border-width: 1rem;
  }
  ${({ theme }) => theme.media('super-large')} {
    --size: 400px;
    margin: 5rem 0 5rem 1rem;
  }
`
const StyledMainImage = styled.div`
  --position-correction: -2.75rem;
  background: url(${({ bgImage }) => bgImage}) 50% 50% / cover;
  ${({ theme }) => theme.media('desktop-large')} {
    --position-correction: -4.5rem;
  }
  ${({ theme }) => theme.media('super-large')} {
    --position-correction: -5.25rem;
  }
`
const StyledTextWrapper = styled.article`
  position: relative;
  ${({ theme }) => theme.media('landscape')} {
    flex-basis: 60%;
    margin: 3rem 0 1rem;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    flex-basis: 55%;
    margin: 6rem 0 10rem;
  }
`
const StyledQuotationMark = styled.img`
  width: 3rem;
  position: absolute;
  left: 0;
  top: -2.5rem;
  ${({ theme }) => theme.media('tablet')} {
    left: -2rem;
    top: -2rem;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    left: -4.5rem;
    top: -2.5rem;
    width: 4.5rem;
  }
`
const StyledQuote = styled(Para)`
  font-style: italic;
  padding: 0 1rem;
  text-align: left;
`
const StyledQuoteAuthor = styled.span`
  display: block;
  padding: 0 1rem;
  ${({ theme }) => theme.font('open sans', '700')}
`
const StyledSmallImagesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  ${({ theme }) => theme.media('landscape')} {
    justify-content: flex-end;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    margin-top: -10rem;
  }
`
const StyledRotatedSmallImageWrapper = styled.div`
  /* className="rotated-square */
  --rotation: 45deg;
  --size: 64px;
  transform: rotate(var(--rotation));
  box-shadow: 0 0 1.5rem ${({ theme }) => theme.colors.grey};
  border: 3px solid ${({ theme }) => theme.colors.white};
  transition: border-color 0.1s;

  ${({ redBorder, theme }) =>
    redBorder ? `border-color: ${theme.colors.red} !important;` : null}

  ${({ theme }) => theme.media('landscape')} {
    --size: 80px;
    margin: 0 1.125rem;
  }
  ${({ theme }) => theme.media('tablet')} {
    --size: 100px;
    margin: 0 1.375rem;
    border-width: 0.25rem;
  }
`
const StyledSmallImage = styled.div`
  /* className="rotated-image-wrapper */
  background: url(${({ bgImage }) => bgImage}) 50% 50% / cover;
  cursor: pointer;
  --position-correction: -0.8rem;
  ${({ theme }) => theme.media('landscape')} {
    --position-correction: -1.2rem;
  }
  ${({ theme }) => theme.media('tablet')} {
    --position-correction: -1.3rem;
  }
`
const StyledBigRectangle = styled(Rectangle)`
  ${({ theme }) => theme.media('landscape')} {
    left: 0;
    top: 13rem;
  }
  ${({ theme }) => theme.media('tablet')} {
    top: 14.5rem;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    --size: 400px;
  }
  ${({ theme }) => theme.media('desktop-large')} {
    --size: 45vw;
    top: 26rem;
  }
`
class QuoteSwitcher extends Component {
  state = {
    activeElement: 0,
  }
  changeQuote = e => {
    const id = Number(e.currentTarget.dataset.id) // Number() must be here.
    this.setState(() => ({
      activeElement: id,
    }))
  }
  render() {
    return (
      <>
        {data
          .filter((datum, i) => i === this.state.activeElement)
          .map(({ name, profession, mainImage, quote }, i) => (
            <Fragment key={i}>
              <StyledWrapper>
                <StyledMainImageWrapper
                  className="rotated-square"
                  boxShadowColor={({ theme }) => theme.colors.black}
                >
                  <StyledMainImage
                    bgImage={mainImage}
                    className="rotated-image-wrapper"
                  />
                </StyledMainImageWrapper>
                <StyledTextWrapper>
                  <StyledQuotationMark src={MarkImage} alt="quotation mark" />
                  <StyledQuote>{quote}</StyledQuote>
                  <StyledQuoteAuthor>{`${name}, ${profession}`}</StyledQuoteAuthor>
                </StyledTextWrapper>
              </StyledWrapper>
              <StyledSmallImagesWrapper>
                {smallImages.map((smallImage, i) => (
                  <StyledRotatedSmallImageWrapper
                    data-id={i}
                    className="rotated-square"
                    key={i}
                    boxShadowColor={({ theme }) => theme.colors.lightgrey}
                    redBorder={i === this.state.activeElement ? true : false}
                    onClick={
                      i !== this.state.activeElement ? this.changeQuote : null
                    }
                  >
                    <StyledSmallImage
                      bgImage={smallImage}
                      className="rotated-image-wrapper"
                    />
                  </StyledRotatedSmallImageWrapper>
                ))}
              </StyledSmallImagesWrapper>
            </Fragment>
          ))}
      </>
    )
  }
}

const SectionTestimonials = ({ id }) => (
  <StyledSection id={id}>
    <StyledOverflowKeeper>
      <StyledSmallRectangle
        bgColor={({ theme }) => theme.colors.superdarkgrey}
        size="20vw"
      />
      <StyledContainer className="container padding-responsive--y">
        <Heading>What client says</Heading>
        <QuoteSwitcher />
      </StyledContainer>
    </StyledOverflowKeeper>
    <StyledBigRectangle
      bgColor={({ theme }) => theme.colors.red}
      left="100%"
      top="14rem"
      size="280px"
      growBlockade="1920"
    />
  </StyledSection>
)

export default SectionTestimonials
