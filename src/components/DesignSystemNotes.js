import React from 'react'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import { Grid, Box, Text } from '@chasemccoy/kit'
import { useStaticQuery, graphql } from 'gatsby'

const Note = ({ id, title, slug, tableOfContents, excerpt, ...rest }) => (
  <Box
    bg='gray.0'
    border='0.5px solid'
    borderColor='gray.1'
    borderRadius='12px'
    p={24}
    mb={24}
    key={id}
  >
    <Text as='h2' mb={2}>
      <Link unstyled to={slug}>
        {title}
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
    notes: { nodes }
  } = useStaticQuery(query)

  return (
    <React.Fragment>
      {nodes.map(node => (
        <Note {...node} />
      ))}
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
  }
`
