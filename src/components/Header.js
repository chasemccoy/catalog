import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import { StaticQuery, graphql } from 'gatsby'
import media from 'utils/media'

const Container = styled.header`
  grid-column: main;
  max-width: ${p => p.theme.sizes.layout.maxWidth};
  font-family: ${p => p.theme.fonts.sans};
  margin: 0 0 64px 0;
  padding: 32px 0 24px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ${media.medium`
    margin-left: 0;
    grid-column: full;
  `}
`

const Title = styled.h3`
  font-size: 20px;
  margin: 0;
  letter-spacing: 0.5px;

  .dark & a {
    color: ${p => p.theme.colors.gray[2]};
  }
`

const MenuItem = styled.li`
  color: ${p => p.theme.colors.type.menu};
  font-size: 13px;
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
    padding-top: ${p => p.theme.space[3] - 1}px;
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
        <Title><Link to='/'>Chase McCoy</Link></Title>

        <UnorderedList inline borderTop='1px solid' borderColor='gray.1' pt={3} mt={4}>
          {data.nav.edges.map(({node}, i) => (
            <React.Fragment key={i}>
              <MenuItem><Link to={node.url}>{node.title}</Link></MenuItem>
            </React.Fragment>
          ))}
        </UnorderedList>
      </Container>
    )}
  />
)

export default Header
