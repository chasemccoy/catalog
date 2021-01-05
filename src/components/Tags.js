import React from 'react'
import styled from 'styled-components'

const Tag = styled.span.attrs({ className: 'badge' })`
  margin-right: 8px;
  text-transform: uppercase;
`

const Tags = ({ items, ...props }) => {
  if (!items) {
    return null
  }

  return (
    <div css={`transform: translateY(-8px);`} {...props}>
      {items.map((item, i) => (
        <Tag className='mt-8' key={i}>
          {typeof item === 'object' ? item.name : item}
        </Tag>
      ))}
    </div>
  )
}

export default Tags
