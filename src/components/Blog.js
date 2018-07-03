import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'

const Container = styled.div`
`

const AsideContainer = styled(Container)``

const PostContainer = styled(Container)`
`

const Title = styled.h2`
`

const Content = styled.div`
  a {
    text-decoration-line: underline;
  }

  a + p:empty {
    display: none;
  }
`

const PostMeta = styled.div`
`

const PostDate = styled.p`
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
      <PostContainer photoset={props.photoset}>
        {title}
        {content}
        {meta}
      </PostContainer>
    )
  }
}
