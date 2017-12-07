import React from 'react'
import styled from 'styled-components'
import { colors, sizes, fontWeights } from '../utils/design'
import { Row, Column } from './Grid'
import Card from './Card'
import Image from './Image'
import Markdown from './Markdown'
import { Heading, Link } from './Components'
import { media } from '../utils/media'

const ReactMarkdown = require('react-markdown')

const LibraryItem = styled(Row)`
  margin: 0;
`

const LibraryLink= styled(Card)`
  margin-left: ${'-' + sizes.library.padding.large};
  margin-right: ${'-' + sizes.library.padding.large};
  margin-bottom: 16px;

  ${media.tiny`
    width: calc(100% + ${sizes.library.padding.small} * 2);
		margin-left: ${'-' + sizes.library.padding.small};
    margin-right: ${'-' + sizes.library.padding.small};
	`}

  &:last-child {
    margin-bottom: 16px;
  }
`

const LibraryItemTitle = styled.h4`
  margin-bottom: 8px;
`

const LibraryItemSubtitle = styled.h4`
  margin-bottom: 12px;
  font-style: italic;
  font-weight: normal;
`

const LibraryItemPreviewImage = styled(Image)`
  margin-bottom: 0;
`

const LibrarySectionLink = styled(Card)`
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
					<LibrarySectionLink to={props.section} highlight>See More</LibrarySectionLink>
				</Column>
      </Row>
    )
  }
  else {
    return (
      <div>
  			{data.map(({node}, i) =>
          <LibraryLink to={node.url} key={i}>
    				<Row mt={0} mx={0} px={[0, '4px']}>
    					<Column width={[1/4]} py={[8, 16]}>
    						<Image src={`/${node.image}`} />
    					</Column>

    					<Column width={[3/4]} py={[8, 16]}>
    						<LibraryItemTitle>{node.title}</LibraryItemTitle>

    						<LibraryItemSubtitle>{node.metadata}</LibraryItemSubtitle>

    						<Markdown>{node.description}</Markdown>
    					</Column>
    				</Row>
          </LibraryLink>
  			)}
  		</div>
    )
  }
}
