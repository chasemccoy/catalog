import React from 'react'
import Page from 'components/Page'
import { graphql } from 'gatsby'
import NotesList from 'components/notes/List'

const Notes = ({ data }) => {
  return (
    <Page
      title='Notes'
      description={
        "My digital garden, containing a collection of links, thoughts, ideas, images, quotes, and other miscellanea I've collected on my travels across the web."
      }
      section='notes'
    >
      <NotesList notes={data.notes.nodes} className='mt-24' />
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
