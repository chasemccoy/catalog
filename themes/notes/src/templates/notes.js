import React from 'react'
import Page from 'components/Page'
import { Grid } from '@chasemccoy/kit'
import Sidebar from '../components/notes/Sidebar'
import Layout from '../components/notes/Layout'
import NoteCard from '../components/notes/NoteCard'
import Breadcrumbs from '../components/notes/Breadcrumbs'
import { capitalize } from 'utils'

const Header = ({ category, ...props }) => (
  <Page.Header {...props}>
    {(Title, Description) => (
      <React.Fragment>
        {category && <Breadcrumbs />}

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
        <Grid>
          {notes
            .filter(note => !note.fields.isLandingPage)
            .map(note => (
              <NoteCard
                title={note.frontmatter.title}
                tags={note.frontmatter.tags}
                description={note.excerpt}
                to={note.fields.slug}
                width={[1, 1 / 2]}
                key={note.id}
              />
            ))}
        </Grid>
      </Layout.Content>
    </Layout>
  </Page>
)

export default Notes
