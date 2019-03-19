const path = require('path')
const { createBlogNode } = require('./createBlogNode')

exports.sourceNodes = ({ actions: { createTypes } }) => {
  const typeDefs = `
    type Blog implements Node {
      title: String
      date: Date!
			content: String!
			format: String
			slug: String!
			shortSlug: String
			excerpt: String
			tags: [String]
    }
  `;

  createTypes(typeDefs);
}

exports.createResolvers = ({ createResolvers, schema }) => {
  createResolvers({
    Blog: {
      tags: {
        resolve(source, args, context, info) {
					if (source.tags) {
						return source.tags
					}
					
					let tags = null

					if (source.internal.tagNodes) {
						const nodes = context.nodeModel.getNodesByIds({ids: source.internal.tagNodes})

						tags = nodes.map(node => node.name)
					}

					return tags
        }
      }
    }
  })
}

exports.onCreateNode = async ({ node, actions, createNodeId, createContentDigest }) => {
	const { createNode, createNodeField } = actions

	if (node.internal.type === 'wordpress__POST') {
		const year = node.date.slice(0, 4)
		const month = node.date.slice(5, 7)
		const date = `/${year}/${month}/`
		const fullSlug = date + node.slug
		createNodeField({node, name: 'fullSlug', value: fullSlug})

		const postData = {
			title: node.title,
			date: node.date,
			content: node.content,
			format: node.format,
			slug: fullSlug,
			shortSlug: node.slug,
			tagNodes: node.tags___NODE,
			excerpt: node.excerpt
		};
	
		createBlogNode(postData, { createContentDigest, createNodeId, createNode });
	}
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
		{
			allBlog {
				nodes {
					id
					slug
					shortSlug
				}
			}
		}
	`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
		}

		result.data.allBlog.nodes.map(node => {
			createPage({
				path: node.shortSlug,
				component: path.resolve(`./src/templates/post.js`),
				context: {
					id: node.id,
					hidden: true
				}
			})

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
