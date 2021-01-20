import React from 'react'
import { graphql } from 'gatsby'
import MDX from 'components/MDX'
import Page from 'components/Page'
import TableOfContents from 'components/notes/TableOfContents'
import { capitalize, slugify } from 'utils'
import Link from 'components/Link'
import Folder from 'assets/icons/folder.component.svg'

const Note = ({
  data: { note },
  pageContext: { notes, categories, category }
}) => {
  return (
    <Page
      title={note.title}
      description={note.excerpt}
      article
      section='notes'
      header={
        <div className='mb-24 prose'>
          <h2 className='badge mb-16'>Note</h2>

          <h1 className='hyphens'>{note.title}</h1>

          <p className='lead mt-8 color-gray--500'>{note.excerpt}</p>

          <p className='smaller mt-16'>
            <Link
              unstyled
              to={`/notes/${slugify(note.category)}`}
              css={`
                color: var(--section-color);
                &:hover {
                  text-decoration: underline;
                }
              `}
              className='bold'
            >
              <Folder
                className='inline'
                css={`
                  position: relative;
                  top: -0.2em;
                `}
              />{' '}
              {capitalize(note.category)}
            </Link>
            {note.tags && (
              <React.Fragment>
                <span className='color-gray--400 mx-8'>×</span>
                <span className='color-gray--500'>
                  {note.tags.map((tag) => tag.name).join(', ')}
                </span>
              </React.Fragment>
            )}
          </p>

          <TableOfContents data={note.tableOfContents} className='mt-16' />

          <hr
            css={`
              background: none;
              border-top: 1px dashed var(--color-border);
              height: 1px;
            `}
            className='mt-24'
          />
        </div>
      }
    >
      <MDX.Renderer>{note.content}</MDX.Renderer>
    </Page>
  )
}

export default Note

export const pageQuery = graphql`
  query NoteQuery($id: String) {
    note(id: { eq: $id }) {
      id
      excerpt
      title
      tags {
        name
      }
      isLandingPage
      content
      tableOfContents
      category
    }
  }
`
