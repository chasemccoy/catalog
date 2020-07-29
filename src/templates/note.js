import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import { Box, Text } from '@chasemccoy/kit'
import Layout from 'components/notes/Layout'
import Link from 'components/Link'
import NoteSidebar from 'components/notes/Sidebar'
import Tags from 'components/Tags'

const Sidebar = ({ notes, category, categories, tableOfContents, tags }) => (
  <Text fontSize='0.8em'>
    {tags && (
      <Box mb={24}>
        <Page.SidebarHeader>Tags</Page.SidebarHeader>
        <Tags items={tags} />
      </Box>
    )}

    {tableOfContents && tableOfContents.items && (
      <Box mb={24}>
        <Page.SidebarHeader>On this page</Page.SidebarHeader>

        {tableOfContents.items.map((item, i) => (
          <Box key={i} mb={4}>
            <Link unstyled to={item.url}>
              {item.title}
            </Link>
          </Box>
        ))}
      </Box>
    )}

    {notes && (
      <React.Fragment>
        <Page.SidebarHeader>More in {category}</Page.SidebarHeader>

        {notes.map(
          (note) =>
            !note.isLandingPage && (
              <Box key={note.id} mb={4}>
                <Link
                  unstyled
                  to={note.slug}
                  css={`
                    &.selected {
                      color: ${(props) => props.theme.colors.accent};
                    }
                  `}
                >
                  {note.title}
                </Link>
              </Box>
            )
        )}
      </React.Fragment>
    )}

    <NoteSidebar mt={24} data={categories} />
  </Text>
)

const Note = ({
  data: { note },
  pageContext: { notes, categories, category }
}) => {
  const tags = note.tags && note.tags.map((tag) => tag.name)

  return (
    <MDX.Provider>
      <Page
        title={note.title}
        description={note.excerpt}
        article
        header={<Page.Header category={category} />}
        aside={
          <Sidebar
            notes={notes}
            category={category}
            categories={categories}
            tableOfContents={note.tableOfContents}
            tags={tags}
          />
        }
      >
        <Layout>
          <Layout.Content mb={[0, 0, 0, 80]}>
            <MDX.Renderer>{note.content}</MDX.Renderer>
          </Layout.Content>
        </Layout>
      </Page>
    </MDX.Provider>
  )
}

export default Note

export const pageQuery = graphql`
  query NoteQuery($id: String) {
    note(id: { eq: $id }) {
      id
      excerpt
      title
      tags {
        name
      }
      isLandingPage
      content
      tableOfContents
    }
  }
`
