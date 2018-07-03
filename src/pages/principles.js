import Markdown from 'components/Markdown'
import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'

const PrinciplesList = styled(UnorderedList)`
  > div {
    margin-bottom: 64px;
  }
`

const PrincipleDescription = styled.div`
  font-family: ${props => props.theme.fontFamily.body};
`

const PrincipleLinkHeading = styled.h2`
  padding: 0 0 8px;
  margin-bottom: 8px;
`

export const Highlight = styled.span`
  background: ${props => props.theme.colors.highlight};
`

const PrinciplesPage = ({ data }) => {
  return (
    <Page title="Principles" icon="brain" description="Read these every day before you get out of bed.">
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

                  <UnorderedList highlight={false}>
                    {node.links.map((link, i) => (
                      <p key={i}>
                        <li>
                          <Link to={link.url}>
                            {link.title}
                          </Link>
                        </li>
                      </p>
                    ))}
                  </UnorderedList>
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
