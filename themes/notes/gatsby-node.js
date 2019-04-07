const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const notesPath = '/notes'
const Note = path.resolve(`./src/templates/note.js`)
const Notes = path.resolve(`./src/templates/notes.js`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
	
  if (node.internal.type === "Mdx") {
    const parentNode = getNode(node.parent)
    const filePath = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value: `${notesPath}${filePath}`
    })

    if (parentNode && parentNode.name) {
      createNodeField({
        name: "isLandingPage",
        node,
        value: parentNode.name === 'index' ? true : false
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    {
      allMdx(sort: {fields: frontmatter___title, order: ASC}) {
        nodes {
          id
          excerpt(pruneLength: 200)
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
        categories: groupedNotes,
        category: dir
      },
      component: Note
    })
  })

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