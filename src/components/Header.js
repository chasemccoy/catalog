import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { StaticQuery, graphql } from 'gatsby'
import media from 'utils/media'
import { Box } from 'components/Base'
import Text from 'components/Text'
import Nav from 'components/Nav'
import Heading from 'components/Heading'

const date = () => {
  const options = {
    weekday: 'long',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }

  const now = new Date()
  return now.toLocaleString('en-us', options)
}

const Container = styled.header`
  grid-column: main;
  max-width: ${p => p.theme.sizes.layout.maxWidth};
  margin: 0 0 64px 0;
  padding: 32px 0 24px;

  ${media.medium`
    margin-left: 0;
    grid-column: full;
    padding-top: 16px;
  `}
`

const Title = styled(Heading.h3)`
  font-size: 20px;
  margin: 0;

  .dark & a {
    color: ${p => p.theme.colors.gray[2]};
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
        <Box display='flex' justifyContent='space-between' alignItems='baseline' mb={4}>
          <Title><Link to='/'>Chase McCoy</Link></Title>
          <Text fontSize={14} color='gray.3'>{date()}</Text>
        </Box>

        <Nav>
          {data.nav.edges.map(({node}, i) => (
            <Nav.Item to={node.url} key={i}>{node.title}</Nav.Item>
          ))}
        </Nav>
      </Container>
    )}
  />
)

export default Header
