import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
// import { Box } from 'components/Base'
// import Header from 'components/Header'
// import Link from 'components/Link'
// import media from 'utils/media'
// import Text from 'components/Text'
import portrait from 'assets/portrait.jpg'
import Image from 'components/Image'

const HeaderImage = styled(Image)`
  height: 350px;
  width: 100%;
  object-fit: cover;
  object-position: 100% 88%;
`

const IndexPage = props => (
  <Page wide>
    <HeaderImage src={portrait} />
  </Page>
)

export default IndexPage
