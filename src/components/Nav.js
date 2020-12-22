import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'components/Link'
import media from 'utils/media-new'
// import circle from 'assets/circle2.svg'

const NavContainer = styled.nav(
  ({ theme }) => css`
    a {
      display: block;
      position: relative;
      transition: all 0.2s;
    }

    a:hover {
      ${'' /* transform: translateX(8px); */}
      color: var(--highlight-color, var(--color-green));
    }

    a.selected {
      ${
        '' /* border-left: 2px solid var(--highlight-color, #51CF66);
      padding-left: 8px;
      margin-left: -8px;
      transform: translateX(-1px); */
      }

      color: var(--highlight-color, var(--color-green));

      &:before {
        content: '';
        display: inline-block;
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background: var(--highlight-color, var(--color-green));
        margin-right: 6px;
        margin-left: -12px;
        transform: translateY(-1px);
      }
    }

    ${
      '' /* a.selected {
      &:before {
        content: '';
        mask: url('${circle}');
        mask-size: contain;
        mask-repeat: no-repeat;
        position: absolute;
        background: red;
        top: -70%;
        left: 35%;
        width: 5rem;
        min-width: 100%;
        height: 3rem;
        transform: translateX(-50%);
        pointer-events: none;
      }

      &.invert:before {
        filter: invert(1);
      }
    } */
    }

    ul {
      display: flex;
      ${'' /* border-left: 1px solid var(--color-border); */}
      ${'' /* padding-left: 12px; */}
      ${'' /* margin-left: -2px; */}
    }

    li {
      display: block;
      font-size: 0.75em;
      ${'' /* font-family: 'Vulf Mono Demo';
      font-weight: 200; */}
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
      <Item to='/' className='invert'>
        <b>Chase M.</b>
      </Item>
      <Item
        to='/thoughts'
        isActive={blogLinkMatcher}
        style={{ '--highlight-color': 'var(--color-red)' }}
        partiallyActive
      >
        Thoughts
      </Item>
      <Item
        to='/notes'
        style={{ '--highlight-color': 'var(--color-yellow)' }}
        partiallyActive
      >
        Notes
      </Item>
      <Item
        to='/books'
        style={{ '--highlight-color': 'var(--color-blue)' }}
        partiallyActive
      >
        Books
      </Item>
      <Item
        to='/quotes'
        style={{ '--highlight-color': 'var(--color-purple)' }}
        partiallyActive
      >
        Quotes
      </Item>
    </ul>
  </NavContainer>
)

export default Nav
