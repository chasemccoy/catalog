const path = require('path')
const { createBlogNode } = require('./createBlogNode')

const formatTitle = title => {
  let words = title.replace('&nbsp;', '').split(' ')

  if (words.length > 1) {
    words[words.length - 2] += '&nbsp;' + words[words.length - 1]
    words.pop()
    return words.join(' ')
  }

  return title
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const { buildObjectType } = schema

  const Blog = buildObjectType({
    name: 'Blog',
    interfaces: ['Node', 'Content'],
    fields: {
      id: 'ID!',
      title: 'String',
      date: {
        type: `Date!`,
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
        type: 'String!',
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
        type: '[Tag]',
        extensions: {
          link: { by: 'name' }
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
    }
  })

  createTypes([Blog])
}

exports.onCreateNode = ({
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

    const tags = node.tags___NODE
      ? node.tags___NODE.map(tag => {
          return getNode(tag).name
        })
      : null

    const postData = {
      parent: node.id,
      title: formatTitle(node.title),
      date: node.date,
      content: node.content,
      format: node.format,
      slug: fullSlug,
      shortSlug: node.slug,
      tags,
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
      if (!node.frontmatter.date) {
        return
      }

      const year = node.frontmatter.date.slice(0, 4)
      const month = node.frontmatter.date.slice(5, 7)
      const date = `/${year}/${month}/`

      const postData = {
        parent: node.id,
        title: formatTitle(node.frontmatter.title),
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
