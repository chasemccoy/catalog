module.exports = {
  siteMetadata: {
    title: `Chase McCoy`,
    description: `The thought stream of Chase McCoy.`,
    siteUrl: `http://chasem.co/`
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-hjson`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "theowlery.co",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false
      }
    },
    {
      resolve: `gatsby-source-dropmark`,
      options: {
        collection_id: '512099'
      }
    },
    {
      resolve: `gatsby-source-dropmark`,
      options: {
        collection_id: '514514'
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
         {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({query: {site, allWordpressPost}}) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.title === "" ? " " : edge.node.title,
                    description: edge.node.content,
                    url: site.siteMetadata.siteUrl + edge.node.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.slug,
                    date: edge.node.date,
                    author: 'Chase McCoy'
                  },
                );
              });
            },
            query: `
              {
                allWordpressPost {
                  edges {
                    node {
                      title
                      slug
                      content
                      excerpt
                      date(formatString: "MMMM DD, YYYY, h:mm A")
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bookmarks`,
        path: `${__dirname}/data/bookmarks.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `favorites`,
        path: `${__dirname}/data/favorites.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/data/portfolio.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/data/books.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `movies`,
        path: `${__dirname}/data/movies.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music`,
        path: `${__dirname}/data/music.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `principles`,
        path: `${__dirname}/data/principles.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/data/_templates.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `navigation`,
        path: `${__dirname}/data/navigation.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chicago`,
        path: `${__dirname}/data/chicago/chicago.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `apps`,
        path: `${__dirname}/data/apps/apps.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/data/`,
      }
    }
  ]
}
