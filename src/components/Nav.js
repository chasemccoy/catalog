import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'components/Link'
// import media from 'utils/media'

const Nav = styled.nav(
  p => css`
  font-size: 0.8rem;
  --space: ${p.vertical ? '8px' : '24px'};
  margin-bottom: 4px;

  ul {
    list-style-type: none;
    margin: 0;
  }

  li {
    display: ${p.vertical ? 'block' : 'inline-block'};
    margin-bottom: 0;
  }

  li + li {
    margin-top: 4px;
    margin-${p.vertical ? 'top' : 'left'}: var(--space);

    ${
      '' /* &:before {
      content: "/";
      margin-right: var(--space);
    } */
    }
  }

  a {
    text-decoration: none;
  }

  a.selected {
    ${'' /* color: ${p => p.theme.colors.accent}; */}
    text-decoration: underline;
  }
`
)

const Item = ({ to, children }) => (
  <li>
    <Link partiallyActive to={to}>
      {children}
    </Link>
  </li>
)

export default ({ direction = 'horizontal' }) => (
  <Nav vertical={direction === 'vertical'}>
    <ul>
      <Item to='/labs/thoughts'>Thoughts</Item>
      <Item to='/notes'>Notes</Item>
      <Item to='/books'>Books</Item>
      <Item to='/quotes'>Quotes</Item>
    </ul>
  </Nav>
)
