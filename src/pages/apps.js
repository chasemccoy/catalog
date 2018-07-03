import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Page from 'components/Page'
import { Column, Row } from 'components/Grid'
import Image from 'components/Image'
import { P } from 'components/Base'
import Link from 'components/Link'

const Title = styled.h3`
  font-family: ${props => props.theme.fontFamily.serif};
`

const Subtitle = styled.h4`
  font-family: ${props => props.theme.fontFamily.mono};
  font-weight: normal;
  color: ${props => props.theme.colors.gray[3]};
`

const AppsPage = ({ data }) => {
  return (
    <Page title="Apps" icon="app" description='A showcase of the apps that help me get shit done.'>
      <P>
        Tools do not maketh man, but they sure do help us get things done. Here
        are some of the tools that I rely on every day to help me do better
        work.
      </P>

      {data.apps.edges.map(({node}, i) => (
        <Link to={node.url} className='full' unstyled>
          <Row mt={6} key={i}>
            <Column width={[1, 1/2, 1/3]}>
              <Image sizes={node.image.childImageSharp.fluid} />
            </Column>

            <Column width={[1, 1/2, 2/3]}>
              <Title>{node.title}</Title>
              <Subtitle>{node.metadata}</Subtitle>
              <P>{node.description}</P>
            </Column>
          </Row>
        </Link>
      ))}
    </Page>
  )
}

export default AppsPage

export const query = graphql`
  query AppsQuery {
    apps: allAppsHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 900, toFormat: PNG) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
