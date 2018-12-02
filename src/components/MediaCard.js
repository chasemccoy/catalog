import React from 'react'
import styled from 'styled-components'
import Image from 'components/Image'
import Markdown from 'components/Markdown'
import media from 'utils/media'
import Link from 'components/Link'
import Heading from 'components/Heading'

const Container = styled(Link)`
  color: ${p => p.theme.colors.page.text};

  &:hover {
    color: ${p => p.theme.colors.type.body};
  }

  p:last-child {
    margin-bottom: 0;
  }

  display: flex !important;
  text-decoration: none;
  height: 100%;
  justify-content: space-between;
  flex-direction: ${props => (props.split ? `row` : `column`)};

  ${media.tiny`
		flex-direction: column;
	`};
`

const Title = styled(Heading.h2)`
  margin: 12px 0 4px;
  font-family: ${props => props.theme.fonts.body};
  line-height: 1.3;

  ${props => props.small && `margin-top: -2px;`}
  ${props =>props.large && `margin-top: -2px;`}
  ${media.tiny`margin-top: 12px;`};
`

const Description = styled.div`
  margin-bottom: ${props => (props.bottom || props.split ? `0` : `12px`)};
  font-size: 18px;
`

const FlexImage = styled(Image)`
  flex-grow: 1;
  padding-bottom: 0;
  min-height: 150px;
  height: auto;
  border-radius: 0;

  ${props =>
    props.split &&
    `
    width: 55%;
    margin-right: 24px;
  `} ${props =>
      props.split &&
      media.tiny`
    width: 100%;
    margin-right: 0;
  `} position: relative !important;
`

const InformationContainer = styled.div`
  ${props => props.split && `width: 45%;`} ${props =>
      props.split &&
      media.small`
    width: 100%;
  `} ${media.tiny`order: 2;`};
`

const Badge = styled.div`
  background-color: white;
  padding: 4px 8px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  line-height: 1.5;
  font-family: ${p => p.theme.fonts.mono};
`

const Information = props => (
  <InformationContainer split={props.split} bottom={props.bottom}>
    <Title small={props.small} medium={props.medium} large={props.large}>
      {props.title}
    </Title>

    <Description split={props.split} bottom={props.bottom}>
      <Markdown>{props.description}</Markdown>
    </Description>
  </InformationContainer>
)

const MediaCard = props => {
  // eslint-disable-next-line
  switch (props.width) {
    case 1:
      return (
        <Container split to={props.to} title={props.title}>
          <FlexImage split src={`/${props.image}`} stretch cover>
            <Badge>{props.metadata}</Badge>
          </FlexImage>
          <Information split large {...props} />
        </Container>
      )
    case 1 / 3:
      return (
        <Container to={props.to} title={props.title}>
          <Information small {...props} />
          <FlexImage src={`/${props.image}`} stretch cover>
            <Badge>{props.metadata}</Badge>
          </FlexImage>
        </Container>
      )
    case 1 / 2:
    case 2 / 3:
      return (
        <Container to={props.to} title={props.title}>
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
