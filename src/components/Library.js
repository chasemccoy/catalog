import React from 'react'
import styled from 'styled-components'
import { colors, fontWeights } from '../utils/design'
import { Row, Column } from './Grid'
import Image from './Image'
import Markdown from './Markdown'

const ReactMarkdown = require('react-markdown')

export const LibraryItem = styled(Row)`
  margin-bottom: 24px;
`

export const LibraryItemTitle = styled.h4`
  margin-bottom: 8px;
`

export const LibraryItemSubtitle = styled.h4`
  margin-bottom: 12px;
  font-style: italic;
  font-weight: normal;
`

export const Library = props => {
  return (
		<div>
			{props.data.map(({node}, i) =>
				<LibraryItem key={i}>
					<Column width={[1/4]}>
						<Image src={`/${node.image}`} />
					</Column>

					<Column width={[3/4]}>
						<LibraryItemTitle><a href={node.url} target='_blank'>{node.title}</a></LibraryItemTitle>

						<LibraryItemSubtitle>{node.metadata}</LibraryItemSubtitle>

						<Markdown>{node.description}</Markdown>
					</Column>
				</LibraryItem>
			)}
		</div>
  )
}
