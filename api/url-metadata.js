const url = require('url')
const { URL } = require('url')
require('isomorphic-fetch')
const metascraper = require('metascraper')([
  require('metascraper-title')(),
  require('metascraper-description')()
])

const getUrlMetadata = async url => {
  const response = await fetch(url)
  const html = await response.text()
  const metadata = await metascraper({ html, url })
  return metadata
}

exports.getUrlMetadata = getUrlMetadata

exports.handler = async event => {
  try {
    const input = event.queryStringParameters.url

    if (!input) {
      return {
        statusCode: 400,
        body: 'No URL provided'
      }
    }

    const data = new URL(input)
    const sanitizedURL = url.format(data, { search: false })
    const metadata = await getUrlMetadata(sanitizedURL)

    return {
      statusCode: 200,
      body: JSON.stringify(metadata)
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 400,
      body: err.toString()
    }
  }
}
