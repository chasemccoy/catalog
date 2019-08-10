import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import media from 'utils/media'
import ScrollRow from 'components/ScrollRow'
import { stripHTML } from 'utils'

const HoverLink = styled(Link)`
  display: block;
  transition: all 0.2s;
  position: relative;
  filter: drop-shadow(
    0 0 1px
      ${props =>
        props.light ? props.theme.colors.accent.pop : props.theme.colors.accent}
  );
  text-decoration: none !important;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.type.body};
    transform: translate(0, -8px);
  }

  ${ScrollRow} & {
    &:not(:first-child) {
      margin-left: -120px;
    }

    :nth-child(odd) {
      transform: translate(0, -8px) rotate(-0.5deg);
    }

    :nth-child(even) {
      transform: translate(0, -8px) rotate(0.5deg);
    }

    &:hover,
    &:focus {
      z-index: 1;
      margin-right: 94px;
    }

    ${media.small`
      &:not(:first-child) { 
        margin-left: -40px
      }
      
      &:hover, &:focus {
        margin-right: 32px;
      }
    `}
  }
`

const TabCard = ({ title, description, tab, to, light, ...rest }) => (
  <HoverLink to={to} light={light} {...rest}>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      height='100%'
      width={1}
    >
      <Box
        as='span'
        bg={light ? 'accent.light' : 'accent.medium'}
        borderRadius='8px 8px 0 0'
        px={16}
      >
        <Text
          as='span'
          fontSize='11px'
          lineHeight='1.3'
          css={`
            text-transform: uppercase;
            letter-spacing: 1px;
          `}
          fontWeight='semibold'
          color='accent.dark'
        >
          {tab}
        </Text>
      </Box>

      <Box
        flex={1}
        bg={light ? 'accent.light' : 'accent.medium'}
        borderRadius='0 8px 8px 8px'
        p={16}
        width={1}
      >
        <Text
          as='h3'
          mt={0}
          mb={8}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Text
          fontSize='14px'
          lineHeight='1.4'
          my={0}
          dangerouslySetInnerHTML={{ __html: stripHTML(description) }}
        />
      </Box>
    </Box>
  </HoverLink>
)

export default TabCard
