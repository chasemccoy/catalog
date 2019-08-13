import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'

const Tag = styled(props => <Box as='span' {...props} />)`
  border: 1px solid #ffc700;
  border-radius: 9999px;
  padding: 0 6px;
  margin-right: 8px;
  color: #db9102;
  background: #fff4cb;
  display: inline-flex;
  align-items: center;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Tags = ({ items, ...props }) => (
  <Text fontSize='10px' mt='-8px' {...props}>
    {items.map((item, i) => (
      <Tag mt='8px' key={i}>
        {item}
      </Tag>
    ))}
  </Text>
)

export default Tags
