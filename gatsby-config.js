module.exports = {
  siteMetadata: {
    title: `Ciel - Clarisse & Loïc`,
    description: `French couple discovering cities around Asia. First step: Taipei, Taiwan.`,
    author: `@loicsay`,
    url: "https://blog-ciel.netlify.com/",
    titleTemplate: ""
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
              showCaptions: true
            }
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                left: {
                  classes: "left"
                },
                right: {
                  classes: "right"
                }
              }
            }
          }
        ]
      }
    }
  ]
};
