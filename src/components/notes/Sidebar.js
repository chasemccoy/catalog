import React from 'react'
import { Box } from '@chasemccoy/kit'
import Link from 'components/Link'
import Heading from 'components/Heading'
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
              text-decoration: none;
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
      <Box key={note.id}>
        <Link 
          fontFamily='mono' 
          fontSize='16px' 
          to={note.fields.slug}
          css={`
            &.selected {
              color: ${props => props.theme.colors.page.text};
              text-decoration: none;
            }
          `}
        >
          {note.frontmatter.title}
        </Link>
      </Box>
    ))}
  </>
)

export default Sidebar