import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Image from 'components/Image'
import Link from 'components/Link'
import { capitalize, slugify } from 'utils'
import documentSVG from 'assets/document.svg'
import shapesSVG from 'assets/shapes.svg'
import codeSVG from 'assets/code.svg'

const getCategoryImage = name => {
  switch (name) {
    case 'design systems':
      return shapesSVG
    case 'code':
      return codeSVG
    default:
      return documentSVG
  }
}

const getCategoryName = name => {
  switch (name) {
    case 'misc':
      return 'miscellaneous'
    default:
      return name
  }
}

const Container = styled(Box)`
  border-radius: 6px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;

  &:hover {
    color: black;
  }

  box-shadow: 0 0 0 1px black, 0 0 0 3px white, 0 0 0 5px black;
`

const CategoryCard = ({ category, ...rest }) => (
  <Container
    as={Link}
    to={`/notes/${slugify(category.name)}`}
    unstyled
    {...rest}
  >
    <Box mr={16}>
      <Text as='h3' fontSize='24px' m={0}>
        {capitalize(getCategoryName(category.name))}
      </Text>

      <Text>{category.count} notes →</Text>
    </Box>

    <Box flexBasis='20%'>
      <Image
        m={0}
        src={getCategoryImage(category.name)}
        css={'max-height: 80px;'}
      />
    </Box>
  </Container>
)

export default CategoryCard
