import React from 'react'
import Page from 'components/Page'
import { Box, Grid } from '@chasemccoy/kit'
import Sidebar from 'components/notes/Sidebar'

const Notes = ({ pageContext: { notes, categories } }) => (
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
    </Grid>
  </Page>
)

export default Notes