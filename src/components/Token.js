import Card from 'components/Card'
import React from 'react'
import { colors, fontWeights } from 'utils/design'
import styled from 'styled-components'
import { space } from 'styled-system'

const Token = styled(Card)`
  display: inline-flex !important;
  min-height: auto;
  font-size: 12px;
  font-weight: ${fontWeights.medium};
  letter-spacing: .03em;
  line-height: 1.3;
  ${space}
  border-radius: 500px;
  color: ${colors.sidebar.link.primary};

  &:last-child {
    margin-right: 0;
  }
`

export default Token
