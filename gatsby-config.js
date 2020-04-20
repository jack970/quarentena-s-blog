module.exports = {
  siteMetadata: {
    siteUrl: `https://blogdaquarentena.netlify.app`,
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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Posts`,
        path: `${__dirname}/Posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagestoOriginal: false
            },
          },
          `gatsby-remark-lazy-load`,
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quarentena's Blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/assets/logo/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
  ],
}
