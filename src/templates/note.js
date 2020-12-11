import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'

const Note = ({
  data: { note },
  pageContext: { notes, categories, category }
}) => {
  return (
    <Page title={note.title} description={note.excerpt} article>
      <MDX.Renderer>{note.content}</MDX.Renderer>
    </Page>
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
