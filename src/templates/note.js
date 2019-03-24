import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/mdx/MDX'
import Page from 'components/Page'
import { Box, Grid, Text } from '@chasemccoy/kit'
import Heading from 'components/Heading'
import Sidebar from 'components/notes/Sidebar'

const Note = ({ data: { mdx }, pageContext: { notes, categories } }) => (
  <MDX.Provider>
    <Page title={mdx.frontmatter.title} untitled wide>
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
          <Heading.section>{mdx.frontmatter.title}</Heading.section>

          <Text fontFamily='system' fontSize='17px'>
            <MDX.Renderer>
              {mdx.code.body}
            </MDX.Renderer>
          </Text>
        </Box>
      </Grid>
    </Page>
  </MDX.Provider>
)

export default Note

export const pageQuery = graphql`
  query NoteQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`