import React from 'react'
import { Box, Grid } from '@chasemccoy/kit'

const NotesLayout = props => <Box width={1}>{props.children}</Box>

NotesLayout.Sidebar = props => <Box width={1}>{props.children}</Box>

NotesLayout.Content = props => (
  <Box as='article' width={1}>
    {props.children}
  </Box>
)

export default NotesLayout
