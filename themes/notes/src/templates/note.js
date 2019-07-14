import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import { Text, Heading } from '@chasemccoy/kit'
import Breadcrumbs from '../components/notes/Breadcrumbs'
import Layout from '../components/notes/Layout'
import Tags from 'components/Tags'

const Header = ({ category, tags, ...rest }) => (
  <Page.Header {...rest}>
    {(Title, _, title) => (
      <React.Fragment>
        <Breadcrumbs category={category} title={title} />

        <Title mb={tags ? 16 : 0} />

        {tags && <Tags items={tags} />}
      </React.Fragment>
    )}
  </Page.Header>
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
