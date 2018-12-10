import styled from 'styled-components'
import { space, display, borders, borderColor } from 'styled-system'

export const UnorderedList = styled.ul`
  list-style-type: none;

  > li:before {
    content: "–";
    position: absolute;
    margin-left: -1rem;
  }

  ${props => props.inline && `
    list-style-type: none;
    margin: 0;
    padding: 0;
    line-height: 1;

    li {
      display: inline-block;
      margin-bottom: 0;
    }

    li:before {
      display: none;
    }
  `}

  ${props => props.unstyled && `
    list-style-type: none;
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
`
