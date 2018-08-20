import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
// import Icon from 'components/Icon'
import Heading from 'components/Heading'

const Container = styled.div`
  hyphens: auto;

  img { width: 100%; }

  blockquote {
    font-size: 20px;
    font-style: normal;
    border-left: 4px solid ${p => p.theme.colors.accent};
  }
`

const AsideContainer = styled(Container)`
  ${p => p.large && `
    font-size: 24px;
    font-family: ${p.theme.fonts.serif};
    line-height: 1.6;

    a {
      padding-top: 6px;
    }
  `}
`

const PostContainer = styled(Container)`
`

const Title = styled(Link)`
  font-size: 32px;
  font-family: ${p => p.theme.fonts.sans};
  padding-bottom: 4px;
  box-shadow: inset 0 -6px 0 ${props => props.theme.colors.accent};
  transition: all 0.1s;

  &:hover {
    color: white;
    background: ${props => props.theme.colors.accent};
  }
`

const Content = styled.div`
  a {
    transition: all 0.1s;
    box-shadow: inset 0 -0.4em 0 ${props => props.theme.colors.accent.light};
  }

  a:hover {
    color: white;
    box-shadow: none;
    background: ${props => props.theme.colors.accent};
  }

  a[href*='chasemccoy.files.wordpress'], a[href*='instagram.com/p'] {
  	box-shadow: none;

    &:hover {
      background: none;
    }
	}

  & > p:last-child {
    margin-bottom: 0;
  }
`

const PostMeta = styled.div`
  font-size: 13px;
  font-family: ${p => p.theme.fonts.sans};
  color: ${p => p.theme.colors.gray[3]};
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;

  a {
    color: ${p => p.theme.colors.gray[3]};
  }
`

// const PostMetaIcon = styled(Icon)`
//   color: ${p => p.theme.colors.gray[2]};
//   margin: -2px 8px 0 0;
// `

// const PostDate = styled(Link)`
//   display: block;
//   margin-bottom: 8px;
//   color: ${p => p.theme.colors.gray[3]};
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `

const Meta = ({ date, permalink, aside }) => (
  <PostMeta>
    {date &&
      permalink && (
        <Link to={`/${permalink}`}>{date}</Link>
      )}

    {date && !permalink && `Posted on ${date}`}
  </PostMeta>
)

export const Post = props => {
  console.log(props.content.length)

  const title = props.title && (
    <Heading.h2>
      <Title to={props.to} dangerouslySetInnerHTML={{ __html: props.title }} />
    </Heading.h2>
  )

  const content = props.content && (
    <Content dangerouslySetInnerHTML={{ __html: props.content }} />
  )

  const meta = props.date && <Meta date={props.date} permalink={props.to} aside={props.aside} />

  if (props.aside) {
    return (
      <AsideContainer photo={props.imagePost} large={props.content.length <= 500}>
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
