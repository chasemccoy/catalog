import React from 'react'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import { Grid, Box, Text } from '@chasemccoy/kit'
import { useStaticQuery, graphql } from 'gatsby'
import ArrowRight from 'assets/arrow-right-icon.component.svg'

const Note = ({ title, slug, tableOfContents, excerpt, ...rest }) => (
  <Box
    border='1px solid'
    borderRadius='12px'
    px={16}
    py={24}
    borderColor='gray.2'
    mb={24}
  >
    <Text
      as='h2'
      className='inline no-border'
      css='margin-bottom: 12px !important;'
    >
      <Link unstyled to={slug}>
        {title} <ArrowRight />
      </Link>
    </Text>

    <Grid overflow='visible'>
      <Box width={[1, 1, 3 / 5]}>
        <Text as='p' m={0} fontSize='15px'>
          {excerpt}
        </Text>
      </Box>

      {tableOfContents.items && (
        <Box width={[1, 1, 2 / 5]}>
          <UnorderedList
            m={0}
            css={`
              li + li {
                margin-top: 4px;
              }
            `}
          >
            {tableOfContents.items.map((item, i) => (
              <Box as='li' m={0} key={i}>
                <Link fontSize='15px' fontWeight='bold' to={slug + item.url}>
                  {item.title}
                </Link>
              </Box>
            ))}
          </UnorderedList>
        </Box>
      )}
    </Grid>
  </Box>
)

const DesignSystems = ({ category, ...rest }) => {
  const {
    notes: { nodes },
    posts
  } = useStaticQuery(query)

  return (
    <React.Fragment>
      {nodes.map((node) => (
        <Note key={node.id} {...node} />
      ))}

      <Text as='h2'>Posts about design systems</Text>

      <UnorderedList>
        {posts.items
          .filter((i) => i.title)
          .map((item) => (
            <li key={item.slug}>
              <Link
                to={item.slug}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </li>
          ))}
      </UnorderedList>
    </React.Fragment>
  )
}

export default DesignSystems

const query = graphql`
  query DesignSystemsNotes {
    notes: allNote(
      filter: {
        category: { eq: "design systems" }
        isLandingPage: { eq: false }
      }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        slug
        id
        tableOfContents
        excerpt
      }
    }

    posts: tag(name: { eq: "design systems" }) {
      items {
        slug
        title
      }
    }
  }
`
