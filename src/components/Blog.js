import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Heading from 'components/Heading'
import media from 'utils/media'
import { space } from 'styled-system'
import { Box, Text } from '@chasemccoy/kit'

const Container = styled.div`
  img { width: 100%; }

  ${media.small`
    img {
      max-width: none;
      width: calc(100% + 32px);
      margin-left: -16px;
    }
  `}

  blockquote {
    margin-left: 4px;
    margin-right: 0;
    padding: 0 16px;
  }

  iframe {
    margin-bottom: 0;
    width: 100%;
  }

  .wp-block-embed {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;

    ${media.small`
      width: calc(100% + 32px);
      margin-left: -16px;
    `}

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`

const AsideContainer = styled(Container)`
  p, blockquote, img {
    margin-bottom: 1em;
  }

  p img:first-child:last-child {
    max-width: none;
  }

  img {
    max-width: calc(50% - 4px);
    margin-bottom: 0;
    display: inline;

    ${media.small`
      max-width: calc(50% + 12px);
    `}

    & + img {
      margin-left: 8px;
      margin-right: -16px;
    }
  }
`

const PostContainer = styled(Container)`
  h3, h4, h5, h6 {
    text-transform: uppercase;
    margin-top: 2.5em;
  }
`

const Title = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Content = styled.div`
  a[href*='chasemccoy.files.wordpress'], a[href*='instagram.com/p'] {
  	box-shadow: none;
    display: block;
    margin-bottom: -12px;
    padding: 0;

    &:hover {
      background: none;
    }
	}

  & > p:last-child {
    margin-bottom: 0;
  }
`

const PostMeta = styled.div`
  font-size: 12px;
  color: ${p => p.theme.colors.gray[3]};
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  ${space}

  a {
    color: ${p => p.theme.colors.accent};
    text-decoration: none;
  }

  height: 10px;
  border-bottom: 1px solid ${p => p.theme.colors.accent.light};

  a {
    background: ${p => p.theme.colors.page.background};
    padding-right: 8px;
  }
`

const Meta = ({ date, permalink, aside }) => (
  <PostMeta mt={!aside ? 5 : 0}>
    {date &&
      permalink && (
        <Link to={permalink}>{date}</Link>
      )}

    {date && !permalink && `Posted on ${date}`}
  </PostMeta>
)

const Tags = ({ tags, title }) => {
  return (
    <Box mb='24px'>
      {tags.map((tag, i) => (
        <Box as='span' display='inline-block' bg='gray.0' py='4px' px='8px' mb='12px' borderRadius='4px' color='gray.4' mr='12px' key={i}>
          <Text uppercase fontSize='12px'>{tag}</Text>
        </Box>
      ))}
    </Box>
  )
}

export const Post = props => {
  const title = props.title && (
    <Heading.h1 mt={0}>
      <Title to={props.to} dangerouslySetInnerHTML={{ __html: props.title }} />
    </Heading.h1>
  )

  const content = props.content && (
    <Content dangerouslySetInnerHTML={{ __html: props.content }} />
  )

  const meta = props.date && <Meta date={props.date} permalink={props.to} aside={props.aside} />

  const tags = props.tags && <Tags tags={props.tags} title={props.title} />

  if (props.aside) {
    return (
      <AsideContainer photo={props.imagePost}>
        {meta}
        {title}
        {content}
      </AsideContainer>
    )
  } else {
    return (
      <PostContainer>
        {title}
        {tags}
        {content}
        {meta}
      </PostContainer>
    )
  }
}
