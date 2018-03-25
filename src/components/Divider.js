import React from 'react'
import { colors } from '../utils/design'
import styled from 'styled-components'
import { space } from 'styled-system'

const Divider = styled.hr`
  ${space}
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  height: 2px;
  background: linear-gradient(to right, white, ${colors.primary.gray.light}, white);
`

export default Divider
