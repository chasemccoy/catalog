import styled from 'styled-components'
import { Box } from 'components/Base'

const ScrollRow = styled(Box)`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  mask-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 10%
  );
`

export default ScrollRow
