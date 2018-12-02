import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Text from 'components/Text'

const Container = styled(Text)`
  ${props => props.unstyled && `
    text-decoration: none;
  `}

  ${props => props.underlined && `
    text-decoration: underline;
  `}
`

const Link = ({ children, to, ...other }) => {
  const newTab = to.startsWith('http')
  const external = newTab || to.startsWith('#') || to.startsWith('mailto')

  if (external) {
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
