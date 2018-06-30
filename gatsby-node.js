const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { createPaginationPages, prefixPathFormatter } = require(`gatsby-pagination`);

exports.onCreateNode = async ({ node, getNode, actions, store, cache }) => {
	const { createNodeField, createNode } = actions

  if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({node, getNode, basePath: `posts`, trailingSlash: false})
		createNodeField({node, name: 'slug', value: slug})
  }
	else if (node.internal.type === `File` && node.sourceInstanceName === `data`) {
		const slug = createFilePath({node, getNode, basePath: `images`, trailingSlash: false})
		const slugArray = slug.split('/')
		if (slugArray.length >= 3) {
			createNodeField({node, name: 'parent', value: `/${slugArray[1]}`})
		}
	}
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(
      `
				{
					allMarkdownRemark {
						edges {
							node {
								fields {
									slug
								}
							}
						}
					}
				}
      `
    )
      .then(result => {
				result.data.allMarkdownRemark.edges.map(({ node }) => {
					createPage({
						path: node.fields.slug,
						component: path.resolve(`./src/templates/post.js`),
						context: {
							slug: node.fields.slug
						}
					})
				})
      })
			.then(() => {
        graphql(
          `
						{
							allWordpressPost {
						    edges {
						      node {
						        id
										title
					          date(fromNow: true)
					          slug
					          format
					          content
					          excerpt
										categories {
						          name
						        }
						      }
						    }
						  }
						}
          `
        ).then(result => {
					createPaginationPages({
						createPage: createPage,
						edges: result.data.allWordpressPost.edges,
						component: path.resolve(`./src/templates/thoughts.js`),
						limit: 25,
						pathFormatter: prefixPathFormatter("/thoughts")
					});

					result.data.allWordpressPost.edges.map(({ node }) => {
						createPage({
							path: node.slug,
							component: path.resolve(`./src/templates/wp-post.js`),
							context: {
								id: node.id
							}
						})
					})

          resolve()
        })
      })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
