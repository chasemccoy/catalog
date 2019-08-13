import React from 'react'
import { Box, Text } from '@chasemccoy/kit'

const Callout = ({ children, ...rest }) => (
  <Box
    border='1px dashed'
    borderColor='gray.2'
    borderRadius='12px'
    mx={-8}
    p={8}
    {...rest}
  >
    <Box bg='gray.0' borderRadius='8px' py={8} px={12}>
      <Text fontSize='14px'>{children}</Text>
    </Box>
  </Box>
)

export default Callout
