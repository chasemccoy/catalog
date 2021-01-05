import React from 'react'
import Table from 'components/Table'
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
      {...rest}
    >
      <tbody>
        {notes.map((note) => {
          const tags = note.tags && note.tags.map((tag) => tag.name)

          return (
            <tr key={note.id}>
              <td>
                <h2>
                  <Link to={note.slug} unstyled>
                    {note.title}
                  </Link>
                </h2>

                <Link
                  to={`/notes/${slugify(note.category)}`}
                  unstyled
                  color='var(--color-gray--500)'
                  css='font-size: smaller;'
                >
                  → {capitalize(note.category)}
                </Link>
              </td>
              <td>
                {note.excerpt && (
                  <p css='font-size: smaller;'>{note.excerpt}</p>
                )}
                <Tags className='mt-8' items={tags} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default NoteList
