const dotenv = require('dotenv').config();

module.exports = {
  plugins: [
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
    }
  ]
}