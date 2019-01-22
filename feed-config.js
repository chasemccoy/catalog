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
        serialize: ({query: {site, posts, mdxPosts}}) => {
          let allPosts = [...mdxPosts.edges, ...posts.edges]

          allPosts = allPosts.sort((a, b) => {
            const firstDate = a.node.frontmatter ? a.node.frontmatter.rawDate : a.node.rawDate
            const secondDate = b.node.frontmatter ? b.node.frontmatter.rawDate : b.node.rawDate
            return new Date(secondDate) - new Date(firstDate)
          })

          return allPosts.map(({ node }) => {
            return Object.assign(
              {},
              {
                title: node.frontmatter ? node.frontmatter.title : (node.title === "" ? " " : node.title),
                custom_elements: [{ "content:encoded": node.content || node.html }],
                url: site.siteMetadata.siteUrl + (node.fields.fullSlug || node.fields.slug),
                guid: site.siteMetadata.siteUrl + (node.fields.fullSlug || node.fields.slug),
                date: node.frontmatter ? node.frontmatter.date : node.date,
                author: 'Chase McCoy'
              },
            );
          });
        },
        query: `
          {
            posts: allWordpressPost {
              edges {
                node {
                  title
                  fields {
                    fullSlug
                  }
                  content
                  excerpt
                  rawDate: date
                  date(formatString: "MMMM DD, YYYY, h:mm A")
                }
              }
            }

            mdxPosts: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
              edges {
                node {
                  frontmatter {
                    title
                    rawDate: date
                    date(formatString: "MMMM DD, YYYY, h:mm A")
                    excerpt
                  }
                  fields {
                    slug
                  }
                  html
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