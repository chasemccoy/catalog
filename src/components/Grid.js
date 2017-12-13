import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { ImageDiv } from '../components/Image'

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

const ImageContainer = styled(ImageDiv)`
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  padding-bottom: 100%;
`

export const ShowcaseGrid = props => {
  const first = props.children[0]
  const second = props.children[1]
  const third = props.children[2]

  const primary = (
    <Column width={[2/3]} {...props}>
      {first.props.src && <ImageContainer src={first.props.src} />}
    </Column>
  )

  const secondary = (
    <Column width={[1/3]}>
      <Row>
        <Column width={[1]}>
          {second.props.src && <ImageContainer src={second.props.src} />}
        </Column>
      </Row>

      <Row mt={'-1px'}>
        <Column width={[1]}>
          {third.props.src && <ImageContainer src={third.props.src} />}
        </Column>
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
