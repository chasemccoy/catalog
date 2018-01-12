import { Column, Row } from 'components/Grid'
import { Heading, Link } from 'components/Components'
import { colors, fontWeights, sizes } from 'utils/design'

import BlogFeature from 'components/BlogFeature'
import Card from 'components/Card'
import Image from 'components/Image'
import List from 'components/Lists'
import Page from 'components/Page'
import React from 'react'
import Token from 'components/Token'
import styled from 'styled-components'

const Portrait = styled(Image)`
  width: 100%;
  border-radius: 50%;
`

const PageTitle = styled.h2`
  margin: 0;
  font-weight: ${fontWeights.normal};

  span {
    font-weight: ${fontWeights.heavy};
  }
`

const Header = props => {
  if (props.isSmall) {
    return (
      <div>
        <Row mb={24}>
          <Column width={[1/4, 1/5]}>{props.image}</Column>

          <Column width={[3/4, 4/5]}>
            <PageTitle><span>Chase McCoy </span>{props.title}</PageTitle>
          </Column>
        </Row>

        <Row mb={64}>
          {props.tokens.map((token, index) =>
            <Column key={index}>
              {token}
            </Column>
          )}
        </Row>
      </div>
    )
  }
  else {
    return (
      <Row mb={24}>
        <Column width={[1/5]}>{props.image}</Column>

        <Column width={[4/5]}>
          <Row mb={64}>
            <Column width={1}>
              <PageTitle><span>Chase McCoy </span>{props.title}</PageTitle>
            </Column>

            {props.tokens.map((token, index) =>
              <Column key={index}>
                {token}
              </Column>
            )}
          </Row>
        </Column>
      </Row>
    )
  }
}

class IndexPage extends React.Component {
  state = {
    isSmall: false
  }

  componentDidMount = () => {
    window.matchMedia(`(min-width: ${sizes.breakpoints.tiny})`).addListener(this.mediaQueryChanged)

    this.mediaQueryChanged()
  }

  mediaQueryChanged = () => {
    this.setState({isSmall: !window.matchMedia(`(min-width: ${sizes.breakpoints.tiny})`).matches})
  }

  render() {
    return (
      <Page>
        <Header
          isSmall={this.state.isSmall}
          title='is a design developer living in Chicago that spends a lot of time thinking about how the web works.'
          image={<Portrait src='/meta/chase.jpg' />}
          tokens={[
            <Token highlight to='http://twitter.com/chase_mccoy'>@chase_mccoy</Token>,
            <Token highlight to='mailto:desk@chasemccoy.net'>desk@chasemccoy.net</Token>
          ]}
        />

        <Row mb={24}>
          <Column>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Column>
        </Row>

        <Heading>Latest thoughts</Heading>
        <Row mb={64}>
          <BlogFeature
            highlight
            title={this.props.data.posts.edges[0].node.title}
            content={this.props.data.posts.edges[0].node.excerpt}
            to={this.props.data.posts.edges[0].node.slug}
            width={[1, 1/3]}
          />

          {this.props.data.images.edges.map(({node}, i) =>
            <Column width={[1/3]} key={i}>
              <Image stretch src={node.source_url} to={`/thoughts`} />
            </Column>
    			)}

          <BlogFeature
            highlight
            title={this.props.data.posts.edges[1].node.title}
            content={this.props.data.posts.edges[1].node.content}
            to={this.props.data.posts.edges[1].node.slug}
            width={[1, 2/3]}
          />
        </Row>

        <Row>
          <Column>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Column>
        </Row>

        <List highlight>
          <li>The best way to make interesting work is to become a more interesting person.</li>
          <li>If you want to be interesting, you have to be interested.</li>
          <li>Pay attention to what you pay attention to.</li>
        </List>

        <Row mb={40}>
          <Column width={[1, 1/2]}>
            <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
          </Column>

          <Column width={[1, 1/2]}>
            <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
          </Column>

          <Column width={[1, 1/2]}>
            <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
          </Column>

          <Column width={[1, 1/2]}>
            <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
          </Column>
        </Row>

        {this.props.data.allMarkdownRemark.edges.map(({node}) =>
          <div key={node.id}>
            <article>
              <h3>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>

              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </article>
          </div>
        )}
      </Page>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          timeToRead
          html
        }
      }
    }

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
