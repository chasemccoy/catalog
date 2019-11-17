import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import { Box } from '@chasemccoy/kit'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Tags from 'components/Tags'
import Link from 'components/Link'
import NoteSidebar from '../components/Sidebar'

const Header = ({ category, tags, isLandingPage, ...rest }) => (
  <Page.Header {...rest}>
    {(Title, Description, title) => (
      <React.Fragment>
        <Breadcrumbs
          category={category}
          title={title}
          isLandingPage={isLandingPage}
        />

        <Title mb={tags || Description ? 16 : 0} />

        {Description && <Description mb={tags ? 16 : 0} />}

        {tags && <Tags items={tags} />}
      </React.Fragment>
    )}
  </Page.Header>
)

const Sidebar = ({ notes, category, categories, tableOfContents }) => (
  <Box>
    {tableOfContents && tableOfContents.items && (
      <Box mb={24}>
        <Page.SidebarHeader>On this page</Page.SidebarHeader>

        {tableOfContents.items.map((item, i) => (
          <Box key={i} mb={8}>
            <Link to={item.url} color='gray.4'>
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
          note =>
            !note.isLandingPage && (
              <Box key={note.id} mb={8}>
                <Link
                  to={note.slug}
                  color='gray.4'
                  css={`
                    &.selected {
                      color: ${props => props.theme.colors.accent};
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
  </Box>
)

const Note = ({
  data: { note },
  pageContext: { notes, categories, category }
}) => {
  const tags = note.tags && note.tags.map(tag => tag.name)

  return (
    <MDX.Provider>
      <Page
        title={note.title}
        description={note.excerpt}
        untitled
        header={
          <Header
            category={category}
            tags={tags}
            isLandingPage={note.isLandingPage}
          />
        }
        sidebar={
          <Sidebar
            notes={notes}
            category={category}
            categories={categories}
            tableOfContents={note.tableOfContents}
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
