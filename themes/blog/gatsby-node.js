const path = require('path')
const { createBlogNode } = require('./createBlogNode')

exports.sourceNodes = ({ actions: { createTypes }, schema }) => {
  createTypes(
    schema.buildObjectType({
      name: `Blog`,
      fields: {
        id: { type: 'ID!' },
        title: { type: 'String' },
        date: {
          type: 'Date!',
          extensions: {
            dateformat: {}
          }
        },
        format: { type: 'String' },
        slug: { type: 'String!' },
        shortSlug: { type: 'String' },
        excerpt: { type: 'String' },
        year: { type: 'String' },
        isMdx: { type: 'Boolean' },
        content: {
          type: 'String',
          resolve(source, args, context, info) {
            const { content } = source
            if (content) {
              return content
            }

            const type = info.schema.getType('Mdx')
            const mdxNode = context.nodeModel.getNodeById({
              id: source.parent
            })
            const resolver = type.getFields()['body'].resolve
            return resolver(mdxNode, args, context, {
              fieldName: 'body'
            })
          }
        },
        tags: {
          type: '[String]',
          resolve(source, args, context, info) {
            if (source.tags && source.tags.length !== 0) {
              return source.tags
            }

            let tags = null

            if (source.tagNodes) {
              const nodes = context.nodeModel.getNodesByIds({
                ids: source.tagNodes
              })

              tags = nodes.map(node => node.name)
            }

            return tags
          }
        },
        html: {
          type: 'String',
          resolve: async (source, args, context, info) => {
            if (!!source.isMdx) {
              const type = info.schema.getType('Mdx')
              const mdxNode = context.nodeModel.getNodeById({
                id: source.parent
              })
              const resolver = type.getFields()['html'].resolve
              const result = await resolver(mdxNode, args, context, {
                fieldName: 'html'
              })
              return result
            }

            return undefined
          }
        }
      },
      interfaces: ['Node']
    })
  )
}

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest
}) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type === 'wordpress__POST') {
    const year = node.date.slice(0, 4)
    const month = node.date.slice(5, 7)
    const date = `/${year}/${month}/`
    const fullSlug = date + node.slug
    createNodeField({ node, name: 'fullSlug', value: fullSlug })

    const postData = {
      parent: node.id,
      title: node.title,
      date: node.date,
      content: node.content,
      format: node.format,
      slug: fullSlug,
      shortSlug: node.slug,
      tagNodes: node.tags___NODE,
      excerpt: node.excerpt,
      year: year,
      isMdx: false
    }

    createBlogNode(postData, { createContentDigest, createNodeId, createNode })
  }

  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName
    const fileSlug =
      fileNode.name === 'index' ? fileNode.relativeDirectory : fileNode.name

    if (source === 'posts') {
      const year = node.frontmatter.date.slice(0, 4)
      const month = node.frontmatter.date.slice(5, 7)
      const date = `/${year}/${month}/`

      const postData = {
        parent: node.id,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        slug: date + fileSlug,
        tags: node.frontmatter.tags,
        excerpt: node.frontmatter.excerpt,
        year: year,
        isMdx: true,
        format: node.frontmatter.title ? 'standard' : 'aside'
      }

      createBlogNode(postData, {
        createContentDigest,
        createNodeId,
        createNode
      })
    }
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
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allBlog.nodes.map(node => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          id: node.id
        }
      })
    })
  })
}
