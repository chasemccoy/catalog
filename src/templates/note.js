import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import NoteSidebar from 'components/notes/Sidebar'
import Sidebar from 'components/Sidebar'

const Note = ({
  data: { note },
  pageContext: { notes, categories, category }
}) => {
  const tags = note.tags && note.tags.map((tag) => tag.name)

  return (
    <Page
      title={note.title}
      description={note.excerpt}
      article
      // aside={
      //   <Sidebar
      //     tableOfContents={note.tableOfContents}
      //     tags={tags}
      //     relatedItems={notes.filter((note) => !note.isLandingPage)}
      //   >
      //     <NoteSidebar data={categories} />
      //   </Sidebar>
      // }
    >
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
