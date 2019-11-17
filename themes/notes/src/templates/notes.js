import React from 'react'
import Page from 'components/Page'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Breadcrumbs from '../components/Breadcrumbs'
import { capitalize } from 'utils'
import NotesList from 'components/notes/List'

const Header = ({ category, ...props }) => (
  <Page.Header {...props}>
    {(Title, Description) => (
      <React.Fragment>
        {category && <Breadcrumbs category={category} />}
        <Title mt={category ? undefined : 0} />
        <Description />
      </React.Fragment>
    )}
  </Page.Header>
)

const Notes = ({ pageContext: { notes, categories, category } }) => (
  <Page
    title={category ? capitalize(category) : 'Notes'}
    description={`A collection of links, thoughts, ideas, images, quotes, and other miscellanea I've collected in my travels across the web and through life.`}
    untitled
    header={<Header category={category} />}
    sidebar={categories ? <Sidebar data={categories} /> : null}
  >
    <Layout>
      <Layout.Content>
        <NotesList notes={notes.filter(note => !note.isLandingPage)} />
      </Layout.Content>
    </Layout>
  </Page>
)

export default Notes
