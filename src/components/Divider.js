import theme from 'utils/theme'
import styled from 'styled-components'
import { space } from 'styled-system'

const Divider = styled.hr`
  ${space} width: 75%;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  height: 1px;
  background: linear-gradient(to right, white, ${theme.colors.gray[1]}, white);
`

export default Divider
