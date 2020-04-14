module.exports = {
  siteMetadata: {
    title: `Mclovin's Blog`,
    description: `Blog voltado para adoração ao DeusLovin.`,
    author: `Jack970`,
    menuFooter: [
      `Videos`,
      `Imagens`,
      `Notícias`,
      `Áudios`
    ],
    informacoesFooter: [
      {
        label:'Facebook',
        icon: 'facebook-f'
      },
      {
        label:'Endereço',
        icon: 'map-marker-alt'
      },
      {
        label:'Twitter',
        icon: 'twitter'
      },
      {
        label:'Email',
        icon: 'envelope'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Posts`,
        path: `${__dirname}/Posts`,
      },
    },
    `gatsby-transformer-remark`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
