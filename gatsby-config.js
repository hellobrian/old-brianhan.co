module.exports = {
  siteMetadata: {
    title: 'Brian Han',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`karla\:400,700`, `merriweather\:400,700`],
      },
    },
  ],
}
