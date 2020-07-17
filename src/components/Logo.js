import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'

const Logo = (props) => (
  <Box {...props}>
    <Link unstyled to='/'>
      <Text as='span' fontWeight='semibold'>
        Chase McCoy
      </Text>
    </Link>
  </Box>
)

export default Logo
