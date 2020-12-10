import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'components/Link'
import media from 'utils/media-new'

const NavContainer = styled.nav(
  ({ theme }) => css`
    a.selected {
      text-decoration: underline;
    }

    ul {
      display: flex;
    }

    li {
      display: block;
      font-size: 0.8em;
    }

    li + li {
      margin-left: 24px;
      margin-top: 0;
    }

    ${media.small`
      ul {
        flex-direction: column;
      }

      li { 
        display: block;
      }

      li + li {
        margin-left: 0;
        margin-top: 8px;
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
