import React from 'react'
import Page from 'components/Page'
import { Box, Grid } from '@chasemccoy/kit'
import Sidebar from 'components/notes/Sidebar'

const Notes = ({ pageContext: { notes, categories } }) => (
  <Page title='Notes' wide untitled>
    <Grid>
      {categories && (
        <Box width={[1, 1/3, 1, 1/3, 0.8/5]}>
          <Sidebar data={categories} />
        </Box>
      )}

      {notes && (
        <Box width={[1, 2/3, 1, 2/3, 1.2/5]}>
          <Sidebar.Notes data={notes} />
        </Box>
      )}
    </Grid>
  </Page>
)

export default Notes