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
        name: `fonts`,
        path: `${__dirname}/src/static/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
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
        theme_color: `#0e5471`,
        display: `standalone`,
        icon: `src/static/images/vyonizr-web-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          components: "./components",
          constants: "./constants",
          domains: "./domains",
          pages: "./pages",
          static: "./static",
          utils: "./utils"
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
