module.exports = {
  siteMetadata: {
    title: `vyonizr`,
    description: `vyonizr ( /vaɪ.əˌnaɪ.zə/ ) is a pseudonym created by Fitrahtur Rahman as a medium to bring the world his creative works`,
    author: `@vyonizr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vyonizr-website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0e5471`,
        theme_color: `#3895D3`,
        display: `minimal-ui`,
        icon: `src/images/vyonizr-web-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
