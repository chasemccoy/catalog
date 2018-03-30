import { colors, fontWeights } from 'utils/design'
import React from 'react'
import styled from 'styled-components'
import { media } from 'utils/media'

const StyledUnorderedList = styled.ul`
  display: table;
  margin-left: 0;
  margin-bottom: 32px;
  border-spacing: ${props => props.highlight ? `0 16px` : '0 8px'};
  list-style: none;
  list-style-position: inside;

  > li,
  > * li {
    counter-increment: li;
    display: table-row;
    padding-bottom: 16px;
    font-size: 1rem;
    font-weight: normal;

    ${props => props.highlight && `
      color: ${colors.text.header};
      font-size: 2rem;
      line-height: 1.5;
      font-weight: ${fontWeights.semibold};
    `}
  }

  > li:before,
  > * li:before {
    content: ${props => props.highlight ? `'»'` : `'•'`};
    display: table-cell;
    width: 1.2em;
    font-weight: ${props => props.highlight ? `${fontWeights.semibold}` : `normal`};
    color: currentColor;

    ${props => props.highlight && `content: none;`}
  }

  > * > *:not(li, a) {
    margin-left: 2.4em;

    ${media.small`
      margin-left: 0;
  	`}

    ${props => props.highlight && `margin-left: 0;`}
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
