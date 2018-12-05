import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Heading from 'components/Heading'
import media from 'utils/media'
import { space } from 'styled-system'

const Container = styled.div`
  font-family: ${p => p.theme.fonts.serif};

  img { width: 100%; }

  ${media.small`
    font-size: 18px;

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

  iframe + p {
    margin-top: 24px;
  }
`

const AsideContainer = styled(Container)`
  font-size: 17px;

  p, blockquote, img {
    margin-bottom: 1em;
  }

  p img:first-child:last-child {
    max-width: 100%;
  }

  img {
    max-width: calc(50% - 4px);
    margin: 0;

    & + img {
      margin-left: 8px;
    }
  }


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
  ${'' /* text-align: justify;
  hyphens: auto; */}

  ${'' /* p:first-of-type:first-letter {
    float: left;
    font-size: 64px;
    line-height: 50px;
    padding-top: 6px;
    padding-right: 6px;
    padding-left: 0px;
    font-weight: ${p => p.theme.fontWeights.bold};
  } */}

  h3, h4, h5, h6 {
    font-family: ${p => p.theme.fonts.mono};
    text-transform: uppercase;
    margin-top: 2.5em;
  }
`

const Title = styled(Link)`
  font-family: ${p => p.theme.fonts.mono};
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
  font-family: ${p => p.theme.fonts.mono};
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
        <Link to={`/${permalink}`}>{date}</Link>
      )}

    {date && !permalink && `Posted on ${date}`}
  </PostMeta>
)

export const Post = props => {
  const title = props.title && (
    <Heading.h1>
      <Title to={props.to} dangerouslySetInnerHTML={{ __html: props.title }} />
    </Heading.h1>
  )

  const content = props.content && (
    <Content dangerouslySetInnerHTML={{ __html: props.content }} />
  )

  const meta = props.date && <Meta date={props.date} permalink={props.to} aside={props.aside} />

  if (props.aside) {
    return (
      <AsideContainer photo={props.imagePost} filmstrip={props.filmstrip}>
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
