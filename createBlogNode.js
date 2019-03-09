exports.createBlogNode = (
  {title, tagNodes, ...post},
  { createNodeId, createContentDigest, createNode }
) => {
  const postData = {
    ...post,
		title: title === '' ? null : title
  }

  const digest = createContentDigest(postData)

  createNode(
    {
      ...postData,
      id: createNodeId(`blog-${digest}`),
      parent: null,
      children: [],
      internal: {
        type: 'Blog',
        content: JSON.stringify(postData),
        contentDigest: digest,
        tagNodes: tagNodes
      }
    },
    { name: 'gatsby-adapter-blog' }
  )
}