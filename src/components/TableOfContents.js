import { colors, fontWeights } from 'utils/design'

import { Link } from 'components/Components'
import React from 'react'
import { capitalize } from 'utils/js'
import styled from 'styled-components'

const Container = styled.div`
  color: ${colors.text.muted};
  font-weight: ${fontWeights.medium};
  margin-bottom: 24px;
`

const TOCItem = styled.span`
  margin-left: 12px;

  a {
    color: ${colors.text.header};
    text-decoration: none;

    &:hover {
      color: ${colors.primary.blue};
    }
  }

  &:not(&:first-child) {
    &:before {
      content: '/';
      font-weight: ${fontWeights.medium};
      color: ${colors.primary.gray.dark};
      margin-right: 12px;
    }
  }
`

const TableOfContents = props => {
  return (
    <Container>
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
