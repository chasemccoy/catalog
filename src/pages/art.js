import React from 'react'
import Page from 'components/Page'
import { P, Box, Grid } from 'components/Base'
import Image from 'components/Image'
import { graphql } from "gatsby"


const ArtPage = ({ data }) => {
  return (
    <Page wide icon="art" title="Art" description="">
      <P mb={8} width={[1, 1, 1, 3/4]}>
        When I'm not making the internet, I like to mark art. Here are some pieces that I think turned out pretty well.
      </P>

      <Grid gutter={6} pt={4}>
        {data.art.edges.map(({ node }, i) => (
          <Box width={[1/2]} key={i}>
            <Image sizes={node.image.childImageSharp.sizes} borderRadius={0} />
          </Box>
        ))}
      </Grid>
    </Page>
  )
}

export default ArtPage

export const query = graphql`
  query ArtQuery {
    art: allArtHJson {
      edges {
        node {
          image {
            childImageSharp {
              sizes(maxWidth: 1000) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
