import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import TableOfContents from 'components/notes/TableOfContents'

const Note = ({
  data: { note },
  pageContext: { notes, categories, category }
}) => {
  return (
    <Page title={note.title} description={note.excerpt} article>
      <TableOfContents data={note.tableOfContents} />
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
