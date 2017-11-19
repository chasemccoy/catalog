import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

export const Row = props => (
  <Flex
    mx={-12}
		mt={-24}
		wrap={true}
    {...props}
  />
)

export const Column = props => (
  <Box
    px={12}
		pt={24}
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

export const ShowcaseGrid = props => {
  const primary = (
    <Column width={[2/3]}>
      {props.children[0]}
    </Column>
  )

  const secondary = (
    <Column width={[1/3]}>
      <Row>
        <Column width={[1]}>{props.children[1]}</Column>
      </Row>

      <Row mt={-5}>
        <Column width={[1]}>{props.children[2]}</Column>
      </Row>
    </Column>
  )

  return (
    <Row {...props}>
      {!props.right && primary}

      {secondary}

      {props.right && primary}
    </Row>
  )
}
