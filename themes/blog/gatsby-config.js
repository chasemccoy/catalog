require('dotenv').config()
const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: true,
              showCaptions: ['title']
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          {
            resolve: 'gatsby-remark-smartypants'
          }
        ],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: true,
              showCaptions: ['title']
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'chasemccoy.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WP_SECRET,
          wpcom_app_clientId: process.env.WP_ID,
          wpcom_user: 'chasem000@gmail.com',
          wpcom_pass: process.env.WP_PASSWORD
        },
        concurrentRequests: 20,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/media',
          '**/tags',
          '**/taxonomies'
        ],
        normalizer: ({ entities }) => {
          // WordPress gives us back dates in UTC, so let's convert them to
          // America/Chicago time (+6 hour offset)
          entities.map((entity) => {
            if (entity.date) {
              const adjustedDate = entity.date.replace('Z', '+0600')
              entity.date = adjustedDate
            }

            return entity
          })

          return entities
        }
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
            serialize: ({ query: { site, allBlog } }) => {
              return allBlog.nodes.map((node) => {
                const siteUrl = site.siteMetadata.siteUrl

                return Object.assign(
                  {},
                  {
                    title: node.title || ' ',
                    description: node.html || node.content,
                    url: siteUrl + node.slug,
                    guid: siteUrl + node.slug,
                    date: node.date,
                    author: 'Chase McCoy'
                  }
                )
              })
            },
            query: `
              {
                allBlog(sort: {fields: date, order: DESC}) {
                  nodes {
                    title
                    slug
                    content
                    html
                    date(formatString: "MMMM DD, YYYY, h:mm A")
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Chase McCoy'
          }
        ]
      }
    }
  ]
}
