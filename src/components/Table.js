import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'

const Table = styled(Box).attrs({ as: 'table' })`
  td {
    vertical-align: top;
    border-bottom: 1px solid ${p => p.theme.colors.gray[1]};
  }
`

export default Table
