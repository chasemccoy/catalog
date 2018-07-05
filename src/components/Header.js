import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import { StaticQuery, graphql } from 'gatsby'
import media from 'utils/media'

const Container = styled.header`
  font-family: ${p => p.theme.fontFamily.mono};
  margin: 0 0 48px ${p => p.theme.sizes.layout.offset};
  padding: 32px 0 24px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ${media.medium`
    margin-left: 0;
    max-width: 100%;
    padding-left: 24px;
  `}
`

const MenuItem = styled.li`
  color: ${p => p.muted ? p.theme.colors.type.menuMuted : p.theme.colors.type.menu};

  a {
    color: currentColor;
  }

  a.selected {
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  * + & {
    margin-left: 16px;
  }

  &:last-child {
    ${media.medium`
      padding-right: 24px;
    `}
  }
`

const Header = props => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        nav: allNavigationHJson {
          edges {
            node {
              title
              icon
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Container {...props}>
        <UnorderedList inline>
          {!props.short && (
            <>
              <li><Link to='/'>Chase McCoy</Link></li>
              <MenuItem muted>></MenuItem>
            </>
          )}

          {data.nav.edges.map(({node}, i) => (
            <React.Fragment key={i}>
              <MenuItem><Link to={node.url}>{node.title}</Link></MenuItem>

              {(i !== data.nav.edges.length - 1) && <MenuItem muted>/</MenuItem>}
            </React.Fragment>
          ))}
        </UnorderedList>
      </Container>
    )}
  />
)

export default Header
