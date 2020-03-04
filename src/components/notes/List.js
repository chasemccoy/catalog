import React from 'react'
import Table from 'components/Table'
import { Text } from '@chasemccoy/kit'
import Tags from 'components/Tags'
import { capitalize, slugify } from 'utils'
import Link from 'components/Link'

const NoteList = ({ notes, ...rest }) => {
  return (
    <Table
      css={`
        tr td:first-child {
          width: 25%;
        }
      `}
      mt={-12}
      {...rest}
    >
      <tbody>
        {notes.map(note => {
          const tags = note.tags && note.tags.map(tag => tag.name)

          return (
            <tr key={note.id}>
              <td>
                <Text as='h4' fontSize='1.1rem' mt={0} mb={4}>
                  <Link to={note.slug} unstyled>
                    {note.title}
                  </Link>
                </Text>
                <Text fontSize='0.75em'>
                  <Link
                    to={`/notes/${slugify(note.category)}`}
                    unstyled
                    color='gray.4'
                  >
                    → {capitalize(note.category)}
                  </Link>
                </Text>
              </td>
              <td>
                {note.excerpt && (
                  <Text mb={8} fontSize='0.9em' lineHeight='1.4'>
                    {note.excerpt}
                  </Text>
                )}
                <Tags mt={0} items={tags} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default NoteList
