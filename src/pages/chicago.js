import Page from 'components/Page'
import React from 'react'
import { capitalize } from 'utils/js'
import { Row, Column } from 'components/Grid'
import MediaCard from 'components/MediaCard'
import Mosaic from 'components/Mosaic'
import { Text } from '@chasemccoy/kit'
import { graphql } from 'gatsby'
import Heading from 'components/Heading'

const ChicagoPage = ({ data }) => {
  const categories = data.chicago.edges.map(a => a.node.category)

  const uniqueCategories = categories.filter(
    (item, i, array) => array.indexOf(item) === i
  )

  return (
    <Page wide title="Chicago" icon="chicago" description="The best places in Chicago to chow down, work remotely, or get drunk at.">
      <Text.p width={[1, 1, 1, 0.75]} mb={64}>
        I moved from a small college town in Mississippi to Chicago less than a
        year ago, in the middle of summer. And I've been in love since. There's
        so much more to see and so many more meals to eat. Here are some places
        that I am especially fond of, in no particular order.
      </Text.p>

      {uniqueCategories.map((category, index) => (
        <Row mb={10} key={index} className='full'>
          <Column width={1}>
            <Heading.section id={category}>
              {capitalize(category)}
            </Heading.section>

            <Mosaic>
              {data.chicago.edges
                .filter(({ node }) => node.category === category)
                .sort((a, b) => a.node.title < b.node.title ? -1 : 1)
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
