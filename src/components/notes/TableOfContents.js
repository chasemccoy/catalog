import React from 'react'
import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'
import Link from 'components/Link'

const renderItem = (item, key) => (
  <li key={key}>
    <Link 
      unstyled
      to={item.url}
      display='block'
      fontFamily='mono' 
      fontSize='15px'
    >
      {item.title}
    </Link>

    {item.items && renderList(item)}
  </li>
)

const renderList = item => {
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
  }
  else {
    return null
  }
}

const Container = styled(Box)`
  display: none;

  ul {
    list-style-type: none;
    margin: 2px 0 0 4px;
    padding: 0 0 0 16px;
    border-left: 1px solid ${props => props.theme.colors.accent.light};
  }

  ul ul {
    display: none;
  }

  li {
    margin: 0;
  }

  .selected + &  {
    display: block;
  }
`

const TableOfContents = ({ data }) => (
  <Container>
    {renderList(data)}
  </Container>
)

export default TableOfContents