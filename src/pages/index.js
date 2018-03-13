import { Column, Row } from 'components/Grid'
import { Link } from 'components/Components'
import { colors, fontWeights } from 'utils/design'
import Page from 'components/Page'
import StatCard from 'components/StatCard'
import React from 'react'
import styled from 'styled-components'
import Markdown from 'components/Markdown'
import Image from 'components/Image'

const PageTitle = styled.h1`
  margin: 0;
  font-weight: ${fontWeights.normal};
  letter-spacing: -1px;
`

const PostLink = styled.a`
  text-decoration: none;

  & + &:before {
    content: "/";
    margin: 0 8px;
    color: ${colors.primary.gray.dark};
  }
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
    nowPlayingArtist: 'Loading...',
    age: 'Loading...',
    beerName: 'Loading...',
    beerBrewery: 'Loading...'
	}

  componentDidMount = () => {
    fetch(`https://chs-stats.now.sh/weather`)
			.then((response) => response.json())
			.then((result) => {
  			this.setState({weatherSummary: result.summary})
        this.setState({weatherTemperature: result.temperature})
			})

    fetch(`https://chs-stats.now.sh/productivity`)
			.then((response) => response.text())
			.then((result) => {
  			this.setState({productivity: result})
			})

    fetch(`https://chs-stats.now.sh/nowPlaying`)
			.then((response) => response.json())
			.then((result) => {
  			this.setState({nowPlayingName: result.name})
        this.setState({nowPlayingArtist: result.artist})
			})

    fetch(`https://chs-stats.now.sh/age`)
			.then((response) => response.text())
			.then((result) => {
  			this.setState({age: result})
			})

    fetch(`https://chs-stats.now.sh/beer`)
			.then((response) => response.json())
			.then((result) => {
  			this.setState({beerName: result.beer})
        this.setState({beerBrewery: result.brewery})
			})
	}

  render() {
    return (
      <Page>
        <Row mb={32}>
          <Column width={[1]}>
            <PageTitle>Chase McCoy is a design systems developer living in Chicago who spends a lot of time thinking about how the web works.</PageTitle>
          </Column>
        </Row>

        <Content>
          <StatCard
            // to='http://sproutsocial.com'
            title='Sprout Social'
            color='#59CB59'
            subtitle='Day Job'
            description='Design Systems'
          />

          <StatCard
            title={this.state.weatherTemperature}
            subtitle='Weather in Chicago, IL'
            description={this.state.weatherSummary}
          />

          <StatCard
            title={this.state.nowPlayingName}
            subtitle='Now Playing'
            description={`by ${this.state.nowPlayingArtist}`}
          />

          <StatCard title={this.state.age} subtitle='Age'/>

          <StatCard
            title={this.state.beerName}
            subtitle='Currently Drinking'
            description={this.state.beerBrewery}
          />

          <StatCard subtitle='Recent Thoughts'>
            {this.props.data.posts.edges.map(({node}) => (
              <PostLink href={node.slug}>{node.title}</PostLink>
            ))}
          </StatCard>

          <StatCard
            title={this.state.productivity}
            subtitle='Productivity Score'
          />

          <StatCard subtitle='Elsewhere'>
            <Markdown>
              If you'd like to chat, [ping me on Twitter](http://twitter.com/chase_mccoy) or [shoot me an email](mailto:desk@chasemccoy.net).
            </Markdown>
          </StatCard>

          <StatCard subtitle='Colophon'>
            <Markdown>
              This site is built using [Gatsby](https://www.gatsbyjs.org), [styled-components](https://www.styled-components.com), [micro](https://github.com/zeit/micro), and [now](http://now.sh). Headings are set in [Karla](https://fonts.google.com/specimen/Karla), and the body is set in your device's default typeface.
            </Markdown>
          </StatCard>
        </Content>
      </Page>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    posts: allWordpressPost(limit: 3, filter: {format: {eq: "standard"}}) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
