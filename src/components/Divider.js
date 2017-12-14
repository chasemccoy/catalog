import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/design'

const Divider = styled.hr`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  height: 2px;
  ${'' /* background-color: ${colors.sidebar.link.hover} */}
  background: linear-gradient(to right, white, ${colors.sidebar.link.hover}, white);
`

export default Divider
