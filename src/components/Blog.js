import { colors, fontWeights, sizes } from '../utils/design'
import { stripTags, truncateExcerpt } from '../utils/js'

import { Link } from 'components/Components'
import React from 'react'
import { media } from 'utils/media'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;

  & > * + * {
    margin-top: 12px;
  }
`

const AsideContainer = Container.extend`
`

const PostContainer = Container.extend`
`

const Title = styled.h3`
  margin-bottom: 8px;
  color: ${colors.text.body} !important;

  a {
    text-decoration: none;
  }

  a:before {
    content: "#";
    position: absolute;
    margin-left: -24px;
    color: ${colors.primary.blue};
    font-weight: ${fontWeights.bold};
    font-size: 22px;
    line-height: 1.2;
  }
`

const Content = styled.div`
  &:last-of-type, & p:last-of-type {
    margin: 0;
  }

  &:before {
    ${'' /* content: "●"; */}
    position: absolute;
    margin-left: -24px;
    color: ${colors.bookmark.border.inner};
    font-weight: ${fontWeights.heavy};
    font-size: 18px;
    font-family: monospace;
  }

  a {
    font-weight: ${fontWeights.semibold} !important;
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

  a {
    text-decoration: none;
  }
`

const PostDate = styled.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Meta = ({date, permalink}) => (
  <PostMeta>
    {date && permalink && (<PostDate><Link to={permalink}>{date}</Link></PostDate>)}

    {date && !permalink && (<PostDate>Posted on {date}</PostDate>)}
  </PostMeta>
)

export const Post = props => {
  const title = props.title &&
    <Title>{props.to ?
      <Link to={`/${props.to}`}>{props.title}</Link> :
      props.title}
    </Title>

  const content = props.content &&
    <Content dangerouslySetInnerHTML={{ __html: props.content }} />

  const excerpt = props.excerpt &&
    props.to && (
      <Excerpt>
        <span dangerouslySetInnerHTML={{ __html: truncateExcerpt(props.excerpt) }} />
        <Link to={props.to}>Read more...</Link>
      </Excerpt>
    )

  const meta = props.date && <Meta date={props.date} permalink={`/${props.to}`} />

  if (props.aside || props.content) {
    return (
      <AsideContainer>
        {content}
        {meta}
      </AsideContainer>
    )
  }
  else {
    return (
      <PostContainer>
        {title}
        {excerpt}
        {meta}
      </PostContainer>
    )
  }
}
