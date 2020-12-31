import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'

const renderItem = (item, key) => (
  <li key={key}>
    <Link unstyled to={item.url}>
      {item.title}
    </Link>

    {item.items && renderList(item)}
  </li>
)

const renderList = (item) => {
  if (item.items) {
    return (
      <ul>
        {item.items.map((item, i) => {
          if (item === undefined) {
            return null
          }

          return renderItem(item, i)
        })}
      </ul>
    )
  } else {
    return null
  }
}

const Container = styled.div`
  && h2 {
    font-size: 0.9rem;
    ${'' /* font-family: var(--font-body); */}
    ${'' /* font-weight: bold; */}
  }

  ul {
    list-style-type: none;
    margin: 8px 0 8px 4px;
    padding: 0 0 0 12px;
    border-left: 1px solid var(--color-border);
    font-size: 0.75em;
  }

  ul ul {
    display: none;
  }

  li {
    margin: 0;
  }

  li + li {
    margin-top: 4px;
  }

  a.selected {
    color: ${(p) => p.theme.colors.accent.pop};
  }
`

const TableOfContents = ({ data, ...rest }) => {
  if (!data.items) return null

  return (
    <Container {...rest}>
      <h2>Table of contents</h2>
      {renderList(data)}
    </Container>
  )
}

export default TableOfContents
