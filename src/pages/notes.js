import React from 'react'
import Page from 'components/Page'
import { graphql } from 'gatsby'
import NotesList from 'components/notes/List'
import { slugify, capitalize } from 'utils'
import Link from 'components/Link'
import { Box } from '@chasemccoy/kit'

const Sidebar = ({ categories }) => (
  <React.Fragment>
    <Page.SidebarHeader>Categories</Page.SidebarHeader>

    {categories.map(category => (
      <Box mb={4} key={category}>
        <Link
          unstyled
          to={`/notes/${slugify(category)}`}
          partiallyActive
          css={`
            &.selected {
              color: ${props => props.theme.colors.accent};
            }
          `}
        >
          {capitalize(category)}
        </Link>
      </Box>
    ))}
  </React.Fragment>
)

const Notes = ({ data }) => {
  const categories = data.categories.nodes.map(node => node.name)

  return (
    <Page
      title='Notes'
      description={`A collection of links, thoughts, ideas, images, quotes, and other miscellanea I've collected in my travels across the web and through life.`}
      aside={<Sidebar categories={categories} />}
    >
      <NotesList notes={data.notes.nodes} />
    </Page>
  )
}

export default Notes

export const query = graphql`
  query NotesQuery {
    notes: allNote(
      sort: { fields: title, order: ASC }
      filter: { isLandingPage: { eq: false } }
    ) {
      nodes {
        id
        excerpt
        title
        tags {
          name
        }
        slug
        category
      }
    }

    categories: allNote(
      sort: { fields: title, order: ASC }
      filter: { isLandingPage: { eq: false } }
    ) {
      nodes: group(field: category) {
        name: fieldValue
        count: totalCount
      }
    }
  }
`
