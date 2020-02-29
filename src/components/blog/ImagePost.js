import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import { ArticleContainer } from 'components/blog/helpers'

const ImagePost = ({ content, date, slug, className, ...rest }) => (
  <ArticleContainer
    border='2px dashed'
    borderColor='gray.2'
    p={12}
    borderRadius='12px'
    className={'image ' + className}
    {...rest}
  >
    {content}

    <Box
      css={`
        background: ${p => p.theme.colors.accent.pop};
        padding: 8px 16px;
        position: absolute;
        display: block !important;
        z-index: 1;
        ${className.includes('odd') ? 'top' : 'bottom'}: 70%;
        border-radius: 8px;
        ${className.includes('odd') ? 'left' : 'right'}: -15%;
      `}
      className='meta'
    >
      <Text fontSize='12px' fontWeight='semibold'>
        <Link
          unstyled
          to={slug}
          css={`
            &:hover {
              color: black;
              text-decoration: underline;
            }
          `}
        >
          {date} →
        </Link>
      </Text>
    </Box>
  </ArticleContainer>
)

export default ImagePost
