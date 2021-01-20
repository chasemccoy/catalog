const path = require('path')

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const { buildObjectType } = schema

  const typeDefs = `
    interface Content @nodeInterface {
      id: ID!
      title: String
      slug: String!
      excerpt: String
      tags: [Tag] @link(by: "name")
    }
  `

  const Tag = buildObjectType({
    name: 'Tag',
    interfaces: ['Node'],
    fields: {
      id: 'ID!',
      name: 'String!',
      items: {
        type: '[Content]',
        resolve(source, args, context, info) {
          return context.nodeModel
            .getAllNodes({ type: 'Content' })
            .filter((node) => node.tags && node.tags.includes(source.name))
        }
      }
    }
  })

  createTypes([typeDefs, Tag])
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest
}) => {
  const { createNode, createNodeField } = actions

  // Create Tag nodes from Blog nodes
  if (node.internal.type === 'Blog') {
    node.tags &&
      node.tags.forEach((tag, i) => {
        const data = {
          name: tag
        }

        const proxyNode = {
          ...data,
          id: createNodeId(`${tag} >>> Tag`),
          children: [],
          internal: {
            type: `Tag`,
            contentDigest: createContentDigest(data),
            content: JSON.stringify(data),
            description: `Tag node`
          }
        }

        createNode(proxyNode)
      })
  }

  // Create Tag nodes from Note nodes
  if (node.internal.type === 'Note') {
    node.tags &&
      node.tags.forEach((tag, i) => {
        const data = {
          name: tag
        }

        const proxyNode = {
          ...data,
          id: createNodeId(`${tag} >>> Tag`),
          children: [],
          internal: {
            type: 'Tag',
            contentDigest: createContentDigest(data),
            content: JSON.stringify(data),
            description: `Tag node`
          }
        }

        createNode(proxyNode)
      })
  }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'themes'),
        'node_modules'
      ]
    }
  })
}
