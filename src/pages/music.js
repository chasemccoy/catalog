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

Track.Title = styled(Heading.h4)`
  margin: 0;

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
      <Page resource title="Music" icon="music" description="A few of my favorite albums, as well as what I am listening to recently.">
        <Text.p mb={9}>
          I am listening to music about 95% of the time I am awake. Here are a few albums I really like, as well as a list of some songs I have been listening to recently.
        </Text.p>

        <Heading.section className='full'>Favorite Albums</Heading.section>

        <Row mb={4} className='full'>
          {this.props.data.music.edges.map(({node}, i) => (
            <Column width={[1/2, 1/3]} key={i}>
              <Link to={node.url} unstyled>
                <Image sizes={node.image.childImageSharp.sizes} />

                <Box height={['10em', '10em', '10em', '8em']} mt={3}>
                  <Heading.h3 mb={2}>{node.title}</Heading.h3>
                  <Heading.h4 color='gray.3' fontFamily='sans' fontWeight='normal'>{node.metadata}</Heading.h4>
                </Box>
              </Link>
            </Column>
          ))}
        </Row>

        {this.state.tracks.length > 0 && (
          <div className='full'>
            <Heading.section className='full'>Recent Tracks</Heading.section>

            {this.state.tracks.map((track, i) => (
              track.image && (
                <Track py={2} display='flex' alignItems={['flex-start', 'center']} key={i}>
                  <Track.Image src={track.image} />

                  <Box display='flex' justifyContent='space-between' alignItems='center' flex='1' flexWrap='wrap' ml={4}>
                    <Track.Title>{track.name}</Track.Title>

                    <Heading.h4 color='gray.3' fontFamily='sans' fontWeight='normal' m={0}>{track.artist}</Heading.h4>
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
