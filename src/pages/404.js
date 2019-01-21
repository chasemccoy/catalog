import React from 'react'
import Page from 'components/Page'
import Heading from 'components/Heading'
import { Grid, Box } from 'components/Base'

const NotFoundPage = () => (
  <Page title='404: Not Found' untitled>
    <Grid justifyContent='center'>
      <Box minHeight='100vh' display='flex' alignItems='center'>
        <Heading.h1 fontSize={200} fontFamily='sans'>404</Heading.h1>
      </Box>
    </Grid>
  </Page>
)

export default NotFoundPage
