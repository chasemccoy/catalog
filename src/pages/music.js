import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { P, Box } from 'components/Base'
import Image from 'components/Image'
import media from 'utils/media'
import { Row, Column } from 'components/Grid'
import Link from 'components/Link'
import Heading from 'components/Heading'

const Album = styled(Link)`
`

Album.Title = styled.h3`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 6px;
  font-family: ${props => props.theme.fontFamily.body};
`

Album.Subtitle = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: normal;
  color: ${props => props.theme.colors.text.muted};
`

const Track = styled(Box)`
  & + & {
    border-top: 1px solid ${props => props.theme.colors.gray[4]};
  }
`

Track.Image = styled(Image)`
  height: 48px;
  width: 48px;
`

Track.Title = styled.h3`
  margin: 0;
  font-size: 20px;

  ${media.tiny`
    width: 100%;
  `}
`

Track.Artist = styled.h4`
  margin: 0;
  color: ${props => props.theme.colors.gray[2]};
  font-weight: normal;
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
    console.log(this.state.tracks);
    return (
      <Page title="Music" icon="music">
        <P mb={9}>
          I am listening to music about 95% of the time I am awake. Here are a few albums I really like, as well as a list of some songs I have been listening to recently.
        </P>

        <Heading>Favorite Albums</Heading>

        <Row mb={4}>
          {this.props.data.music.edges.map(({node}, i) => (
            <Column width={[1/2, 1/3]} key={i}>
              <Album to={node.url} unstyled>
                <Image sizes={node.image.childImageSharp.sizes} />

                <Box height={['8em', '8em', '8em', '6em']} mt={3}>
                  <Album.Title>{node.title}</Album.Title>
                  <Album.Subtitle>{node.metadata}</Album.Subtitle>
                </Box>
              </Album>
            </Column>
          ))}
        </Row>

        {this.state.tracks.length > 0 && (
          <div>
            <Heading mb={2}>Recent Tracks</Heading>

            {this.state.tracks.map((track, i) => (
              track.image && (
                <Track py={3} display='flex' alignItems={['flex-start', 'center']} key={i}>
                  <Track.Image src={track.image} />

                  <Box display='flex' justifyContent='space-between' alignItems='center' flex='1' flexWrap='wrap' ml={4}>
                    <Track.Title>{track.name}</Track.Title>
                    <Track.Artist>{track.artist}</Track.Artist>
                  </Box>
                </Track>
              )
            ))}
          </div>
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
