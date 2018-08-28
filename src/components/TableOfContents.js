import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { capitalize } from 'utils/js'
import { space } from 'styled-system'

const Container = styled.div`
  color: ${p => p.theme.colors.type.menu};
  margin-bottom: 24px;
  ${space}
`

const TOCItem = styled.span`
  margin-left: 12px;

  a {
    text-decoration: none;
    color: ${p => p.theme.colors.type.menu};

    &:hover {
      color: ${p => p.theme.colors.type.body};
    }
  }

  &:not(&:first-child) {
    &:before {
      content: '/';
      margin-right: 12px;
      color: ${p => p.theme.colors.type.menuMuted};
    }
  }
`

const TableOfContents = props => {
  return (
    <Container {...props}>
      Jump to:
      {props.items.map((item, index) => (
        <TOCItem key={index}>
          <Link to={`#${item}`}>{capitalize(item)}</Link>
        </TOCItem>
      ))}
    </Container>
  )
}

export default TableOfContents
