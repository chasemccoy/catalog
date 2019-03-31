import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import LinkBase from 'components/Link'

const styles = {
  fontFamily: 'mono',
  fontSize: '14px',
  mr: '8px'
}

const Link = props => <LinkBase {...styles} {...props} />
const Divider = props => <Text.span {...styles} {...props}>/</Text.span>

const Breadcrumbs = ({ category, title, ...rest }) => (
  <Box display='flex' alignItems='center' whiteSpace {...rest}>
    <Link to='/notes'>notes</Link>
    {category && <Divider />}
    {category && !title && category}
    {category && title && <Link to={`/notes/${category}`}>{category}</Link>}
    {category && title && <Divider />}
    {category && title && title}
  </Box>
)

export default Breadcrumbs