import React from 'react'
import Page from 'components/Page'
import { capitalize } from 'utils'
import NotesList from 'components/notes/List'

const Notes = ({ pageContext: { notes, categories, category } }) => {
  const title = category ? capitalize(category) : 'Notes'
  const description = `A collection of links, thoughts, ideas, images, quotes, and other miscellanea I've collected in my travels across the web and through life.`

  return (
    <Page title={title} description={description}>
      <NotesList notes={notes.filter((note) => !note.isLandingPage)} />
    </Page>
  )
}

export default Notes
