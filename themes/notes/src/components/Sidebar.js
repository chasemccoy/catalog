import React from 'react'
import { Box } from '@chasemccoy/kit'
import Link from 'components/Link'
import TableOfContents from './TableOfContents'
import { capitalize } from 'utils'
import Page from 'components/Page'

const Sidebar = ({ data, ...rest }) => (
  <Box mb={32} {...rest}>
    <Page.SidebarHeader>Categories</Page.SidebarHeader>

    {Object.entries(data)
      .sort()
      .map(([key, value], i) => (
        <Box mb={4} key={i}>
          <Link
            unstyled
            to={value[0].pagePath}
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
    <Page.SidebarHeader>Notes</Page.SidebarHeader>

    {data
      .filter(note => !note.fields.isLandingPage)
      .map(note => (
        <Box mb={4} key={note.id}>
          <Link
            unstyled
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
