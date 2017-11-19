const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({node, getNode, basePath: `posts`, trailingSlash: false})
		createNodeField({node, name: 'slug', value: slug})
  }
	else if (node.internal.type === `File` && node.sourceInstanceName === `data`) {
		const slug = createFilePath({node, getNode, basePath: `images`, trailingSlash: false})
		const slugArray = slug.split('/')
		if (slugArray.length >= 3) {
			createNodeField({node, name: 'parent', value: `/${slugArray[1]}`})
		}
	}
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
				{
					allMarkdownRemark {
						edges {
							node {
								fields {
									slug
								}
							}
						}
					}
				}
      `
    )
      .then(result => {
				result.data.allMarkdownRemark.edges.map(({ node }) => {
					createPage({
						path: node.fields.slug,
						component: path.resolve(`./src/templates/post.js`),
						context: {
							// Data passed to context is available in page queries as GraphQL variables.
							slug: node.fields.slug,
						}
					})
				})
      })
      .then(() => {
        graphql(
          `
						{
							allFile(filter: {relativePath: {glob: "images/**/*.{png,gif,jpg}"}}) {
								edges {
									node {
										fields {
											parent
										}
										relativePath
									}
								}
							}
						}
          `
        ).then(result => {
					result.data.allFile.edges.map(({ node }) => {
						createPage({
							path: node.fields.parent,
							component: path.resolve(`./src/templates/gallery.js`),
							context: {
								// Data passed to context is available in page queries as GraphQL variables.
								parent: node.fields.parent,
							}
						})
					})

          resolve()
        })
      })
  })
}
