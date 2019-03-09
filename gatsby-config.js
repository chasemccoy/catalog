const dotenv = require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Chase McCoy',
    titleTemplate: '%s | Chase McCoy',
    description: 'Chase McCoy is a designer and developer based in Chicago, IL specializing in systems thinking, design tooling, and front-end engineering.',
    siteUrl: 'https://chasem.co/',
    twitterUsername: "@chase_mccoy",
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`)
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-hjson`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "chasemccoy.wordpress.com",
        protocol: "https",
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: `${(dotenv.parsed && dotenv.parsed.WP_SECRET) || process.env.WP_SECRET}`,
          wpcom_app_clientId: `${(dotenv.parsed && dotenv.parsed.WP_ID) || process.env.WP_ID}`,
          wpcom_user: "chasem000@gmail.com",
          wpcom_pass: `${(dotenv.parsed && dotenv.parsed.WP_PASSWORD) || process.env.WP_PASSWORD}`,
        },
        excludedRoutes: ["/*/*/comments", "/*/*/feedback", "/*/*/pages", "/*/*/users", "/jetpack", "/oembed"],
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
            serialize: ({query: {site, allBlog}}) => {
              return allBlog.nodes.map(node => {
                const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, '')

                return Object.assign(
                  {},
                  {
                    title: node.title || " ",
                    description: node.content,
                    url: siteUrl + node.slug,
                    guid: siteUrl + node.slug,
                    date: node.date,
                    author: 'Chase McCoy'
                  },
                );
              });
            },
            query: `
              {
                allBlog {
                  nodes {
                    title
                    slug
                    slug
                    content
                    excerpt
                    date(formatString: "MMMM DD, YYYY, h:mm A")
                  }
                }
              }
            `,
            output: '/feed.xml'
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        appName: 'Chase McCoy',
        background: '#fff',
        theme_color: '#fff',
        start_url: '/',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
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
        path: `${__dirname}/data/books/books.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music`,
        path: `${__dirname}/data/music/music.hjson`,
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
        path: `${__dirname}/data/chicago.hjson`,
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
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `quotes`,
        path: `${__dirname}/data/quotes.hjson`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `art`,
        path: `${__dirname}/data/art/art.hjson`,
      }
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${(dotenv.parsed && dotenv.parsed.GITHUB_ACCESS_TOKEN) || process.env.GITHUB_ACCESS_TOKEN}`,
        },
        queries: [
          `{
            user(login: "chasemccoy") {
              starredRepositories(first: 100, orderBy: {field: STARRED_AT, direction: DESC}) {
                edges {
                  node {
                  	name
                    url
                    description
                    repositoryTopics(last: 5) {
                      edges {
                        node {
                          id
                          topic {
                            id
                            name
                          }
                        }
                      }
                    }
                    owner {
                    	id
                      login
                    }
                  }
                }
              }
            }
          }`,
        ],
      },
    }
  ]
}
