import React from 'react'
import { Box } from '@chasemccoy/kit'

const Callout = ({ children, ...rest }) => (
  <Box>
    <Box
      as='aside'
      borderRadius='12px'
      // mx={-8}
      p={8}
      // border='1px solid var(--color-yellow)'
      bg='var(--color-gray--100)'
      css={`
        p:last-child {
          margin: 0;
        }
      `}
      {...rest}
    >
      <Box bg='white' borderRadius='8px' py={12} px={12} css='box-shadow: var(--shadow-small)'>
        <p className='smaller'>{children}</p>
      </Box>
    </Box>
  </Box>
)

export default Callout
