import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Icon from 'components/Icon'

const Container = styled.div`
`

const AsideContainer = styled(Container)``

const PostContainer = styled(Container)`
  font-family: ${p => p.theme.fontFamily.serif};
  hyphens: auto;
`

const Title = styled.h2`
`

const Content = styled.div`
  a {
    transition: none;
    text-decoration-line: underline;
    color: ${p => p.theme.colors.gray[4]};
  }

  a:hover {
    color: currentColor;
  }
`

const PostMeta = styled.div`
  font-size: 14px;
  font-family: ${p => p.theme.fontFamily.mono};
  color: ${p => p.theme.colors.gray[3]};
  margin-bottom: 12px;
`

const PostMetaIcon = styled(Icon)`
  color: ${p => p.theme.colors.gray[2]};
  margin: -2px 8px 0 0;
`

const PostDate = styled(Link)`
  display: block;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.gray[3]};
  text-transform: uppercase;
`

const Meta = ({ date, permalink, aside }) => (
  <PostMeta>
    {date &&
      permalink && (
        <PostDate to={`/${permalink}`}>
          {aside && <PostMetaIcon tiny name='open-tab' />}
          {date}
        </PostDate>
      )}

    {date && !permalink && `Posted on ${date}`}
  </PostMeta>
)

export const Post = props => {
  const title = props.title && (
    <Title>
      {props.to ? (
        <Link to={`/${props.to}`}>
          {props.title}
        </Link>
      ) : (
        props.title
      )}
    </Title>
  )

  const content = props.content && (
    <Content dangerouslySetInnerHTML={{ __html: props.content }} />
  )

  const meta = props.date && <Meta date={props.date} permalink={props.to} aside={props.aside} />

  if (props.aside) {
    return (
      <AsideContainer>
        {meta}
        {content}
      </AsideContainer>
    )
  } else {
    return (
      <PostContainer photoset={props.photoset}>
        {title}
        {content}
        {meta}
      </PostContainer>
    )
  }
}
