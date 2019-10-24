import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'
import media from 'utils/media'

const WideImage = styled(Box)`
  width: calc(100% + 10rem);

  ${media.medium`
    width: 100%;
  `}
`

export default WideImage
