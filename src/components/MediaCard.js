import { colors, fontWeights } from 'utils/design'
import Card from 'components/Card'
import Image from 'components/Image'
import Markdown from 'components/Markdown'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'components/Components'
import { media } from 'utils/media'

const Container = styled(Card)`
  p:last-child {
    margin-bottom: 0;
  }

	display: flex;
	text-decoration: none;
  height: 100%;
  justify-content: space-between;
  flex-direction: ${props => props.split ? `row` : `column`};
  color: ${colors.text.body} !important;

  ${media.tiny`
		flex-direction: column;
	`}

  &:hover {
    border: none;
    box-shadow: none;
    background-color: ${colors.primary.gray.light};
    border-radius: 0;
  }
`

const Title = styled.h2`
  font-weight: ${fontWeights.bold};
  margin: 16px 0 0 0;

  ${props => props.medium && `font-size: 1.5em;`}
  ${props => props.large && `font-size: 2.2rem;`}

  ${media.tiny`
    font-size: 1.5em;
  `}
`

const Border = styled.div`
  height: 2px;
  width: 50%;
  margin: ${props => props.bottom ? `16px 0 0 0` : `0`};
  background-color: ${colors.primary.gray.dark};
  display: block;

  ${props => props.mobile && `
    display: none;
  `}

  ${props => props.mobile && media.tiny`
    display: block !important;
  `}
`

const Description = styled.div`
  color: ${colors.card.text};
  margin-top: 8px;
  margin-bottom: ${props => (props.bottom || props.split) ? `0` : `12px`};
`

const FlexImage = styled(Image)`
  flex-grow: 1;
  padding-bottom: 0;
  min-height: 150px;
  height: auto;
  border-radius: 0;

  ${props => props.split && `
    width: 55%;
    margin-right: 24px;
  `}

  ${props => props.split && media.tiny`
    width: 100%;
    margin-right: 0;
  `}

  position: relative !important;
`

const InformationContainer = styled.div`
  ${props => props.split && `width: 45%;`}

  ${props => props.split && media.small`
    width: 100%;
  `}

  ${Border}:first-child {
    ${props => props.bottom && `display: none;`}

    ${media.tiny`
      display: none;
    `}
  }

  ${Border}:last-child {
    ${props => !props.bottom && `display: none;`}

    ${media.tiny`
      display: block;
    `}
  }
`

const Badge = styled.div`
  background-color: white;
  padding: 4px 8px;

  position: absolute;
  bottom: 8px;
  right: 8px;
  font-weight: ${fontWeights.heavy};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  line-height: 1.5;
`

const Information = props => (
  <InformationContainer split={props.split} bottom={props.bottom}>
    <Border />

    <Title
      medium={props.medium}
      large={props.large}
    >
      {props.title}
    </Title>

    <Description split={props.split} bottom={props.bottom}>
      <Markdown>{props.description}</Markdown>
    </Description>

    <Border bottom />
  </InformationContainer>
)

const MediaCard = props => {
  switch (props.width) {
    case 1:
      return (
        <Container split to={props.to}>
          <FlexImage split src={`/${props.image}`} stretch cover>
            <Badge>{props.metadata}</Badge>
          </FlexImage>
          <Information split large {...props} />
        </Container>
      )
    case 1/3:
      return (
        <Container to={props.to}>
          <Information {...props} />
          <FlexImage src={`/${props.image}`} stretch cover>
            <Badge>{props.metadata}</Badge>
          </FlexImage>

          <Border bottom mobile />
        </Container>
      )
    case 1/2:
    case 2/3:
      return (
        <Container to={props.to}>
          <FlexImage src={`/${props.image}`} stretch cover>
            <Badge>{props.metadata}</Badge>
          </FlexImage>
          <Information bottom medium {...props} />
        </Container>
      )
  }

  return null
}

export default MediaCard
