import { Column, Row } from 'components/Grid'
import { Link } from 'components/Components'
import { colors, fontWeights } from 'utils/design'
import Page from 'components/Page'
import StatCard from 'components/StatCard'
import React from 'react'
import styled from 'styled-components'
import Markdown from 'components/Markdown'

const Container = styled(Page)`
`

const PageTitle = styled.h1.attrs({
})`
  margin: 0;
  font-weight: ${fontWeights.normal};
  letter-spacing: -1px;
`

const Content = props => (
  <Row mx={[-24, -40]}>
    {props.children.map(item => (
      <Column width={[1, 1/2]} mt={64} px={[24, 40]}>
        {item}
      </Column>
    ))}
  </Row>
)

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

        <Content>
          <StatCard
            title={this.state.weatherTemperature}
            subtitle='Weather in Chicago, IL'
            description={this.state.weatherSummary}
          />

          <StatCard
            title={this.state.productivity}
            subtitle='Productivity Score'
          />

          <StatCard
            title={this.state.nowPlayingName}
            subtitle='Now Playing'
            description={`by ${this.state.nowPlayingArtist}`}
          />

          <StatCard
            title='Jungle Boogie'
            subtitle='Currently Drinking'
            description='by Marz Brewing'
          />

          <StatCard subtitle='Elsewhere'>
            <Markdown>
              If you wanna chat, [ping me on Twitter](http://twitter.com/chase_mccoy) or [shoot me an email](mailto:desk@chasemccoy.net).
            </Markdown>
          </StatCard>

          <StatCard title='22 years' subtitle='Age'
          />

          <StatCard
            // to='http://sproutsocial.com'
            title='Sprout Social'
            color='#59CB59'
            subtitle='Day Job'
            description='Design Developer'
          />

          <StatCard subtitle='Colophon'>
            <Markdown>
              This site is built using [Gatsby](), [styled-components](), [Micro](), and [now](). Headings are set in [Karla](), and the body is set in your system's default typeface.
            </Markdown>
          </StatCard>
        </Content>
      </Container>
    )
  }
}

export default IndexPage

// export const query = graphql`
//   query IndexQuery {
//     posts: allWordpressPost(limit: 2, filter: {format: {eq: "standard"}}) {
//       edges {
//         node {
//           title
//           excerpt
//           content
//           slug
//         }
//       }
//     }
//
//     images: allWordpressWpMedia(limit: 3) {
//       edges {
//         node {
//           source_url
//         }
//       }
//     }
//   }
// `
