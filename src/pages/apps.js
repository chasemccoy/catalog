import React from 'react'
import { graphql } from 'gatsby'
import Page from 'components/Page'
import { Column, Row } from 'components/Grid'
import Image from 'components/Image'
import Text from 'components/Text'
import Link from 'components/Link'
import Heading from 'components/Heading'

const AppsPage = ({ data }) => {
  return (
    <Page title="Apps" icon="app" description='A showcase of the apps that help me get shit done.'>
      <Text.p>
        Tools do not maketh man, but they sure do help us get things done. Here
        are some of the tools that I rely on every day to help me do better
        work.
      </Text.p>

      {data.apps.edges.map(({node}, i) => (
        <Link to={node.url} className='full' unstyled>
          <Row mt={6} key={i}>
            <Column width={[1, 1/2, 1/3]}>
              <Image sizes={node.image.childImageSharp.fluid} />
            </Column>

            <Column width={[1, 1/2, 2/3]}>
              <Heading.h3 mb={1}>{node.title}</Heading.h3>

              {node.metadata && <Heading.h4 color='gray.3' mb={4} fontFamily='mono' fontWeight='normal'>{node.metadata}</Heading.h4>}

              <Text.p>{node.description}</Text.p>
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
