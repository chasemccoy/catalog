import React from 'react'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { Text } from '@chasemccoy/kit'

const Container = styled(Text)`
  ${props => props.unstyled && css`
    text-decoration: none;
  `}

  ${props => props.underlined && css`
    text-decoration: underline;
  `}
`

const Link = ({ children, to, ...other }) => {
  const newTab = to.startsWith('http')
  const internal = /^\/(?!\/)/.test(to)

  if (!internal) {
    return (
      <Container
        as='a'
        href={to}
        target={newTab ? `_blank` : undefined}
        rel={newTab ? 'noopener' : undefined}
        {...other}
      >
        {children}
      </Container>
    )
  }

  return (
    <Container as={GatsbyLink} to={to} {...other} activeClassName='selected'>
      {children}
    </Container>
  )
};

export default Link;
