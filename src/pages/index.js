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
            <p>Welcome to my home on the web. Here you'll find all sorts of things that make me who I am. Browse around, have fun, and then <a href="http://twitter.com/chase_mccoy">get in touch to talk shop</a>.</p>
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

        {/* {this.props.data.allMarkdownRemark.edges.map(({node}) =>
          <div key={node.id}>
            <article>
              <h3>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>

              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </article>
          </div>
        )} */}
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
