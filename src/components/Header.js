import React from 'react'
import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'
import media from 'utils/media'

const Container = styled(Box)`
  display: flex;
  background: #ffc700;
  border-radius: 8px;
  overflow: hidden;
  font-weight: bold;
  color: #db9102;

  ${media.small`
    flex: 1 100%;
    margin-right: 0;
  `}
`

const Stripe = styled(Box)`
  flex: 1;
  margin-right: 40px;

  background: linear-gradient(
    to right,
    #fff4cb 25%,
    #ffe999 25% 50%,
    #ffdd65 50% 75%,
    #ffd233 75% 100%
  );

  ${media.small`
    margin-right: 16px;
  `}
`

const Header = props => (
  <Container {...props}>
    <Stripe />

    <Box flex='2' py='2px'>
      CHASE McCOY
    </Box>
  </Container>
)

export default Header
