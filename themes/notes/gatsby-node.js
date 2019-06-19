const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const notesPath = '/notes'
const Note = require.resolve(`./src/templates/note.js`)
const Notes = require.resolve(`./src/templates/notes.js`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const parentNode = getNode(node.parent)
    const filePath = createFilePath({ node, getNode })
    const { dir } = path.parse(parentNode.relativePath)
    const isLandingPage =
      parentNode.name === 'index' && dir.split('/').length === 1

    createNodeField({
      name: 'slug',
      node,
      value: `${notesPath}${filePath}`,
    })

    if (parentNode && parentNode.name) {
      createNodeField({
        name: 'isLandingPage',
        node,
        value: isLandingPage,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___title, order: ASC }) {
        nodes {
          id
          excerpt(pruneLength: 150)
          tableOfContents
          frontmatter {
            title
            tags
          }
          fields {
            slug
            isLandingPage
          }
          parent {
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
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error(`Could not query notes`, result.errors)
  }

  const { allMdx } = result.data

  const notes = allMdx.nodes.filter(
    node => node.parent.sourceInstanceName === 'notes'
  )

  let groupedNotes = notes.reduce((acc, node) => {
    const { dir } = path.parse(node.parent.relativePath)
    const category = dir.split('/')[0]

    if (!category) {
      return acc
    }

    acc[category] = acc[category] || []

    acc[category].push({
      pagePath: path.join(notesPath, category),
      ...node,
    })

    return acc
  }, {})

  notes.forEach(node => {
    const { dir } = path.parse(node.parent.relativePath)
    const category = dir.split('/')[0]

    createPage({
      path: node.fields.slug,
      context: {
        id: node.id,
        notes: groupedNotes[dir],
        categories: groupedNotes,
        category: category,
      },
      component: Note,
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
    const pagePath = path.join(notesPath, key, '/')
    const pageAlreadyExists = notes.find(node => node.fields.slug === pagePath)

    if (!pageAlreadyExists) {
      createPage({
        path: pagePath,
        context: {
          notes: value,
          categories: groupedNotes,
          category: key,
        },
        component: Notes,
      })
    }
  })

  // Create the root /notes page
  createPage({
    path: notesPath,
    context: {
      notes: notes,
      categories: groupedNotes,
    },
    component: Notes,
  })
}
