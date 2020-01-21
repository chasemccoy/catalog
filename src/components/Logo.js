import React from 'react'
import { Box } from '@chasemccoy/kit'
import Link from 'components/Link'
import TitleLogo from 'assets/chase-mccoy.svg'

const Logo = props => (
  <Box width='120px' py={2} {...props}>
    <Link to='/'>
      <TitleLogo
      // css={`
      //   path {
      //     fill: ${p => p.theme.colors.accent}
      //   }
      // `}
      />
    </Link>
  </Box>
)

export default Logo
