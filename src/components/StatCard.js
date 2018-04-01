import React from 'react'
import styled from 'styled-components'
import { colors, fontWeights } from 'utils/design'
import Card from 'components/Card'

const Container = styled(Card)`
  box-shadow: none;
  ${'' /* border-top: 2px solid black; */}
  border-radius: 0;
  padding: 16px 0 0 0;
  width: 100%;
  position: relative;

  &:after {
    content: '';
    width: 50px;
    height: 2px;
    background: ${colors.text.header};
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
  font-size: ${props => props.large ? `48px` : `32px`};
  ${props => props.color && `color: ${props.color};`}
`

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: .6px;
  font-size: 12px;
  color: ${colors.text.muted};
`

const Description = styled.h3.attrs({
	className:  'sans'
})`
  margin: 4px 0 0 0;
  font-weight: ${fontWeights.medium};
  font-size: 20px;
`

const Content = styled.div`
  margin-top: 12px;
  color: ${colors.text.header};
  font-weight: ${fontWeights.medium};
  ${'' /* font-size: 20px; */}
  line-height: 1.6;
`

const StatCard = props => (
  <Container to={props.to}>
    <Subtitle>{props.subtitle}</Subtitle>
    <Title large={props.large} color={props.color}>{props.title}</Title>
    {props.description && <Description>{props.description}</Description>}

    {props.children && <Content>{props.children}</Content>}
  </Container>
)

export default StatCard
