import React from 'react'
import styled from 'styled-components'
import { colors, fontWeights } from '../utils/design'

const StyledUnorderedList = styled.ul`
  margin-left: 0;
  margin-bottom: 32px;
  list-style-position: inside;

  li {
    counter-increment: li;

    ${props => props.highlight && `
      color: ${colors.text.header};
      font-size: 2rem;
      line-height: 1.3;
    `}
  }
`

const OrderedList = StyledUnorderedList.withComponent('ol')

const StyledOrderedList = OrderedList.extend`
  list-style: none;
  counter-reset: li;

  li:before {
    content: counter(li) '.';
    display: inline-block;
    width: 1.2em;
    font-weight: ${fontWeights.semibold};
    ${props => props.highlight && `color: ${colors.text.heading};`}
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
