require('dotenv').config()
const url = require('url')
const { URL } = require('url')
require('isomorphic-fetch')
const { useAuthentication, isRunningInProduction } = require('./utils')
const { getUrlMetadata } = require('./url-metadata')
const util = require('util')

const Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY
})
const base = Airtable.base('appDBfiwr4Q6hG4qe')
const addItem = util.promisify(base('Reading List').create)

exports.handler = async event => {
  try {
    const input = event.queryStringParameters.url
    const { isAuthenticated, error } = useAuthentication(event)

    if (!isAuthenticated) {
      return error
    }

    if (!input) {
      return {
        statusCode: 400,
        body: 'No URL provided'
      }
    }

    const data = new URL(input)
    const sanitizedURL = url.format(data, { search: false })
    const metadata = await getUrlMetadata(sanitizedURL)

    await addItem([
      {
        fields: {
          URL: sanitizedURL,
          Title: metadata.title,
          Description: metadata.description
        }
      }
    ])

    // If this is run in prod, kick off a new build of the site so we can pull in the latest data
    if (isRunningInProduction()) {
      await fetch(
        'https://api.netlify.com/build_hooks/5da3968e01ef5cb07da775b9',
        { method: 'POST' }
      )
    }

    return {
      statusCode: 200,
      body: 'Item added to reading list!'
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 400,
      body: err.toString()
    }
  }
}
