import React from 'react'
import styled from 'styled-components'
import { colors, sizes } from '../utils/design'
import { Row, Column } from './Grid'
import Image from './Image'
import Markdown from './Markdown'
import { Heading } from './Components'
import { media } from '../utils/media'

const ReactMarkdown = require('react-markdown')

const LibraryItem = styled(Row)`
  margin: 0;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid transparent;

  a:hover & {
    background-color: ${colors.bookmark.background};
    border: 1px solid ${colors.bookmark.border.outer};
  }

  img, p {
    margin-bottom: 0;
  }
`

const LibraryLink= styled.a`
  display: inline-block;
  width: calc(100% + ${sizes.library.padding.large} * 2);
  text-decoration: none;
  margin-left: ${'-' + sizes.library.padding.large};
  margin-right: ${'-' + sizes.library.padding.large};

  ${media.tiny`
    width: calc(100% + ${sizes.library.padding.small} * 2);
		margin-left: ${'-' + sizes.library.padding.small};
    margin-right: ${'-' + sizes.library.padding.small};
	`}

  &:last-child {
    margin-bottom: 32px;
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

export const Library = props => {
  return (
		<div>
			{props.data.map(({node}, i) =>
        <LibraryLink href={node.url} target='_blank' key={i}>
  				<LibraryItem px={[0, '4px']}>
  					<Column width={[1/4]} py={[8, 16]}>
  						<Image src={`/${node.image}`} />
  					</Column>

  					<Column width={[3/4]} py={[8, 16]}>
  						<LibraryItemTitle>{node.title}</LibraryItemTitle>

  						<LibraryItemSubtitle>{node.metadata}</LibraryItemSubtitle>

  						<Markdown>{node.description}</Markdown>
  					</Column>
  				</LibraryItem>
        </LibraryLink>
			)}
		</div>
  )
}
