import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Heading from 'components/Heading'
import media from 'utils/media'
import { space } from 'styled-system'

const Container = styled.div`
  img { width: 100%; }

  blockquote {
    font-family: ${p => p.theme.fonts.sans};

    ${media.medium`
      width: 100%;
      margin: 24px 0;
      margin-left: 8px;
      padding: 0 8px 0 16px;
    `}
  }

  iframe + p {
    margin-top: 24px;
  }

  img {
    ${p => !p.filmstrip && media.medium`
      max-width: 120%;
      width: 120%;
      margin-left: -10%;
      width: calc(100% + 33px);
      margin-left: -16px;
    `}
  }
`

const AsideContainer = styled(Container)`
  ${p => p.large && `
    font-size: 24px;
    font-family: ${p.theme.fonts.serif};

    a {
      padding-top: 6px;
    }
  `}

  ${p => p.filmstrip && `
    img {
      height: 300px;
      object-fit: cover;
    }

    & > div > div > *:not(img) {
      display: none;
    }

    p:empty {
      margin-top: -40px;
    }
  `}

  ${p => p.filmstrip && media.small`
    img {
      height: 250px;
    }
  `}

  ${p => p.photo && `
    font-size: 1rem;
  `}
`

const PostContainer = styled(Container)`
  font-family: ${p => p.theme.fonts.serif};
  line-height: 1.45;

  h3, h4, h5, h6 {
    margin-top: 2.5em;
  }
`

const Title = styled(Link)`
  font-size: 40px;
  line-height: 1;
  font-family: ${p => p.theme.fonts.sans};
  ${'' /* padding-bottom: 4px; */}
  ${'' /* box-shadow: inset 0 -4px 0 ${props => props.theme.colors.accent}; */}
  transition: all 0.1s;

  &:hover {
    color: white;
    background: ${props => props.theme.colors.accent};
  }
`

const Content = styled.div`
  a {
    transition: all 0.1s;
    box-shadow: inset 0 -0.5em 0 ${props => props.theme.colors.accent.light};
  }

  a:hover {
    color: white;
    box-shadow: none;
    background: ${props => props.theme.colors.accent};
  }

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
  font-size: 13px;
  font-family: ${p => p.theme.fonts.sans};
  color: ${p => p.theme.colors.gray[3]};
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  ${space}

  a {
    color: ${p => p.theme.colors.gray[3]};
  }
`

const Meta = ({ date, permalink, aside }) => (
  <PostMeta mt={!aside ? 5 : 0}>
    {date &&
      permalink && (
        <Link to={`/${permalink}`}>{date}</Link>
      )}

    {date && !permalink && `Posted on ${date}`}
  </PostMeta>
)

export const Post = props => {
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
      <AsideContainer photo={props.imagePost} large={props.content.length <= 500} filmstrip={props.filmstrip}>
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
