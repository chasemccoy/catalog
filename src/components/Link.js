import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Text from 'components/Text'

const StyledLink = Text.withComponent('a')

const Container = styled(StyledLink)`
  ${props => props.unstyled && `
    text-decoration: none;
  `}

  ${props => props.underlined && `
    text-decoration: underline;
  `}
`

const StyledGatsbyLink = StyledLink.withComponent(GatsbyLink)

const Link = ({ children, to, ...other }) => {
  const newTab = to.startsWith('http')
  const external = newTab || to.startsWith('#') || to.startsWith('mailto')

  if (external) {
    return (
      <Container
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
    <StyledGatsbyLink to={to} {...other} activeClassName='selected'>
      {children}
    </StyledGatsbyLink>
  )
};

export default Link;
