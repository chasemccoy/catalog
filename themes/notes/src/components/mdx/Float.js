import React from 'react'
import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'
import media from 'utils/media'

const FloatBox = styled(Box)`
  float: ${p => (p.left ? 'left' : p.right ? 'right' : 'left')};

  ${media.tiny`
    float: none;
    margin-left: 0;
    margin-right: 0;
  `}
`

const Float = props => <FloatBox as='p' {...props} />

export default Float
