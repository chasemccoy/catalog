import React from 'react'
import { Box, Text } from '@chasemccoy/kit'

const Callout = ({ children, ...rest }) => (
  <Box>
    <Box
      as='aside'
      borderRadius='12px'
      // mx={-8}
      p={12}
      css={`
        background: repeating-linear-gradient(
          -55deg,
          var(--color-gray--200),
          var(--color-gray--200) 2px,
          var(--body-background) 2px,
          var(--body-background) 6px
        );

        p:last-child {
          margin: 0;
        }
      `}
      {...rest}
    >
      <Box bg='white' borderRadius='8px' py={8} px={12}>
        <Text fontSize='14px'>{children}</Text>
      </Box>
    </Box>
  </Box>
)

export default Callout
