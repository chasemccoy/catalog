import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '@chasemccoy/kit'

const QuoteContainer = styled(Box)`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #FFFBEB;
  z-index: 0;

  blockquote {
    margin: 0;
    border: none;
    padding: 24px;
    border-radius: 0;
    z-index: 1;
    background: transparent;
    font-size: 18px;
    border: 1px solid #FFF4CB;
    ${p =>
      p.hasSource &&
      css`
        border-bottom: none;
      `}
    border-radius: ${p => (p.hasSource ? '12px 12px 0 0' : '12px')};
  }

  figcaption {
    background: #FFD233;
    padding: 8px 24px;
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  &:before {
    content: "“";
    font-size: 120px;
    line-height: 1;
    color: #FFE999;
    position: absolute;
    top: -4px;
    left: 8px;
    z-index: -1;
    font-family: Georgia, serif;
    font-weight: ${p => p.theme.fontWeights.bold};
  }

  &:after {
    content: "”";
    font-size: 120px;
    line-height: 1;
    color: #FFE999;
    position: absolute;
    bottom: -12px;
    right: 16px;
    z-index: -1;
    font-family: Georgia, serif;
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`

const Quote = ({ source, children, ...rest }) => (
  <QuoteContainer as='figure' hasSource={!!source} {...rest}>
    <blockquote>{children}</blockquote>

    {source && <figcaption>{source}</figcaption>}
  </QuoteContainer>
)

export default Quote
