import React from 'react'
import { Box, Grid } from '@chasemccoy/kit'

const NotesLayout = props => (
  <Grid gutter={32}>
    {props.children}
  </Grid>
)

NotesLayout.Sidebar = props => (
  <Box width={[1, 1, 1, 1/3, 1.2/5]}>
    {props.children}
  </Box>
)

NotesLayout.Content = props => (
  <Box width={[1, 1, 1, 2/3, 3/5]}>
    {props.children}
  </Box>
)

export default NotesLayout