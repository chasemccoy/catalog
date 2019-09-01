import React, { useState, useEffect, useReducer } from 'react'
import Page from 'components/Page'
import SharingForm from 'components/SharingForm'
import slugify from 'slugify'

const SHARING_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? '/api/share'
    : 'http://localhost:8888/.netlify/functions/share'
    
const reducer = (state, newState) => ({
  ...state,
  ...newState
})

const SharePage = ({ location }) => {
  const [data, setData] = useReducer(reducer, {})
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(undefined)

  useEffect(() => {
    const initialValues = {}
    const queryParams = new URLSearchParams(location.search)

    for (let param of queryParams) {
      const [key, value] = param

      if (key === 'body' && value !== '') {
        initialValues[key] = `> ${value}`
      } else {
        initialValues[key] = value
      }
    }

    if (initialValues.title) {
      initialValues.slug = slugify(initialValues.title, {
        remove: /[^a-z0-9 ]/gi,
        lower: true
      })
    }

    setData(initialValues)
  }, [location])

  const handleResponse = response => {
    if (response.ok) {
      setIsLoading(false)
      setStatus({
        success: true,
        message: 'Note published!'
      })
    } else {
      response.text().then(text => {
        setIsLoading(false)
        setStatus({
          success: false,
          message: `${response.status} ${text}`
        })
      })
    }

    setIsLoading(false)
  }

  const update = e => {
    const { name, value } = e.target
    setData({ [name]: value })
  }

  const post = () => {
    setIsLoading(true)

    fetch(SHARING_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(handleResponse)
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <Page title='Share'>
      <div>
        {!!status ? (
          <div>{status.message}</div>
        ) : (
          <SharingForm
            {...data}
            isLoading={isLoading}
            onSubmit={post}
            onUpdate={update}
          />
        )}
      </div>
    </Page>
  )
}

export default SharePage
