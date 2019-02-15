module.exports = {
  siteMetadata: {
    title: 'Lost Valley Luau',
    author: 'Matt James'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lost-valley-luau`,
        short_name: `lvl`,
        start_url: `/`,
        background_color: `#7df8be`,
        theme_color: `#7df8be`,
        display: `minimal-ui`,
        icon: `src/images/faceicon.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Kanit`,
            variants: [`400`, `600`, `800`]
          },
        ],
      },
    },
    `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
