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

const Breadcrumbs = ({ category, title, isLandingPage, ...rest }) => {  
  return (
    <Box display='flex' alignItems='center' whiteSpace {...rest}>
      <Link to='/notes'>notes</Link>
      <Divider />
      {category && title && !isLandingPage && (
        <Link to={`/notes/${category.replace(' ', '-')}`}>{category}</Link>
      )}
      {category && title && !isLandingPage && <Divider />}
    </Box>
  )
}

export default Breadcrumbs
