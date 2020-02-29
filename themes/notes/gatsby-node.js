const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const notesPath = '/notes'
const Note = require.resolve(`./src/templates/note.js`)
const Notes = require.resolve(`./src/templates/notes.js`)

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName
  })
  return result
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const { buildObjectType } = schema

  const typeDefs = `
    type Note implements Node & Content {
      id: ID!
      title: String!
      slug: String!
      category: String
      excerpt: String
      tags: [Tag] @link(by: "name")
      isLandingPage: Boolean
      content: String!
      tableOfContents: JSON
      private: Boolean
    }
  `

  const Note = buildObjectType({
    name: 'Note',
    interfaces: ['Node', 'Content'],
    fields: {
      id: 'ID!',
      title: 'String!',
      slug: 'String!',
      category: 'String',
      excerpt: {
        type: 'String!',
        args: {
          pruneLength: {
            type: 'Int',
            defaultValue: 120
          }
        },
        resolve: mdxResolverPassthrough('excerpt')
      },
      tags: {
        type: '[Tag]',
        extensions: {
          link: { by: 'name' }
        }
      },
      isLandingPage: 'Boolean',
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
      tableOfContents: {
        type: 'JSON',
        args: {
          maxDepth: { type: 'Int', defaultValue: 2 }
        },
        resolve: mdxResolverPassthrough('tableOfContents')
      },
      private: 'Boolean'
    }
  })

  createTypes([Note])
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest
}) => {
  const { createNode, createNodeField, createParentChildLink } = actions

  if (node.internal.type === 'Mdx') {
    const parentNode = getNode(node.parent)
    const source = parentNode.sourceInstanceName

    const filePath = createFilePath({ node, getNode })
    const { dir, name } = path.parse(parentNode.relativePath)
    const isLandingPage =
      name === 'index' && parentNode.relativePath.split('/').length === 2
    const actualName =
      name === 'index' ? parentNode.relativePath.split('/')[0] : name
    const category = dir ? dir.split('/')[0].replace('-', ' ') : 'uncategorized'

    if (source === 'notes') {
      const data = {
        title: node.frontmatter.title,
        slug: `${notesPath}/${actualName}`,
        category,
        tags: node.frontmatter.tags,
        isLandingPage,
        content: node.body,
        private: node.frontmatter.private || false
      }

      const proxyNode = {
        ...data,
        id: createNodeId(`${node.id} >>> Note`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Note',
          contentDigest: createContentDigest(data),
          content: JSON.stringify(data),
          description: 'Note node'
        }
      }

      createNode(proxyNode)
      createParentChildLink({ parent: node, child: proxyNode })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allNote(sort: { fields: title, order: ASC }) {
        nodes {
          id
          excerpt
          tableOfContents
          title
          tags {
            name
          }
          private
          slug
          isLandingPage
          category
          mdx: parent {
            ... on Mdx {
              file: parent {
                ... on File {
                  name
                  base
                  relativePath
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error(`Could not query notes`, result.errors)
  }

  const { allNote } = result.data

  const isProduction = process.env.NODE_ENV === 'production'

  const notes = allNote.nodes.filter(node => {
    const noteIsPrivate = node.private === true
    // If this is a prod build, don't show private notes
    if (isProduction) {
      return !noteIsPrivate
    }

    return true
  })

  let groupedNotes = notes.reduce((acc, node) => {
    const category = node.category

    if (!category) {
      return acc
    }

    acc[category] = acc[category] || []

    acc[category].push({
      pagePath: path.join(notesPath, category.replace(' ', '-')),
      ...node
    })

    return acc
  }, {})

  // Create each note page at /notes/:slug
  notes.forEach(node => {
    createPage({
      path: node.slug,
      context: {
        id: node.id,
        notes: groupedNotes[node.category],
        categories: groupedNotes,
        category: node.category
      },
      component: Note
    })
  })

  // Sort the note categories into alphabetical order
  groupedNotes = Object.keys(groupedNotes)
    .sort()
    .reduce((a, c) => {
      a[c] = groupedNotes[c]
      return a
    }, {})

  // Create an index page for each category at /notes/category-name
  Object.entries(groupedNotes).map(([key, value]) => {
    const pagePath = path.join(notesPath, key.replace(' ', '-'))
    // If we include an index.md it means we want to use a custom landing page,
    // so don't create an automatic one
    const pageAlreadyExists = notes.find(node => node.slug === pagePath)

    if (!pageAlreadyExists) {
      createPage({
        path: pagePath,
        context: {
          notes: value,
          categories: groupedNotes,
          category: key
        },
        component: Notes
      })
    }
  })

  // Create the root /notes page
  // createPage({
  //   path: notesPath,
  //   context: {
  //     notes: notes,
  //     categories: groupedNotes
  //   },
  //   component: Notes
  // })
}
