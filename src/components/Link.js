import React, { useEffect, useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { globalHistory } from '@reach/router'

const Container = styled.div`
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

  const checkIfActive = useCallback(() => {
    if (isActive && isActive(window.location)) {
      return true
    }

    return false
  }, [isActive])

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setSelected(checkIfActive())
    })
  }, [setSelected, checkIfActive])

  useEffect(() => {
    setSelected(checkIfActive())
  }, [isActive, setSelected, checkIfActive])

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
