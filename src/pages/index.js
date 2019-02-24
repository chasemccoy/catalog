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
import 'isomorphic-fetch'

const now = () => {
  const now = new Date()

  return {
    date: now.toLocaleString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }),
    time: now.toLocaleString('en-us', {
      hour: 'numeric',
      minute: '2-digit'
    })
  }
}

const HeaderImage = styled(Image)`
  height: 350px;
  width: 100%;
  object-fit: cover;
  object-position: 100% 74%;

  ${media.medium`
    height: 300px;
  `}

  ${media.small`
    height: 300px;
    object-position: 100% 54%;
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
    color: ${p => p.theme.name === 'light' ? p.theme.colors.gray[4] : p.theme.colors.gray[2]};
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
    const { date, time } = now()

    return (
      <Page wide>
        <Grid mb={[0, 0, 0, 0, 16]}>
          <Box width={[1, 1, 1, 1, 1.2/5]} display={['none', 'none', 'none', 'none', 'block']}>
            <Heading.section mb='14px'>Date</Heading.section>
            <Text fontSize='18px' fontFamily='mono'>{date}</Text>
            <Text fontSize='14px' fontFamily='mono' color='gray.4'>{time}</Text>
          </Box>

          <Box width={[1, 1, 1, 1, 3.8/5]} mb={['8px', 0]}>
            <Heading.section mb='12px'>Introduction</Heading.section>

            <Text.p fontSize={['24px', '26px', '28px']} lineHeight='1.4' mb={0}>Hey there! <span role='img' aria-label='Waving hand emoji.'>👋</span> I'm Chase, a designer and developer based in Chicago,&nbsp;IL  specializing in systems thinking, design tooling, and front-end engineering. I spend a lot of time thinking about how the web works.</Text.p>
          </Box>

          <Box width={[1]} mt='-6px'>
            <HeaderImage src={portrait} />
          </Box>
        </Grid>

        <Grid mb={[16, 40, 40, 40, 0]}>
          <Box width={[1, 1, 1, 1, 1.2/5]} />

          <Box width={[1, 1, 1, 1, 2.7/5]} mb={[32, 32, 32, '8px', 40]}>
            <Text.p mt='-5px'>Growing up online taught me that the power of the web is its malleability. I believe that the internet can and should be a space that respects the creativity, diversity, and well-being of those who occupy it. Like hypertext itself, our culture is defined by the connections we make. I work to design and build tools that serve those who create connections on (and with) the web.</Text.p>

            <Text.p>I'm currently working as a founding member of the Design Systems team at <Link to='https://sproutsocial.com'>Sprout Social</Link>. I design and build <Link to='https://sproutsocial.com/seeds'>Seeds</Link>, our design system, as well as other tools used by Sprout employees to deliver consistently designed products to our customers. Previously I worked as a mobile designer & iOS developer, creating indie apps in my spare time and building products for enterprise clients at my day job. Check out <Link to='/portfolio'>my portfolio</Link> to learn more. </Text.p>

            <Text.p mb={0}>If you'd like to chat, you can <Link to='mailto:desk@chasem.co'>drop me a line</Link> or find me in a coffee shop on Chicago's west side <span role='img' aria-label='Cup of coffee emoji.'>☕️</span></Text.p>
          </Box>

          <Box width={[1, 1, 1, 1, 1.1/5]}>
            <Grid>
              <Box width={[1, 1/2, 1/2, 1/2, 1]} mb={[16, 0, 0, '8px']}>
                <Heading.section mb={'8px'}>Things I Like</Heading.section>
                <Text fontSize='14px' fontFamily='mono' lineHeight='1.4'>Hypertext, CSS, semantic HTML, design systems, internet culture, online communities, indie publishing, creative coding, digital preservationism, and a diverse & open web.</Text>
              </Box>

              <Box width={[1, 1/2, 1/2, 1/2, 1]} mb={[16, 0]}>
                <Heading.section mb='8px'>Colophon</Heading.section>
                <Text fontSize='14px' fontFamily='mono' lineHeight='1.4'>This site was built using <Link to='https://gatsbyjs.org'>Gatsby</Link>, <Link to='https://styled-components.com'>styled-components</Link>, and <Link to='https://netlify.com'>Netlify</Link>. Text is set in Source Serif Pro and iA Writer Quattro. Weather data provided by the <Link to='https://darksky.net/dev'>Dark Sky API</Link>.</Text>
              </Box>
            </Grid>
          </Box>
        </Grid>

        <Grid mb={24}>
          <Box width={[1, 1/2, 1, 1/2, 1.2/5]} mb={[32, 0]}>
            <Heading.section>Writing</Heading.section>

            {props.data.olderPosts.edges.map(({node}) => (
              <React.Fragment key={node.id}>
                <Heading.h3 mb='4px' fontFamily='mono' fontSize='16px' lineHeight='1.4'>
                  <Link to={node.fields.fullSlug} dangerouslySetInnerHTML={{ __html: node.title }} />&nbsp;→
                </Heading.h3>
                <Text dangerouslySetInnerHTML={{ __html: node.excerpt }} fontSize='15px' mb='-8px' lineHeight='1.4' />
              </React.Fragment>
            ))}
          </Box>

          <Box width={[1, 1/2, 1, 1/2, 3/4]} mb={[32, 0]}>
            <Heading.section>Recent Photos</Heading.section>

            <Grid gutter={4}>
              {props.data.photos.edges.map(({node}) => {
                const srcRegex = /<img.*?src=['"](.*?)['"]/
                const src = srcRegex.exec(node.content)[1]

                return (
                  <Box width={[1/2, 1/3, 1/3, 1/4, 1/5]} key={node.id}>
                    <Image src={src} to={node.fields.fullSlug} />
                  </Box>
                )
              })}
            </Grid>
          </Box>
        </Grid>

        <Grid mb={40}>
          <Box width={1}>
            {artists.length > 0 && (
              <>
                <Heading.section>On Rotation</Heading.section>

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
          fields {
            fullSlug
          }
          excerpt
        }
      }
    }

    photos: allWordpressPost(filter: {format: {eq: "image"}}, limit: 15) {
      edges {
        node {
          id
          fields {
            fullSlug
          }
          format
          content
        }
      }
    }

    status: allAirtable(sort: {fields: data___Date, order: DESC}, limit: 1) {
  	  edges {
  	    node {
          data {
            Content
            Date
          }
  	    }
  	  }
  	}
  }
`
