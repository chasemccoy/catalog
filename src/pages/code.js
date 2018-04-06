import Library from 'components/Library'
import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'
import List from 'components/Lists'
import { Link } from 'components/Components'
import { media } from 'utils/media'
import { colors } from 'utils/design'
import { P, Span } from 'components/Base'
import Divider from 'components/Divider'

const TwoColumns = styled(List)`
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
    margin-bottom: 16px;

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
      background: ${colors.primary.gray.light};
      color: currentColor;
    }
  }

  h3 {
    margin: 0 0 4px;
  }
`

const StarredRepository = props => (
  <RepositoryListItem>
    <Container>
      <Link to={props.repository.url}>
        <h3>{props.repository.name}</h3>

        {
          <P m={0} color="gray.1">
            {props.repository.description}
          </P>
        }

        {
          <P color="gray.2" fontSize={14}>
            {props.repository.owner.login}
          </P>
        }
      </Link>
    </Container>
  </RepositoryListItem>
)

const CodePage = ({ data }) => {
  return (
    <Page icon="code" title="Code">
      <P mb={8}>
        Some of my favorite open sourced projects (sourced from my starred
        repositories on GitHub).
      </P>

      <Divider mb={8} />

      <TwoColumns plain>
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
