const crypto = require(`crypto`)
const axios = require(`axios`)

exports.sourceNodes = async ({ boundActionCreators: { createNode } }, { collections }) => {
  for (let collection_id of collections) {
    const { data } = await axios.get(`http://chs.dropmark.com/${collection_id}.json`);

    const items = data.items

    items.map(item => {
      const itemNode = {
        title: item.name,
        description: item.description,
        preview_url: item.thumbnails.uncropped || item.thumbnail || item.preview,
        collection: data.name,
        link: item.link,
        date: item.created_at,
        id: item.id.toString(),
        parent: null,
        children: [],
        internal: {
          type: `Dropmark`,
          contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(item.id))
          .digest(`hex`)
        }
      }

      item.link && createNode(itemNode)
    })
  }
}
