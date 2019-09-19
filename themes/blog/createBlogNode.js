exports.createBlogNode = (
  { title, tagNodes, ...post },
  { createNodeId, createContentDigest, createNode }
) => {
  const postData = {
    ...post,
    title: title === '' ? null : title
  }

  const digest = createContentDigest(postData)

  const node = {
    ...postData,
    tagNodes,
    id: createNodeId(`blog-${digest}`),
    children: [],
    internal: {
      type: 'Blog',
      content: JSON.stringify(postData),
      contentDigest: digest
    }
  }

  createNode(node, { name: 'gatsby-adapter-blog' })
}
