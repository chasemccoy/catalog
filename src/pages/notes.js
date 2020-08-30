import React from 'react'
import Page from 'components/Page'
import { graphql } from 'gatsby'
import NotesList from 'components/notes/List'
import { slugify, capitalize } from 'utils'
import Link from 'components/Link'
import { Box, Text } from '@chasemccoy/kit'

const Sidebar = ({ categories }) => (
  <Text fontSize='0.8em'>
    <Page.SidebarHeader>Categories</Page.SidebarHeader>

    {categories.map((category) => (
      <Box mb={4} key={category}>
        <Link
          unstyled
          to={`/notes/${slugify(category)}`}
          partiallyActive
          css={`
            &.selected {
              position: relative;
              font-weight: 700;

              &:after {
                position: absolute;
                background-color: ${(p) => p.theme.colors.yellow[200]};
                margin-top: 0.25rem;
                margin-left: 0.25rem;
                width: 100%;
                z-index: -1;
                height: 100%;
                top: -3px;
                left: 0px;
                content: '';
              }
            }
          `}
        >
          {capitalize(category)}
        </Link>
      </Box>
    ))}
  </Text>
)

const Notes = ({ data }) => {
  const categories = data.categories.nodes.map((node) => node.name)

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
