import Page from 'components/Page'
import React from 'react'
import Image from 'components/Image'
import { Box, Grid } from '@chasemccoy/kit'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import 'fonts/ivar-text.css'

const BooksPage = ({ data }) => {
  return (
    <Page
      title='Books'
      description='A few excellent reads that have shaped who I am, how I work, or how I think about the world around me.'
    >
      <Grid className='mt-40'>
        {data.books.edges.map(({ node }, i) => (
          <Box
            width={[1 / 2, 1 / 3, 1 / 3]}
            display='flex'
            alignItems='flex-end'
            key={i}
          >
            <Link
              to={node.url}
              unstyled
              css={`
                width: 100%;
                &:hover {
                  color: inherit;
                }
              `}
            >
              <Image
                image={node.image.childImageSharp.gatsbyImageData}
                css={`
                  box-shadow: var(--shadow-medium);
                `}
              />

              <Box height='5em' className='mt-8'>
                <h2 className='serif larger mb-2'>{node.title}</h2>
                <p className='smaller color-gray--500'>{node.metadata}</p>
              </Box>
            </Link>
          </Box>
        ))}
      </Grid>
    </Page>
  )
}

export default BooksPage

export const query = graphql`
  query BooksQuery {
    books: allBooksHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              gatsbyImageData(maxWidth: 900, layout: FLUID)
            }
          }
        }
      }
    }
  }
`
