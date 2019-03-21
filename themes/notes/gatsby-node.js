const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem');

const notesPath = '/notes'

const Note = path.resolve(`./src/templates/note.js`)
const Notes = path.resolve(`./src/templates/notes.js`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
	
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `${notesPath}${value}`
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
          }
          fields {
            slug
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
    throw new Error(`Could not query articles`, result.errors)
  }

  const { allMdx } = result.data

  const notes = allMdx.nodes.filter(
    node => node.parent.sourceInstanceName === 'notes'
  )

  const groupedNotes = notes.reduce((acc, node) => {
    const { dir } = path.parse(node.parent.relativePath)

    if (!dir) {
      return acc
    }

    acc[dir] = acc[dir] || []

    acc[dir].push({
      pagePath: path.join(notesPath, dir),
      ...node
    })

    return acc
  }, {})

  notes.forEach(node => {
    const { dir } = path.parse(node.parent.relativePath)

    createPage({
      path: node.fields.slug,
      context: { 
        id: node.id,
        notes: groupedNotes[dir],
        categories: groupedNotes
      },
      component: Note
    })
  })

  Object.entries(groupedNotes).map(([key, value]) => {
    createPage({
      path: path.join(notesPath, key),
      context: {
        notes: value,
        categories: groupedNotes
      },
      component: Notes
    })
  })

  createPage({
    path: notesPath,
    context: {
      notes: notes,
      categories: groupedNotes
    },
    component: Notes
  })
}