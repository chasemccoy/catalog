import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'
import media from 'utils/media'

const Wide = styled(Box)`
  width: calc(100% + ${p => p.theme.sizes.sidebarWidth} + 24px);
  margin-left: calc(-${p => p.theme.sizes.sidebarWidth} - 24px);

  ${media.medium`
    width: 100%;
    margin-left: 0;
  `}
`

export default Wide
