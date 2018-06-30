import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { width, height, color, space, fontSize, boxShadow, borderRadius, display, justifyContent, alignItems, flexWrap, flex, flexDirection } from 'styled-system'
import theme from 'utils/theme'
import media from 'utils/media'

export const P = styled.p`
  ${width} ${color} ${space} ${fontSize};
`

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
`

const GridFlex = styled(Flex)`
  & > * {
    padding-top: ${props => props.gutter ? `${props.theme.space[props.gutter] * 2}px` : `24px`};
    padding-left: ${props => props.gutter ? `${props.theme.space[props.gutter]}px` : `12px`};
    padding-right: ${props => props.gutter ? `${props.theme.space[props.gutter]}px` : `12px`};

    ${media.tiny`
      padding-top: ${props => props.gutter ? `${props.theme.space[props.gutter] * 2}px` : `16px`};
      padding-left: ${props => props.gutter ? `${props.theme.space[props.gutter]}px` : `8px`};
      padding-right: ${props => props.gutter ? `${props.theme.space[props.gutter]}px` : `8px`};
    `}
  }
`

export const Grid = props => (
  <GridFlex
    mx={(props.gutter && [-props.gutter]) || ['-8px', '-12px']}
    mt={(props.gutter && [-theme.space[props.gutter] * 2]) || ['-16px', '-24px']}
    flexWrap={'wrap'}
    {...props}
  />
)
