import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
// import media from 'utils/media'

const Nav = styled.nav`
  font-size: 0.8rem;
  ${'' /* font-family: ${p => p.theme.fonts.serif}; */}
  --space: 24px;
  margin-bottom: 4px;

  ul {
    list-style-type: none;
    margin: 0;
  }

  li {
    display: inline-block;
    margin-bottom: 0;
  }

  li + li {
    margin-top: 4px;
    margin-left: var(--space);

    ${'' /* &:before {
      content: "/";
      margin-right: var(--space);
    } */}
  }

  a {
    text-decoration: none;
  }

  a.selected {
    ${'' /* color: ${p => p.theme.colors.accent}; */}
    text-decoration: underline;
  }
`

const Item = ({ to, children }) => (
  <li>
    <Link partiallyActive to={to}>
      {children}
    </Link>
  </li>
)

export default () => (
  <Nav>
    <ul>
      <Item to='/labs/thoughts'>Thoughts</Item>
      <Item to='/notes'>Notes</Item>
      <Item to='/books'>Books</Item>
    </ul>
  </Nav>
)
