import styled from 'styled-components'
import { Box } from 'components/Base'

const MultiColumn = styled(Box)`
  columns: ${p => `${p.count || '1'} ${p.minWidth || ''}`};
  column-gap: ${p => p.gap || '0'};
  ${'' /* column-rule: 2px solid ${({theme}) => theme.colors.gray[0]}; */}

  > * {
    break-inside: avoid;
  }
`

export default MultiColumn