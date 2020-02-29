import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import { ArticleContainer, Title } from 'components/blog/helpers'
import Tags from 'components/Tags'

export const AsidePost = ({
  title,
  content,
  tags,
  date,
  slug,
  className,
  ...rest
}) => (
  <ArticleContainer
    borderRadius='8px'
    p={24}
    pb={40}
    css={`
      box-shadow: 0 0 0 1px black, 0 0 0 4px white, 0 0 0 6px black;
    `}
    className={'aside ' + className}
    bg='white'
    {...rest}
  >
    {title && (
      <Link unstyled to={slug}>
        <Title fontSize='28px' mb={8}>
          {title}
        </Title>
      </Link>
    )}

    <Box
      className='meta'
      css={`
        position: absolute;
        padding: 8px 24px 8px 12px;
        border: 1px solid black;
        border-radius: 8px;
        background: white;
        z-index: 1;
        right: -1.25em;
        bottom: -1.25em;
      `}
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
        <Tags mt={0} items={tags} />
      </Text>
    </Box>

    {content}
  </ArticleContainer>
)

export default AsidePost
