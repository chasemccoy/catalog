import { Column, Row } from 'components/Grid'
import { Heading, Link } from 'components/Components'
import { colors, fontWeights, sizes } from 'utils/design'
import BlogFeature from 'components/BlogFeature'
import Image from 'components/Image'
import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'
import { media } from 'utils/media'

const Container = styled(Page)`
  min-height: 100vh;
  background: url('/meta/chase2.png'), linear-gradient(to bottom right, #fff 0%, #fff 50%, #F5FAFF 50%, #F5FAFF 100%);
  padding: 96px;
  ${media.small`padding: 96px 32px;`}

  background-size: auto 90%;
  background-position: right bottom;
  background-repeat: no-repeat;

  ${media.large`background-size: auto 80%;`}
  ${media.medium`background-size: auto 70%;`}
  ${media.small`background-size: auto 60%;`}
  ${media.tiny`background-size: auto 50%;`}
`

const PageTitle = styled.h1.attrs({
})`
  margin: 0;
  font-weight: ${fontWeights.normal};
`

const Divider = styled.div`
  height: 4px;
  background-color: #DDE9F0;
  width: 100%;
`

const IndexPage = props => {
  return (
    <Container>
      <Row mb={32}>
        <Column width={[1, 1, 1, 2/3]}>
          <PageTitle>Chase McCoy is a design developer living in Chicago who spends a lot of time thinking about how the web works.</PageTitle>
        </Column>
      </Row>

      <Row>
        <Column width={[1/3, 1/5]}><Divider /></Column>
      </Row>
    </Container>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    posts: allWordpressPost(limit: 2, filter: {format: {eq: "standard"}}) {
      edges {
        node {
          title
          excerpt
          content
          slug
        }
      }
    }

    images: allWordpressWpMedia(limit: 3) {
      edges {
        node {
          source_url
        }
      }
    }
  }
`
