import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { Box, Grid } from 'components/Base'
// import Header from 'components/Header'
import Link from 'components/Link'
import media from 'utils/media'
import Icon from 'components/Icon'
import Text from 'components/Text'

const Container = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100vw - 340px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 80px 0;
  ${'' /* color: white; */}
  overflow: hidden;
  hyphens: auto;
  text-align: justify;

  p + p {
    text-indent: 3em;
  }

  ${media.medium`
    max-width: calc(100vw - 180px);
  `}

  ${media.small`
    justify-content: center;
    padding: 48px 0;
    max-width: calc(100vw - 80px);
  `}

  a {
    ${'' /* color: white; */}
  }

  a:hover {
    ${'' /* color: rgba(255, 255, 255, 0.8); */}
  }
`

class IndexPage extends React.Component {
  state = {
    weatherSummary: null,
    weatherTemperature: null,
    nowPlayingName: null,
    nowPlayingArtist: null,
    beerName: null,
    beerBrewery: null
  }

  componentDidMount = () => {
    fetch(`https://chs-stats.now.sh/weather`)
      .then(response => response.json())
      .then(result => {
        this.setState({ weatherSummary: result.summary })
        this.setState({ weatherTemperature: result.temperature })
      })

    fetch(`https://chs-stats.now.sh/nowPlaying`)
      .then(response => response.json())
      .then(result => {
        this.setState({ nowPlayingName: result.name })
        this.setState({ nowPlayingArtist: result.artist })
      })

    fetch(`https://chs-stats.now.sh/beer`)
      .then(response => response.json())
      .then(result => {
        this.setState({ beerName: result.beer })
        this.setState({ beerBrewery: result.brewery })
      })
  }

  render() {
    const {nowPlayingName, nowPlayingArtist, beerName, beerBrewery, weatherSummary, weatherTemperature} = this.state

    return (
      <Layout>
        <Container alignItems='center'>
          <Box width='32ch'>
            <Text.p fontSize='18px' fontFamily='serif' mb={0}>
              Hi, I'm Chase. I'm a designer and engineer from Mississippi living in Chicago. I spend my days building the design system at <Link underlined to='http://sproutsocial.com'>Sprout Social</Link> and thinking about design in the context of ethics, tooling, art, culture, and engineering.
            </Text.p>

            <Text.p fontSize='18px' fontFamily='serif'>
              You can follow along here or on <Link underlined to='http://twitter.com/chase_mccoy'>Twitter</Link>, <Link underlined to='http://instagram.com/chs_mc'>Instagram</Link>, or <Link underlined to='http://github.com/chasemccoy'>Github</Link>.
            </Text.p>
          </Box>

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
