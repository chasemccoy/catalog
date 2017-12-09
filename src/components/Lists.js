import React from 'react'
import styled from 'styled-components'
import { colors, fontWeights } from '../utils/design'

const StyledUnorderedList = styled.ul`
  display: table;
  margin-left: 0;
  margin-bottom: 32px;
  border-spacing: ${props => props.highlight ? `0 16px` : '0 8px'};
  list-style: none;
  list-style-position: inside;

  li {
    counter-increment: li;
    display: table-row;
    padding-bottom: 16px;

    ${props => props.highlight && `
      color: ${colors.text.header};
      font-size: 2rem;
      line-height: 1.3;
    `}
  }

  li:before {
    content: ${props => props.highlight ? `'»'` : `'•'`};
    display: table-cell;
    width: 1.2em;
    font-weight: ${fontWeights.semibold};
    ${props => props.highlight && `color: ${colors.text.heading};`}
  }
`

const OrderedList = StyledUnorderedList.withComponent('ol')

const StyledOrderedList = OrderedList.extend`
  counter-reset: li;

  li:before {
    content: counter(li) '.';
  }
`

const List = props => {
  if (props.ordered) {
    return (<StyledOrderedList {...props} />)
  }
  else {
    return (<StyledUnorderedList {...props} />)
  }
}

export default List
