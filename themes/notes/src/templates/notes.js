import React from 'react'
import Page from 'components/Page'
import { Grid, Heading } from '@chasemccoy/kit'
import Sidebar from '../components/notes/Sidebar'
// import Breadcrumbs from '../components/notes/Breadcrumbs'
import Layout from '../components/notes/Layout'
import NoteCard from '../components/notes/NoteCard'

const Notes = ({ pageContext: { notes, categories, category } }) => (
  <Page title='Notes' untitled>
    <Layout>
      <Layout.Sidebar>
        {categories && <Sidebar data={categories} />}
        {/* {notes && <Sidebar.Notes data={notes} />} */}
      </Layout.Sidebar>

      <Layout.Content>
        <Heading.h2>Notes</Heading.h2>

        <Grid>
          {notes
            .filter(note => !note.fields.isLandingPage)
            .map(note => (
              <NoteCard
                title={note.frontmatter.title}
                tags={note.frontmatter.tags}
                description={note.excerpt}
                to={note.fields.slug}
                width={[1, 1 / 2, 1, 1 / 2]}
                key={note.id}
              />
            ))}
        </Grid>
      </Layout.Content>
    </Layout>
  </Page>
)

export default Notes
