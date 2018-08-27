import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import media from 'utils/media'
import { Box } from 'components/Base'
import Text from 'components/Text'
import { space } from 'styled-system'

const Container = styled.nav`
  ${space}
`

const MenuItem = styled.li`
  color: ${p => p.theme.colors.type.menu};
  font-size: 13px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;
  vertical-align: text-top;

  a {
    color: currentColor;
    opacity: 0.5;
  }

  a:hover {
    opacity: 0.75;
  }

  a.selected {
    text-decoration: none;
    opacity: 1.0;
    color: ${p => p.theme.colors.type.menu};
    border-top: 1px solid ${p => p.theme.colors.accent};
    padding-top: ${p => p.theme.space[3]}px;

    ${media.small`
      padding-top: ${p => p.theme.space[3] - 1}px;
    `}
  }

  * + & {
    margin-left: 24px;
  }

  &:last-child {
    ${media.medium`
      padding-right: 24px;
    `}
  }

  .dark & {
    color: ${p => p.theme.colors.gray[4]}
  }
`
const Item = ({to, children, ...rest}) => (
  <MenuItem {...rest}>
    <Link to={to}>{children}</Link>
  </MenuItem>
)

const Nav = props => (
  <Container {...props}>
    <UnorderedList inline borderTop='1px solid' borderColor='gray.1' pt={3}>
      {props.children}
    </UnorderedList>
  </Container>
)

Nav.Item = Item

export default Nav
