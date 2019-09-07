import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import { Box } from '@chasemccoy/kit'
import Breadcrumbs from '../components/notes/Breadcrumbs'
import Layout from '../components/notes/Layout'
import Tags from 'components/Tags'
import Link from 'components/Link'
import NoteSidebar from '../components/notes/Sidebar'

const Header = ({ category, tags, ...rest }) => (
  <Page.Header {...rest}>
    {(Title, Description, title) => (
      <React.Fragment>
        <Breadcrumbs category={category} title={title} />

        <Title mb={tags || Description ? 16 : 0} />

        {Description && <Description mb={tags ? 16 : 0} />}

        {tags && <Tags items={tags} />}
      </React.Fragment>
    )}
  </Page.Header>
)

const Sidebar = ({ notes, categories, tableOfContents }) => (
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
        <Page.SidebarHeader>More in this category</Page.SidebarHeader>

        {notes.map(note => (
          <Box key={note.id} mb={8}>
            <Link
              to={note.fields.slug}
              color='gray.4'
              css={`
                &.selected {
                  color: ${props => props.theme.colors.accent};
                }
              `}
            >
              {note.frontmatter.title}
            </Link>
          </Box>
        ))}
      </React.Fragment>
    )}

    <NoteSidebar mt={24} data={categories} />
  </Box>
)

const Note = ({
  data: { mdx },
  pageContext: { notes, categories, category }
}) => (
  <MDX.Provider>
    <Page
      title={mdx.frontmatter.title}
      description={mdx.excerpt}
      untitled
      header={<Header category={category} tags={mdx.frontmatter.tags} />}
      sidebar={
        <Sidebar
          notes={notes}
          categories={categories}
          tableOfContents={mdx.tableOfContents}
        />
      }
    >
      <Layout>
        <Layout.Content mb={[0, 0, 0, 80]}>
          <MDX.Renderer>{mdx.body}</MDX.Renderer>
        </Layout.Content>
      </Layout>
    </Page>
  </MDX.Provider>
)

export default Note

export const pageQuery = graphql`
  query NoteQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      frontmatter {
        title
        tags
      }
      body
      tableOfContents
    }
  }
`
