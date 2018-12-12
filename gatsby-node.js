const path = require(`path`);

exports.onCreateNode = async ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === 'wordpress__POST') {
		const year = node.date.slice(0, 4)
		const month = node.date.slice(5, 7)
		const date = `${year}/${month}/`
		createNodeField({node, name: 'fullSlug', value: date + node.slug})
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
						slug
						fields {
							fullSlug
						}
					}
				}
			}
		}
	`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

		result.data.allWordpressPost.edges.map(({ node }) => {
			createPage({
				path: node.slug,
				component: path.resolve(`./src/templates/post.js`),
				context: {
					id: node.id,
					hidden: true
				}
			})

			createPage({
				path: node.fields.fullSlug,
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
