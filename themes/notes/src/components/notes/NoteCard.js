import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import Tags from 'components/Tags'

const Card = styled(Link)`
  &:hover {
    color: initial;
  }
`

const GradientBox = styled(Box)`
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${p => p.theme.colors.accent.soft};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      #fffbeb00 40%,
      #fffbeb88 60%,
      #fffbeb 95%
    );
  }
`

const NoteCard = ({ title, tags, description, to, ...rest }) => (
  <Card unstyled to={to} minHeight={['none', '280px']} {...rest}>
    <GradientBox
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      bg='#FFFBEB'
      p='16px 24px 24px'
      borderRadius='12px'
      height='100%'
      border='1px solid'
      borderColor='accent.light'
    >
      <Box mb='16px'>
        <Text fontWeight='heavy' fontSize='24px' lineHeight='1.4' mb='8px'>
          {title}
        </Text>

        {tags && <Tags items={tags} />}
      </Box>

      <Box>
        <Text fontSize='15px'>{description}</Text>
      </Box>
    </GradientBox>
  </Card>
)

export default NoteCard