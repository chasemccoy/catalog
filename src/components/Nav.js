import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'components/Link'
import media from 'utils/media-new'
import circle from 'assets/circle.svg'

const NavContainer = styled.nav(
  ({ theme }) => css`
    a.selected {
      display: block;
      ${'' /* text-decoration: underline; */}
      position: relative;

      &:before {
        content: '';
        background-image: url('${circle}');
        position: absolute;
        top: -40%;
        left: 45%;
        width: 6rem;
        height: 3rem;
        transform: translateX(-50%);
        pointer-events: none;
        background-repeat: no-repeat;
        background-size: contain;
      }

      &.invert:before {
        filter: invert(1);
      }
    }

    ul {
      display: flex;
    }

    li {
      display: block;
      font-size: 0.8em;
      font-family: 'Vulf Mono Demo';
      font-weight: 200;
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
    <Link unstyled partiallyActive to={to} {...rest}>
      {children}
    </Link>
  </li>
)

// This regex matches links that contain the `YYYY/MM/` slug format
const regex = /([12]\d{3}\/(0[1-9]|1[0-2]))\//
const blogLinkMatcher = (url) => regex.test(url)

const Nav = () => (
  <NavContainer>
    <ul>
      <Item to='/' className='invert'>
        Home
      </Item>
      <Item to='/thoughts' isActive={blogLinkMatcher}>
        Thoughts
      </Item>
      <Item to='/notes'>Notes</Item>
      <Item to='/books'>Books</Item>
      <Item to='/quotes'>Quotes</Item>
    </ul>
  </NavContainer>
)

export default Nav
