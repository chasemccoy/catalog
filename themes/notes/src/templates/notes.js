import React from 'react'
import Page from 'components/Page'
import { Grid } from '@chasemccoy/kit'
import Heading from 'components/Heading'
import Sidebar from '../components/notes/Sidebar'
import Breadcrumbs from '../components/notes/Breadcrumbs'
import Layout from '../components/notes/Layout'
import NoteCard from '../components/notes/NoteCard'

const Notes = ({ pageContext: { notes, categories, category } }) => (
  <Page title='Notes' untitled>
    <Layout>
      <Layout.Sidebar>
        {categories && <Sidebar mb={32} data={categories} />}
        {notes && <Sidebar.Notes data={notes} />}
      </Layout.Sidebar>

      <Layout.Content>
        <Heading.section>
          <Breadcrumbs mb={32} category={category} />
        </Heading.section>

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
