import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { fontWeights } from '../utils/design'

const Token = styled(Card)`
  display: inline-flex;
  min-height: auto;
	padding: 6px !important;
  font-size: 14px;
  font-weight: ${fontWeights.medium};
  letter-spacing: .03em;
  line-height: 1.3;

  & + & {
    margin-left: 16px;
  }
`

export default Token
