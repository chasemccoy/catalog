import React from 'react'
import { Box, Text } from '@chasemccoy/kit'
import Tags from 'components/Tags'
import Link from 'components/Link'

const SidebarHeader = (props) => (
  <Text
    mb={8}
    borderBottom='1px solid'
    borderColor='gray.2'
    fontFamily='serif'
    fontSize='1.3em'
    {...props}
  />
)

const SidebarLink = (props) => (
  <Link
    unstyled
    color='gray.4'
    css={`
      &.selected {
        color: ${(p) => p.theme.colors.gray[5]};
        font-weight: 700;

        span {
          position: relative;
        }

        span:after {
          position: absolute;
          background-color: var(--section-highlight);
          margin-top: 0.25rem;
          margin-left: 0.25rem;
          width: 100%;
          z-index: -1;
          height: 100%;
          top: -3px;
          left: 0px;
          content: '';
        }
      }
    `}
    {...props}
  />
)

const Sidebar = ({
  tags,
  publishDate,
  relatedItems,
  tableOfContents,
  children
}) => {
  return (
    <Text
      fontSize='0.8em'
      mb={32}
      css={`
        > * + * {
          margin-top: 24px;
        }
      `}
    >
      {publishDate && (
        <Box>
          <SidebarHeader>Published</SidebarHeader>
          <Text>{publishDate}</Text>
        </Box>
      )}

      {tags && (
        <Box>
          <SidebarHeader>Tags</SidebarHeader>
          <Tags items={tags} />
        </Box>
      )}

      {tableOfContents && tableOfContents.items && (
        <Box>
          <SidebarHeader>Table of contents</SidebarHeader>

          {tableOfContents.items.map((item, i) => (
            <Box key={i} mb={4} display='flex'>
              <SidebarLink to={item.url} css='flex: 1;'>
                {item.title}
              </SidebarLink>
            </Box>
          ))}
        </Box>
      )}

      {relatedItems && relatedItems.length > 0 && (
        <Box>
          <SidebarHeader>Related</SidebarHeader>

          {relatedItems.map((item, i) => (
            <Box
              key={i}
              mb={4}
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              css={`
                a {
                  flex: 1;
                }

                & span.arrow {
                  opacity: 0;
                  transition: opacity 0.15s;
                }

                &:hover span.arrow {
                  opacity: 1;
                }
              `}
            >
              <SidebarLink to={item.slug}>
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
              </SidebarLink>

              <Text.span color='gray.4' className='arrow' ml={16}>
                →
              </Text.span>
            </Box>
          ))}
        </Box>
      )}

      {children}
    </Text>
  )
}

Sidebar.Link = SidebarLink
Sidebar.Header = SidebarHeader

export default Sidebar
