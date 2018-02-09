import { colors, fontWeights } from 'utils/design'
import Card from 'components/Card'
import React from 'react'
import styled from 'styled-components'

const Container = styled(Card)`
  box-shadow: none;
  ${'' /* border-top: 2px solid black; */}
  border-radius: 0;
  padding: 16px 0 0 0;
  width: 100%;
  position: relative;

  &:after {
    content: '';
    width: 20%;
    height: 2px;
    background-color: ${colors.text.header};
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Title = styled.h1.attrs({
	className: 'sans'
})`
  font-weight: ${fontWeights.bold};
  margin: 0;
  font-size: 48px;

  ${'' /* ${props => props.large && `font-size: 64px;`} */}
`

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: .6px;
  font-size: 12px;
  color: ${colors.text.muted};
`

const Description = styled.h4.attrs({
	className:  'sans'
})`
  margin: 2px 0 0 0;
  font-weight: ${fontWeights.medium};
`

const StatCard = props => (
  <Container>
    <Subtitle>{props.subtitle}</Subtitle>
    <Title large={props.number}>{props.title}</Title>
    {props.description && <Description>{props.description}</Description>}
  </Container>
)

export default StatCard
