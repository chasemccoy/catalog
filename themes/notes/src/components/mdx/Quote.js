import React from 'react'
import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'

const QuoteContainer = styled(Box)`
  border: 1px solid ${p => p.theme.colors.accent.medium};
  background: ${p => p.theme.colors.accent.light};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding: 12px 16px 12px 16px;

  blockquote {
    position: static;
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.4;
    color: ${p => p.theme.colors.type.body};

    &:before {
      content: none;
      top: 16px;
      bottom: 16px;
      left: 16px;
      height: auto;
      background: ${p => p.theme.colors.accent};
    }
  }

  ${'' /* border-radius: 12px;
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

    &:before {
      display: none;
    }
  } */}

  figcaption {
    background: ${p => p.theme.colors.accent.light};
    padding: 8px 0 0;
    margin: 16px 0 0;
    font-weight: ${p => p.theme.fontWeights.heavy};
    border-top: 2px dashed ${p => p.theme.colors.accent.medium};
  }

  ${'' /* &:before {
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
  } */}
`

const Quote = ({ source, children, ...rest }) => (
  <QuoteContainer as='figure' hasSource={!!source} {...rest}>
    <blockquote>{children}</blockquote>

    {source && <figcaption>{source}</figcaption>}
  </QuoteContainer>
)

export default Quote
