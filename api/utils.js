require('dotenv').config()

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN

exports.useAuthentication = (event, callback) => {
  const token = event.queryStringParameters.token

  if (!token) {
    return {
      isAuthenticated: false,
      error: {
        statusCode: 400,
        body: 'No API access token provided'
      }
    }
  } else if (token !== API_ACCESS_TOKEN) {
    return {
      isAuthenticated: false,
      error: {
        statusCode: 401,
        body: 'Invalid API access token'
      }
    }
  }

  return {
    isAuthenticated: true,
    error: null
  }
}

exports.isRunningInProduction = () => {
  return process.env.NODE_ENV === 'production'
}
