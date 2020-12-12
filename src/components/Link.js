import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { Text } from '@chasemccoy/kit'

const Container = styled(Text)`
  ${(props) =>
    props.unstyled &&
    css`
      text-decoration: none;
    `}

  ${(props) =>
    props.underlined &&
    css`
      text-decoration: underline;
    `}
`

const InternalLink = ({ isActive, className, ...rest }) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (isActive && isActive(window.location)) {
      setSelected(true)
    }
  }, [isActive, setSelected])

  return (
    <Container
      as={GatsbyLink}
      className={selected ? `selected ${className || ''}` : className}
      activeClassName='selected'
      {...rest}
    />
  )
}

const Link = ({ to, external, ...rest }) => {
  const newTab = to.startsWith('http')
  const internal = to.startsWith('#') || (/^\/(?!\/)/.test(to) && !external)

  if (!internal) {
    return (
      <Container
        as='a'
        href={to}
        target={newTab ? `_blank` : undefined}
        rel={newTab ? 'noopener' : undefined}
        {...rest}
      />
    )
  } else {
    return <InternalLink to={to} {...rest} />
  }
}

export default Link
