import React from 'react'
import Page from 'components/Page'
import Heading from 'components/Heading'

const NotFoundPage = () => (
  <Page title='404: Not Found'>
    <Heading.h2 fontSize={[50, 100, 200]} fontFamily='sans'>
      404
    </Heading.h2>
  </Page>
)

export default NotFoundPage
