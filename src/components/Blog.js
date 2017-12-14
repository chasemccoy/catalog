import React from 'react'
import styled from 'styled-components'
import { Link } from './Components'
import { colors, sizes, fontWeights } from '../utils/design'
import { media } from '../utils/media'
import { truncateExcerpt, stripTags } from '../utils/js'

const Container = styled.div`
  ${'' /* margin: 24px 0; */}
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

const Content = styled.p`
  &:last-of-type {
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
    font-weight: ${fontWeights.semibold}
  }
`

const PostMeta = styled.div`
  color: ${colors.text.muted};
  font-weight: ${fontWeights.medium};
  font-size: 14px;
  margin-top: 8px;

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
    props.to &&
    (<div>
      <span dangerouslySetInnerHTML={{ __html: truncateExcerpt(props.excerpt) }} />
      <Link to={props.to}>Read more...</Link>
    </div>
    )

  const meta = props.date && <Meta date={props.date} permalink={props.to} />

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
