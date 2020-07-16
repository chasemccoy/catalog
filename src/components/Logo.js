import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
// import TitleLogo from 'assets/chase-mccoy.svg'

const Logo = (props) => (
  <Box {...props}>
    <Link unstyled to='/'>
      {/* <TitleLogo /> */}
      <Text as='span' fontWeight='semibold'>
        Chase McCoy
      </Text>
    </Link>
  </Box>
)

export default Logo
