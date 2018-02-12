import Page from 'components/Page'
import React from 'react'
import Image from 'components/Image'

const NotFoundPage = () => (
  <Page title='404: Not Found'>
    <Image src={`meta/404/surfing-net.gif`} />
    <Image src={`meta/404/internet-party.gif`} />
    <Image src={`meta/404/dialup.gif`} />
    <Image src={`meta/404/heyarnold.gif`} />
    <Image src={`meta/404/jurassic-park.gif`} />
  </Page>
)

export default NotFoundPage
