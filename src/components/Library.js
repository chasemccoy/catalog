import { Column, Row } from 'components/Grid'
import { Heading, Link } from 'components/Components'
import { colors, fontWeights, sizes } from 'utils/design'

import Card from 'components/Card'
import Image from 'components/Image'
import Markdown from 'components/Markdown'
import React from 'react'
import styled from 'styled-components'

const ReactMarkdown = require('react-markdown')

const LibraryCard = styled(Card)`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 16px;
  }
`

const LibraryCardTitle = styled.h4`
  margin-bottom: 8px;
`

const LibraryCardSubtitle = styled.h4`
  margin-bottom: 12px;
  font-style: italic;
  font-weight: normal;
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

  &:hover {
    color: ${colors.sidebar.link.selected} !important;
  }
`

export const Library = props => {
  const data = props.preview ? props.data.slice(0, 4) : props.data;

  if (props.preview) {
    return (
      <Row align='flex-end' {...props}>
        {data.map(({node}, i) =>
					<Column width={[1/4]} key={i}>
						<LibraryItemPreviewImage src={`/${node.image}`} />
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
    				<Row>
    					<Column width={[1/4]}>
    						<Image src={`/${node.image}`} />
    					</Column>

    					<Column width={[3/4]}>
    						<LibraryCardTitle>{node.title}</LibraryCardTitle>

    						<LibraryCardSubtitle>{node.metadata}</LibraryCardSubtitle>

    						<Markdown>{node.description}</Markdown>
    					</Column>
    				</Row>
          </LibraryCard>
  			)}
  		</div>
    )
  }
}
