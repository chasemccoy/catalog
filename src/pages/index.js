import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { Grid, Box } from 'components/Base'
import Heading from 'components/Heading'
import Link from 'components/Link'
import media from 'utils/media'
import Text from 'components/Text'
import portrait from 'assets/portrait.jpg'
import Image from 'components/Image'
import { graphql } from 'gatsby'
import { UnorderedList } from 'components/Lists'

const HeaderImage = styled(Image)`
  height: 280px;
  width: 100%;
  object-fit: cover;
  object-position: 100% 65%;

  ${media.small`
    max-width: none;
    width: calc(100% + 32px);
    margin-left: -16px;
  `}
`

const ArtistList = styled(UnorderedList)`
  li {
    margin-right: 16px;
    margin-bottom: 6px;
    white-space: nowrap;
  }

  li:nth-child(even) {
    color: ${p => p.theme.colors.gray[4]};
  }
`

class IndexPage extends React.Component {
  state = {
    tracks: []
  }

  componentDidMount = () => {
    fetch(`https://chs-stats.now.sh/recentTracks`)
      .then(response => response.json())
      .then(result => {
        this.setState({ tracks: result })
      })
  }

  render() {
    const props = this.props

    const artists = this.state.tracks.map(track => track.artist)
    const uniqueArtists = Array.from(new Set(artists))

    return (
      <Page wide>
        {/* <HeaderImage src={portrait} /> */}

        <Grid mb={40}>
          {/* <Box width={[1, 1, 1, 2/3]}>
            <Heading.section mb={4}>About Me</Heading.section>
            <Text.p fontSize='28px' lineHeight={1.4} mb={0}>I'm Chase, a design technologist living in Chicago by way of Mississippi. I spend my days building the design system at Sprout Social and thinking about design in the context of ethics, tooling, art, culture, and computer science.</Text.p>
          </Box> */}

          <Box width={[1]} mb={0}>
            <HeaderImage src={portrait} />
          </Box>

          <Box width={[1, 1, 1, 1, 1/4]}>
            <Heading.section>Writing</Heading.section>

            {props.data.olderPosts.edges.map(({node}) => (
              <React.Fragment key={node.id}>
                <Heading.h3 mb='4px' fontFamily='mono' fontSize='16px' lineHeight='1.4'>
                  <Link to={node.slug} dangerouslySetInnerHTML={{ __html: node.title }} /> →
                </Heading.h3>
                <Text dangerouslySetInnerHTML={{ __html: node.excerpt }} fontSize='16px' mb='-8px' lineHeight='1.4' />
              </React.Fragment>
            ))}
          </Box>

          <Box width={[1, 1, 1, 1, 3/4]}>
            <Heading.section>Recent Photos</Heading.section>

            <Grid gutter={4}>
              {props.data.photos.edges.map(({node}) => {
                const srcRegex = /<img.*?src=['"](.*?)['"]/
                const src = srcRegex.exec(node.content)[1]

                return (
                  <Box width={[1/2, 1/3, 1/3, 1/4, 1/5]} key={node.id}>
                    <Image src={src} to={node.slug} />
                  </Box>
                )
              })}
            </Grid>
          </Box>
        </Grid>

        <Grid>
          <Box width={1}>
            {artists.length > 0 && (
              <>
                <Heading.section>On the Speakers</Heading.section>

                <ArtistList unstyled inline>
                  {uniqueArtists.map((artist, i) => (
                    artist && (
                      <Text fontSize='14px' fontFamily='mono' as='li' key={i}>{artist}</Text>
                    )
                  ))}
                </ArtistList>
              </>
            )}
          </Box>
        </Grid>
      </Page>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    olderPosts: allWordpressPost(filter: {format: {eq: "standard"}}, limit: 5) {
      edges {
        node {
          id
          title
          slug
          excerpt
        }
      }
    }

    photos: allWordpressPost(filter: {format: {eq: "image"}}, limit: 12) {
      edges {
        node {
          id
          slug
          format
          content
        }
      }
    }
  }
`
