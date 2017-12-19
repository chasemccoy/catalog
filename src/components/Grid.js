import { Box, Flex } from 'grid-styled'
import { ImageDiv, ImageLink } from 'components/Image'

import { Link } from 'components/Components'
import React from 'react'
import styled from 'styled-components'

export const Row = props => (
  <Flex
    mx={[-8, -12]}
		mt={[-16, -24]}
		wrap={true}
    {...props}
  />
)

export const Column = props => (
  <Box
    px={[8, 12]}
		pt={[16, 24]}
    flex='0 1 auto'
    {...props}
  />
)

export const BookmarkGrid = props => (
	<Row {...props}>
		{props.children.map((child, index) =>
			<Column
				key={index}
				width={[1, 1/2]}
			>
				{child}
			</Column>
		)}
	</Row>
)

export const ImageGrid = props => (
  <Row {...props}>
    {props.children.map((child, index) =>
			<Column
				key={index}
				width={[1, 1/2]}
			>
				{child}
			</Column>
		)}
  </Row>
)
