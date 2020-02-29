import React from 'react'
import { Text } from '@chasemccoy/kit'
import { ArticleContainer, Title } from 'components/blog/helpers'
import Tags from 'components/Tags'

const StandardPost = ({
  title,
  excerpt,
  tags,
  date,
  slug,
  className,
  ...rest
}) => (
  <ArticleContainer
    border='4px solid'
    borderColor='gray.1'
    borderRadius='12px'
    bg='white'
    zIndex={1}
    p={24}
    className={'post ' + className}
    {...rest}
  >
    <Text fontSize='14px' color='gray.3' mb={4}>
      Posted on {date}
    </Text>

    {title && (
      <Title fontSize='40px' mb={8} border='none'>
        {title}
      </Title>
    )}

    <Text fontSize='22px'>{excerpt}</Text>

    <Tags mt={12} items={tags} />
  </ArticleContainer>
)

export default StandardPost
