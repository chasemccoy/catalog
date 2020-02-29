import React from 'react'
import Page from 'components/Page'
import Link from 'components/Link'
import { Box } from '@chasemccoy/kit'

const NotFoundPage = () => (
  <Page title='404: Not found'>
    <Box as='p' minHeight='60vh'>
      Sorry about that. Maybe you should <Link to='/'>head home</Link>.
    </Box>
  </Page>
)

export default NotFoundPage
