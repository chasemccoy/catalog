import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

const StyledLink = styled.a`
  ${props => props.unstyled && `
    text-decoration: none;
  `}
`

const StyledGatsbyLink = StyledLink.withComponent(GatsbyLink)

const Link = ({ children, to, ...other }) => {
  const newTab = to.startsWith('http')
  const external = newTab || to.startsWith('#') || to.startsWith('mailto')

  if (external) {
    return (
      <StyledLink href={to} target={newTab && `_blank`} {...other}>
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledGatsbyLink to={to} {...other}>
      {children}
    </StyledGatsbyLink>
  )
};

export default Link;
