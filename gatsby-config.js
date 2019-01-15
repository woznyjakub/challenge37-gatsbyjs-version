module.exports = {
  siteMetadata: {
    title: 'challenge37 - gatsby version',
    description:
      'My first gatsbyjs and reactjs project! Weekly WebDev Challenge37.',
    author: 'Jakub Woźny',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
