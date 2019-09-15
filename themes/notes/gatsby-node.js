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
    const { dir, name } = path.parse(parentNode.relativePath)
    const isLandingPage = name === 'index' && parentNode.relativePath.split('/').length === 2
    const actualName = name === 'index' ? parentNode.relativePath.split('/')[0] : name

    const category = dir ? dir.split('/')[0].replace('-', ' ') : 'uncategorized'

    createNodeField({
      name: 'slug',
      node,
      value: `${notesPath}/${actualName}`
    })

    createNodeField({
      name: 'category',
      node,
      value: category
    })

    createNodeField({
      name: 'isLandingPage',
      node,
      value: isLandingPage
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___title, order: ASC }) {
        nodes {
          id
          excerpt(pruneLength: 120)
          tableOfContents
          frontmatter {
            title
            tags
            private
          }
          fields {
            slug
            isLandingPage
            category
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

  const isProduction = process.env.NODE_ENV === 'production'

  const notes = allMdx.nodes.filter(node => {
    const noteIsPrivate = node.frontmatter.private === true
    // Make sure these MDX nodes are actually notes
    if (node.parent.sourceInstanceName === 'notes') {
      // If this is a prod build, don't show private notes
      if (isProduction) {
        return !noteIsPrivate
      }

      return true
    }

    return false
  })

  let groupedNotes = notes.reduce((acc, node) => {
    const category = node.fields.category

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
      path: node.fields.slug,
      context: {
        id: node.id,
        notes: groupedNotes[node.fields.category],
        categories: groupedNotes,
        category: node.fields.category
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
    const pageAlreadyExists = notes.find(node => node.fields.slug === pagePath)

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
  createPage({
    path: notesPath,
    context: {
      notes: notes,
      categories: groupedNotes
    },
    component: Notes
  })
}
