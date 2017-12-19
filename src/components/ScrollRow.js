import { Column, Row } from 'components/Grid'

import React from 'react'
import styled from 'styled-components'

const ScrollRow = styled(Row)`
  position: relative;
  flex-wrap: nowrap;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border-radius: 8px;
  mask-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 20%);
`

export default ScrollRow
