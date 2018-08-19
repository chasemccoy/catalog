import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { Box } from 'components/Base'
import Text from 'components/Text'
import Image from 'components/Image'
import media from 'utils/media'
import { Row, Column } from 'components/Grid'
import Link from 'components/Link'
import Heading from 'components/Heading'
import { graphql } from 'gatsby'

const Track = styled(Box)`
  & + & {
    border-top: 1px solid ${props => props.theme.colors.gray[1]};
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
  color: ${props => props.theme.colors.gray[3]};
  font-weight: normal;
  font-family: ${p => p.theme.fonts.mono};
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
      <Page title="Music" icon="music" description="A few of my favorite albums, as well as what I am listening to recently.">
        <Text.p mb={9}>
          I am listening to music about 95% of the time I am awake. Here are a few albums I really like, as well as a list of some songs I have been listening to recently.
        </Text.p>

        <Heading.h3>Favorite Albums</Heading.h3>

        <Row mb={4} className='full'>
          {this.props.data.music.edges.map(({node}, i) => (
            <Column width={[1/2, 1/3]} key={i}>
              <Link to={node.url} unstyled>
                <Image sizes={node.image.childImageSharp.sizes} />

                <Box height={['10em', '10em', '10em', '8em']} mt={3}>
                  <Heading.h3 mb={1}>{node.title}</Heading.h3>
                  <Heading.h4 color='gray.3' fontFamily='mono' fontWeight='normal'>{node.metadata}</Heading.h4>
                </Box>
              </Link>
            </Column>
          ))}
        </Row>

        {this.state.tracks.length > 0 && (
          <div className='full'>
            <Heading.h3>Recent Tracks</Heading.h3>

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
