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

const PrinciplesList = styled(List)`
  > div {
    margin-bottom: 64px;
  }
`

const PrincipleDescription = styled.div`
  color: ${colors.card.text};
`

const PrincipleLinkHeading = styled(Heading)`
  padding: 0 0 8pxr;
  margin-bottom: 8px;
`

const PrinciplesPage = ({data}) => {
  return (
    <Page title='Principles' icon='brain'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <PrinciplesList highlight>
        {data.principles.edges.map(({node}, index) =>
          <div key={index}>
            <li>{node.title}</li>

            <PrincipleDescription>
              <Markdown>{node.description}</Markdown>
            </PrincipleDescription>

            {node.links.length !== 0 &&
              <div>
                <PrincipleLinkHeading>Related Readings</PrincipleLinkHeading>

                <List highlight={false}>
                  {node.links.map((link, i) =>
                    <li key={i}>
                      <a href={link.url} target='_blank'>{link.title}</a>
                    </li>
                  )}
                </List>
              </div>
            }

            <div>
              {node.categories.map((category, i) =>
                <Token key={i}><Icon small name='tag' /> {category}</Token>
              )}
            </div>
          </div>
        )}
      </PrinciplesList>
    </Page>
  )
}

export default PrinciplesPage

export const query = graphql`
  query PrinciplesQuery {
    principles: allPrinciplesJson(sort: {fields: [title], order: ASC}) {
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
