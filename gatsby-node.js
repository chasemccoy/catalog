const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { createPaginationPages, prefixPathFormatter } = require(`gatsby-pagination`);

exports.onCreateNode = async ({ node, getNode, actions, store, cache }) => {
	const { createNodeField, createNode } = actions

  if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({node, getNode, basePath: `posts`, trailingSlash: false})
		createNodeField({node, name: 'slug', value: slug})
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
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
	`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

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
				component: path.resolve(`./src/templates/post.js`),
				context: {
					id: node.id
				}
			})
		});
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
