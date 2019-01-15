import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* fonts */
  @import url('https://fonts.googleapis.com/css?family=Passion+One:900|Heebo:900|Lato:700,800|Open+Sans:400,400i,800&subset=latin-ext');
  
  body::-webkit-scrollbar {
    width: 8px;
  }
  body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.superlightgrey};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 4px;
  }
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    ${({ theme }) => theme.media('landscape')} {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }  
  .padding-responsive--top {
    padding-top: 1rem;
  }
  .padding-responsive--y {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  ${({ theme }) => theme.media('tablet')} {
    .padding-responsive--top {
      padding-top: 2rem;
    }
    .padding-responsive--y {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
  ${({ theme }) => theme.media('desktop-large')} {
    .padding-responsive--top {
      padding-top: 4rem;
    }
    .padding-responsive--y {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
  /* rotated square */
  .rotated-square {
    /* variables: --size, --rotation */
    width: var(--size);
    height: var(--size);
    overflow: hidden;
    .rotated-image-wrapper {
      /* variable --position-correction */
      margin-left: var(--position-correction);
      margin-top: var(--position-correction);
      transform: rotate(calc(var(--rotation) * -1));
      width: calc(var(--size) * 1.4);
      height: calc(var(--size) * 1.4);
    }
  }
  /* slider arrows */
  button.slick-arrow::before {
    display: none;
    content: '';
  }
  button.slick-arrow {
    --width: 4rem;
    --height: 4rem;
    --position: 55%;
    border-top: calc(var(--height) / 2) solid transparent;
    border-bottom: calc(var(--height) / 2) solid transparent;
    width: auto;
    height: auto;
    content: '';
    top: 93%;
  }
  button.slick-prev {
    left: auto;
    right: var(--position);
    border-left-style: none;
    border-right: var(--width) solid ${({ theme }) => theme.colors.darkgrey};
  }
  button.slick-next {
    left: var(--position);
    right: auto;
    border-left: var(--width) solid ${({ theme }) => theme.colors.darkgrey};
    border-right-style: none;
  }
  ${({ theme }) => theme.media('desktop-small')} {
    button.slick-arrow {
      top: 97%;
    }
  }
  ${({ theme }) => theme.media('desktop-large')} {
    button.slick-arrow {
      top: 47%;
      --height: 8rem;
      --position: calc(94% + 5vw);
    }
  }

  /* overall slider correction */
  .slick-slide > * > div {
    outline: none;
  }
  .slick-slide:not(.slick-active) {
    z-index: -1;
    position: relative;
  }
  @media (max-width: 479px) {
    .slick-current .rotated-square {
      transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1.1);
      opacity: 1;
      z-index: 2;
      position: relative;
    }
    .slick-current .slider-profession-subscription {
      opacity: 1;
    }
  }
  ${({ theme }) => theme.media('landscape')} {
    /* It's necessary, because the slider can't be focused on the middle element. */
    .slick-current+div .rotated-square {
      transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1.1);
      opacity: 1;
      z-index: 2;
      position: relative;
    }
    .slick-current+div .slider-item {
      --subscription-top: 96%;
    }
    .slick-current+div .slider-profession-subscription {
      opacity: 1;
    }
  }
  ${({ theme }) => theme.media('tablet')} {
    .slick-current+div .slider-item {
      --subscription-top: 103%;
    }
  }
  ${({ theme }) => theme.media('desktop-small')} {
    .slick-current+div .slider-item {
      --subscription-top: 132%;
    }
  }
`

export default GlobalStyles
