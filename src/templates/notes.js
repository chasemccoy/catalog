import React from 'react'
import Page from 'components/Page'
import { capitalize } from 'utils'
import NotesList from 'components/notes/List'
import Folder from 'assets/icons/folder.component.svg'

const Notes = ({ pageContext: { notes, categories, category } }) => {
  const title = category ? capitalize(category) : 'Notes'
  const description = category
    ? `Notes filed under the “${category}” category.`
    : `A collection of links, thoughts, ideas, images, quotes, and other miscellanea I've collected in my travels across the web and through life.`

  return (
    <Page
      title={title}
      description={description}
      section='notes'
      header={
        <div className='mb-24 prose'>
          {/* <h2 className='badge mb-16'>Note</h2> */}

          <h1 className='hyphens'>
            {category && (
              <Folder
                className='inline mr-8'
                css={`
                  width: 0.9em;
                  position: relative;
                  top: -0.12em;
                  color: var(--section-color);
                `}
              />
            )}
            {title}
          </h1>

          <p className='lead mt-8 color-gray--500'>{description}</p>

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
      <NotesList
        notes={notes.filter((note) => !note.isLandingPage)}
        className='mt-24'
      />
    </Page>
  )
}

export default Notes
