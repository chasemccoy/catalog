import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { width, height, color, space, boxShadow, borderRadius, display, justifyContent, alignItems, flexWrap, flex, flexDirection, minWidth, minHeight, maxWidth, flexBasis } from 'styled-system'
import media from 'utils/media'

export const Span = styled.span`
  ${color};
`

export const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${boxShadow}
  ${borderRadius}
  ${display}
  ${justifyContent}
  ${alignItems}
  ${flexWrap}
  ${flex}
  ${flexDirection}
  ${minHeight}
  ${minWidth}
  ${maxWidth}
  ${color}
`

const GridFlex = styled(Flex)`
  & > * {
    padding-top: ${p =>
      p.gutter !== undefined ? `${p.gutter * 2}px` : `24px`};
    padding-left: ${p => (p.gutter !== undefined ? `${p.gutter}px` : `12px`)};
    padding-right: ${p => (p.gutter !== undefined ? `${p.gutter}px` : `12px`)};

    ${media.tiny`
      padding-top: ${p =>
        p.gutter !== undefined ? `${p.gutter * 2}px` : `16px`};
      padding-left: ${p => (p.gutter !== undefined ? `${p.gutter}px` : `8px`)};
      padding-right: ${p => (p.gutter !== undefined ? `${p.gutter}px` : `8px`)};
    `};
  }

  ${height}
  ${flex}
  ${minWidth}
  ${flexBasis}
`

export const Grid = props => (
  <GridFlex
    mx={props.gutter !== undefined ? `-${props.gutter}px` : ['-8px', '-12px']}
    mt={
      props.gutter !== undefined ? `-${props.gutter * 2}px` : ['-16px', '-24px']
    }
    flexWrap={'wrap'}
    {...props}
  />
)
