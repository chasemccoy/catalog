import React from 'react'
import Page from 'components/Page'
import { Box, Grid, Text } from '@chasemccoy/kit'
import Heading from 'components/Heading'
import Link from 'components/Link'
import Sidebar from '../components/notes/Sidebar'
import Breadcrumbs from '../components/notes/Breadcrumbs'
import Layout from '../components/notes/Layout'

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
              <Box width={[1, 1 / 2, 1, 1 / 2]} key={note.id}>
                <Link
                  unstyled
                  fontFamily='mono'
                  fontWeight='bold'
                  fontSize='22px'
                  to={note.fields.slug}
                >
                  {note.frontmatter.title}
                </Link>

                {note.frontmatter.tags && (
                  <Text
                    color='gray.4'
                    fontFamily='mono'
                    fontSize='14px'
                    mb='4px'
                  >
                    tagged: {note.frontmatter.tags.join(', ')}
                  </Text>
                )}

                <Text.p fontFamily='system' fontSize='16px' mb='8px'>
                  {note.excerpt}
                </Text.p>
              </Box>
            ))}
        </Grid>
      </Layout.Content>
    </Layout>
  </Page>
)

export default Notes
