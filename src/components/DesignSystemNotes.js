import React from 'react'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import { Box, Text } from '@chasemccoy/kit'
import { useStaticQuery, graphql } from 'gatsby'

const DesignSystems = ({ category, ...rest }) => {
  const {
    notes: { nodes }
  } = useStaticQuery(query)

  return (
    <React.Fragment>
      {nodes.map(node => (
        <Box bg='gray.0' borderRadius='12px' p={24} mb={24} key={node.id}>
          <Text as='h2' mb='8px'>
            <Link unstyled to={node.fields.slug}>
              {node.frontmatter.title} →
            </Link>
          </Text>

          <p>{node.excerpt}</p>

          <UnorderedList m={0} css={`li + li { margin-top: 8px; }`}>
            {node.tableOfContents.items.map((item, i) => (
              <Box as='li' m={0} key={i}>
                <Link fontWeight='bold' to={node.fields.slug + item.url}>
                  {item.title}
                </Link>
              </Box>
            ))}
          </UnorderedList>
        </Box>
      ))}
    </React.Fragment>
  )
}

export default DesignSystems

const query = graphql`
  query DesignSystemsNotes {
    notes: allMdx(
      filter: {
        fields: {
          category: { eq: "design systems" }
          isLandingPage: { eq: false }
        }
      }
    ) {
      nodes {
        frontmatter {
          title
          tags
        }
        fields {
          slug
        }
        id
        tableOfContents
        excerpt
      }
    }
  }
`
