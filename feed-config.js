module.exports = {
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
                url: site.siteMetadata.siteUrl + edge.node.fields.fullSlug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.fullSlug,
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
                  fields {
                    fullSlug
                  }
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
}