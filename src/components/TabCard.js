import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import media from 'utils/media'

const HoverLink = styled(Link)`
  transition: all 0.2s;
  position: relative;
  filter: drop-shadow(0 0 1px ${props => props.theme.colors.accent});
  text-decoration: none !important;

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
    color: ${p => p.theme.colors.type.body};
    z-index: 1;
    transform: translate(0, -8px);
    margin-right: 94px;

    :nth-child(odd) {
      transform: translate(0, -8px) rotate(1deg);
    }

    :nth-child(even) {
      transform: translate(0, -8px) rotate(-1deg);
    }
  }

  ${media.small`
    &:not(:first-child) { 
      margin-left: -40px
    }
    
    &:hover, &:focus {
      margin-right: 32px;
    }
  `}
`

const TabCard = ({ title, description, tab, to, ...rest }) => (
  <HoverLink to={to} {...rest}>
    <Box
      width='250px'
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      height='100%'
    >
      <Box
        as='span'
        bg='accent.medium'
        borderRadius='8px 8px 0 0'
        px={16}
        pt='2px'
      >
        <Text
          as='span'
          fontSize='11px'
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

      <Box flex={1} bg='accent.medium' borderRadius='0 8px 8px 8px' p={16}>
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
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Box>
    </Box>
  </HoverLink>
)

export default TabCard
