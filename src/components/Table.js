import styled from 'styled-components'

const Table = styled.table`
  td {
    vertical-align: top;
    border-bottom: 1px solid var(--color-border);
    padding: 0.75rem 1rem calc(0.75rem - 1px);
  }

  th:last-child, td:last-child {
    padding-right: 0px;
  }

  th:first-child, td:first-child {
    padding-left: 0px;
  }
`

export default Table
