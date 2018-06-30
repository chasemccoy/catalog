import { Box, Flex } from 'grid-styled'
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
  <Box px={['8px', '12px']} pt={['16px', '24px']} flex="0 1 auto" {...props} />
)

export const Float = styled(Box)`
  float: ${props => (props.right ? `right` : `left`)};
  margin: ${props => (props.right ? `0 0 0 24px` : `0 24px 0 0`)};
`

export const BookmarkGrid = props => (
  <Row {...props}>
    {props.children.map((child, index) => (
      <Column key={index} width={[1, 1 / 2]}>
        {child}
      </Column>
    ))}
  </Row>
)

export const ImageGrid = props => (
  <Row {...props}>
    {props.children.map((child, index) => (
      <Column key={index} width={[1, 1 / 2]}>
        {child}
      </Column>
    ))}
  </Row>
)
