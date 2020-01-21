import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import media from 'utils/media'

export const ArticleContainer = styled(Box).attrs({ as: 'article' })`
  grid-column: 1 / 9;
  position: relative;
  transition: all 0.2s;

  /* LINK POST STYLES */

  &.link {
    max-width: 75%;
    padding: 12px 12px;

    &:before {
      content: 'Recently read';
      position: absolute;
      top: -48px;
      left: -5%;
      font-weight: ${p => p.theme.fontWeights.bold};
      background: ${p => p.theme.colors.accent.pop};
      padding: 4px 8px;
      border-radius: 8px;
      transform: rotate(-3deg);
    }

    &:hover {
      z-index: 1;
      background: ${p => p.theme.colors.accent.pop};

      a {
        color: black;
      }
    }
  }

  &.link + &.link {
    margin-top: -26px;

    &:before {
      content: none;
    }
  }

  .post + &.link,
  .aside + &.link {
    margin-top: 64px;
  }

  /* STANDARD POST STYLES */

  &.post + &.post {
    margin-top: -40px;
  }

  &.image + &.post {
    margin-top: -40px;
  }

  /* ASIDE POST STYLES */

  &.aside {
    margin-bottom: 16px;
  }

  &.aside + &.aside {
    margin-top: 16px;
  }

  /* IMAGE POST STYLES */

  &.post + &.image {
    margin-top: -40px;

    .meta {
      bottom: 50%;
      top: unset;
    }
  }

  &.image p:not(:first-of-type),
  &.image p + div,
  &.image div + div {
    /* hide caption text in image posts */
    display: none;
  }

  &.image p {
    margin: 0;
  }

  /* ================= */

  &.first-half {
    grid-column: 1 / 7;
  }

  &.second-half {
    grid-column: 3 / 9;
  }

  &.first-half + &.second-half + &.first-half {
    right: -10%;
    left: auto;
  }

  &.second-half + &.first-half + &.second-half,
  &.second-half + &.centered + &.second-half {
    left: -10%;
    right: auto;
  }

  &.centered {
    grid-column: 3 / 8;
  }

  &.centered:nth-of-type(odd) {
    right: -30%;
    left: auto;
  }

  &.second-half + &.centered {
    left: -30%;
    right: auto;
  }

  &.shorten-left {
    margin-left: var(--gutter);
  }

  p:empty {
    display: none;
  }

  p:last-child,
  img:last-of-type {
    margin-bottom: 0;
  }

  img {
    box-shadow: none;
  }

  &.image {
    max-width: 80%;
  }

  &.image:nth-of-type(odd) {
    transform: rotate(-0.8deg);
  }

  &.image:nth-of-type(even) {
    transform: rotate(1deg);
  }

  &.first-half + .image {
    left: -10%;
    right: auto;
  }

  p {
    /* if there is a paragraph with two back-to-back img tags */
    img:first-child:nth-last-child(n + 2),
    img:first-child:nth-last-child(n + 2) ~ img {
      max-width: calc(50% - 16px);
      display: inline;
      vertical-align: top;
      margin-right: 8px;
      margin-bottom: 0;
    }
  }

  ${media.small`
    &.link + &.link {
      margin-top: -20px;
    }

    & {
      grid-column: 1 / 9 !important;
      left: 0 !important;
      right: 0 !important;
      max-width: none !important;
      margin: 0 !important;
    }
  `}
`

export const Title = ({ children, ...rest }) => (
  <Text
    as='h2'
    m={0}
    p={0}
    {...rest}
    dangerouslySetInnerHTML={{ __html: children }}
  />
)
