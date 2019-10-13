require('dotenv').config()
const slugify = require('slugify')
require('isomorphic-fetch')

const API_FILE_TARGET =
  'https://api.github.com/repos/chasemccoy/catalog/contents/posts/'

const BRANCH = process.env.NODE_ENV === 'production' ? 'master' : 'testing'
console.log(BRANCH)

// generate the frontmatter string
const getFrontmatter = yaml => {
  let fm = []
  fm.push('---')
  Object.keys(yaml).forEach(key => {
    if (yaml[key] && yaml[key].constructor == String) {
      fm.push(`${key}: ${yaml[key]}`)
    }
  })
  fm.push('---')
  return fm.join('\n')
}

const getCurrentDate = () => {
  const now = new Date()
  var m = now.getMonth() + 1
  var d = now.getDate()
  var y = now.getFullYear()

  return {
    year: y,
    month: m < 10 ? `0${m}` : m,
    day: d < 10 ? `0${d}` : d
  }
}

// generate the new md file content
const getFileContent = data => {
  const { title, url, body } = data
  const { year, month, day } = getCurrentDate()

  const frontMatter = getFrontmatter({
    title: title !== '' ? title : undefined,
    date: `${year}-${month}-${day}`
  })

  let content = frontMatter
  if (body) {
    content += '\n\n' + body
  }

  return unescape(encodeURIComponent(content))
}

// generate the new md file name
const getFileName = slug => {
  const sanitizedSlug = slugify(slug, {
    lower: true
  })
  return `${sanitizedSlug}.mdx`
}

// create the new file via the github API
const postFile = async params => {
  const { token, slug } = params
  const fileName = getFileName(slug)
  const fileContent = getFileContent(params)
  const url = API_FILE_TARGET + fileName

  const payload = {
    message: `Add ${fileName}`,
    content: Buffer.from(fileContent).toString('base64'),
    branch: BRANCH,
    committer: {
      name: 'Chase McCoy',
      email: 'chasem000@gmail.com'
    }
  }

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/vnd.github.v3+json',
      Authorization: `token ${token}`
    },
    body: JSON.stringify(payload)
  }

  return await fetch(url, options)
}

// helper function to handle API responses
const handleResponse = response => {
  if (response.ok) {
    return {
      statusCode: 200,
      body: `Note published!`
    }
  }

  return {
    statusCode: response.status,
    body: `${response.statusText}`
  }
}

exports.handler = async event => {
  try {
    const params = JSON.parse(event.body)

    // Only allow POST
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' }
    }

    // Token is required
    if (!params.token) {
      return { statusCode: 403, body: 'Missing Access Token' }
    }

    const response = await postFile(params)
    return handleResponse(response)
  } catch (err) {
    console.log(err)
    return {
      statusCode: 400,
      body: err.toString()
    }
  }
}
