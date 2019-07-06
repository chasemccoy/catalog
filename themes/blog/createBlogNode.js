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
    id: createNodeId(`blog-${digest}`),
    children: [],
    internal: {
      type: 'Blog',
      content: JSON.stringify(postData),
      contentDigest: digest,
      tagNodes
    }
  }

  createNode(node, { name: 'gatsby-adapter-blog' })
}
