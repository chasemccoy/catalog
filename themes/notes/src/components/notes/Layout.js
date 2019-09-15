import React from 'react'
import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'

const NotesLayout = props => <Box width={1}>{props.children}</Box>

NotesLayout.Sidebar = props => <Box width={1}>{props.children}</Box>

const Content = styled(Box)`
  p a, ul a, ol a {
    position: relative;

    &:after {
      content: attr(href) " →";
      position: absolute;
      left: 50%;
      transform: translate(-50%, -8px);
      bottom: 100%;
      color: ${p => p.theme.colors.gray[4]};
      background: white;
      border: 1px solid ${p => p.theme.colors.gray[1]};
      border-radius: 8px 12px;
      padding: 8px 12px;
      font-size: 14px;
      width: 100%;
      min-width: 30ch;
      max-width: 40ch;
      opacity: 0;
      transition: opacity 0.2s;
      box-shadow: ${p => p.theme.colors.gray[1]} 0 0 16px 0px;
      word-break: break-all;
      pointer-events: none;
      outline: none;
      font-weight: normal;
    }

    &:hover:after, &:focus:after {
      opacity: 1;
    }
  }
`

NotesLayout.Content = ({ children, ...rest}) => (
  <Content as='article' width={1} {...rest}>
    {children}
  </Content>
)

export default NotesLayout
