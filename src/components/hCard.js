import React from 'react'
import { Box } from '@chasemccoy/kit'

const hCard = () => (
  <Box id="hcard-Chase-McCoy" className='h-card vcard' display='none'>
    <a rel="me" className="p-name u-url" href="https://chasem.co/">Chase McCoy</a>
    <img className="u-photo" src="https://github.com/chasemccoy.png" alt="" />
    <a rel="me" className="u-email" href="mailto:hi@chasem.co">hi@chasem.co</a>
  </Box>
)

export default hCard