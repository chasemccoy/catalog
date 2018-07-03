import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'
import { UnorderedList } from 'components/Lists'
import Link from 'components/Link'
import media from 'utils/media'
import { P } from 'components/Base'
import Divider from 'components/Divider'
import { graphql } from 'gatsby'

const TwoColumns = styled(UnorderedList)`
  display: block;
  column-count: 2;
  column-gap: 40px;
  column-width: 50%;

  ${media.tiny`
    column-count: 1;
    column-width: 100%;
  `};
`

const RepositoryListItem = styled.li`
  display: block !important;
  padding: 0 !important;
  break-inside: avoid;

  & + & {
    margin-top: 16px;

    ${media.tiny`
      margin-bottom: 24px;
    `};
  }
`

const Container = styled.div`
  a {
    text-decoration: none;
    display: block;
    padding: 16px;
    margin: -16px;
    border-radius: 8px;

    &:hover {
      background: ${p => p.theme.colors.gray[0]};
      color: currentColor;
    }
  }

  h3 {
    font-family: ${p => p.theme.fontFamily.mono};
  }
`

const StarredRepository = props => (
  <RepositoryListItem>
    <Container>
      <Link to={props.repository.url}>
        <h3>{props.repository.name}</h3>
          <P m={0} mb={2} color="type.body">
            {props.repository.description}
          </P>

          <P color="gray.3" fontSize={14}>
            {props.repository.owner.login}
          </P>
      </Link>
    </Container>
  </RepositoryListItem>
)

const CodePage = ({ data }) => {
  return (
    <Page icon="code" title="Code" description="My favorite open source tools on the web.">
      <P mb={6}>
        Some of my favorite open sourced projects (sourced from my starred
        repositories on GitHub).
      </P>

      <Divider mb={6} />

      <TwoColumns unstyled className='full'>
        {data.starredRepositories.edges.map(({ node }, i) => (
          <StarredRepository repository={node} key={i} />
        ))}
      </TwoColumns>
    </Page>
  )
}

export default CodePage

export const query = graphql`
  query CodeQuery {
    starredRepositories: allGithubStarredrepositories {
      edges {
        node {
          name
          url
          description
          owner {
            login
          }
        }
      }
    }
  }
`
