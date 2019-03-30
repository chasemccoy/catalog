import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import LinkBase from 'components/Link'

const styles = {
  fontFamily: 'mono',
  fontSize: '14px',
  mr: '8px'
}

const Link = props => <LinkBase {...styles} {...props} />
const Divider = props => <Text.span color='gray.3' fontWeight='normal' {...styles} {...props}>/</Text.span>

const Breadcrumbs = ({ category, title, ...rest }) => (
  <Box display='flex' alignItems='center' {...rest}>
    <Link to='/notes'>notes</Link>
    {category && <Divider />}
    {category && <Link to={`/notes/${category}`}>{category}</Link>}
    {category && title && <Divider />}
    {category && title && title}
  </Box>
)

export default Breadcrumbs