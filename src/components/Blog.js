import React from 'react'
import styled from 'styled-components'
import { colors, fontWeights, sizes } from 'utils/design'
import { stripTags, truncateExcerpt } from 'utils/js'
import { Link } from 'components/Components'
import { media } from 'utils/media'

const Container = styled.div`
  margin: 0;

  & > * + * {
    margin-top: 12px;
  }

  ${media.tiny`
    img {
      border-radius: 0;
      margin: 0 -${sizes.content.smallPadding} !important;
      width: calc(100% + ${sizes.content.smallPadding} * 2);
      max-width: none;
    }
  `};
`

const AsideContainer = styled(Container)``

const PostContainer = styled(Container)`
  font-family: ${props => props.theme.fontFamily.body};
  line-height: 1.6;
`

const Title = styled.h2`
  margin-bottom: 12px;

  a {
    text-decoration: none;
  }

  span {
    color: ${colors.primary.blue};
    font-weight: ${fontWeights.bold};
  }
`

const Content = styled.div`
  &:last-of-type,
  & p:last-of-type {
    margin: 0;
  }

  &:before {
    position: absolute;
    margin-left: -24px;
    color: ${colors.bookmark.border.inner};
    font-weight: ${fontWeights.heavy};
    font-size: 18px;
    font-family: monospace;
  }

  a {
    font-weight: ${fontWeights.bold} !important;
  }
`

const Excerpt = styled.p`
  &:last-of-type {
    margin: 0;
  }
`

const PostMeta = styled.div`
  color: ${colors.text.muted};
  font-weight: ${fontWeights.medium};
  font-size: 12px;
  font-family: ${props => props.theme.fontFamily.sans};

  a {
    text-decoration: none;
  }
`

const PostDate = styled.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Meta = ({ date, permalink }) => (
  <PostMeta>
    {date &&
      permalink && (
        <PostDate>
          <Link to={`/${permalink}`}>{date}</Link>
        </PostDate>
      )}

    {date && !permalink && <PostDate>Posted on {date}</PostDate>}
  </PostMeta>
)

export const Post = props => {
  const title = props.title && (
    <Title>
      {props.to ? (
        <Link to={`/${props.to}`}>
          <span>#</span> {props.title}
        </Link>
      ) : (
        props.title
      )}
    </Title>
  )

  const content = props.content && (
    <Content dangerouslySetInnerHTML={{ __html: props.content }} />
  )

  const excerpt = props.excerpt &&
    props.to && (
      <Excerpt>
        <span
          dangerouslySetInnerHTML={{ __html: truncateExcerpt(props.excerpt) }}
        />
        <Link to={`/${props.to}`}>Read more...</Link>
      </Excerpt>
    )

  const meta = props.date && <Meta date={props.date} permalink={props.to} />

  if (props.aside) {
    return (
      <AsideContainer>
        {content}
        {meta}
      </AsideContainer>
    )
  } else {
    return (
      <PostContainer>
        {title}
        {content}
        {meta}
      </PostContainer>
    )
  }
}
