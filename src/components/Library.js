import { Column, Row, Float } from 'components/Grid'
import { Heading, Link } from 'components/Components'
import { colors, fontWeights, sizes } from 'utils/design'

import Card from 'components/Card'
import Image from 'components/Image'
import Markdown from 'components/Markdown'
import React from 'react'
import styled from 'styled-components'

const LibraryCard = styled(Card)`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 16px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  img {
    width: 100%;
  }
`

const LibraryCardTitle = styled.h3`
  margin-bottom: 6px;
`

const LibraryCardSubtitle = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: normal;
  color: ${colors.text.muted};
`

const LibraryItemPreviewImage = styled(Image)`
  margin-bottom: 0;
`

const LibrarySectionCard = styled(Card)`
  margin-bottom: 24px;
  text-align: center;
  font-weight: ${fontWeights.semibold};
  padding: 12px;

  &,
  &:hover {
    color: ${colors.primary.blue} !important;
    background-color: #f5faff;
    border: none;
    box-shadow: none;
  }
`

const SpotifyEmbed = styled.iframe`
  border: none;
  margin: 0;
`

const Library = props => {
  const data = props.preview ? props.data.slice(0, 4) : props.data

  const calculateWidth = mediaWidth => {
    return mediaWidth.map(value => {
      const width = value == 1 ? 1 : 1 - value
      return width
    })
  }

  if (props.preview) {
    return (
      <Row align="flex-end" {...props}>
        {data.map(({ node }, i) => (
          <Column width={[1 / 2, 1 / 4]} key={i}>
            {node.image && (
              <LibraryItemPreviewImage
                src={`/${node.image}`}
                sizes={
                  node.image.childImageSharp && node.image.childImageSharp.sizes
                }
              />
            )}
          </Column>
        ))}

        <Column width={1}>
          <LibrarySectionCard to={props.section} highlight>
            See More
          </LibrarySectionCard>
        </Column>
      </Row>
    )
  } else {
    return (
      <div>
        {data.map(({ node }, i) => (
          <LibraryCard to={node.url} key={i}>
            <div className="clear">
              {node.spotify && (
                <Float width={[1, '350px']}>
                  <SpotifyEmbed
                    src={`https://open.spotify.com/embed?uri=spotify:album:${node.spotify}`}
                    height='280'
                    width='100%'
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    key={i}
                  />
                </Float>
              )}

              {node.image && !node.spotify && (
                <Float width={props.mediaWidth || [1, 1 / 4]}>
                  <Image sizes={node.image.childImageSharp.sizes} />
                </Float>
              )}

              <LibraryCardTitle>{node.title}</LibraryCardTitle>

              {node.metadata && (
                <LibraryCardSubtitle className='sans'>{node.metadata}</LibraryCardSubtitle>
              )}

              <Markdown>{node.description}</Markdown>
            </div>
          </LibraryCard>
        ))}
      </div>
    )
  }
}

export default Library
