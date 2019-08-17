import React from 'react'
import { Box } from '@chasemccoy/kit'

const NotesLayout = props => <Box width={1}>{props.children}</Box>

NotesLayout.Sidebar = props => <Box width={1}>{props.children}</Box>

NotesLayout.Content = ({ children, ...rest}) => (
  <Box as='article' width={1} {...rest}>
    {children}
  </Box>
)

export default NotesLayout
