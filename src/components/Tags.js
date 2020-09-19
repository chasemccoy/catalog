import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'

const Tag = styled((props) => <Box as='span' {...props} />)`
  ${'' /* border: 2px solid ${p => p.theme.colors.type.body}; */}
  border-radius: 6px;
  padding: 1px 6px;
  margin-right: 8px;
  color: ${(p) => p.theme.colors.type.body};
  background: var(--section-color);
  display: inline-flex;
  align-items: center;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
`

const Tags = ({ items, ...props }) => {
  if (!items) {
    return null
  }

  return (
    <Text fontSize='10px' mt='-8px' {...props}>
      {items.map((item, i) => (
        <Tag mt='8px' key={i}>
          {typeof item === 'object' ? item.name : item}
        </Tag>
      ))}
    </Text>
  )
}

export default Tags
