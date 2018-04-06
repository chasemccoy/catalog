import { Heading } from 'components/Components'
import Icon from 'components/Icon'
import { Link } from 'components/Components'
import List from 'components/Lists'
import Markdown from 'components/Markdown'
import Page from 'components/Page'
import React from 'react'
import Token from 'components/Token'
import { colors } from 'utils/design'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const PrinciplesList = styled(List)`
  > div {
    margin-bottom: 64px;
  }
`

const PrincipleDescription = styled.div`
  color: ${colors.card.text};
`

const PrincipleLinkHeading = styled(Heading)`
  padding: 0 0 8px;
  margin-bottom: 8px;
`

export const Highlight = styled.span`
  background-color: ${themeGet('colors.highlight')};
`

const PrinciplesPage = ({ data }) => {
  return (
    <Page title="Principles" icon="brain">
      <p>
        Here are some thoughts/ideas that I have noticed as recurring themes of
        my time growing up, learning new things, and starting a career. These
        are things that I try to keep in mind every day. I've studied these
        principles quite a bit, and I have collected some of that research here
        for future me (and maybe for you, too).
      </p>

      <PrinciplesList highlight>
        {data.principles.edges.map(({ node }, index) => (
          <div key={index}>
            <li className="serif">
              <Highlight>{node.title}</Highlight>
            </li>

            <PrincipleDescription>
              <Markdown>{node.description}</Markdown>
            </PrincipleDescription>

            {node.links &&
              node.links.length !== 0 && (
                <div>
                  <PrincipleLinkHeading>Related Readings</PrincipleLinkHeading>

                  <List highlight={false}>
                    {node.links.map((link, i) => (
                      <p key={i}>
                        <li>
                          <a href={link.url} target="_blank">
                            {link.title}
                          </a>
                        </li>
                      </p>
                    ))}
                  </List>
                </div>
              )}

            {/* <div>
              {node.categories.map((category, i) =>
                <Token key={i}><Icon small name='tag' /> {category}</Token>
              )}
            </div> */}
          </div>
        ))}
      </PrinciplesList>
    </Page>
  )
}

export default PrinciplesPage

export const query = graphql`
  query PrinciplesQuery {
    principles: allPrinciplesHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          description
          categories
          links {
            title
            url
          }
        }
      }
    }
  }
`
