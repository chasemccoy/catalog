import React from 'react'
import styled from 'styled-components'

const Tag = styled.span.attrs({ className: 'badge' })`
  margin-right: 8px;
  text-transform: uppercase;

  && {
    font-size: 0.6rem !important;
  }
`

const Tags = ({ items, ...props }) => {
  if (!items) {
    return null
  }

  return (
    <div {...props}>
      {items.map((item, i) => (
        <Tag className='mt-8' key={i}>
          {typeof item === 'object' ? item.name : item}
        </Tag>
      ))}
    </div>
  )
}

export default Tags
