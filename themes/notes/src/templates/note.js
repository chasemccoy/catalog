import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import { Text, Heading } from '@chasemccoy/kit'
import Sidebar from '../components/notes/Sidebar'
import Breadcrumbs from '../components/notes/Breadcrumbs'
import Layout from '../components/notes/Layout'
import Tags from 'components/Tags'

const Note = ({
  data: { mdx },
  pageContext: { notes, categories, category }
}) => (
  <MDX.Provider>
    <Page title={mdx.frontmatter.title} untitled>
      <Layout>
        {/* <Layout.Sidebar>
          {categories && <Sidebar mb={32} data={categories} />}
          {notes && <Sidebar.Notes data={notes} />}
        </Layout.Sidebar> */}

        <Layout.Content>
          <Breadcrumbs category={category} title={mdx.frontmatter.title} />

          {mdx.frontmatter.title && (
            <Heading.h1 mb={12}>{mdx.frontmatter.title}</Heading.h1>
          )}

          {mdx.frontmatter.tags && (
            <Tags items={mdx.frontmatter.tags} mb={32} />
          )}

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
      frontmatter {
        title
        tags
      }
      body
    }
  }
`
