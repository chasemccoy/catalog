import Card from 'components/Card'
import React from 'react'
import { fontWeights } from 'utils/design'
import styled from 'styled-components'

const Token = styled(Card)`
  display: inline-flex !important;
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
