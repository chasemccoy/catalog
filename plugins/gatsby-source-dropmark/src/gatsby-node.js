const crypto = require(`crypto`)
const axios = require(`axios`)

exports.sourceNodes = async ({ boundActionCreators: { createNode } }, { collection_id }) => {
  const { data } = await axios.get(`http://chs.dropmark.com/${collection_id}.json`);

  const items = data.items

  items.map(item => {
    const itemNode = {
      title: item.name,
      description: item.description,
      preview_url: item.preview,
      sort: item.sort,
      link: item.link,
      id: item.id.toString(),
      parent: null,
      children: [],
      internal: {
        type: `Dropmark${data.name}`,
        contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(item.id))
        .digest(`hex`)
      }
    }

    createNode(itemNode)
  })
}
