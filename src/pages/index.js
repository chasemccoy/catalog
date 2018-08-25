import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { Box, Grid } from 'components/Base'
import Header from 'components/Header'
import Link from 'components/Link'
// import media from 'utils/media'
// import Icon from 'components/Icon'
import Text from 'components/Text'

const Container = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 0 8px;
  overflow: hidden;
  hyphens: auto;
  text-align: justify;

  p + p {
    text-indent: 3em;
  }
`

const Dropcap = styled(Text.p)`
  &:first-letter {
    float: left;
    font-size: 55px;
    line-height: 40px;
    padding-top: 4px;
    padding-right: 6px;
    padding-left: 0px;
    font-weight: ${p => p.theme.fontWeights.bold};
    ${'' /* color: ${p => p.theme.colors.accent}; */}
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
          <Box width={[1, 3/4, '30ch']}>
            <Header />
          </Box>

          <Box width={[1, 3/4, '30ch']} mt={-8}>
            <Dropcap fontSize='18px' fontFamily='serif' m={0}>
              Welcome to my internet homepage; it's nice to see you. I'm Chase, a design technologist living in Chicago by way of Mississippi. I spend my days building the design system at <Link underlined to='http://sproutsocial.com'>Sprout Social</Link> and thinking about design in the context of ethics, tooling, art, culture, and computer science.
            </Dropcap>

            <Text.p fontSize='18px' fontFamily='serif' m={0}>
              This is my space to share, collect, curate, and document the things that matter to me. You can follow along here or on <Link underlined to='http://twitter.com/chase_mccoy'>Twitter</Link>, <Link underlined to='http://instagram.com/chs_mc'>Instagram</Link>, or <Link underlined to='http://github.com/chasemccoy'>Github</Link>.
            </Text.p>

            {weatherSummary
              && weatherTemperature
              && nowPlayingName &&
              nowPlayingArtist && (
                <Text.p fontSize='18px' fontFamily='serif'>
                  {`The weather in Chicago at the moment is ${weatherSummary} at ${weatherTemperature}. Right now I'm listening to ${nowPlayingName} by ${nowPlayingArtist}. Hope you have a great day.`}
                </Text.p>
            )}
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
