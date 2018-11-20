module.exports = {
  siteMetadata: {
    title: 'Brian Han',
    description: 'Brian is a front-end developer based in Austin, TX',
    url: 'https://www.brianhan.co',
    image: '/images/brianhan.png',
    twitterUsername: '@_brianhan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`karla\:400,700`, `merriweather\:400,700`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brian Han`,
        short_name: `Brian Han`,
        start_url: `/`,
        background_color: `#ff9a9e`,
        theme_color: `#ff9a9e`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
