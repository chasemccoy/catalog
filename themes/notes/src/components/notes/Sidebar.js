import React from 'react'
import { Box } from '@chasemccoy/kit'
import Link from 'components/Link'
import Heading from 'components/Heading'
import TableOfContents from './TableOfContents'
import { capitalize } from 'utils'
import Page from 'components/Page'

const Sidebar = ({ data, ...rest }) => (
  <Box {...rest}>
    <Page.SidebarHeader>Categories</Page.SidebarHeader>

    {Object.entries(data)
      .sort()
      .map(([key, value], i) => (
        <Box mb={8} key={i}>
          <Link
            to={value[0].pagePath}
            color='gray.4'
            partiallyActive
            css={`
              &.selected {
                color: ${props => props.theme.colors.accent};
              }
            `}
          >
            {capitalize(key)}
          </Link>
        </Box>
      ))}
  </Box>
)

Sidebar.Notes = ({ data, category, ...rest }) => (
  <Box {...rest}>
    <Heading.h2>Notes</Heading.h2>

    {data
      .filter(note => !note.fields.isLandingPage)
      .map(note => (
        <Box key={note.id}>
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
  </Box>
)

export default Sidebar
