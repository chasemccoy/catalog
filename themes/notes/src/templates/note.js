import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import { Box, Text } from '@chasemccoy/kit'
import Breadcrumbs from '../components/notes/Breadcrumbs'
import Layout from '../components/notes/Layout'
import Tags from 'components/Tags'
import Link from 'components/Link'

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

const Sidebar = ({ notes }) => (
  <Box>
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
      sidebar={notes ? <Sidebar notes={notes} /> : null}
    >
      <Layout>
        <Layout.Content>
          <Text
            fontFamily='system'
            css={`
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-family: ${p => p.theme.fonts.mono};
              }
            `}
          >
            <MDX.Renderer>{mdx.body}</MDX.Renderer>
          </Text>
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
    }
  }
`
