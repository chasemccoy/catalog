import styled, { css } from 'styled-components'
import { space, display, borders, borderColor, fontSize } from 'styled-system'

export const UnorderedList = styled.ul`
  list-style-type: none;

  > li {
    margin-left: 1em;
  }

  > li:before {
    content: "–";
    margin-left: -1em;
    margin-top: -1px;
    ${'' /* margin-right: 0.5em; */}
    float: left;
  }

  ${(props) =>
    props.inline &&
    css`
      list-style-type: none;
      margin: 0;
      padding: 0;
      line-height: 1;

      li {
        display: inline-block;
        margin-bottom: 0;
      }

      li:first-child {
        margin-left: 0;
      }

      li:before {
        display: none;
      }
    `}

  ${(props) =>
    props.unstyled &&
    css`
      margin: 0;
      padding: 0;

      li {
        margin: 0;
      }

      li:before {
        display: none;
      }
    `}

  ${space}
  ${display}
  ${borders}
  ${borderColor}
  ${fontSize}
`

export const OrderedList = styled.ul`
  list-style-type: decimal;

  > li {
    margin-left: 1.5em;
  }
`
