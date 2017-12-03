import React from 'react'
import Page from '../components/Page'
import styled from 'styled-components'
import {Library} from '../components/Library'

const MusicPage = ({data}) => {
  return (
    <Page title='Music'>
      <Library data={data.music.edges} />
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
