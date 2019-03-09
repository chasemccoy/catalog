exports.createBlogNode = (
  {title, tagNodes, ...post},
  { parent, createNodeId, createContentDigest, createNode, createParentChildLink }
) => {
  const postData = {
    ...post,
		title: title === '' ? null : title
  }

  const digest = createContentDigest(postData)

  const node = {
    ...postData,
    id: createNodeId(`blog-${digest}`),
    parent: undefined,
    source___NODE: parent ? parent.id : undefined,
    children: [],
    internal: {
      type: 'Blog',
      content: JSON.stringify(postData),
      contentDigest: digest,
      tagNodes: tagNodes
    }
  }

  createNode(node, { name: 'gatsby-adapter-blog' })
}