import React from 'react'
import { Box } from '@chasemccoy/kit'
import { capitalize } from 'utils'
import MasterSidebar from 'components/Sidebar'

const Sidebar = ({ data, ...rest }) => (
  <Box mb={32} {...rest}>
    <MasterSidebar.Header>Categories</MasterSidebar.Header>

    {Object.entries(data)
      .sort()
      .map(([key, value], i) => (
        <Box mb={4} key={i}>
          <MasterSidebar.Link to={value[0].pagePath} partiallyActive>
            {capitalize(key)}
          </MasterSidebar.Link>
        </Box>
      ))}
  </Box>
)

export default Sidebar
