import React from 'react'
import Layout from 'components/Layout'
import Heading from 'components/Heading'
import { Grid, Box } from 'components/Base'

const NotFoundPage = () => (
  <Layout dark>
    <Grid justifyContent='center'>
      <Box minHeight='100vh' display='flex' alignItems='center'>
        <Heading.h1 fontSize={200} color='white' fontFamily='sans'>404</Heading.h1>
      </Box>
    </Grid>
  </Layout>
)

export default NotFoundPage
