import React from 'react'
import styled from 'styled-components'
import { Column } from '../components/Grid'
import { Heading } from '../components/Components'

const Container = styled.div`
  overflow: hidden;
`

const Title = styled(Heading)`
  margin: 0 0 1em;
  padding: 0 0 .25em;
`

const Description = styled.p`
  margin: 0;
  padding: 0;

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
  }
`

const BlogFeature = props => {

  return (
    <Column {...props}>
      <Container>
        <Title>Test Feature</Title>
        <Description>Orphaned CSS. What happens when you delete an element or class? Post-compile auditing? Nah. Can you really trigger every possible state reliably? CSS only makes sense for apps if one person is writing it responsibly. Take the decisions away from everyone because it’s shitty to hold everyone accountable for changes they make in a global Orphaned CSS. What happens when you delete an element or class? Post-compile auditing? Nah. Can you really trigger every possible state reliably? CSS only makes sense for apps if one person is writing it responsibly. Take the decisions away from everyone because it’s shitty to hold everyone accountable for changes they make in a global Orphaned CSS. What happens when you delete an element or class? Post-compile auditing? Nah. Can you really trigger every possible state reliably? CSS only makes sense for apps if one person is writing it responsibly. Take the decisions away from everyone because it’s shitty to hold everyone accountable for changes they make in a global</Description>
      </Container>
    </Column>
  )
}

export default BlogFeature
