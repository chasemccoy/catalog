import { Column, Row } from 'components/Grid'
import { Link } from 'components/Components'
import { colors, fontWeights } from 'utils/design'
import Page from 'components/Page'
import StatCard from 'components/StatCard'
import React from 'react'
import styled from 'styled-components'
import Markdown from 'components/Markdown'
import Image from 'components/Image'
import { fontWeight, themeGet } from 'styled-system'
import { Quote } from './quotes'
import Divider from 'components/Divider'
import { BlogHeader } from 'components/Components'
import Icon from 'components/Icon'
import { Flex } from 'grid-styled'

const PageTitle = styled.h1`
  margin: 0;
  font-weight: ${fontWeights.normal};
  letter-spacing: -1px;
`

const PostLink = styled(Link)`
  text-decoration: none;
  display: block;
  font-weight: ${themeGet('fontWeights.medium')};
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.5;

  & + &:before {
    content: "";
    margin: 16px 0;
    background: ${colors.primary.gray.dark};
    display: block;
    width: 60px;
    height: 2px;
  }

  &:first-child {
    margin-top: 24px;
  }
`

export const Highlight = styled.span`
  background-color: ${themeGet('colors.highlight')};
  ${fontWeight}
`

export const NoUnderlineLink = styled.div`
  a { text-decoration: none; }
`

const Content = props => (
  <Row mx={[-16, -32]}>
    {props.children.map((item, i) => (
      <Column width={[1, item.props.width || 1/3]} mt={64} px={[16, 32]} key={i}>
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
    const imagePosts = this.props.data.imagePosts.edges.map(({node}) => node.slug)

    const showcasePhotos = this.props.data.images.edges.filter(({node}) =>
      imagePosts.some(post => post == node.post)
    )

    return (
      <Page>
        <Row mb={8}>
          <Column width={[1]}>
            <PageTitle><Highlight fontWeight='bold'>Chase McCoy</Highlight> is a design systems developer living in Chicago who spends a lot of time thinking about how the web works.</PageTitle>
          </Column>
        </Row>

        <Row mx={[-6]} mt={6}>
          <Column width={[1, 1, 1/2, 1/3]} px={[6]}>
            <Row mb={[8, 7]}>
              <Column width={[1, 3/4, 1]}>
                <NoUnderlineLink>
                  <Link to='/thoughts'>
                    <BlogHeader mb={0}><Icon small name='thought' /> Recent Thoughts</BlogHeader>
                  </Link>
                </NoUnderlineLink>

                <div>
                  {this.props.data.posts.edges.map(({node}, i) => (
                    <PostLink to={node.slug} key={i}>{node.title}</PostLink>
                  ))}
                </div>
              </Column>
            </Row>

            <Flex justifyContent={['space-around', 'space-around', 'space-around']}>
              <Link to='/chicago'><Icon jumbo name='chicago' /></Link>
              <Link to='/bookmarks'><Icon jumbo name='bookmark' /></Link>
              <Link to='/favorites'><Icon jumbo name='heart' /></Link>
            </Flex>
          </Column>

          <Column width={[1, 1, 1/2, 2/3]} px={[6]} mt={[8, 8, 0]}>
            <Row>
              <Column width={1}>
                <NoUnderlineLink>
                  <Link to='/thoughts#images'>
                    <BlogHeader mb={0}><Icon small name='image' /> Recent Images</BlogHeader>
                  </Link>
                </NoUnderlineLink>
              </Column>

              <Column width={[1, 1/3, 1/2, 1/3]}>
                <Image src={showcasePhotos[0].node.source_url} to={`/${imagePosts[0]}`} />
              </Column>

              <Column width={[1/2, 1/3, 1/2, 1/3]}>
                <Image src={showcasePhotos[1].node.source_url} to={`/${imagePosts[1]}`} />
              </Column>

              <Column width={[1/2, 1/3, 1/2, 1/3]}>
                <Image src={showcasePhotos[2].node.source_url} to={`/${imagePosts[2]}`} />
              </Column>
            </Row>

            <Row>
              <Column width={1}>
                <Divider mt={6} mb={5} />
              </Column>
            </Row>

            <Row>
              <Column width={1}>
                <NoUnderlineLink>
                  <Link to='/quotes'>
                    {this.props.data.quotes.edges.map(({node}, i) => (
                      <Quote content={node.content} source={node.metadata} key={i} />
                    ))}
                  </Link>
                </NoUnderlineLink>
              </Column>
            </Row>
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
            large
            title={this.state.weatherTemperature}
            subtitle='Weather in Chicago, IL'
            description={this.state.weatherSummary}
          />

          <StatCard
            title={this.state.nowPlayingName}
            subtitle='Now Playing'
            description={`by ${this.state.nowPlayingArtist}`}
          />

          <StatCard large title={this.state.age} subtitle='Age'/>

          <StatCard
            title={this.state.beerName}
            subtitle='Currently Drinking'
            description={this.state.beerBrewery}
          />

          {/* <StatCard subtitle='Recent Thoughts'>
            {this.props.data.posts.edges.map(({node}) => (
              <PostLink to={node.slug}>{node.title}</PostLink>
            ))}
          </StatCard> */}

          <StatCard
            large
            title={this.state.productivity}
            subtitle='Productivity Score'
          />

          <StatCard subtitle='Elsewhere'>
            <Markdown>
              If you'd like to chat, [ping me on Twitter](http://twitter.com/chase_mccoy) or [shoot me an email](mailto:desk@chasemccoy.net).
            </Markdown>
          </StatCard>

          <StatCard subtitle='Colophon' width={2/3}>
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
    posts: allWordpressPost(limit: 4, filter: {format: {eq: "standard"}}) {
      edges {
        node {
          title
          slug
        }
      }
    }

    quotes: allQuotesHJson(sort: {fields: [metadata], order: ASC}, limit: 1) {
      edges {
        node {
          content
          metadata
          tags
        }
      }
    }

    images: allWordpressWpMedia {
      edges {
        node {
          source_url
          post
        }
      }
    }

    imagePosts: allWordpressPost(limit: 3, filter: {format: {eq: "image"}}) {
      edges {
        node {
          slug
        }
      }
    }
  }
`
