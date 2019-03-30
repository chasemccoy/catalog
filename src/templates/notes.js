import React from 'react'
import Page from 'components/Page'
import { Box, Grid, Text } from '@chasemccoy/kit'
import Heading from 'components/Heading'
import Link from 'components/Link'
import Sidebar from 'components/notes/Sidebar'
import Breadcrumbs from 'components/notes/Breadcrumbs'

const Notes = ({ pageContext: { notes, categories, category } }) => (
  <Page title='Notes' wide untitled>
    <Grid gutter={32}>
      <Box width={[1, 1, 1, 1/3, 1.2/5]}>
        {categories && (
          <Box mb={32}>
            <Sidebar data={categories} />
          </Box>
        )}

        {notes && <Sidebar.Notes data={notes} />}
      </Box>

      <Box width={[1, 1, 1, 2/3, 3/5]}> 
        <Heading.section>
          <Breadcrumbs mb={32} category={category} title='Recently edited' />
        </Heading.section>
        
        <Grid>
          {notes.sort((a, b) => {
            return new Date(b.parent.modifiedDate) - new Date(a.parent.modifiedDate)
          }).map(note => (
            <Box width={[1, 1/2, 1, 1/2]} key={note.id}>
              <Link unstyled fontFamily='mono' fontWeight='bold' to={note.fields.slug}>{note.frontmatter.title}</Link>

              <Text color='gray.4'fontFamily='mono' fontSize='14px' mb='4px'>
                edited {note.parent.modifiedString}
              </Text>
              
              <Text.p fontFamily='system' fontSize='16px' mb='8px'>
                {note.excerpt}
              </Text.p>
            </Box>
          ))}
        </Grid>
      </Box>
    </Grid>
  </Page>
)

export default Notes