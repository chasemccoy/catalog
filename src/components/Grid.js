import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

export const Row = props => (
  <Flex
    {...props}
    mx={-12}
		mt={-24}
		wrap={true}
  />
)

export const Column = props => (
  <Box
    {...props}
    px={12}
		pt={24}
    flex='0 1 auto'
  />
)

export const BookmarkGrid = props => (
	<Row {...props}>
		{props.children.map((child, index) =>
			<Column
				key={index}
				width={[1, 1/2]}
				flex='0 1 auto'
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
				flex='0 1 auto'
			>
				{child}
			</Column>
		)}
  </Row>
)
