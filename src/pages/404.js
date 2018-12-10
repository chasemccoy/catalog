import React from 'react'
import Heading from 'components/Heading'
import { Grid, Box } from 'components/Base'

const NotFoundPage = () => (
  <Grid justifyContent='center'>
    <Box minHeight='100vh' display='flex' alignItems='center'>
      <Heading.h1 fontSize={200} fontFamily='sans'>404</Heading.h1>
    </Box>
  </Grid>
)

export default NotFoundPage
