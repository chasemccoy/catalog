import styled from 'styled-components'
import { space, display, borders, borderColor } from 'styled-system'

export const UnorderedList = styled.ul`
  ${props => props.inline && `
    list-style-type: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;

    li {
      display: inline
      margin-bottom: 0;
    }
  `}

  ${props => props.unstyled && `
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
    }
  `}

  ${space}
  ${display}
  ${borders}
  ${borderColor}
`
