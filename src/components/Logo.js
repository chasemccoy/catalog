import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import TitleLogo from 'assets/chase-mccoy.svg'

const Logo = props => (
  <Box {...props}>
    <Link to='/'>
      {/* <TitleLogo /> */}
      <Text as='span' fontSize='0.8rem'>
        Chase McCoy
      </Text>
    </Link>
  </Box>
)

export default Logo
