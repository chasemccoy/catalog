import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'components/Link'
import { getColorForSection } from 'utils'

const NavContainer = styled.nav(
  ({ theme }) => css`
    a {
      display: block;
      position: relative;
    }

    a:hover {
      color: var(--highlight-color);
    }

    a.selected {
      color: var(--highlight-color);

      &:before {
        content: '';
        display: inline-block;
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background: var(--highlight-color);
        margin-right: 6px;
        margin-left: -12px;
        transform: translateY(-1px);
      }
    }

    ul {
      display: flex;
      flex-direction: column;
    }

    li {
      display: block;
      font-size: 0.75em;
    }

    li + li {
      margin-left: 0;
      margin-top: 8px;
    }
  `
)

const Item = ({ to, children, ...rest }) => (
  <li>
    <Link unstyled to={to} {...rest}>
      {children}
    </Link>
  </li>
)

// This regex matches links that contain the `YYYY/MM/` slug format
const regex = /([12]\d{3}\/(0[1-9]|1[0-2]))\//
const blogLinkMatcher = (location) => regex.test(location.pathname)

const Nav = () => (
  <NavContainer>
    <ul>
      <Item to='/' className='invert' style={{ '--highlight-color': getColorForSection() }}>
        <b>Chase M.</b>
      </Item>
      <Item
        to='/thoughts'
        isActive={blogLinkMatcher}
        style={{ '--highlight-color': getColorForSection('blog') }}
        partiallyActive
      >
        Blog
      </Item>
      <Item
        to='/notes'
        style={{ '--highlight-color': getColorForSection('notes') }}
        partiallyActive
      >
        Notes
      </Item>
      <Item
        to='/books'
        style={{ '--highlight-color': getColorForSection('books') }}
        partiallyActive
      >
        Books
      </Item>
      <Item
        to='/quotes'
        style={{ '--highlight-color': getColorForSection('quotes') }}
        partiallyActive
      >
        Quotes
      </Item>
    </ul>
  </NavContainer>
)

export default Nav
