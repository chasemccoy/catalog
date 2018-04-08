import { Heading } from 'components/Components'
import Page from 'components/Page'
import React from 'react'
import TableOfContents from 'components/TableOfContents'
import { capitalize } from 'utils/js'
import styled from 'styled-components'
import { Row, Column } from 'components/Grid'
import MediaCard from 'components/MediaCard'
import Mosaic from 'components/Mosaic'
import { P } from 'components/Base'

const ChicagoPage = ({ data }) => {
  const categories = data.chicago.edges.map(a => a.node.category)

  const uniqueCategories = categories.filter(
    (item, i, array) => array.indexOf(item) === i
  )

  return (
    <Page wide title="Chicago" icon="chicago">
      <P width={[1, 1, 1, 3/4]}>
        I moved from a small college town in Mississippi to Chicago less than a
        year ago, in the middle of summer. And I've been in love since. There's
        so much more to see and so many more meals to eat. Here are some places
        that I am especially fond of, in no particular order.
      </P>

      <TableOfContents items={uniqueCategories} />

      {uniqueCategories.map((category, index) => (
        <Row mb={80} key={index}>
          <Column width={1}>
            <Heading id={category} key={category}>
              {capitalize(category)}
            </Heading>

            <Mosaic>
              {data.chicago.edges
                .filter(({ node }) => node.category === category)
                .map(({ node }, i) => (
                  <MediaCard
                    title={node.title}
                    description={node.description}
                    image={node.image}
                    metadata={node.metadata}
                    to={node.url}
                    key={i}
                  />
                ))}
            </Mosaic>
          </Column>
        </Row>
      ))}
    </Page>
  )
}

export default ChicagoPage

export const query = graphql`
  query ChicagoQuery {
    chicago: allChicagoHJson(sort: { fields: [category], order: ASC }) {
      edges {
        node {
          title
          category
          metadata
          description
          url
          image
        }
      }
    }
  }
`
