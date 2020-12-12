import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'

const renderItem = (item, key) => (
  <li key={key}>
    <Link
      unstyled
      to={item.url}
    >
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
  ul {
    list-style-type: none;
    margin: 8px 0 8px 4px;
    padding: 0 0 0 12px;
    border-left: 1px solid ${(props) => props.theme.colors.gray[2]};
    font-size: 0.75em;
  }

  ul ul {
    display: none;
  }

  li {
    margin: 0;
  }

  li + li {
    margin-top: 2px;
  }

  a.selected {
    color: ${p => p.theme.colors.accent.pop};
  }
`

const TableOfContents = ({ data }) => <Container>{renderList(data)}</Container>

export default TableOfContents
