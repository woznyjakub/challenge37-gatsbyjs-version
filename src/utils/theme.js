export const theme = {
  colors: {
    red: '#bb2d39',
    darkblue: '#22c',
    blue: '#00bff3',
    purple: '#5f0096',

    superlightgrey: '#f6f6f6',
    lightgrey: '#9f9f9f',
    grey: '#6a6a6a',
    darkgrey: '#494949',
    superdarkgrey: '#171717',

    white: '#fff',
    black: '#000',
    transparent: 'transparent',

    semitransparentblack: '#000000bb',
  },
  font(family, weight, style) {
    return `font-family: ${family}, sans-serif;
      ${weight ? `font-weight: ${weight}` : ``};
      ${style ? `font-style: ${style}` : ``};`
  },
  breakpoints: [
    {
      keyword: 'landscape',
      value: 480,
    },
    {
      keyword: 'tablet',
      value: 768,
    },
    {
      keyword: 'desktop-small',
      value: 900,
    },
    {
      keyword: 'desktop-large',
      value: 1200,
    },
    {
      keyword: 'super-large',
      value: 1650,
    },
  ],
  media(breakpointName) {
    // eslint-disable-next-line
    return theme.breakpoints.map((breakpoint, i) => {
      if (breakpointName === breakpoint.keyword)
        return `@media (min-width: ${theme.breakpoints[i].value}px)`
    })
  },
  timingFunctions: {
    scaleX: 'cubic-bezier(.6,.05,.01,.99)',
  },
}
