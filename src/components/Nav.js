import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'components/Link'
import media from 'utils/media'

const NavContainer = styled.nav(
  ({ theme }) => css`
    --space: 40px;

    ul {
      list-style-type: none;
      margin: 0;
    }

    li {
      display: inline-block;
      margin-bottom: 0;
    }

    li + li {
      margin-left: var(--space);
    }

    a {
      text-decoration: none;
      color: ${theme.colors.gray[5]};
    }

    a:hover {
      color: ${theme.colors.gray[5]};
      text-decoration: underline;
    }

    a.selected {
      text-decoration: underline;
    }

    ${media.small`
    li {
      display: block;
    }

    li + li {
      margin-top: 4px;
      margin-left: 0;
    }
  `}
  `
)

const Item = ({ to, children }) => (
  <li>
    <Link unstyled partiallyActive to={to}>
      {children}
    </Link>
  </li>
)

const Nav = () => (
  <NavContainer>
    <ul>
      <Item to='/thoughts'>Thoughts</Item>
      <Item to='/notes'>Notes</Item>
      <Item to='/books'>Books</Item>
      <Item to='/quotes'>Quotes</Item>
    </ul>
  </NavContainer>
)

export default Nav
