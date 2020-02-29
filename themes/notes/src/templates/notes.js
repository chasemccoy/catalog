import React from 'react'
import Page from 'components/Page'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import { capitalize } from 'utils'
import NotesList from 'components/notes/List'

const Notes = ({ pageContext: { notes, categories, category } }) => {
  const title = category ? capitalize(category) : 'Notes'
  const description = `A collection of links, thoughts, ideas, images, quotes, and other miscellanea I've collected in my travels across the web and through life.`

  return (
    <Page
      title={title}
      description={description}
      aside={categories ? <Sidebar data={categories} /> : null}
    >
      <Layout>
        <Layout.Content>
          <NotesList notes={notes.filter(note => !note.isLandingPage)} />
        </Layout.Content>
      </Layout>
    </Page>
  )
}

export default Notes
