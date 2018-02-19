import Library from 'components/Library'
import Page from 'components/Page'
import React from 'react'
import styled from 'styled-components'

const MusicPage = ({data}) => {
  return (
    <Page title='Music' icon='music'>
      <Library
        data={data.music.edges}
        mediaWidth={1/3}
      />
    </Page>
  )
}

export default MusicPage

export const query = graphql`
  query MusicQuery {
    music: allMusicJson(sort: {fields: [title], order: ASC}) {
      edges {
        node {
          title
          metadata
          description
          url
          image
        }
      }
    }
  }
`
