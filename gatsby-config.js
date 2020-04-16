module.exports = {
  siteMetadata: {
    title: `Quarentena's Blog`,
    description: `Descrição do Blog`,
    author: `Jack970`,
    menuFooter: [
      {
        label: 'Sobre',
        link: '/sobre'
      },
      {
        label: 'Imagens',
        link: '/tags/imagens'
      },
      {
        label: 'Notícias',
        link: '/tags/noticias'
      },
      {
        label: 'Áudios',
        link: '/tags/audios'
      }
    ],
    socialLinks: [
      {
        link: 'https://www.facebook.com',
        icon: 'facebook-f',
        color: 'blue'
      },
      {
        link: 'https://www.twitter.com',
        icon: 'twitter',
        color: 'cyan'
      },
      {
        link: 'https://www.google.com',
        icon: 'google-plus-g',
        color: 'red'
      },
      {
        link: 'https://www.linkedin.com',
        icon: 'linkedin-in',
        color: 'blue'
      },
    ],
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
