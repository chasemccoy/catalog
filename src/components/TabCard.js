import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import media from 'utils/media'
import ScrollRow from 'components/ScrollRow'
import Tags from 'components/Tags'
import { stripHTML } from 'utils'
import { rgba } from 'polished'

const HoverLink = styled(Link)`
  display: flex;
  flex-direction: column;
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
      transform: rotate(-0.5deg);
    }

    :nth-child(even) {
      transform: rotate(0.5deg);
    }

    &:hover,
    &:focus {
      z-index: 1;
      margin-right: 94px;

      :nth-child(odd) {
        transform: translate(0, -8px) rotate(1deg);
      }

      :nth-child(even) {
        transform: translate(0, -8px) rotate(1deg);
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
  }
`

const GradientBox = styled(Box)`
  position: relative;
  overflow: hidden;
  hyphens: auto;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      ${p => (p.light ? rgba(p.theme.colors.accent.light, 0) : rgba(p.theme.colors.accent.medium, 0))} 25%,
      ${p => (p.light ? rgba(p.theme.colors.accent.light, .8) : rgba(p.theme.colors.accent.medium, .75))} 98%
    );
  }
`

const TabCard = ({ title, description, tab, tags, to, light, ...rest }) => (
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

      <GradientBox
        flex={1}
        bg={light ? 'accent.light' : 'accent.medium'}
        borderRadius='0 8px 8px 8px'
        p={16}
        width={1}
        light={light}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Box>
          {title && (
            <Text
              as='h3'
              mt={0}
              mb={0}
              fontSize='24px'
              dangerouslySetInnerHTML={{ __html: title }}
              css={`
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;  
                overflow: hidden;
              `}
            />
          )}

          {tags && <Tags items={tags} mt={0} />}
        </Box>

        {description && (
          <Text
            fontSize='16px'
            lineHeight='1.4'
            mt={16}
            dangerouslySetInnerHTML={{ __html: stripHTML(description) }}
          />
        )}
      </GradientBox>
    </Box>
  </HoverLink>
)

export default TabCard
