import React from 'react'
import { Box } from '@chasemccoy/kit'
import Page from 'components/Page'
import Link from 'components/Link'
import Logo from 'components/Logo'

const Header = () => (
  <Box bg='gray.0' borderBottom='1px solid' borderColor='gray.1'>
    <Page.Wrapper>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Logo />

        <Link unstyled to='#menu' fontSize='0.8em' color='gray.4'>
          Menu
        </Link>
      </Box>
    </Page.Wrapper>
  </Box>
)

export default Header
