import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'

const ScrollRow = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`

export default ScrollRow
