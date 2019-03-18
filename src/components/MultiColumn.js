import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'

const MultiColumn = styled(Box)`
  columns: ${p => `${p.count || '1'} ${p.minColumnWidth || ''}`};
  column-gap: ${p => p.gap || '0'};

  > * {
    break-inside: avoid;
  }
`

export default MultiColumn