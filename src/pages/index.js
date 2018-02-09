import { Column, Row } from 'components/Grid'
import { Heading, Link } from 'components/Components'
import { colors, fontWeights, sizes } from 'utils/design'
import BlogFeature from 'components/BlogFeature'
import Image from 'components/Image'
import Page from 'components/Page'
import StatCard from 'components/StatCard'
import React from 'react'
import styled from 'styled-components'
import { media } from 'utils/media'

const Container = styled(Page)`
  ${'' /* min-height: 100vh;
  background: url('/meta/chase2.png'), linear-gradient(to bottom right, #fff 0%, #fff 50%, #F5FAFF 50%, #F5FAFF 100%); */}
  ${'' /* padding: 96px;
  ${media.small`padding: 96px 32px;`} */}

  ${'' /* background-size: auto 90%;
  background-position: right bottom;
  background-repeat: no-repeat;

  ${media.large`background-size: auto 80%;`}
  ${media.medium`background-size: auto 70%;`}
  ${media.small`background-size: auto 60%;`}
  ${media.tiny`background-size: auto 50%;`} */}
`

const PageTitle = styled.h1.attrs({
})`
  margin: 0;
  font-weight: ${fontWeights.normal};
  letter-spacing: -1px;
`

// const Divider = styled.div`
//   height: 4px;
//   background-color: #DDE9F0;
//   width: 100%;
// `

class IndexPage extends React.Component {
  state = {
		weatherSummary: 'Loading...',
    weatherTemperature: 'Loading...',
		productivity: 'Loading...',
		nowPlayingName: 'Loading...',
    nowPlayingArtist: 'Loading...'
	}

  componentDidMount = () => {
    fetch(`https://chs-stats.now.sh/?type=weather`)
			.then((response) => response.json())
			.then((result) => {
  			this.setState({weatherSummary: result.summary})
        this.setState({weatherTemperature: result.temperature})
			})

    fetch(`https://chs-stats.now.sh/?type=productivity`)
			.then((response) => response.text())
			.then((result) => {
  			this.setState({productivity: result})
			})

    fetch(`https://chs-stats.now.sh/?type=nowPlaying`)
			.then((response) => response.json())
			.then((result) => {
  			this.setState({nowPlayingName: result.name})
        this.setState({nowPlayingArtist: result.artist})
			})
	}

  render() {
    return (
      <Container>
        <Row mb={32}>
          <Column width={[1]}>
            <PageTitle>Chase McCoy is a design developer living in Chicago who spends a lot of time thinking about how the web works.</PageTitle>
          </Column>
        </Row>

        <Row mb={40}>
          {/* <Column width={[1/3, 1/5]}><Divider /></Column> */}
        </Row>

        <Row mx={[-24, -40]}>
          <Column width={[1, 1/2]} mt={64} px={[24, 40]}>
            <StatCard
              title={this.state.weatherTemperature}
              subtitle='Weather in Chicago, IL'
              description={this.state.weatherSummary}
            />
          </Column>

          <Column width={[1, 1/2]} mt={64} px={[24, 40]}>
            <StatCard number title={this.state.productivity} subtitle='Productivity Score' />
          </Column>

          <Column width={[1, 1/2]} mt={64} px={[24, 40]}>
            <StatCard
              title={this.state.nowPlayingName}
              subtitle='Now Playing'
              description={`by ${this.state.nowPlayingArtist}`}
            />
          </Column>

          <Column width={[1, 1/2]} mt={64} px={[24, 40]}>
            <StatCard
              title='Jungle Boogie'
              subtitle='Currently Drinking'
              description='by Marz Brewing'
            />
          </Column>
        </Row>
      </Container>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    posts: allWordpressPost(limit: 2, filter: {format: {eq: "standard"}}) {
      edges {
        node {
          title
          excerpt
          content
          slug
        }
      }
    }

    images: allWordpressWpMedia(limit: 3) {
      edges {
        node {
          source_url
        }
      }
    }
  }
`
