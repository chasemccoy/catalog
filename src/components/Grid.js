import { Box, Flex } from '@rebass/grid'
import React from 'react'
import styled from 'styled-components'

export const Row = props => (
  <Flex
    mx={['-8px', '-12px']}
    mt={['-16px', '-24px']}
    flexWrap={'wrap'}
    {...props}
  />
)

export const Column = props => (
  <Box px={['8px', '12px']} pt={['16px', '24px']} flex='0 1 auto' {...props} />
)

export const Float = styled(Box)`
  float: ${props => (props.right ? `right` : `left`)};
  margin: ${props => (props.right ? `0 0 0 24px` : `0 24px 0 0`)};
`
