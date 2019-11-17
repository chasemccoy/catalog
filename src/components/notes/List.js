import React from 'react'
import Table from 'components/Table'
import { Text } from '@chasemccoy/kit'
import Tags from 'components/Tags'
import { capitalize } from 'utils'
import Link from 'components/Link'

const NoteList = ({ notes, ...rest }) => {
  return (
    <Table
      css={`
        tr td:first-child {
          width: 25%;
        }
      `}
      {...rest}
    >
      {notes.map(note => {
        const tags = note.tags && note.tags.map(tag => tag.name)

        return (
          <tr>
            <td>
              <Text fontWeight='bold' mb={4}>
                <Link to={note.slug} unstyled>
                  {note.title}
                </Link>
              </Text>
              <Text fontSize='13px' color='gray.4'>
                → {capitalize(note.category)}
              </Text>
            </td>
            <td>
              {note.excerpt && (
                <Text mb={12} fontSize='15px'>
                  {note.excerpt}
                </Text>
              )}
              <Tags mt={0} items={tags} />
            </td>
          </tr>
        )
      })}
    </Table>
  )
}

export default NoteList
