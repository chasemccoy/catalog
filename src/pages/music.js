import React from 'react'
import styled from 'styled-components'
import Library from 'components/Library'
import Page from 'components/Page'
import { P, Box } from 'components/Base'
import Divider from 'components/Divider'
import Image from 'components/Image'
import media from 'utils/media'

const Track = styled(Box)`
  & + & {
    border-top: 1px solid ${props => props.theme.colors.gray[4]};
  }
`

Track.Image = styled(Image)`
  height: 48px;
  width: 48px;
`

Track.Title = styled.h4`
  margin: 0;

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
    return (
      <Page title="Music" icon="music">
        <P mb={6}>
          I am listening to music about 95% of the time I am awake. Here are a few albums I really like, as well as a list of some songs I have been listening to recently.
        </P>

        <Divider mb={6} />

        <Library data={this.props.data.music.edges} mediaWidth={[1 / 3]} />

        <Divider my={6} />

        {this.state.tracks.map(track => (
          <Track py={3} display='flex' alignItems={['flex-start', 'center']}>
            <Track.Image src={track.image} />

            <Box display='flex' justifyContent='space-between' alignItems='center' flex='1' flexWrap='wrap' ml={4}>
              <Track.Title>{track.name}</Track.Title>
              <Track.Artist>{track.artist}</Track.Artist>
            </Box>
          </Track>
        ))}
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
        }
      }
    }
  }
`
