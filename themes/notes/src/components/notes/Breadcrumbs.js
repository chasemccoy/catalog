import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import LinkBase from 'components/Link'

const styles = {
  color: 'gray.3',
  fontSize: '14px',
  mr: '6px'
}

const Link = props => <LinkBase unstyled {...styles} {...props} />
const Divider = props => (
  <Text.span {...styles} color='gray.2' {...props}>
    /
  </Text.span>
)

const Breadcrumbs = ({ category, title, ...rest }) => {
  const isLandingPage =
    category && title && category.toLowerCase() === title.toLowerCase()

  return (
    <Box display='flex' alignItems='center' whiteSpace {...rest}>
      {!category && 'Notes'}
      {category && <Link to='/notes'>notes</Link>}
      {category && <Divider />}
      {category && !title && category}
      {category && title && isLandingPage && category}
      {category && title && !isLandingPage && (
        <Link to={`/notes/${category}`}>{category}</Link>
      )}
      {category && title && !isLandingPage && <Divider />}
      {/* {category && !isLandingPage && title} */}
    </Box>
  )
}

export default Breadcrumbs
