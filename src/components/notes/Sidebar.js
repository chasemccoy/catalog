import React from 'react'
import { Box } from '@chasemccoy/kit'
import Link from 'components/Link'
import Heading from 'components/Heading'
import TableOfContents from 'components/notes/TableOfContents'
import { capitalize } from 'utils/js'

const Sidebar = ({ data }) => (
  <>
    <Heading.section>Categories</Heading.section>
    
    {Object.entries(data).map(([key, value], i) => (
      <Box key={i}>
        <Link 
          fontFamily='mono' 
          fontSize='16px' 
          to={value[0].pagePath} 
          partiallyActive
          css={`
            &.selected {
              color: ${props => props.theme.colors.page.text};
            }
          `}
        >
          {capitalize(key)}
        </Link>
      </Box>
    ))}
  </>
)

Sidebar.Notes = ({ data }) => (
  <>
    <Heading.section>Notes</Heading.section>

    {data.map(note => (
      <Box mb='8px' key={note.id}>
        <Link 
          fontFamily='mono' 
          fontSize='16px' 
          to={note.fields.slug}
          css={`
            &.selected {
              color: ${props => props.theme.colors.page.text};
            }
          `}
        >
          {note.frontmatter.title}
        </Link>

        <TableOfContents data={note.tableOfContents} />
      </Box>
    ))}
  </>
)

export default Sidebar