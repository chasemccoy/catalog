import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { Box, Text } from '@chasemccoy/kit'
import Image from 'components/Image'
import media from 'utils/media'
// import Link from 'components/Link'
import Heading from 'components/Heading'
import { graphql } from 'gatsby'

const Track = styled(Box)`
  padding: 8px 0;

  & + & {
    border-top: 4px solid ${props => props.theme.colors.gray[0]};
  }
`

Track.Image = styled(Image)`
  height: 56px;
  width: 56px;
`

Track.Title = styled(Heading.h4)`
  margin: 0;
  flex: 60%;

  ${media.tiny`
    width: 100%;
  `}
`

class MusicPage extends React.Component {
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
    return (
      <Page
        title='Music'
        untitled
        description='I am listening to music about 95% of the time I am awake. Here are a few albums I really like, as well as a list of some songs I have been listening to recently.'
      >
        {/* <Heading.section mb={24}>Favorite Albums</Heading.section> */}

        {/* <Grid mb={40}>
          {this.props.data.music.edges.map(({ node }, i) => (
            <Box width={[1 / 2, 1 / 3]} key={i}>
              <Link to={node.url} unstyled color='page.text'>
                <Image sizes={node.image.childImageSharp.sizes} />

                <Box height={['8em', '8em', '8em', '6em']} mt={3}>
                  <Heading.h3 mt={0} mb='4px'>
                    {node.title}
                  </Heading.h3>
                  <Text color='gray.3' fontFamily='mono' fontSize='16px'>
                    {node.metadata}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </Grid> */}

        <Heading.section mb={16}>Recent Tracks</Heading.section>

        {this.state.tracks.length > 0 && (
          <Box>
            {this.state.tracks.map(
              (track, i) =>
                track.image && (
                  <Track
                    display='flex'
                    alignItems={['flex-start', 'center']}
                    key={i}
                  >
                    <Track.Image src={track.image} />

                    <Box
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                      flex='1'
                      flexWrap='wrap'
                      ml={16}
                    >
                      <Track.Title>{track.name}</Track.Title>

                      <Text color='gray.3' fontFamily='mono' fontSize='16px'>
                        {track.artist}
                      </Text>
                    </Box>
                  </Track>
                )
            )}
          </Box>
        )}
      </Page>
    )
  }
}

export default MusicPage

export const query = graphql`
  query MusicQuery {
    music: allMusicHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          spotify
          image {
            childImageSharp {
              sizes(maxWidth: 900) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
