import React from 'react'
import { Box } from '@chasemccoy/kit'

const Callout = ({ children, ...rest }) => (
  <Box
    p={4}
    border='1px dashed var(--color-border)'
    borderRadius='16px'
    {...rest}
  >
    <Box
      as='aside'
      borderRadius='12px'
      p={8}
      css={`
        p:last-child {
          margin: 0;
        }

        background: repeating-linear-gradient(
          -55deg,
          var(--color-gray--300),
          var(--color-gray--300) 0.5px,
          var(--color-body-background) 0.5px,
          var(--color-body-background) 3px
        );
      `}
    >
      <Box
        bg='white'
        borderRadius='8px'
        py={12}
        px={12}
        // border='1px solid var(--color-border)'
        // css='box-shadow: var(--shadow-small)'
      >
        <p className='smaller'>{children}</p>
      </Box>
    </Box>
  </Box>
)

export default Callout
