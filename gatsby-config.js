module.exports = {
  siteMetadata: {
    title: 'Brian Han',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`karla\:400,700`, `merriweather\:400,700`],
      },
    },
  ],
}
