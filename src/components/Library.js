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
  margin-bottom: 8px;

  ${props => props.media && `
    font-size: 2rem;
    font-weight: ${fontWeights.heavy};
  `}
`

const LibraryCardSubtitle = styled.h3`
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
  ${'' /* color: ${colors.text.heading} !important; */}
  font-weight: ${fontWeights.semibold};
  padding: 12px;

  &, &:hover {
    color: ${colors.primary.blue} !important;
    background-color: #F5FAFF;
    border: none;
    box-shadow: none;
  }
`

const Library = props => {
  const data = props.preview ? props.data.slice(0, 4) : props.data;

  const calculateWidth = (mediaWidth) => {
    return mediaWidth.map((value) => {
      const width = value == 1 ? 1 : 1 - value
      return width
    })
  }

  if (props.preview) {
    return (
      <Row align='flex-end' {...props}>
        {data.map(({node}, i) =>
					<Column width={[1/2, 1/4]} key={i}>
						{node.image && <LibraryItemPreviewImage src={`/${node.image}`} />}
					</Column>
  			)}

        <Column width={1}>
					<LibrarySectionCard to={props.section} highlight>See More</LibrarySectionCard>
				</Column>
      </Row>
    )
  }
  else {
    return (
      <div>
  			{data.map(({node}, i) =>
          <LibraryCard to={node.url} key={i}>
    				<div className='clear'>
              {node.image &&
      					<Float width={props.mediaWidth || [1, 1/4]}>
      						<Image src={`/${node.image}`} />
      					</Float>
              }

    						<LibraryCardTitle>{node.title}</LibraryCardTitle>

    						{node.metadata && <LibraryCardSubtitle>{node.metadata}</LibraryCardSubtitle>}

    						<Markdown>{node.description}</Markdown>
    				</div>
          </LibraryCard>
  			)}
  		</div>
    )
  }
}

export default Library
