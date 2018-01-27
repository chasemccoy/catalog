import { Heading, Link } from 'components/Components'

import { Column } from 'components/Grid'
import Markdown from 'components/Markdown'
import React from 'react'
import { colors } from 'utils/design'
import {darken} from 'polished'
import styled from 'styled-components'

const Container = styled(Link)`
  display: block;
  overflow: hidden;
  height: 100%;
  text-decoration: none;
  background-color: ${props => props.highlight ? `${colors.primary.purple}` : `white`};

  ${props => props.highlight && `
    color: white;
    border-radius: 4px;
    padding: 16px;

    &:hover {
      background-color: ${darken(0.05, colors.primary.purple)};
    }
  `}
`

const Title = styled(Heading)`
  margin: 0 0 1em;
  padding: 0 0 .5em;
  border-bottom: 1px dashed ${colors.primary.gray.dark};

  ${props => props.highlight && `
    color: white !important;
  `}

  &:after {
    content: none;
  }
`

const Description = styled.div`
  margin: 0;
  ${props => props.highlight && `color: white !important;`}
  position: relative;
  overflow: hidden;
  line-height: 1.45em;
  height: calc(1.45em * 6);

  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1.45em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 80%);

    ${props => props.highlight && `
      background: linear-gradient(to right, rgba(88, 86, 214, 0), ${colors.primary.purple} 80%);
    `}
  }

  ${Container}:hover &:after {
    ${props => props.highlight && `
      background: none
    `}
  }
`

const BlogFeature = props => {
  return (
    <Column flex='0 0 auto' width={props.width}>
      <Container to={props.to} highlight={props.highlight}>
        {props.title && <Title highlight={props.highlight}>{props.title}</Title>}

        <Description highlight={props.highlight} dangerouslySetInnerHTML={{ __html: props.content }}/>
      </Container>
    </Column>
  )
}

export default BlogFeature
