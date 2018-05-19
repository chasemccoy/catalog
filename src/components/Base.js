import React from 'react'
import styled from 'styled-components'
import { width, height, color, space, fontSize, boxShadow, borderRadius } from 'styled-system'

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
`
