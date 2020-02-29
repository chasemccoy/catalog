import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Article from 'components/blog/Article'
import media from 'utils/media'
// import star from 'assets/star.svg'
// import pyramid from 'assets/pyramid.svg'

const formatToType = {
  image: 'image',
  standard: 'post',
  aside: 'aside',
  readingList: 'link'
}

const Main = styled.main`
  --gutter: 16px;
  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: min-content;

  padding: 40px var(--gutter);
  min-height: 100vh;
  max-width: 75ch;
  margin: auto;
  position: relative;

  ${media.small`
    --gutter: 24px;
  `}

  ${'' /* &:before {
    content: url(${star});
    position: absolute;
    width: 300px;
    top: 200px;
    left: -100px;
  }

  article._20:before {
    content: url(${pyramid});
    position: absolute;
    width: 200px;
    right: -350px;
    mix-blend-mode: multiply;
  } */}
`

const TickerTape = ({ data }) => {
  const posts = data.posts.nodes
  const readingList = data.readingList.nodes.map(node => ({
    title: node.data.title,
    url: node.data.url,
    rawDate: node.data.rawDate,
    format: 'readingList'
  }))

  const allItems = [...posts, ...readingList].sort((a, b) => {
    return new Date(b.rawDate) - new Date(a.rawDate)
  })

  return (
    <Main>
      {allItems.map((item, i) => (
        <Article
          type={formatToType[item.format]}
          node={item}
          key={i}
          index={i}
        />
      ))}
    </Main>
  )
}

export default TickerTape

export const query = graphql`
  query TickerTapeQuery {
    posts: allBlog(sort: { fields: date, order: DESC }, limit: 80) {
      nodes {
        id
        title
        date(formatString: "MMMM Do, YYYY")
        shortDate: date(formatString: "MMMM Do")
        rawDate: date
        slug
        content
        excerpt
        format
        tags {
          name
        }
        isMdx
      }
    }

    readingList: allAirtable(filter: { queryName: { eq: "readingList" } }) {
      nodes {
        data {
          title: Title
          url: URL
          rawDate: Date_added
        }
      }
    }
  }
`
