import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { Grid } from 'components/Base'
import { Box } from 'components/Base'
import Link from 'components/Link'
import Text from 'components/Text'
import Heading from 'components/Heading'
import { graphql } from 'gatsby'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  hyphens: auto;
  text-align: justify;

  .indent p + p {
    text-indent: 2em;
  }

  .content a:hover {
    transition: none;
    color: ${p => p.theme.colors.accent};
    text-decoration-color: ${p => p.theme.colors.accent};
  }

  ${'' /* border: 8px solid black; */}
  height: 100vh;
  overflow: hidden;
  padding: 0;
  padding-top: 24px;

  > * {
    flex-shrink: 0;
  }
`

const Dropcap = styled(Text.p)`
  &:first-letter {
    float: left;
    font-size: 55px;
    line-height: 40px;
    padding-top: 6px;
    padding-right: 6px;
    padding-left: 0px;
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`

const Aside = styled(Box)`
  font-size: 16px;
  line-height: 1.4;

  p {
    margin-bottom: 1.2em;
  }

  & + & {
    border-top: .5px solid ${p => p.theme.colors.gray[1]};
    padding-top: 1em;
  }

  a {
    text-decoration: underline;
  }

  p img:first-child:last-child {
    max-width: 100%;
  }

  img {
    max-width: calc(50% - 8px);
    margin: 0;

    & + img {
      margin-left: 16px;
    }
  }
`

const DisclosureLink = ({ to }) => (
  <Link to={to} color='accent' fontSize='14px' fontWeight='bold' uppercase>See more →</Link>
)

const PostPreview = ({title, link, description}) => (
  <React.Fragment>
    <Heading.h4 fontSize='18px' mb={0}>
      <Link to={link}>{title}</Link>
    </Heading.h4>

    <Text.p fontSize='15px' color='gray.4' mb={4}>{description}</Text.p>
  </React.Fragment>
)

class IndexPage extends React.Component {
  state = {
    // weatherSummary: null,
    // weatherTemperature: null,
    nowPlayingName: null,
    nowPlayingArtist: null,
    // beerName: null,
    // beerBrewery: null
  }

  componentDidMount = () => {
    // fetch(`https://chs-stats.now.sh/weather`)
    //   .then(response => response.json())
    //   .then(result => {
    //     this.setState({ weatherSummary: result.summary })
    //     this.setState({ weatherTemperature: result.temperature })
    //   })

    fetch(`https://chs-stats.now.sh/nowPlaying`)
      .then(response => response.json())
      .then(result => {
        this.setState({ nowPlayingName: result.name })
        this.setState({ nowPlayingArtist: result.artist })
      })

    // fetch(`https://chs-stats.now.sh/beer`)
    //   .then(response => response.json())
    //   .then(result => {
    //     this.setState({ beerName: result.beer })
    //     this.setState({ beerBrewery: result.brewery })
    //   })
  }

  render() {
    const {nowPlayingName, nowPlayingArtist} = this.state

    return (
      <Layout>
        <Container>
          {/* <Grid p={24}>
            <Box width={1}>
              <Text.p fontSize='22px' lineHeight={1.45} fontFamily='serif' m={0}>
                <strong>Chase McCoy</strong> spends his days thinking about design in the context of ethics, tooling, art, culture, and computer science.
              </Text.p>
            </Box>
          </Grid> */}

          {/* <Box px={24} py={4} width={1}>
            <Text.p fontSize='22px' lineHeight={1.45} fontFamily='serif' m={0}>
              <strong>Chase McCoy</strong> spends his days thinking about design in the context of ethics, tooling, art, culture, and computer science.
            </Text.p>
          </Box> */}

          <Grid gutter='0px' height='100%' mt={0} scroll>
            <Box width={1/4} className='content' pl={24} pr='12px'>
              <Box className='indent'>
                <Dropcap fontSize='17px' fontFamily='serif' m={0}>
                  Welcome to my internet homepage; it's nice to see you. I'm Chase, a design technologist living in Chicago by way of Mississippi. Right now I am building the design system at <Link underlined to='http://sproutsocial.com'>Sprout Social</Link>. This is my space to share, collect, curate, and document the things that matter to me. You can follow along here or on <Link underlined to='http://twitter.com/chase_mccoy'>Twitter</Link>, <Link underlined to='http://instagram.com/chs_mc'>Instagram</Link>, or <Link underlined to='http://github.com/chasemccoy'>Github</Link>.
                </Dropcap>

                {/* <Text.p fontSize='17px' fontFamily='serif' m={0}>
                  This is my space to share, collect, curate, and document the things that matter to me. You can follow along here or on <Link underlined to='http://twitter.com/chase_mccoy'>Twitter</Link>, <Link underlined to='http://instagram.com/chs_mc'>Instagram</Link>, or <Link underlined to='http://github.com/chasemccoy'>Github</Link>.
                </Text.p> */}

                <Text.p fontSize='17px' fontFamily='serif' m={0}>
                  Get in touch by <Link underlined to='mailto:desk@chasemccoy.net'>emailing me</Link> if you would like to talk shop or have a professional inquiry. I am always interested in interesting projects. Have a great day.
                </Text.p>
              </Box>

              <Heading.section mt={6} mb={4}>Writing</Heading.section>

              <PostPreview title='Making Computers Make Art' link='/art-from-autonomy' description='An introduction, history, and resource for generative art and creative coding.' />

              <PostPreview title='Some prompted thoughts on design' link='/some-prompted-thoughts-on-design' description='InVision interviewed the design team at Sprout, and I wrote up some extended thoughts on their questions.' />

              <PostPreview title='No Reservations' link='/no-reservations' description='Memorializing Anthony Bourdain and all of the things we can learn from him.' />

              <PostPreview title='Exploring Seattle' link='/exploring-seattle' description='Photos from a recent trip to the Pacific Northwest.' />

              <DisclosureLink to='/thoughts' />

              {/* <React.Fragment>
                {this.props.data.posts.edges.map(({node}) => (
                  <Heading.h4 mb={2}>
                    <Link to={node.slug} dangerouslySetInnerHTML={{ __html: node.title }} />
                  </Heading.h4>
                ))}
              </React.Fragment> */}

              <Text.p fontSize='13px' color='gray.3' fontFamily='mono' mt={40}>
                {nowPlayingName && nowPlayingArtist ?
                  `Listening to ${nowPlayingName} by ${nowPlayingArtist}.` : `Loading...`
                }
              </Text.p>
            </Box>

            <Box width={1/4} className='content'>
              <Box pl='12px' height='93%'>
                <Heading.section mt={2} mb={4} mr={4}>Thoughts</Heading.section>

                <Box height='100%' pr={4} style={{overflow: 'scroll'}}>
                  <React.Fragment>
                    {this.props.data.asides.edges.map(({node}) => (
                      <Aside dangerouslySetInnerHTML={{ __html: node.content }} />
                    ))}
                  </React.Fragment>

                  <DisclosureLink to='/thoughts' />
                </Box>
              </Box>
            </Box>

            <Box width={1/4}>
              <h1>Test</h1>
            </Box>

            <Box width={1/4}>
              <h1>Test</h1>
            </Box>
          </Grid>

          {/* <Box width={[1]}>
            <Text fontSize='18px' fontFamily='mono' maxWidth='60ch' mb='120px'>
              <Icon name='broken' jumbo mb='20%' />

              <br />

              Hi, I'm Chase. I'm a designer and engineer from Mississippi living in Chicago. Right now, I'm building a design system at <Link underlined to='http://sproutsocial.com'>Sprout Social</Link> and thinking about design as it relates to ethics, tooling, art, culture, and engineering. You can follow along here, or on <Link underlined to='http://twitter.com/chase_mccoy'>Twitter</Link> and <Link underlined to='http://instagram.com/chs_mc'>Instagram</Link>.
            </Text>
          </Box>

          <Box width={1}>
            <Text.p fontFamily='mono'>
              {nowPlayingName && nowPlayingArtist ? `Listening to ${nowPlayingName} by ${nowPlayingArtist}.` : `Loading...`}
            </Text.p>

            <Text.p fontFamily='mono'>
              {beerName && beerBrewery ? `Drinking ${beerName} by ${beerBrewery}.` : `Loading...`}
            </Text.p>

            <Text.p fontFamily='mono'>
              {weatherSummary && weatherTemperature ? `${weatherSummary} and ${weatherTemperature} in Chicago, IL.` : `Loading...`}
            </Text.p>
          </Box> */}
        </Container>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query PostQuery {
    posts: allWordpressPost(
      filter: {format: {eq: "standard"}},
      limit: 4
    ) {
      edges {
        node {
          title
          slug
        }
      }
    }

    asides: allWordpressPost(
      filter: {format: {eq: "aside"}},
      limit: 20
    ) {
      edges {
        node {
          content
        }
      }
    }
  }
`
