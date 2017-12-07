import React from 'react'
import styled from 'styled-components'
import { colors, sizes, fontWeights } from '../utils/design'
import { Row, Column } from './Grid'
import Card from './Card'
import Image from './Image'
import Markdown from './Markdown'
import { Heading, Link } from './Components'

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
  color: ${colors.text.heading} !important;
  font-weight: ${fontWeights.bold};
  padding: 12px;

  &:hover {
    color: ${colors.sidebar.link.selected} !important;
  }
`

export const Library = props => {
  const data = props.preview ? props.data.slice(0, 4) : props.data;

  if (props.preview) {
    return (
      <Row align='flex-end'>
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
    				<Row mt={0} mx={0} px={[0, '4px']}>
    					<Column width={[1/4]} py={[8, 16]}>
    						<Image src={`/${node.image}`} />
    					</Column>

    					<Column width={[3/4]} py={[8, 16]}>
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
