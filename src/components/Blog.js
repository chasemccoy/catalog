import React from 'react'
import styled from 'styled-components'
import { Link } from './Components'
import { colors, sizes } from '../utils/design'
import { media } from '../utils/media'

const Container = styled.div`
  margin: 24px 0;
  color: ${colors.text.header};
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
`

const Content = styled.div`
`

const PostMeta = styled.div`
  color: ${colors.text.muted};
  font-size: 14px;
  margin-top: 8px;

  a {
    text-decoration: none;
  }
`

const PostDate = styled.p`

`

const Meta = ({date, permalink}) => (
  <PostMeta>
    {date && (<PostDate><Link to={permalink}>{date}</Link></PostDate>)}
  </PostMeta>
)

export const Post = props => {
  const title = props.title && <Title>{props.to ? <Link to={`/${props.to}`}>{props.title}</Link> : props.title}</Title>

  const content = props.content && <Content dangerouslySetInnerHTML={{ __html: props.content }} />

  const excerpt = props.excerpt && <Content dangerouslySetInnerHTML={{ __html: props.excerpt }} />

  const meta = props.date && props.to && <Meta date={props.date} permalink={props.to} />

  if (props.aside) {
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
